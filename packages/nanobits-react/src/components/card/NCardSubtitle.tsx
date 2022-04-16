import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NCardSubtitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}
export const NCardSubtitle = forwardRef<HTMLHeadingElement, NCardSubtitleProps>(
    ({ children, component: Component = 'h6', className, ...rest }, ref) => {
        const _className = classNames('card-subtitle', className)

        return (
            <Component className={_className} {...rest} ref={ref}>
                {children}
            </Component>
        )
    },
)

NCardSubtitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

NCardSubtitle.displayName = 'NCardSubtitle'
