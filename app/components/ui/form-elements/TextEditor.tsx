import { Editor } from '@tinymce/tinymce-react'
import cn from 'classnames'
import { FC } from 'react'

import { ITextEditor } from './form.interface'
import styles from './form.module.scss'

const TextEditor: FC<ITextEditor> = ({
	placeholder,
	onChange,
	error,
	value,
	field,
}) => {
	return (
		<div className={cn(styles.common, styles.editorWrapper, 'animate-fade')}>
			<label>
				<span>{placeholder}</span>

				<div className={styles.wrapper}>
					<Editor
						apiKey={'ctd70fnfkk8k9puxv6k55jea383gx5gp4ttvnv8ae2p3rp11'}
						{...field}
						onEditorChange={onChange}
						value={value}
						init={{
							skin: 'oxide-dark',
							content_css: 'dark',
							height: 200,
							menubar: true,
							content_style:
								'body { font-family:Helvetica,Arial,sans-serif; font-size:14px, }',
						}}
					/>
				</div>

				{error && <div className={styles.error}>{error.message}</div>}
			</label>
		</div>
	)
}

export default TextEditor
