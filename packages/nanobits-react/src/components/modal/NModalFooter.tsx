import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NModalFooter = forwardRef<HTMLDivElement, NModalFooterProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('modal-footer', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NModalFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NModalFooter.displayName = 'NModalFooter'
