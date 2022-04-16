import React, { AnchorHTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NLink } from '../link/NLink'

export interface NCardLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * The href attribute specifies the URL of the page the link goes to.
   */
  href?: string
}

export const NCardLink = forwardRef<HTMLAnchorElement, NCardLinkProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('card-link', className)

        return (
            <NLink className={_className} {...rest} ref={ref}>
                {children}
            </NLink>
        )
    },
)

NCardLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NCardLink.displayName = 'NCardLink'
