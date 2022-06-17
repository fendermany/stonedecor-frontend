import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import Meta from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Layout wrapperName="auth">
			<Meta title="Auth">
				<div className="auth__container">
					<section className={styles.wrapper}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Heading title="Авторизация" className="mb-6" />

							<AuthFields
								formState={formState}
								register={registerInput}
								isPasswordRequired
							/>

							<div className={styles.buttons}>
								<Button
									onClick={() => setType('login')}
									type="submit"
									disabled={isLoading}
								>
									Войти
								</Button>
							</div>
						</form>
					</section>
				</div>
			</Meta>
		</Layout>
	)
}

export default Auth
