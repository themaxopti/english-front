import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'


interface Props {
    path: string
    children: | JSX.Element
    | JSX.Element[]
    | string
    | string[]
    | any
    width?: string
    height?: string
    isCenter?: boolean
    isBlank?:boolean
}

export const A: NextPage<Props> = ({ children, path, width, height, isCenter = false,isBlank = false }) => {
    return (
        <Link href={path}>
            <a target={`${isBlank ? '_blank' : '_self'}`} style={{ width, height, display: `${isCenter ? 'flex' : 'block'}`, justifyContent: `${isCenter ? 'center' : 'start'} `, alignItems: `${isCenter ? 'center' : 'start'}` }}>{children}</a>
        </Link>
    )
}