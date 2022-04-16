import React, { forwardRef, AllHTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NFormLabelProps extends AllHTMLAttributes<HTMLLabelElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * A string of all className you want to be applied to the component, and override standard className value.
   */
  customClassName?: string
}

export const NFormLabel = forwardRef<HTMLLabelElement, NFormLabelProps>(
    ({ children, className, customClassName, ...rest }, ref) => {
        const _className = customClassName ? customClassName : classNames('form-label', className)
        return (
            <label className={_className} {...rest} ref={ref}>
                {children}
            </label>
        )
    },
)

NFormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customClassName: PropTypes.string,
}

NFormLabel.displayName = 'NFormLabel'
