import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface FaIconProps {
    name: any,
    size?: any,
    className?: any,
    color?: string
    spin?: boolean
    pulse?: boolean
    beat?: boolean
    fade?: boolean
    beatFade?: boolean
    bounce?: boolean
    shake?: boolean
    border?: boolean
    fixedWidth?: boolean
    inverse?: boolean
    listItem?: boolean
    flip?: any
    pull?: any
    rotation?: any
    transform?: string
}

export const Icon = ({
    name, size, className,
    color, spin, pulse, beat,
    fade, beatFade, bounce, 
    shake, border, fixedWidth,
    inverse, listItem, flip,
    pull, rotation, transform
 }: FaIconProps) => {
    return <FontAwesomeIcon 
        icon={name} 
        size={size} 
        className={className} 
        color={color} 
        spin={spin} 
        pulse={pulse} 
        beat={beat}
        fade={fade}
        beatFade={beatFade}
        bounce={bounce}
        shake={shake} 
        border={border}
        fixedWidth={fixedWidth}
        inverse={inverse} 
        listItem={listItem}
        flip={flip} 
        pull={pull} 
        rotation={rotation} 
        transform={transform} 
    />
}