import classNames from 'classnames'
import React, { CSSProperties, Dispatch, ForwardedRef, SetStateAction, useEffect, useState } from 'react'
import s from '../../styles/Consultation/Consultation-form.module.scss'
import sRadio from '../../styles/Fields/Radio.module.scss'
import sCheckBox from '../../styles/Fields/CheckBox.module.scss'
import sTextField from '../../styles/Fields/TextFIeld.module.scss'
import sSelectField from '../../styles/Fields/Select.module.scss'
import { motion } from 'framer-motion'
import { useScale } from '../../animations/animations'
import { useSideAnimation, useSideAnimationDisplay } from '../MainPage/motion'
import { delay } from '../../helpers/delay'
import { Router, useRouter } from 'next/router'


interface ConsultationFormMiniBlock {
    children: React.ReactNode | any
    title?: string
    error?: any
    name?: string
}

export const ConsultationFormMiniBlock = ({ children, title, error }: ConsultationFormMiniBlock) => {

    const classes = classNames({
        [s["mini-block"]]: true,
        [s["with-error"]]: error
    })

    return (
        <>
            <div className={classes}>
                <div
                    style={{ display: `${title ? 'block' : 'none'}` }}
                    className={s["mini-block__title"]}
                >
                    {title}
                </div>
                <div className={s["mini-block__question"]}>
                    <div style={{ display: "flex", flexDirection: 'column', rowGap: "10px" }}>
                        {children}
                    </div>
                </div>

                <div
                    className={s["mini-block__error"]}
                    style={{ display: `${error ? 'block' : 'none'}` }}
                >
                    {error && error.message}
                </div>
            </div>
        </>
    )
}


interface ConsultationSubmitFormType {
    activeStep: number
    setActiveStep: Dispatch<SetStateAction<number>>
}


export const ConsultationSubmitForm = ({ activeStep, setActiveStep }: ConsultationSubmitFormType) => {

    function changeStep(step: number) {
        if (step < 0) {
            return
        }
        if (step > 2) {
            return
        }
        setActiveStep(step)
    }

    return (
        <>
            <div className={s["submit-block"]}>
                <motion.div
                    className={s["submit-block__next"]}
                    onClick={() => { changeStep(activeStep - 1) }}
                    whileTap={{
                        scale: [1, 2, 2, 2, 2],
                    }}
                >
                    Назад
                </motion.div>

                <input value={`${activeStep == 2 ? "Отправить" : "Дальше"}`} type={"submit"} className={s["submit-block__next"]} />
            </div>
        </>
    )
}

interface ConsultationMainBlockType {
    children: any
    index: number
    activeStep: number
}


export const ConsultationMainBlock =
    React.forwardRef<HTMLDivElement[] | null, ConsultationMainBlockType>
        (({ children, index, activeStep }, ref) => {

            return (
                <motion.div
                    initial="hidden"
                    // whileInView="visible"
                    animate={activeStep == index ? "visible" : "hidden"}
                    viewport={{ once: true }}
                    custom={0.5}
                    variants={useSideAnimation(200)}
                    // @ts-ignore
                    ref={el => ref.current[index] = el}
                    className={s["consultation-form__first-block"]}
                    style={{ display: `${activeStep == index ? 'flex' : 'none'}` }}
                >
                    {children}
                </motion.div>
            )
        })

ConsultationMainBlock.displayName = 'ConsultationMainBlock'





interface FieldType {
    classname?: string
    width?: string
    placeholder?: string
    register: any
    error?: any
    name: string
    setValue?: any
}

export const TextField = ({ classname, width, placeholder, register, error, name, setValue }: FieldType) => {

    const classes = classNames({
        [sTextField["text"]]: true,
        classname: true
    })

    const line2Classes = classNames({
        [sTextField["with-error"]]: error,
        [sTextField["line2"]]: true
    })

    const [focus, setFocus] = useState(false)
    const [blur, setBlur] = useState(false)



    return (
        <>
            <div style={{ width }} className={classes}>
                <input
                    {
                    ...register
                    }
                    onBlur={() => {
                        setBlur(true)
                        setFocus(false)
                    }}
                    onFocus={() => {
                        setFocus(true)
                        setBlur(false)
                    }}
                    // @ts-ignore
                    placeholder={placeholder}
                    className={classname} type={'text'}
                />
                <div className={sTextField["line"]}></div>
                <div
                    style={{ width: `${focus ? '100%' : "0%"}`, opacity: `${blur ? '0' : '1'}` }}
                    className={line2Classes}
                ></div>
            </div>
        </>
    )
}

interface RadioFieldType {
    classname?: string
    id: string,
    text: string
    name: string
    register: any
    isChecked?: boolean
    value: string
}

export const RadioField = ({ classname, id, text, name, register, isChecked = false, value }: RadioFieldType) => {
    return (
        <>
            <div className={sRadio["radio"]}>
                <input
                    {
                    ...register
                    }
                    id={id}
                    name={name}
                    onChange={e => { }}
                    defaultChecked={isChecked}
                    className={classname}
                    value={value}
                    type={'radio'}
                />
                <label style={{ cursor: 'pointer' }} className={sRadio["circle"]} htmlFor={id}>
                    <div></div>
                </label>
                <label className={sRadio["text"]} style={{ cursor: 'pointer' }} htmlFor={id}>{text}</label>
            </div>
        </>
    )
}



export const CheckBoxField = ({ classname, id, text, name }: RadioFieldType) => {
    return (
        <>
            <div className={sCheckBox["checkBox"]}>
                <input id={id} name={name} onChange={e => { }} className={classname} type={'checkbox'} />
                <label style={{ cursor: 'pointer' }} className={sCheckBox["circle"]} htmlFor={id}>
                    <div></div>
                </label>
                <label style={{ cursor: 'pointer' }} htmlFor={id}>{text}</label>
            </div>
        </>
    )
}


interface SelectFieldType {
    children: any
    name: string
    register: any
}

export const SelectField = ({ children, name, register }: SelectFieldType) => {
    return (
        <>
            <div className={sSelectField["select"]}>
                <select
                    name={name}
                    {...register}
                    className={s["select"]}
                >
                    {children}
                </select>
            </div>
        </>
    )
}