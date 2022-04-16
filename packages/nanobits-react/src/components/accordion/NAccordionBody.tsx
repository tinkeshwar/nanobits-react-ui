import React, { forwardRef, HTMLAttributes, useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NAccordionItemContext } from './NAccordionItem'
import { NCollapse } from '../collapse/NCollapse'

export interface NAccordionBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NAccordionBody = forwardRef<HTMLDivElement, NAccordionBodyProps>(
    ({ children, className, ...rest }, ref) => {
        const { visible } = useContext(NAccordionItemContext)
        const _className = classNames('accordion-body', className)

        return (
            <NCollapse className="accordion-collpase" visible={visible}>
                <div className={_className} {...rest} ref={ref}>
                    {children}
                </div>
            </NCollapse>
        )
    },
)

NAccordionBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NAccordionBody.displayName = 'NAccordionBody'
