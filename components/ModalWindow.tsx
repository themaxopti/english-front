import React from 'react'
import s from '../styles/ModalWindow.module.scss'
import { motion } from 'framer-motion'
import { useSideAnimation } from './MainPage/motion'

interface Props {
    children: any
    isOpen: boolean
    setIsopen: (isOpen:boolean) => any
}


export const ModalWindow = ({ children, isOpen,setIsopen }: Props) => {
    return (
        <motion.div style={{ display: `${isOpen ? 'block' : 'none'}` }} viewport={{ once: true }} initial="hidden" whileInView="visible" className={s['modal-window']}>
            <div onClick={() => setIsopen(false)} className={s['modal-window__wrap']}>
                <motion.div onClick={(e) => e.stopPropagation()} animate={isOpen ? "visible" : "hidden"} viewport={{ once: true }} custom={0.5} variants={useSideAnimation(200)} className={s["modal-window__block"]}>
                    {children}
                </motion.div>
            </div>
        </motion.div>
    )
}
