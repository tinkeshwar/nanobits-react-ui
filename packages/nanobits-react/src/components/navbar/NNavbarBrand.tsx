import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NNavbarBrandProps extends HTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   *
   */
  component?: string | ElementType
  /**
   * The href attribute specifies the URL of the page the link goes to.
   */
  href?: string
}

export const NNavbarBrand = forwardRef<HTMLAnchorElement | HTMLSpanElement, NNavbarBrandProps>(
    ({ children, component, className, ...rest }, ref) => {
        const Component = component ? component : rest.href ? 'a' : 'span'
        const _className = classNames('navbar-brand', className)

        return (
            <Component className={_className} {...rest} ref={ref}>
                {children}
            </Component>
        )
    },
)

NNavbarBrand.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

NNavbarBrand.displayName = 'NNavbarBrand'
