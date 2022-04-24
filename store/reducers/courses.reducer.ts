import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Api } from '../../api/api'
import { AppDispatch } from '../store'

export interface Course {
    isFull: boolean | null,
    maxPeople: number | null,
    orderId: number | string | null,
    amount: number | null
}

interface Test {
    productId: number | string | null
    ieltsMain: Course
    ieltsDeep: Course
    generalDeep: Course
    generalMain: Course
}

export interface CourseData {
    ieltsMain: Course
    ieltsDeep: Course
}


export interface CoursGeneralData {
    generalMain: Course
    generalDeep: Course
}

const initialState: Test = {
    productId: null,
    ieltsMain: {
        isFull: null,
        maxPeople: null,
        orderId: null,
        amount: null
    },
    ieltsDeep: {
        isFull: null,
        maxPeople: null,
        orderId: null,
        amount: null
    },
    generalMain: {
        isFull: null,
        maxPeople: null,
        orderId: null,
        amount: null
    },
    generalDeep: {
        isFull: null,
        maxPeople: null,
        orderId: null,
        amount: null
    }
}

const slice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setProductId(state, action: PayloadAction<number | string | null>) {
            state.productId = action.payload
        },
        setCourse(state, action: PayloadAction<CourseData | undefined>) {
            state.ieltsDeep = action.payload!.ieltsDeep
            state.ieltsMain = action.payload!.ieltsMain
        },
        setGeneralCourse(state, action: PayloadAction<CoursGeneralData | undefined>) {
            state.generalMain = action.payload!.generalMain
            state.generalDeep = action.payload!.generalDeep
        }
    }
})


export const { setProductId, setCourse, setGeneralCourse } = slice.actions



export const getIeltsCourse = () => async (dispatch: AppDispatch) => {
    try {
        const response = await Api.getIeltsCourses()

        dispatch(setCourse(response?.data.data))
    } catch (e) {

    }
}


export const getEnglishCourse = () => async (dispatch: AppDispatch) => {
    try {
        const response = await Api.getEnglishCourses()
        console.log(response);
        dispatch(setGeneralCourse(response?.data.data))
    } catch (e) {

    }
}


export default slice.reducer