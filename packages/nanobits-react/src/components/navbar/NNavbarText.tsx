import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NNavbarTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NNavbarText = forwardRef<HTMLSpanElement, NNavbarTextProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('navbar-text', className)

        return (
            <span className={_className} {...rest} ref={ref}>
                {children}
            </span>
        )
    },
)

NNavbarText.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NNavbarText.displayName = 'NNavbarText'
