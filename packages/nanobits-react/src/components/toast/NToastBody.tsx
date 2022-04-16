import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NToastBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NToastBody = forwardRef<HTMLDivElement, NToastBodyProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('toast-body', className)
        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NToastBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NToastBody.displayName = 'NToastBody'
