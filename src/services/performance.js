import service from '@/utils/request'

export const getLoadArr = () => service.get('/loadArr')

export const getMountArr = () => service.get('/mountArr')

export const getBlankCount = () => service.get('/blankCount')

export const getpaintTime = () => service.get('/paintTime')
