import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NOffcanvasBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NOffcanvasBody = forwardRef<HTMLDivElement, NOffcanvasBodyProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('offcanvas-body', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NOffcanvasBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NOffcanvasBody.displayName = 'NOffcanvasBody'
