import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
}

const SubHeading: FC<IHeading> = ({ title, className }) => {
	return <h2 className={className}>{title}</h2>
}
export default SubHeading
