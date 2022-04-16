import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NBreadcrumbProps extends HTMLAttributes<HTMLOListElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NBreadcrumb = forwardRef<HTMLOListElement, NBreadcrumbProps>(
    ({ children, className, ...rest }, ref) => {
        const _className = classNames('breadcrumb', className)
        return (
            <nav aria-label="breadcrumb">
                <ol className={_className} {...rest} ref={ref}>
                    {children}
                </ol>
            </nav>
        )
    },
)

NBreadcrumb.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NBreadcrumb.displayName = 'NBreadcrumb'
