import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NDropdownDividerProps extends HTMLAttributes<HTMLHRElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

export const NDropdownDivider = forwardRef<HTMLHRElement, NDropdownDividerProps>(
    ({ className, ...rest }, ref) => {
        const _className = classNames('dropdown-divider', className)

        return <hr className={_className} {...rest} ref={ref} />
    },
)

NDropdownDivider.propTypes = {
    className: PropTypes.string,
}

NDropdownDivider.displayName = 'NDropdownDivider'
