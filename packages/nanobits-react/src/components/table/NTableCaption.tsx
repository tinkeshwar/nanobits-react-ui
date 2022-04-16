import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'

export const NTableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ children, ...props }, ref) => {
    return (
        <caption {...props} ref={ref}>
            {children}
        </caption>
    )
})

NTableCaption.propTypes = {
    children: PropTypes.node,
}

NTableCaption.displayName = 'NTableCaption'
