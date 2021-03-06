import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NFormProps extends HTMLAttributes<HTMLFormElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Mark a form as validated. If you set it `true`, all validation styles will be applied to the forms component.
   */
  validated?: boolean
}

export const NForm = forwardRef<HTMLFormElement, NFormProps>(
    ({ children, className, validated, ...rest }, ref) => {
        const _className = classNames({ 'was-validated': validated }, className)
        return (
            <form className={_className} {...rest} ref={ref}>
                {children}
            </form>
        )
    },
)

NForm.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    validated: PropTypes.bool,
}

NForm.displayName = 'NForm'
