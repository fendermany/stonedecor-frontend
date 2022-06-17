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

import { IProductEditInput } from './product.interface'
import { useAdminCategories } from './useAdminCategories'
import { useProductEdit } from './useProductEdit'

const DynamicSelect = dynamic(() => import('@/ui/select/Select'), {
	ssr: false,
})

const DynamicTextEditor = dynamic(
	() => import('@/components/ui/form-elements/TextEditor'),
	{
		ssr: false,
	}
)

const ProductEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IProductEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useProductEdit(setValue)

	const { data: categories, isLoading: isCategoriesLoading } =
		useAdminCategories()

	return (
		<Layout wrapperName="category-edit">
			<Meta title="Редактировать продукт">
				<div className="category-edit__container !pt-44">
					<AdminNavigation />
					<Heading title="Редактировать продукт" />
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
										name="poster"
										defaultValue=""
										render={({
											field: { value, onChange },
											fieldState: { error },
										}) => (
											<UploadField
												onChange={onChange}
												value={value}
												error={error}
												folder="products/posters"
												placeholder="Постер"
											/>
										)}
										rules={{
											required: 'Постер обязательно',
										}}
									/>
								</div>
								<Controller
									name="types"
									control={control}
									rules={{
										required: 'Выберите категорию!',
									}}
									render={({ field, fieldState: { error } }) => (
										<DynamicSelect
											error={error}
											field={field}
											placeholder="Категории"
											options={categories || []}
											isLoading={isCategoriesLoading}
											isMulti
										/>
									)}
								/>
								<div className="mt-8">
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
								</div>
								<div className="mt-8">
									<Controller
										control={control}
										name="shortDescription"
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
										name="photos"
										render={({
											field: { onChange, value },
											fieldState: { error },
										}) => (
											<PhotoField
												onChange={onChange}
												error={error}
												value={value}
												folder={`products/${getValues('_id')}`}
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

export default ProductEdit
