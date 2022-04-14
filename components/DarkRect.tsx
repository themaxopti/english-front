import React from 'react'

interface Props {
    isActive: boolean
}

export const DarkRect = ({ isActive = false }: Props) => {
    return (
        <div style={{ display: `${isActive ? 'block' : 'none'}` }} className='dark-rect'>
            
        </div>
    )
}
