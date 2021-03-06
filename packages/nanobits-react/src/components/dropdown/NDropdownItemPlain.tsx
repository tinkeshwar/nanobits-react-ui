import React, { ElementType, forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NDropdownItemPlainProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const NDropdownItemPlain = forwardRef<HTMLSpanElement, NDropdownItemPlainProps>(
    ({ children, className, component: Component = 'span', ...rest }, ref) => {
        const _className = classNames('dropdown-item-text', className)

        return (
            <Component className={_className} {...rest} ref={ref}>
                {children}
            </Component>
        )
    },
)

NDropdownItemPlain.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

NDropdownItemPlain.displayName = 'NDropdownItemPlain'
