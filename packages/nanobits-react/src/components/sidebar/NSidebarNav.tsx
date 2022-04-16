import React, { createContext, forwardRef, HTMLAttributes, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export interface NSidebarNavProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
}

interface ContextProps {
  visibleGroup: string
  setVisibleGroup: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const NNavContext = createContext({} as ContextProps)

export const NSidebarNav = forwardRef<HTMLUListElement, NSidebarNavProps>(
    ({ children, className, ...rest }, ref) => {
        const [visibleGroup, setVisibleGroup] = useState('')
        const NNavContextValues = {
            visibleGroup,
            setVisibleGroup,
        }
        const classes = classNames('sidebar-nav', className)
        return (
            <ul className={classes} ref={ref} {...rest}>
                <NNavContext.Provider value={NNavContextValues}>
                    {React.Children.map(children, (child, index) => {
                        if (React.isValidElement(child)) {
                            return React.cloneElement(child, { key: index, idx: `${index}` })
                        }
                        return
                    })}
                </NNavContext.Provider>
            </ul>
        )
    },
)

NSidebarNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

NSidebarNav.displayName = 'NSidebarNav'
