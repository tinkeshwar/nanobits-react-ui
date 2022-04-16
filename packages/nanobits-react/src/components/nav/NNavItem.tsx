import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NNavLink, NNavLinkProps } from './NNavLink'

export const NNavItem = forwardRef<HTMLLIElement, NNavLinkProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('nav-item', className)
        if (rest.href || rest.to) {
            children = (
                <NNavLink className={className} {...rest}>
                    {children}
                </NNavLink>
            )
        }
        return (
            <li className={_className} ref={ref}>
                {children}
            </li>
        )
    },
)

NNavItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NNavItem.displayName = 'NNavItem'
