export const API_URL = `${process.env.APP_SERVER_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`
export const URL = `${process.env.APP_URL}`

export const getCategoriesUrl = (string: string) => `/types${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getAuthUrl = (string: string) => `/auth${string}`
export const getProductsUrl = (string: string) => `/products${string}`
export const getMessageUrl = (string: string) => `/message${string}`
export const getRatingsUrl = (string: string) => `/ratings${string}`
