export const getCategoryUrl = (slug: string) => `/category/${slug}`
export const getProductUrl = (slug: string) => `/product/${slug}`
export const getExamplesUrl = (slug: string) => `/example/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)
