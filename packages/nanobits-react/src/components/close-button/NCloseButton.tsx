import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NCloseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * Change the default color to white.
   */
  white?: boolean
}

export const NCloseButton = forwardRef<HTMLButtonElement, NCloseButtonProps>(
    ({ className, disabled, white, ...rest }, ref) => {
        const _className = classNames(
            'btn',
            'btn-close',
            {
                'btn-close-white': white,
            },
            disabled,
            className,
        )
        return (
            <button className={_className} aria-label="Close" disabled={disabled} {...rest} ref={ref} />
        )
    },
)

NCloseButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    white: PropTypes.bool,
}

NCloseButton.displayName = 'NCloseButton'
