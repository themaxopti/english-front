import React from 'react'

export const Form = () => {
    return (
        <div className='section'>
            <div className="section__content">
                <div className='form-contact__wrap'>
                    <form className='form-contact' action="">
                        <span style={{fontWeight:'600'}}>ПОЛУЧИТЬ ДОСТУП К БЕСПЛАТНОМУ УРОКУ</span>
                        <div className='form-contact__email form-contact__inp'>
                            <div>email</div>
                            <input type="text" placeholder='email' />
                        </div>

                        <div className='form-contact__name form-contact__inp'>
                            <div>name</div>
                            <input type="text" placeholder='name' />

                        </div>

                        <div className='form-contact__phone form-contact__inp'>
                            <div>phone</div>
                            <input type="text" placeholder='phone' />
                        </div>

                        <div className='submit form-contact__inp'>
                            <input type="submit" value={"Отправить"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
