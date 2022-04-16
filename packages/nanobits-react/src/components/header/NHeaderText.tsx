import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NHeaderTextProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NHeaderText = forwardRef<HTMLSpanElement, NHeaderTextProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('header-text', className)

        return (
            <span className={_className} {...rest} ref={ref}>
                {children}
            </span>
        )
    },
)

NHeaderText.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NHeaderText.displayName = 'NHeaderText'
