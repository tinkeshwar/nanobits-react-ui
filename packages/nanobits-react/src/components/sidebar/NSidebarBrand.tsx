import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NSidebarBrandProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NSidebarBrand = forwardRef<HTMLDivElement, NSidebarBrandProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('sidebar-brand', className)
        return (
            <div className={_className} ref={ref} {...rest}>
                {children}
            </div>
        )
    },
)

NSidebarBrand.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NSidebarBrand.displayName = 'NSidebarBrand'
