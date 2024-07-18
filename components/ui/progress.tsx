'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

// Progress Root Component
const ProgressRoot = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { value?: number; max?: number }
>(({ className, value, max = 100, children, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}
    {...props}
  >
    {React.Children.map(children, child =>
      // @ts-ignore
      React.isValidElement(child) ? React.cloneElement(child, { value, max }) : child
    )}
  </ProgressPrimitive.Root>
))
ProgressRoot.displayName = ProgressPrimitive.Root.displayName

// Progress Indicator Component
const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator> & {
    value?: number
    max?: number
  }
>(({ className, value = 0, max = 100, style, ...props }, ref) => (
  <ProgressPrimitive.Indicator
    ref={ref}
    className={cn('h-full flex-1 rounded-[6px] bg-primary transition-all', className)}
    style={{ width: `${(value / max) * 100}%`, ...style }}
    {...props}
  />
))
ProgressIndicator.displayName = ProgressPrimitive.Indicator.displayName

// Combined Progress Component
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & { value?: number; max?: number }
>(({ className, value, max, ...props }, ref) => (
  <ProgressRoot ref={ref} className={className} value={value} max={max} {...props}>
    <ProgressIndicator />
  </ProgressRoot>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress, ProgressRoot, ProgressIndicator }
