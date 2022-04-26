import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { MutableRefObject } from 'react'
import { Video } from '../../api/api'

interface State {
    isAdmin: boolean
    errorMessage: string | null
    videos: Video[] | null
}

const initialState: State = {
    isAdmin: false,
    errorMessage: null,
    videos: []
}

const slice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setStatusLogin(state, action: PayloadAction<boolean>) {
            state.isAdmin = action.payload
        },
        setErrorMessage(state, action: PayloadAction<string>) {
            state.errorMessage = action.payload
        },
        addVideo(state, action: PayloadAction<Video[]>) {
            console.log(action.payload)
            // @ts-ignore
            state.videos = [...action.payload]
        }
    }
})


export const { setStatusLogin, setErrorMessage, addVideo } = slice.actions

export default slice.reducer