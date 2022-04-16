import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NCardImageOverlayProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NCardImageOverlay = forwardRef<HTMLDivElement, NCardImageOverlayProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('card-img-overlay', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NCardImageOverlay.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NCardImageOverlay.displayName = 'NCardImageOverlay'
