import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Place footer in non-static positions.
   */
  position?: 'fixed' | 'sticky'
}

export const NFooter = forwardRef<HTMLDivElement, NFooterProps>(
    ({ children, className, position, ...rest }, ref) => {
        const _className = classNames('footer', { [`footer-${position}`]: position }, className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(['fixed', 'sticky']),
}

NFooter.displayName = 'NFooter'
