import type { ComponentProps } from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type SectionBadgeProps = ComponentProps<typeof Badge>

export function SectionBadge({ className, ...props }: SectionBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn('border-white/10 text-zinc-500 bg-transparent mb-4', className)}
      {...props}
    />
  )
}
