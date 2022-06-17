import parse from 'html-react-parser'
import { FC } from 'react'

interface IDescription {
	text: string
	className?: string
}

const Description: FC<IDescription> = ({ text, className = '' }) => {
	return <div className={className}>{parse(text)}</div>
}
export default Description
