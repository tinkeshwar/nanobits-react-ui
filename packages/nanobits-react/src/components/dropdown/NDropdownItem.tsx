import React, { ElementType, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NLinkProps } from '../link/NLink'
import { NLink } from '../link/NLink'

export interface NDropdownItemProps extends NLinkProps {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const NDropdownItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, NDropdownItemProps>(
    ({ children, className, component = 'a', ...rest }, ref) => {
        const _className = classNames('dropdown-item', className)

        return (
            <NLink component={component} {...rest} className={_className} ref={ref}>
                {children}
            </NLink>
        )
    },
)

NDropdownItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
}

NDropdownItem.displayName = 'NDropdownItem'
