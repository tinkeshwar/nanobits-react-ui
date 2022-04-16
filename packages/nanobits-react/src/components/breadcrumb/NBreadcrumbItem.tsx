import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NLink } from '../link/NLink'

export interface NBreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * The `href` attribute for the inner `<NLink>` component.
   */
  href?: string
}

export const NBreadcrumbItem = forwardRef<HTMLLIElement, NBreadcrumbItemProps>(
    ({ children, active, className, href, ...rest }, ref) => {
        const _className = classNames(
            'breadcrumb-item',
            {
                active: active,
            },
            className,
        )
        return (
            <li className={_className} {...(active && { 'aria-current': 'page' })} {...rest} ref={ref}>
                {href ? <NLink href={href}>{children}</NLink> : children}
            </li>
        )
    },
)

NBreadcrumbItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
}

NBreadcrumbItem.displayName = 'NBreadcrumbItem'
