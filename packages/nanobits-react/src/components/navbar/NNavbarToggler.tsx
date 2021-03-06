import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NNavbarTogglerProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NNavbarToggler = forwardRef<HTMLButtonElement, NNavbarTogglerProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('navbar-toggler', className)

        return (
            <button type="button" className={_className} {...rest} ref={ref}>
                {children ? children : <span className="navbar-toggler-icon"></span>}
            </button>
        )
    },
)

NNavbarToggler.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NNavbarToggler.displayName = 'NNavbarToggler'
