import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type CtaButtonProps = ComponentProps<typeof Button>

export function CtaButton({ className, ...props }: CtaButtonProps) {
  return (
    <Button
      className={cn(
        'bg-red-500 text-white hover:bg-red-400 font-semibold cursor-pointer',
        'transition-all duration-200 hover:-translate-y-0.5',
        'shadow-md shadow-red-500/20',
        className,
      )}
      {...props}
    />
  )
}
