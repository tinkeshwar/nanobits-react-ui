import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NHeaderDividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NHeaderDivider = forwardRef<HTMLDivElement, NHeaderDividerProps>(
    ({ className, ...rest }, ref) => {
        const _className = classNames('header-divider', className)

        return <div className={_className} {...rest} ref={ref} />
    },
)

NHeaderDivider.propTypes = {
    className: PropTypes.string,
}

NHeaderDivider.displayName = 'NHeaderDivider'
