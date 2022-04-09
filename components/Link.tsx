import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'


interface Props {
    path: string
    children:| JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

export const A: NextPage<Props> = ({ children, path }) => {
    return (
        <Link href={path}>
            <a>{children}</a>
        </Link>
    )
}
