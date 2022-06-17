import { axiosClassic } from 'api/interceptors'

import { IFeedbackForm } from '@/shared/types/feedback.types'

import { getMessageUrl } from '@/config/api.config'

export const MessageService = {
	async send(data: IFeedbackForm) {
		return axiosClassic.post(getMessageUrl(`/send-message`), data)
	},
}
