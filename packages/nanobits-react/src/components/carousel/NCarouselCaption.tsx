import React, { forwardRef, HTMLAttributes } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NCarouselCaptionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
}

export const NCarouselCaption = forwardRef<HTMLDivElement, NCarouselCaptionProps>(
    ({ className, ...rest }, ref) => {
        const _className = classNames('carousel-caption', className)

        return <div className={_className} {...rest} ref={ref} />
    },
)

NCarouselCaption.propTypes = {
    className: PropTypes.string,
}

NCarouselCaption.displayName = 'NCarouselCaption'
