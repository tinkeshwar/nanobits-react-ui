import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NSidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NSidebarHeader = forwardRef<HTMLDivElement, NSidebarHeaderProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('sidebar-header', className)
        return (
            <div className={_className} ref={ref} {...rest}>
                {children}
            </div>
        )
    },
)

NSidebarHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NSidebarHeader.displayName = 'NSidebarHeader'
