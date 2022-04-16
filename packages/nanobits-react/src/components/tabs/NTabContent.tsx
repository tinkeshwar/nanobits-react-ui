import React, { HTMLAttributes, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NTabContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NTabContent = forwardRef<HTMLDivElement, NTabContentProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('tab-content', className)
        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NTabContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NTabContent.displayName = 'NTabContent'
