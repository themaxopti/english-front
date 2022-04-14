import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { MutableRefObject } from 'react'

interface Test {
  whyDiv: any
  test: any
  aboutMeDiv:React.MutableRefObject<HTMLDivElement> | null
}

const initialState: Test = {
  whyDiv: null,
  test: null,
  aboutMeDiv: null
}

const slice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setWhyDiv(state, action: PayloadAction<any>) {
      state.whyDiv = action.payload
    },
    setAboutMeDiv(state, action: PayloadAction<React.MutableRefObject<HTMLDivElement>>) {
      // @ts-ignore
      state.aboutMeDiv = action.payload
    }
  }
})


export const { setWhyDiv,setAboutMeDiv } = slice.actions

export default slice.reducer