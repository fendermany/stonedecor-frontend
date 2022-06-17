import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return <h1 className={className}>{title}</h1>
}
export default Heading
