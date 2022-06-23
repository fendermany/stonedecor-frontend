import Link from 'next/link'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input/react-hook-form-input'

import Social from '@/components/layout/Social/Social'

import { IFeedbackForm } from '@/shared/types/feedback.types'

import { classes } from '@/utils/classes'

import styles from './FeedbackForm.module.scss'
import { useFeedback } from './useFeedback'

interface IFeedbackProps {
	id: string
	product?: string
}

const FeedbackForm: FC<IFeedbackProps> = ({ id, product }) => {
	const {
		handleSubmit,
		register,
		reset,
		control,
		formState: { errors },
	} = useForm<IFeedbackForm>({
		mode: 'onChange',
	})

	const { onSubmit } = useFeedback(reset)

	const [productPage, setProductPage] = useState(product)

	return (
		<form
			className={classes('feedback-form', styles)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="form__line">
				<input
					autoComplete="off"
					type="text"
					{...register('name', {
						required: 'Имя обязательно',
					})}
					placeholder="Имя"
					className="input"
				/>
				{errors?.name && <div className="error">{errors.name.message}</div>}
			</div>
			<div className="form__line">
				<input
					autoComplete="off"
					type="text"
					{...register('email', {
						required: 'Email обязателен',
						pattern: {
							value:
								/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							message: 'Пожалуйста, введите корректный email!',
						},
					})}
					placeholder="E-mail"
					className="input"
				/>
				{errors?.email && <div className="error">{errors.email.message}</div>}
			</div>
			<div className="form__line">
				<PhoneInput
					country="EE"
					type="tel"
					name="phone"
					control={control}
					className="input"
					placeholder="Телефон"
					rules={{ required: 'Телефон обязателен' }}
				/>
				{errors?.phone && <div className="error">{errors.phone.message}</div>}
			</div>
			<div className="form__line">
				<textarea
					autoComplete="off"
					{...register('msg', {
						required: 'Напишите что-нибудь',
					})}
					placeholder="Ваше сообщение"
					className="input"
				></textarea>
				{errors?.msg && <div className="error">{errors?.msg?.message}</div>}
			</div>
			<div className="form__line">
				<div className="checkbox">
					<input
						id={id}
						className="checkbox__input"
						type="checkbox"
						{...register('checkbox', {
							required: 'Дайте согласие',
						})}
					/>
					<label htmlFor={id} className="checkbox__label">
						<span className="checkbox__text">
							Я согласен(-на) на обработку своих персональных данных и принимаю
							условия
							<Link href="/policy">
								<a>
									<span> Политики конфидециальности</span>
								</a>
							</Link>
						</span>
					</label>
					{errors?.checkbox && (
						<div className="error">{errors.checkbox.message}</div>
					)}
				</div>
			</div>
			<div className={classes('form__inner', styles)}>
				<button type="submit" className="button">
					Отправить
				</button>
				<Social />
			</div>
			<input hidden type="text" value={productPage} {...register('product')} />
		</form>
	)
}

export default FeedbackForm
