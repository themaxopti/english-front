import { NextPage } from 'next'
import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

interface Props {
    children:  JSX.Element
    | JSX.Element[]
    | string
    | string[]
}


export const Wrapper: NextPage<Props> = ({ children }) => {
    return (
        <>
            <div className='wrapper'>
                <Header />
                <div className='wrapper__content'>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}
