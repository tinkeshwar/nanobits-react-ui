import React, {
    createContext,
    forwardRef,
    HTMLAttributes,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NAccordionContext } from './NAccordion'

export interface NAccordionItemContextProps {
  setVisible: (a: boolean) => void
  visible?: boolean
}

export const NAccordionItemContext = createContext({} as NAccordionItemContextProps)

export interface NAccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string
  /**
   * Item key.
   */
  itemKey?: number | string
}

export const NAccordionItem = forwardRef<HTMLDivElement, NAccordionItemProps>(
    ({ children, className, itemKey, ...rest }, ref) => {
        const _itemKey = useRef(itemKey ? itemKey : Math.random().toString(36).substr(2, 9))

        const { _activeItemKey, alwaysOpen, setActiveKey } = useContext(NAccordionContext)
        const [visible, setVisible] = useState(Boolean(_activeItemKey === _itemKey.current))

        useEffect(() => {
            !alwaysOpen && visible && setActiveKey(_itemKey.current)
        }, [visible])

        useEffect(() => {
            setVisible(Boolean(_activeItemKey === _itemKey.current))
        }, [_activeItemKey])

        const _className = classNames('accordion-item', className)

        return (
            <div className={_className} {...rest} ref={ref}>
                <NAccordionItemContext.Provider value={{ setVisible, visible }}>
                    {children}
                </NAccordionItemContext.Provider>
            </div>
        )
    },
)

NAccordionItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    itemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

NAccordionItem.displayName = 'NAccordionItem'
