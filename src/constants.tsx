export type CurrentMode = {
    bg: string,
    primary: string,
    secondary: string,
    accentColor: string,
    linkHoverColor: string,
    textColor: string
}

export interface Props {
    curMode: CurrentMode
}

export const defaultAnim = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

export const delayTime = {
    header: 4,
    main: 5,
}

export const text = {
    logo: '3em',
    title: '2em',
    body: '1.125em',
    small: '0.875em'
}