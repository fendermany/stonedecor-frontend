import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import Layout from '@/components/layout/Layout'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import PhotoField from '@/components/ui/form-elements/UploadField/PhotoField'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import formStyles from '@/ui/form-elements/admin-form.module.scss'

import Meta from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'

import { ICategoryEditInput } from './category-edit.interface'
import { useCategoryEdit } from './useCategoryEdit'

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

const CategoryEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<ICategoryEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useCategoryEdit(setValue)

	return (
		<Layout wrapperName="category-edit">
			<Meta title="Редактировать категорию">
				<div className="category-edit__container !pt-44">
					<AdminNavigation />
					<Heading title="Редактировать категорию" />
					<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
						{isLoading ? (
							<SkeletonLoader count={3} />
						) : (
							<>
								<div className={formStyles.fields}>
									<Field
										{...register('name', {
											required: 'Имя обязательно',
										})}
										placeholder="Имя"
										error={errors.name}
									/>
									<SlugField
										register={register}
										error={errors.slug}
										generate={() =>
											setValue('slug', generateSlug(getValues('name')))
										}
									/>
									<Controller
										control={control}
										name="image"
										defaultValue=""
										render={({
											field: { value, onChange },
											fieldState: { error },
										}) => (
											<UploadField
												onChange={onChange}
												value={value}
												error={error}
												folder="categories/posters"
												placeholder="Постер"
											/>
										)}
										rules={{
											required: 'Постер обязательно',
										}}
									/>
								</div>

								<Controller
									control={control}
									name="description"
									defaultValue=""
									render={({
										field: { value, onChange, ...field },
										fieldState: { error },
									}) => (
										<DynamicTextEditor
											field={field}
											onChange={onChange}
											value={value}
											error={error}
											placeholder="Описание"
										/>
									)}
									rules={{
										validate: {
											required: (v) =>
												(v && stripHtml(v).result.length > 0) ||
												'Описание обязательно',
										},
									}}
								/>
								<div className="mt-8">
									<Controller
										control={control}
										name="shortDescr"
										defaultValue=""
										render={({
											field: { value, onChange, ...field },
											fieldState: { error },
										}) => (
											<DynamicTextEditor
												field={field}
												onChange={onChange}
												value={value}
												error={error}
												placeholder="Короткое описание"
											/>
										)}
										rules={{
											validate: {
												required: (v) =>
													(v && stripHtml(v).result.length > 0) ||
													'Описание обязательно',
											},
										}}
									/>
								</div>
								<div className="mt-8">
									<Controller
										control={control}
										name="galleryDescr"
										defaultValue=""
										render={({
											field: { value, onChange, ...field },
											fieldState: { error },
										}) => (
											<DynamicTextEditor
												field={field}
												onChange={onChange}
												value={value}
												error={error}
												placeholder="Описание галереи"
											/>
										)}
										rules={{
											validate: {
												required: (v) =>
													(v && stripHtml(v).result.length > 0) ||
													'Описание обязательно',
											},
										}}
									/>
								</div>

								<div className="mt-8">
									<Controller
										control={control}
										name="photos"
										render={({
											field: { onChange, value },
											fieldState: { error },
										}) => (
											<PhotoField
												onChange={onChange}
												error={error}
												value={value}
												folder={`categories/${getValues('_id')}`}
												placeholder="Загрузить фото"
											/>
										)}
									/>
								</div>
								<Button>Обновить</Button>
							</>
						)}
					</form>
				</div>
			</Meta>
		</Layout>
	)
}

export default CategoryEdit
