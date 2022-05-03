import { useMediaQuery } from "react-responsive"

export const useScale = (): {} => {
    const isBig = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    if (isBig) {
        return {
            hidden: {
                scale: 0.9
            },
            visible: (custom: any) => ({
                scale: 1,
                opacity: 1,
                transition: { delay: custom }
            })
        }
    } else {
        return {}
    }
}