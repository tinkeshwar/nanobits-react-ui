import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NModalBody = forwardRef<HTMLDivElement, NModalBodyProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('modal-body', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NModalBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NModalBody.displayName = 'NModalBody'
