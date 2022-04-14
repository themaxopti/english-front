export const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: any) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom }
    })
}


export const imgAnimation = {
    hidden: {
        x: -100,
        opacity: 1
    },
    visible: (custom: any) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom }
    }),
}


export const whyMeAnimation = {
    hidden: {
        x: 0,
        opacity: 0
    },
    visible: (custom: any) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom }
    })
}

export const whyMeAnimationText = {
    hidden: {
        x: 200,
        opacity: 0
    },
    visible: (custom: any) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom }
    })
}

export const leftAnimationAmount = {
    hidden: {
        x: 200,
        opacity: 0
    },
    visible: (custom: any) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom }

    })
}



export const sideAnimation = (x: number, y = 0) => ({
    hidden: {
        x,
        y,
        opacity: 0
    },
    visible: (custom: any) => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { delay: custom }

    })
})

export const show = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: (custom: any) => ({
        scale: 1,
        opacity: 1,
        transition: { delay: custom }
    })
}
