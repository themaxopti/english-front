import axios from "axios";
import { ResponseType } from "../pages/admin";
import { CourseData, CoursGeneralData } from "../store/reducers/courses.reducer";

export const api = axios.create({
    withCredentials: true,
    baseURL: `${process.env.NODE_ENV == 'development' ? 'http://localhost:5000/api' : 'https://yourdreamteacher-back.herokuapp.com/api'}`,
    // baseURL:'http://localhost:4000/api',
    responseType: 'json',
})

type Course = "ielts" | 'general-english'

export interface Video {
    phone: string
    email: string
    course: string
}

interface Response {
    message: string
    statusCode: number
    isAdmin: boolean
}

interface PayResponse {
    checkout_url: string
}

interface GetCourseResponse {
    message: string
    data: CourseData
}


interface GetGeneralEnglishCourseResponse {
    message: string
    data: CoursGeneralData
}

interface Consultation {
    phone: string
    email: string
    name: string
    messanger: string
}

type NewPeopleOnConsultation = (data: any) => any

const url = `${process.env.NODE_ENV == 'development' ? 'http://localhost:5000' : 'https://yourdreamteacher-back.herokuapp.com'}`
// s
export interface User {
    id: string
    name: string
    phone: string
    email: string
    moduleAmount: number
    productId: number | string
}

export interface FreeTimesData {
    time: string
}

interface FreeTimes {
    message: string
    data: FreeTimesData[]
}

export class Api {

    static async logout() {
        await api.get('/logout')
    }

    static async login(email: string, password: string) {
        return await api.post<Response>('loginAdmin', {
            email,
            password
        })
    }

    static async getCourse(coursTitle: Course, email: string, phone: string) {
        try {
            return await api.post<Response>('giveVideo', {
                email,
                phone,
                course: coursTitle
            })
        } catch (e) {

        }
    }

    static async getAllCourses(context: any) {
        try {
            return await api.get<ResponseType>('getVideos', {
                headers: {
                    cookie: context.req.headers.cookie
                }
            })
            // const response = await fetch(`http://localhost:5000/api/getVideos`, {
            //     method: 'GET',
            //     credentials: 'include',
            //     // @ts-ignore
            //     headers: {
            //         'Access-Control-Allow-Credentials': true,
            //         Cookie: context.req.headers.cookie
            //     }
            // })
        } catch (e) {
            console.log(e)
        }
    }

    static async auth(ctx: any) {
        const response = await fetch(`${url}/api/authAdmin`, {
            method: 'GET',
            credentials: 'include',
            // @ts-ignore
            headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
        })

        return await response.json()
    }

    static async authAxios() {
        return await api.get('authAdmin', {
            withCredentials: true
        })
    }

    static async pay(email: string, phone: string, name: string, productId: number | string | null) {
        try {
            return await api.post<PayResponse>('pay', {
                name,
                email,
                phone,
                productId
            })
        } catch (e) {
            console.log(e);
        }
    }

    static async getIeltsCourses() {
        try {
            return await api.get<GetCourseResponse>('getIeltsCourses')
        } catch (e) {
            console.log(e);
        }

    }

    static async getEnglishCourses() {
        try {
            return await api.get<GetGeneralEnglishCourseResponse>('getGeneralCourses')
        } catch (e) {
            console.log(e);
        }
    }

    static async getPeopleOfCourse(productId: number | string) {
        try {
            return await api.get<User[]>(`getUsersOfCourse/${productId}`)
        } catch (e) {
            console.log(e);
        }
    }

    static async getPeopleOfConsultation() {
        try {
            return await api.get<User[]>(`getConsultations`)
        } catch (e) {
            console.log(e);
        }
    }

    static newPeopleOnConsultation: NewPeopleOnConsultation = async (data) => {
        try {
            return await api.post(`newUserConsultation`, data)
        } catch (e) {
            console.log(e);
        }
    }

    static getFullDays = async () => {
        try {
            return await api.get<{ message: string, data: number[] }>(`getFullDays`)
        } catch (e) {
            console.log(e);
        }
    }

    static getFreeTimes = async (day: number) => {
        try {
            return await api.post<FreeTimes>(`checkFreeDays`, { day })
        } catch (e) {
            console.log(e)
        }
    }
}

// CoursGeneralData