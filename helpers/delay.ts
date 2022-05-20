import moment from "moment"
import { useEffect, useState } from "react"

export function delay(time: number) {
    return new Promise((res) => {
        setTimeout(() => {
            res(null)
        }, time)
    })
}

export function useTimer(eventTime: any) {


    const [days, setDays] = useState<number | string>('')
    const [hours, setHours] = useState<number | string>('')
    const [minutes, setMinutes] = useState<number | string>('')

    let currentTimeUnix = moment(moment().format()).unix()

    const diffTime = eventTime - currentTimeUnix
    let duration = moment.duration(diffTime * 1000, 'milliseconds')

    const interval = 1000

    useEffect(() => {
        const timer = setInterval(function () {
            // @ts-ignore
            duration = moment.duration(duration - interval, 'milliseconds')

            console.log(duration.seconds());
        }, interval)

        return () => {
            setDays(duration.days())
            setHours(duration.hours())
            setMinutes(duration.minutes())

            clearInterval(timer)
        }

    }, [])

    return {
        days,
        hours,
        minutes
    }

}

export function composeWords(number: number, value: string) {
    switch (value) {
        case "day":
            if (number >= 5 && number <= 10) {
                return "дней"
            }
            if (number >= 2 && number <= 4) {
                return "дня"
            }
            if (number > 10 || number == 0) {
                return "дней"
            }
            if (number == 1) {
                return 'день'
            }



        case "min":
            if (number == 0) {
                return "минут"
            }
            if (number == 1) {
                return "минута"
            }
            if (number >= 2 && number <= 4) {
                return "минуты"
            }
            if (number >= 5) {
                return 'минут'
            }


        case "hours":
            if (number == 0) {
                return "часов"
            }
            if (number == 1) {
                return "час"
            }
            if (number >= 2 && number <= 4) {
                return "часа"
            }
            if (number >= 5) {
                return 'часов'
            }
    }

} 