import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const NModalTitle = forwardRef<HTMLHeadElement, NModalTitleProps>(
    ({ children, component: Component = 'h5', className, ...rest }, ref) => {
        const _className = classNames('modal-title', className)

        return (
            <Component className={_className} {...rest} ref={ref}>
                {children}
            </Component>
        )
    },
)

NModalTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

NModalTitle.displayName = 'NModalTitle'
