import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { IFeedbackForm } from '@/shared/types/feedback.types'

import { MessageService } from '@/services/message.service'

import { toastError } from '@/utils/toast-error'

export const useFeedback = (reset: any) => {
	const { mutate } = useMutation(
		'send message',
		(data: IFeedbackForm) => MessageService.send(data),
		{
			onError: (error) => {
				toastError(error, 'Сообщение не отправлено')
			},
			onSuccess(data) {
				reset(
					{
						name: '',
						email: '',
						phone: '',
						msg: '',
						checkbox: false,
					},
					{
						keepErrors: true,
						keepDirty: true,
						keepIsSubmitted: false,
						keepTouched: false,
						keepIsValid: false,
						keepSubmitCount: false,
					}
				)
				toastr.success('Сообщение отправлено', 'отправка прошла успешно')
			},
		}
	)

	const onSubmit: SubmitHandler<IFeedbackForm> = async (data) => {
		await mutate(data)
	}

	return { onSubmit }
}
