import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import Popup from 'reactjs-popup'

import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'
import { IUploadField } from '../form.interface'

import styles from './UploadField.module.scss'
import { useUploadPhoto } from './useUploadPhoto'

const PhotoField: FC<IUploadField> = ({
	onChange,
	placeholder,
	error,
	folder,
	isNoImage = false,
	style,
	value,
}) => {
	const { isLoading, uploadFile } = useUploadPhoto(onChange, folder, value)

	const deletePhoto = (photo: string) => {
		let index = value.indexOf(photo)
		value?.splice(index, 1)
		onChange(value)
	}

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile}></input>
					{error && <div className={styles.error}>{error.message}</div>}
				</label>

				{!isNoImage && (
					<div className={styles.uploadedPhotosContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							value &&
							value.map((item: string, idx: number) => (
								<Popup
									key={`thumbnail ${idx}`}
									closeOnDocumentClick
									trigger={
										<div>
											<Image
												src={item}
												alt={`thumbnail ${idx}`}
												width={96}
												height={96}
												unoptimized
												priority
												className="object-cover"
											/>
										</div>
									}
									position="center center"
									on="hover"
									mouseLeaveDelay={300}
									mouseEnterDelay={0}
									contentStyle={{ padding: '0px', border: 'none' }}
									arrow={false}
								>
									<div role="tooltip" className={styles.menu}>
										<div
											onClick={() => deletePhoto(item)}
											className={styles.menuItem}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 448 512"
												className="w-4 h-4"
											>
												<path
													fill="rgba(0, 0, 0, 0.5)"
													d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
												/>
											</svg>
										</div>
									</div>
								</Popup>
							))
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default PhotoField
