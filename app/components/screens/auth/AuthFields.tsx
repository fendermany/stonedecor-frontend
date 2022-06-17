import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '@/components/ui/form-elements/Field'

import { validEmail } from '@/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email обязателен',
					pattern: {
						value: validEmail,
						message: 'Пожалуйста, введите корректный email',
					},
				})}
				error={errors.email}
				placeholder="E-mail"
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password обязателен',
								minLength: {
									value: 6,
									message: 'Минимальная длина должна быь 6 символов',
								},
						  }
						: {}
				)}
				type="password"
				error={errors.password}
				placeholder="Пароль"
			/>
		</>
	)
}

export default AuthFields
