import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NCardBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NCardBody = forwardRef<HTMLDivElement, NCardBodyProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('card-body', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                {children}
            </div>
        )
    },
)

NCardBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NCardBody.displayName = 'NCardBody'
