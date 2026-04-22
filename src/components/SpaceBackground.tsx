import { useRef, useEffect } from 'react'

interface StarData {
  x: number
  y: number
  z: number           // depth: 0=far, 1=near
  size: number
  baseOpacity: number
  twinklePhase: number
  twinkleSpeed: number
}

interface ShootingStarData {
  x: number
  y: number
  nx: number          // normalised direction
  ny: number
  length: number
  life: number
  maxLife: number
}

const STAR_COUNT = 280

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const rawCanvas = canvasRef.current
    if (!rawCanvas) return
    const rawCtx = rawCanvas.getContext('2d')
    if (!rawCtx) return

    // Stable non-null references for use inside closures
    const el: HTMLCanvasElement = rawCanvas
    const cx: CanvasRenderingContext2D = rawCtx

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    let w = 0
    let h = 0
    let stars: StarData[] = []
    let shooters: ShootingStarData[] = []
    let lastShot = 0

    const mouse = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }

    // ── init ──────────────────────────────────────────────────────────────────

    function initStars() {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random(),
        size: Math.random() * 1.6 + 0.2,
        baseOpacity: Math.random() * 0.6 + 0.25,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.8 + 0.3,
      }))
    }

    function spawnShooter() {
      const fromTop = Math.random() > 0.35
      const x = fromTop ? Math.random() * w * 0.8 : Math.random() * w * 0.2
      const y = fromTop ? 0 : Math.random() * h * 0.4
      const angle = Math.PI / 6 + Math.random() * (Math.PI / 5)
      shooters.push({
        x,
        y,
        nx: Math.cos(angle),
        ny: Math.sin(angle),
        length: 80 + Math.random() * 100,
        life: 0,
        maxLife: 55 + Math.random() * 35,
      })
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      w = el.offsetWidth
      h = el.offsetHeight
      el.width = w * dpr
      el.height = h * dpr
      cx.scale(dpr, dpr)
      mouse.x = w / 2
      mouse.y = h / 2
      target.x = w / 2
      target.y = h / 2
      initStars()
    }

    // ── draw helpers ──────────────────────────────────────────────────────────

    function drawNebula() {
      const g1 = cx.createRadialGradient(w * 0.15, h * 0.22, 0, w * 0.15, h * 0.22, w * 0.52)
      g1.addColorStop(0,   'rgba(220, 38, 38, 0.11)')
      g1.addColorStop(0.4, 'rgba(220, 38, 38, 0.06)')
      g1.addColorStop(1,   'rgba(0,0,0,0)')
      cx.fillStyle = g1
      cx.fillRect(0, 0, w, h)

      const g2 = cx.createRadialGradient(w * 0.88, h * 0.78, 0, w * 0.88, h * 0.78, w * 0.42)
      g2.addColorStop(0,   'rgba(244, 63, 94, 0.09)')
      g2.addColorStop(0.5, 'rgba(244, 63, 94, 0.04)')
      g2.addColorStop(1,   'rgba(0,0,0,0)')
      cx.fillStyle = g2
      cx.fillRect(0, 0, w, h)

      const g3 = cx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.6)
      g3.addColorStop(0,   'rgba(80, 10, 10, 0.07)')
      g3.addColorStop(1,   'rgba(0,0,0,0)')
      cx.fillStyle = g3
      cx.fillRect(0, 0, w, h)
    }

    function drawStars(t: number) {
      const mx = reduced ? 0 : mouse.x / w - 0.5
      const my = reduced ? 0 : mouse.y / h - 0.5
      const PARALLAX = 28

      for (const s of stars) {
        const twinkle = reduced ? 0 : Math.sin(t * s.twinkleSpeed + s.twinklePhase)
        const opacity = s.baseOpacity * (0.78 + 0.22 * twinkle)

        const sx = ((s.x + mx * s.z * PARALLAX) % w + w) % w
        const sy = ((s.y + my * s.z * PARALLAX) % h + h) % h

        if (s.size > 1.1) {
          const glow = cx.createRadialGradient(sx, sy, 0, sx, sy, s.size * 4)
          glow.addColorStop(0, `rgba(255, 235, 235, ${opacity * 0.28})`)
          glow.addColorStop(1, 'rgba(0,0,0,0)')
          cx.fillStyle = glow
          cx.beginPath()
          cx.arc(sx, sy, s.size * 4, 0, Math.PI * 2)
          cx.fill()
        }

        cx.fillStyle = `rgba(255, 248, 248, ${opacity})`
        cx.beginPath()
        cx.arc(sx, sy, s.size, 0, Math.PI * 2)
        cx.fill()
      }
    }

    function drawShooters(timestamp: number) {
      if (timestamp - lastShot > 4000 + Math.random() * 2000) {
        spawnShooter()
        lastShot = timestamp
      }

      shooters = shooters.filter(s => s.life <= s.maxLife)

      for (const s of shooters) {
        const progress = s.life / s.maxLife
        const alpha = Math.sin(progress * Math.PI) * 0.9

        const travel = s.length * progress * 2
        const headX = s.x + s.nx * travel
        const headY = s.y + s.ny * travel
        const tailX = headX - s.nx * s.length
        const tailY = headY - s.ny * s.length

        const grad = cx.createLinearGradient(headX, headY, tailX, tailY)
        grad.addColorStop(0,    `rgba(255, 245, 245, ${alpha})`)
        grad.addColorStop(0.25, `rgba(255, 210, 210, ${alpha * 0.5})`)
        grad.addColorStop(1,    'rgba(255, 180, 180, 0)')

        cx.save()
        cx.strokeStyle = grad
        cx.lineWidth = 1.5
        cx.lineCap = 'round'
        cx.shadowColor = 'rgba(255, 200, 200, 0.6)'
        cx.shadowBlur = 4
        cx.beginPath()
        cx.moveTo(headX, headY)
        cx.lineTo(tailX, tailY)
        cx.stroke()
        cx.restore()

        s.life++
      }
    }

    // ── loop ──────────────────────────────────────────────────────────────────

    function loop(timestamp: number) {
      const t = timestamp * 0.001

      if (!reduced) {
        mouse.x += (target.x - mouse.x) * 0.045
        mouse.y += (target.y - mouse.y) * 0.045
      }

      cx.clearRect(0, 0, w, h)
      drawNebula()
      drawStars(t)
      if (!reduced) drawShooters(timestamp)

      raf = requestAnimationFrame(loop)
    }

    // ── events ────────────────────────────────────────────────────────────────

    function onMouseMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      target.x = e.clientX - rect.left
      target.y = e.clientY - rect.top
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else {
        raf = requestAnimationFrame(loop)
      }
    }

    const ro = new ResizeObserver(resize)
    ro.observe(el)
    resize()

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  )
}
