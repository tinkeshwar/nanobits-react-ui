import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { NCollapse, NCollapseProps } from '../collapse/NCollapse'

export const NAccordionCollapse = forwardRef<HTMLDivElement, Omit<NCollapseProps, 'horizontal'>>(
    ({ children, ...props }, ref) => {
        return (
            <NCollapse className="accordion-collapse" {...props} ref={ref}>
                {children}
            </NCollapse>
        )
    },
)

NAccordionCollapse.propTypes = {
    children: PropTypes.node,
}

NAccordionCollapse.displayName = 'NAccordionCollapse'
