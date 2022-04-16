import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NHeaderNavProps extends HTMLAttributes<HTMLDivElement | HTMLUListElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const NHeaderNav = forwardRef<HTMLDivElement | HTMLUListElement, NHeaderNavProps>(
    ({ children, component: Component = 'ul', className, ...rest }, ref) => {
        const _className = classNames('header-nav', className)

        return (
            <Component className={_className} role="navigation" {...rest} ref={ref}>
                {children}
            </Component>
        )
    },
)

NHeaderNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

NHeaderNav.displayName = 'NHeaderNav'
