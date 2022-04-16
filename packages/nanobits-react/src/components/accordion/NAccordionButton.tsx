import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NAccordionItemContext } from './NAccordionItem'

export interface NAccordionButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NAccordionButton = forwardRef<HTMLButtonElement, NAccordionButtonProps>(
    ({ children, className, ...rest }, ref) => {
        const { visible, setVisible } = useContext(NAccordionItemContext)

        const _className = classNames('accordion-button', { collapsed: !visible }, className)

        return (
            <button
                type="button"
                className={_className}
                aria-expanded={!visible}
                onClick={() => setVisible(!visible)}
                {...rest}
                ref={ref}
            >
                {children}
            </button>
        )
    },
)

NAccordionButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NAccordionButton.displayName = 'NAccordionButton'
