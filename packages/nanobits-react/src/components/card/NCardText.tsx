import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NCardTextProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const NCardText = forwardRef<HTMLParagraphElement, NCardTextProps>(
    ({ children, component: Component = 'p', className, ...rest }, ref) => {
        const _className = classNames('card-text', className)

        return (
            <Component className={_className} {...rest} ref={ref}>
                {children}
            </Component>
        )
    },
)

NCardText.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

NCardText.displayName = 'NCardText'
