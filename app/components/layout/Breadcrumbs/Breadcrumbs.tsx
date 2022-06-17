import Link from 'next/link'
import { FC } from 'react'

interface IBreadcrumbs {
	title: string
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ title }) => {
	return (
		<div className="breadcrumbs">
			<div className="breadcrumbs__container">
				<ol itemScope itemType="https://schema.org/BreadcrumbList">
					<li
						className="link"
						itemProp="itemListElement"
						itemScope
						itemType="https://schema.org/ListItem"
					>
						<Link href="/">
							<a itemProp="item">
								<span itemProp="name">Главная</span>
							</a>
						</Link>
						<meta itemProp="position" content="1" />
					</li>
					<li
						itemProp="itemListElement"
						itemScope
						itemType="https://schema.org/ListItem"
					>
						<Link href="/">
							<span itemProp="item">
								<span itemProp="name">{title}</span>
							</span>
						</Link>
						<meta itemProp="position" content="2" />
					</li>
				</ol>
			</div>
		</div>
	)
}

export default Breadcrumbs
