import React, { ElementType, forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { NToastContext } from './NToast'
import { NCloseButton, NCloseButtonProps } from '../close-button/NCloseButton'

export interface NToastCloseProps extends NCloseButtonProps {
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
}

export const NToastClose = forwardRef<HTMLButtonElement, NToastCloseProps>(
    ({ children, component: Component, ...rest }, ref) => {
        const { setVisible } = useContext(NToastContext)
        return Component ? (
            <Component onClick={() => setVisible(false)} {...rest} ref={ref}>
                {children}
            </Component>
        ) : (
            <NCloseButton onClick={() => setVisible(false)} {...rest} ref={ref} />
        )
    },
)

NToastClose.propTypes = {
    ...NCloseButton.propTypes,
    component: PropTypes.elementType,
}

NToastClose.displayName = 'NToastClose'
