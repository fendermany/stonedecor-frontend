export const accentColor = '#1b998b'
export const bgColor = '#1e1d1c'

export const IS_SERVER = typeof window === 'undefined'
export const IS_CLIENT = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.REACT_APP_ENV === 'production'
