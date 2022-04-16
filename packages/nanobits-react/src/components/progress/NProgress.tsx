import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NProgressBar, NProgressBarProps } from './NProgressBar'

export interface NProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    NProgressBarProps {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Sets the height of the component. If you set that value the inner `<NProgressBar>` will automatically resize accordingly.
   */
  height?: number
  /**
   * Makes progress bar thinner.
   */
  thin?: boolean
  /**
   * The percent to progress the ProgressBar (out of 100).
   */
  value?: number
  /**
   * Change the default color to white.
   */
  white?: boolean
}

export const NProgress = forwardRef<HTMLDivElement, NProgressProps>(
    ({ children, className, height, thin, value = 0, white, ...rest }, ref) => {
        const _className = classNames(
            'progress',
            {
                'progress-thin': thin,
                'progress-white': white,
            },
            className,
        )

        return (
            <div className={_className} style={height ? { height: `${height}px` } : {}} ref={ref}>
                {value ? (
                    <NProgressBar value={value} {...rest}>
                        {children}
                    </NProgressBar>
                ) : (
                    children
                )}
            </div>
        )
    },
)

NProgress.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.number,
    thin: PropTypes.bool,
    value: PropTypes.number,
    white: PropTypes.bool,
}

NProgress.displayName = 'NProgress'
