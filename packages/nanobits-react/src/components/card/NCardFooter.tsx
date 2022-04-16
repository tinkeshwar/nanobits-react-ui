import PropTypes from 'prop-types'
import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

export interface NCardFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NCardFooter = forwardRef<HTMLDivElement, NCardFooterProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('card-footer', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NCardFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NCardFooter.displayName = 'NCardFooter'
