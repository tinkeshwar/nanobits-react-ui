import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NAlertHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const NAlertHeading = forwardRef<HTMLHeadingElement, NAlertHeadingProps>(
    ({ children, className, component: Component = 'h4', ...rest }, ref) => {
        const _className = classNames('alert-heading', className)

        return (
            <Component className={_className} {...rest} ref={ref}>
                {children}
            </Component>
        )
    },
)

NAlertHeading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

NAlertHeading.displayName = 'NAlertHeading'
