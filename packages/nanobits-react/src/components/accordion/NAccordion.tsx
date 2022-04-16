import React, { createContext, forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NAccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The active item key.
   */
  activeItemKey?: number | string
  /**
   * Make accordion items stay open when another item is opened
   */
  alwaysOpen?: boolean
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
   */
  flush?: boolean
}

export interface NAccordionContextProps {
  _activeItemKey?: number | string
  alwaysOpen?: boolean
  setActiveKey: React.Dispatch<React.SetStateAction<number | string | undefined>>
}

export const NAccordionContext = createContext({} as NAccordionContextProps)

export const NAccordion = forwardRef<HTMLDivElement, NAccordionProps>(
    ({ children, activeItemKey = undefined, alwaysOpen = false, className, flush, ...rest }, ref) => {
        const [_activeItemKey, setActiveKey] = useState(activeItemKey)
        const _className = classNames('accordion', { 'accordion-flush': flush }, className)
        return (
            <div className={_className} {...rest} ref={ref}>
                <NAccordionContext.Provider value={{ _activeItemKey, alwaysOpen, setActiveKey }}>
                    {children}
                </NAccordionContext.Provider>
            </div>
        )
    },
)

NAccordion.propTypes = {
    alwaysOpen: PropTypes.bool,
    activeItemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    children: PropTypes.node,
    className: PropTypes.string,
    flush: PropTypes.bool,
}

NAccordion.displayName = 'NAccordion'
