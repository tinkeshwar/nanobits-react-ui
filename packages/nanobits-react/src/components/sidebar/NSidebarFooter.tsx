import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NSidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NSidebarFooter = forwardRef<HTMLDivElement, NSidebarFooterProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('sidebar-footer', className)
        return (
            <div className={_className} ref={ref} {...rest}>
                {children}
            </div>
        )
    },
)

NSidebarFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NSidebarFooter.displayName = 'NSidebarFooter'
