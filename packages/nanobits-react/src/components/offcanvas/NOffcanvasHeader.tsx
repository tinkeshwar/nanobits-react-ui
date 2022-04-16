import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NOffcanvasHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NOffcanvasHeader = forwardRef<HTMLDivElement, NOffcanvasHeaderProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('offcanvas-header', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NOffcanvasHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NOffcanvasHeader.displayName = 'NOffcanvasHeader'
