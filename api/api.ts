import axios from "axios";
import { ResponseType } from "../pages/admin";

const api = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:5000/api/',
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
                    Cookie: context.req.headers.cookie
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

        }
    }

    static async auth(context: any) {
        const response = await fetch(`http://localhost:5000/api/authAdmin`, {
            method: 'GET',
            credentials: 'include',
            // @ts-ignore
            headers: {
                'Access-Control-Allow-Credentials': true,
                Cookie: context.req.headers.cookie
            }
        })

        return await response.json()
    }
}