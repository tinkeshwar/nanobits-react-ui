import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface NContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
  fluid?: boolean
}

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'fluid' as const,
]

export const NContainer = forwardRef<HTMLDivElement, NContainerProps>(({ children, className, ...rest }, ref) => {
    const repsonsiveClassNames: string[] = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = rest[bp]
      delete rest[bp]

      breakpoint && repsonsiveClassNames.push(`container-${bp}`)
    })

    const _className = classNames(
      repsonsiveClassNames.length ? repsonsiveClassNames : 'container',
      className,
    )

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    )
  },
)