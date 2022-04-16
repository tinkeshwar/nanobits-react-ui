import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import { NModalContext } from './NModal'
import { NCloseButton } from '../close-button/NCloseButton'
import classNames from 'classnames'

export interface NModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Add a close button component to the header.
   */
  closeButton?: boolean
}

export const NModalHeader = forwardRef<HTMLDivElement, NModalHeaderProps>(
    ({ children, className, closeButton = true, ...rest }, ref) => {
        const { setVisible } = useContext(NModalContext)
        const _className = classNames('modal-header', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
                {closeButton && <NCloseButton onClick={() => setVisible(false)} />}
            </div>
        )
    },
)

NModalHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    closeButton: PropTypes.bool,
}

NModalHeader.displayName = 'NModalHeader'
