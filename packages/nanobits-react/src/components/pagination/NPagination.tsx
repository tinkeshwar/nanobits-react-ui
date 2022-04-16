import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NPaginationProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * Set the alignment of pagination components.
   */
  align?: 'start' | 'center' | 'end'
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Size the component small or large.
   */
  size?: 'sm' | 'lg'
}

export const NPagination = forwardRef<HTMLUListElement, NPaginationProps>(
    ({ children, align, className, size, ...rest }, ref) => {
        const _className = classNames(
            'pagination',
            {
                [`justify-content-${align}`]: align,
                [`pagination-${size}`]: size,
            },
            className,
        )
        return (
            <nav ref={ref} {...rest}>
                <ul className={_className}>{children}</ul>
            </nav>
        )
    },
)

NPagination.propTypes = {
    align: PropTypes.oneOf(['start', 'center', 'end']),
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
}

NPagination.displayName = 'NPagination'
