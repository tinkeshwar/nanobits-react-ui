import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export type BPObject = {
  cols?: 'auto' | number | string | null
  gutter?: number | string | null
  gutterX?: number | string | null
  gutterY?: number | string | null
}

export interface NRowProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  xs?: BPObject
  sm?: BPObject
  md?: BPObject
  lg?: BPObject
  xl?: BPObject
  xxl?: BPObject
}

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'xs' as const,
]

export const NRow = forwardRef<HTMLDivElement, NRowProps>(
  ({ children, className, ...rest }, ref) => {
    const repsonsiveClassNames: string[] = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = rest[bp]
      delete rest[bp]

      const infix = bp === 'xs' ? '' : `-${bp}`

      if (typeof breakpoint === 'object') {
        if (breakpoint.cols) {
          repsonsiveClassNames.push(`row-cols${infix}-${breakpoint.cols}`)
        }
        if (typeof breakpoint.gutter === 'number') {
          repsonsiveClassNames.push(`g${infix}-${breakpoint.gutter}`)
        }
        if (typeof breakpoint.gutterX === 'number') {
          repsonsiveClassNames.push(`gx${infix}-${breakpoint.gutterX}`)
        }
        if (typeof breakpoint.gutterY === 'number') {
          repsonsiveClassNames.push(`gy${infix}-${breakpoint.gutterY}`)
        }
      }
    })

    const _className = classNames('row', repsonsiveClassNames, className)

    return (
      <div className={_className} ref={ref}>
        {children}
      </div>
    )
  },
)

NRow.displayName = 'NRow'