import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { facebook, viber, whatssapp } from '@/assets/img/images'

const Social: FC = () => {
	return (
		<ul className="social">
			<li>
				<Link href="#">
					<a>
						<Image src={facebook} alt="facebook" />
					</a>
				</Link>
			</li>
			<li>
				<Link href="#">
					<a>
						<Image src={whatssapp} alt="whatsapp" />
					</a>
				</Link>
			</li>
			<li>
				<Link href="#">
					<a>
						<Image src={viber} alt="viber" />
					</a>
				</Link>
			</li>
		</ul>
	)
}

export default Social
