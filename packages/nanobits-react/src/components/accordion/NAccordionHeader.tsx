import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NAccordionButton } from './NAccordionButton'

export interface NAccordionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NAccordionHeader = forwardRef<HTMLDivElement, NAccordionHeaderProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('accordion-header', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                <NAccordionButton>{children}</NAccordionButton>
            </div>
        )
    },
)

NAccordionHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NAccordionHeader.displayName = 'NAccordionHeader'
