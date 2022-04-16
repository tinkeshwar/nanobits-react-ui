import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NFormFloatingProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NFormFloating = forwardRef<HTMLDivElement, NFormFloatingProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('form-floating', className)
        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NFormFloating.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NFormFloating.displayName = 'NFormFloating'
