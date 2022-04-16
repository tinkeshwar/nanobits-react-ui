import React, { ElementType, forwardRef, useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useForkedRef } from '../../utils/hooks'
import { NNavContext } from '../sidebar/NSidebarNav'
import { NLinkProps, NLink } from '../link/NLink'
export interface NNavLinkProps extends Omit<NLinkProps, 'idx'> {
  /**
   * Toggle the active state for the component.
   */
  active?: boolean
  /**
   * A string of all className you want applied to the component.
   */
  className?: string
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType
  /**
   * Toggle the disabled state for the component.
   */
  disabled?: boolean
  /**
   * @ignore
   */
  idx?: string
  /**
   * @ignore
   */
  to?: string
}

export const NNavLink = forwardRef<
  HTMLButtonElement | HTMLAnchorElement | HTMLLIElement,
  NNavLinkProps
>(({ children, className, idx, ...rest }, ref) => {
    const navLinkRef = useRef<HTMLAnchorElement>(null)
    const forkedRef = useForkedRef(ref, navLinkRef)

    const { setVisibleGroup } = useContext(NNavContext)
    const _className = classNames('nav-link', className)

    useEffect(() => {
        rest.active = navLinkRef.current?.classList.contains('active')
        idx && rest.active && setVisibleGroup(idx)
    }, [rest.active, className])

    return (
        <NLink className={_className} {...rest} ref={forkedRef}>
            {children}
        </NLink>
    )
})

NNavLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    idx: PropTypes.string,
}

NNavLink.displayName = 'NNavLink'
