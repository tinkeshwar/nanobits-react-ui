import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NButtonToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NButtonToolbar = forwardRef<HTMLDivElement, NButtonToolbarProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('btn-toolbar', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NButtonToolbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NButtonToolbar.displayName = 'NButtonToolbar'
