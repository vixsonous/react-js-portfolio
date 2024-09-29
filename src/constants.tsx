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
    visible: { opacity: 1 , y: 0},
    hidden: { opacity: 0, y: 0 },
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

export const sm = (size:number) => size <= 640;
export const md = (size:number) => size <= 768 && size > 640;
export const lg = (size:number) => size <= 1024 && size > 768;
export const xl = (size:number) => size <= 1280 && size > 1024;
export const xl2 = (size:number) => size <= 1536 && size > 1280;

