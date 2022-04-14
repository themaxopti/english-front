import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'

interface Test {
  whyDiv: any
  test: any
}

const initialState: Test = {
  whyDiv: null,
  test: null
}

const slice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setWhyDiv(state, action: PayloadAction<any>) {
      state.whyDiv = action.payload
    }
  }
})


export const { setWhyDiv } = slice.actions

export default slice.reducer