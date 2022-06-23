import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'

import InfoTemplate from '@/components/layout/InfoTemplate/InfoTemplate'
import {
	IInfoProps,
	IInfoTemplate,
} from '@/components/layout/InfoTemplate/info.types'
import { ISlide } from '@/components/screens/home/promo/slider.interface'

import { IProduct } from '@/shared/types/product.types'

import { ProductService } from '@/services/product.service'

import { getCategoriesList } from '@/utils/product/getCategoriesList'
import { shuffle } from '@/utils/shuffle'

import { getProductUrl } from '@/config/url.config'

const PolicyPage: NextPage<IInfoTemplate> = (props) => {
	return (
		<InfoTemplate
			{...props}
			title="Политика конфиденциальности"
			content={<Content />}
		/>
	)
}

export const Content = () => {
	return (
		<>
			<p>
				StoneDecor OÜ стремится защитить конфиденциальность посетителей
				веб-сайта <a href="https://stonedecor.eu">https://stonedecor.eu</a>{' '}
				(далее веб-сайт). Пожалуйста, ознакомьтесь с нашей политикой
				конфиденциальности, это поможет вам понять, как мы используем ваши
				персональные данные.
			</p>
			<p>
				StoneDecor OÜ вправе изменить политику конфиденциальности в любое время
				без уведомления поэтому, пожалуйста, проверяйте её каждый раз, когда вы
				посещаете наш веб-сайт.
			</p>
			<h2>Какие персональные данные мы собираем?</h2>
			<p>
				При заполнении формы обратной связи на нашем веб-сайте вас могут
				попросить предоставить некоторые персональные данные, такие как
			</p>
			<ul>
				<li>фамилия, имя, отчество</li>
				<li>название компании</li>
				<li>номер телефона</li>
				<li>адрес электронной почты</li>
				<li>название интересующей услуги</li>
				<li>другие данные, которые вы решите предоставить</li>
			</ul>
			<p>
				На веб-сайте также происходит сбор и обработка файлов cookie с помощью
				сервисов интернет-статистики, таких как Яндекс Метрика и Google
				Analytics.
			</p>
			<h2>Файлы cookie</h2>
			<p>
				Файл cookie представляет собой небольшой фрагмент данных или сообщений,
				которые отправляются с веб-сервера организации в ваш веб-браузер и затем
				сохраняются на вашем жестком диске. Файлы cookie не могут считывать
				данные с вашего жесткого диска или файлов cookie, созданных другими
				веб-сайтами и не наносят ущерба вашей системе.
			</p>
			<p>
				Файлы cookie собирают данные, которые не позволяют идентифицировать
				личность посетителя веб-сайта.
			</p>
			<p>
				Использование файлов cookie является стандартной процедурой на
				большинстве веб- сайтов, однако вы можете указать в настройках своего
				браузера, чтобы он отказался от какого-либо файла cookie или предупредил
				вас о том, когда отправляется cookie-файл.
			</p>
			<p>
				Веб-браузеры позволяют контролировать файлы cookie, хранящиеся на вашем
				жёстком диске, через настройки веб-браузера. Чтобы узнать больше о
				файлах cookie, в том числе о том, какие файлы cookie были установлены, а
				также о том, как управлять ими и их удалять, посетите страницу{' '}
				<a href="http://www.allaboutcookies.org">
					http://www.allaboutcookies.org
				</a>
				.
			</p>
			<p>
				Если вы решите не принимать наши файлы cookie, некоторые функции нашего
				веб-сайта могут работать не так хорошо, как мы планировали.
			</p>
			<h3>Как мы используем персональные данные?</h3>
			<p>
				StoneDecor OÜ использует персональные данные посетителей веб-сайта для
			</p>
			<ul>
				<li>ответа на запрос, переданный через веб-сайт,</li>
				<li>предоставления информации</li>
				<li>переписки в ходе делового сотрудничества</li>
				<li>дальнейшего оказания услуги</li>
			</ul>
			<p>
				StoneDecor OÜ использует файлы cookie для мониторинга производительности
				нашего веб-сайта и улучшения пользовательского интерфейса. StoneDecor OÜ
				может использовать персональные данные для проведения исследований
				демографических данных, интересов и поведения посетителей веб-сайта для
				того, чтобы лучше понимать потребности его посетителей. Данное
				исследование составляется на основе агрегированных и анонимных данных,
				не позволяющих установить личность посетителя веб-сайта.
			</p>
			<h3>Кому мы можем раскрыть персональные данные?</h3>
			<p>
				С персональными данными посетителей веб-сайта работают сотрудники фирмы
				StoneDecor OÜ. Наша политика предусматривает передачу данных третьим
				лицам, если
			</p>
			<ul>
				<li>
					передача данных необходима для осуществления нашей деятельности и для
					исполнения вашего запроса (например, если мы передаем услуги на
					аутсорсинг, или другие люди обрабатывают данные для нас)
				</li>
				<li>
					передача данных требуется по закону (например, на основании повестки,
					ордера на обыск или в рамках иного правового производства)
				</li>
			</ul>
			<p>Во всех остальных случаях персональные данные посетителей веб-сайта</p>
			<ul>
				<li>не передаются третьим лицам</li>
				<li>не сдаются в аренду</li>
				<li>не используются в других целях, кроме заявленных выше</li>
			</ul>
			<h4>Безопасность</h4>
			<p>
				К сожалению, никакая передача данных через интернет или любую другую
				сеть не может считаться на 100% безопасной, но мы предпринимаем
				соответствующие шаги для защиты безопасности ваших персональных данных.
			</p>
			<h5>Контакты</h5>
			<p>Если вы хотите</p>
			<ul>
				<li>запросить информацию о персональных данных</li>
				<li>сообщить о неточностях в персональных данных</li>
				<li>
					задать вопрос о том, каким образом используются персональные данные
				</li>
				<li>
					попросить прекратить использовать персональные данные с целью прямого
					маркетинга
				</li>
				<li>
					сообщить, что положения настоящей ПОЛИТИКИ конфиденциальности не
					соблюдаются
				</li>
			</ul>
			<p>
				то свяжитесь, пожалуйста, с представителем StoneDecor OÜ по контактным
				данным, перечисленным ниже.
			</p>
			<p>
				Адрес электронной почты: info@stonedecor.eu <br />
				Почтовый и юридический адрес: Ranna tn 12-3 Sillamäe Ida-Virumaa 40231
			</p>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: products } = await ProductService.getProducts()

		const slides: ISlide[] = shuffle(products)
			.slice(0, 5)
			.map((p: IProduct) => ({
				_id: p._id,
				link: getProductUrl(p.slug),
				subTitle: p.shortDescription,
				name: p.name,
				bigPoster: p.poster,
			}))

		return {
			props: {
				slides,
			} as IInfoProps,
			revalidate: 60,
		}
	} catch (error) {
		console.log(errorCatch(error))

		return {
			props: {
				slides: [],
			} as IInfoProps,
		}
	}
}

export default PolicyPage
