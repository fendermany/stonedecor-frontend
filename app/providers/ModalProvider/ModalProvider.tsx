import Dialog from '@mui/material/Dialog'
import { FC, createContext, useState } from 'react'

import FeedbackForm from '@/components/ui/feedback-form/FeedbackForm'

export const CModalProvider = createContext<IModalProps>({} as IModalProps)

interface IModalProps {
	setModal: React.Dispatch<React.SetStateAction<ModalProps>>
	modal: ModalProps
}

interface ModalProps {
	show: boolean
	product?: string
}

interface Props {
	children: React.ReactNode
}

const ModalProvider: FC<Props> = ({ children }) => {
	const [modal, setModal] = useState<ModalProps>({
		show: false,
		product: '',
	})

	const handleClose = () => {
		setModal({ show: false })
	}

	return (
		<CModalProvider.Provider value={{ modal, setModal }}>
			{children}
			<Dialog
				scroll="body"
				sx={{
					'& .MuiPaper-root': {
						color: '#fff',
					},
				}}
				aria-labelledby="Feedback form"
				aria-describedby="Please write feedback"
				open={modal.show}
				onClose={handleClose}
			>
				<div className="popup__content">
					<FeedbackForm id="popup-form" product={modal.product} />
				</div>
			</Dialog>
		</CModalProvider.Provider>
	)
}

export default ModalProvider
