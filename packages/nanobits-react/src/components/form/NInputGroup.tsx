import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NInputGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Size the component small or large.
   */
  size?: 'sm' | 'lg'
}

export const NInputGroup = forwardRef<HTMLDivElement, NInputGroupProps>(
    ({ children, className, size, ...rest }, ref) => {
        const _className = classNames(
            'input-group',
            {
                [`input-group-${size}`]: size,
            },
            className,
        )
        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NInputGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
}

NInputGroup.displayName = 'NInputGroup'
