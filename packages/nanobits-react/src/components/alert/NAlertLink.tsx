import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NLink } from '../link/NLink'

export interface NAlertLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NAlertLink = forwardRef<HTMLAnchorElement, NAlertLinkProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('alert-link', className)

        return (
            <NLink className={_className} {...rest} ref={ref}>
                {children}
            </NLink>
        )
    },
)

NAlertLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NAlertLink.displayName = 'NAlertLink'
