import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NNavGroupItemsProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NNavGroupItems = forwardRef<HTMLUListElement, NNavGroupItemsProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('nav-group-items', className)
        return (
            <ul className={_className} {...rest} ref={ref}>
                {children}
            </ul>
        )
    },
)

NNavGroupItems.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NNavGroupItems.displayName = 'NNavGroupItems'
