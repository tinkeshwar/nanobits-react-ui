import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Colors, colorPropType } from '../Types'

export interface NTableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors.
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color?: Colors
}

export const NTableHead = forwardRef<HTMLTableSectionElement, NTableHeadProps>(
    ({ children, className, color, ...rest }, ref) => {
        const _className = classNames(
            {
                [`table-${color}`]: color,
            },
            className,
        )

        return (
            <thead className={_className ? _className : undefined} {...rest} ref={ref}>
                {children}
            </thead>
        )
    },
)

NTableHead.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
}

NTableHead.displayName = 'NTableHead'
