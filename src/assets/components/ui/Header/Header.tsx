import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import Button from '@ui/Button/Button';
import TaskBar from '@ui/TaskBar/TaskBar';
import type { TaskBarProps } from '@ui/TaskBar/TaskBar.props';
import UiContainer from '@ui/UiContainer/UiContainer';

import { useTaskbarOptions } from '@hooks/useTaskbarOptions';

import ptLogo from '@media/images/logo/short logo 1.png';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ taskbar }) => {
	const defaultTaskbarOptions: HeaderProps['taskbar'] =
		taskbar !== false
			? ({
					rightControl: true,
					...taskbar,
			  } as TaskBarProps)
			: false;

	const { paginationPage } = useTaskbarOptions();

	return (
		<UiContainer.Header className={cn(styles.appHeader)}>
			<section className={cn(styles.main)}>
				<Link to={`/?page=${paginationPage}`} className={cn(styles.logotype)}>
					<img src={ptLogo} alt={'app-logo'} className={cn(styles.logo)} />

					<svg
						className={cn(styles.label)}
						viewBox='0 0 177 27'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7.84082 0.429688H13.3516V1.37598H7.84082V0.429688ZM3.27637 1.37598H7.84082V2.13672H3.27637V1.37598ZM13.3516 1.37598H16.0049V2.13672H13.3516V1.37598ZM2.33008 2.13672H3.27637V3.08301H2.33008V2.13672ZM16.0049 2.13672H16.9512V3.08301H16.0049V2.13672ZM1.38379 3.08301H2.33008V6.88672H1.38379V3.08301ZM16.9512 3.08301H17.8975V4.0293H16.9512V3.08301ZM17.8975 4.0293H18.8438V9.54004H17.8975V4.0293ZM6.89453 5.94043H11.4404V6.88672H12.3867V7.64746H11.4404V8.59375H10.4941V7.64746H7.84082V9.54004H9.7334V10.4863H6.89453V5.94043ZM0.4375 6.88672H1.38379V17.8896H0.4375V6.88672ZM9.7334 8.59375H10.4941V9.54004H9.7334V8.59375ZM16.9512 9.54004H17.8975V12.3789H16.0049V14.0859H15.2441V15.0508H14.2979V15.9971H12.3867V16.9434H10.4941V17.8896H7.84082V20.543H6.89453V16.9434H5.94824V15.9971H7.84082V15.0508H10.4941V14.0859H12.3867V13.1396H14.2979V12.3789H15.2441V11.4326H16.0049V10.4863H16.9512V9.54004ZM1.38379 17.8896H2.33008V24.1611H1.38379V17.8896ZM7.84082 20.543H8.78711V22.4541H9.7334V24.1611H8.78711V25.1074H7.84082V26.0537H4.9834V27H2.33008V24.1611H6.89453V23.4004H7.84082V20.543ZM21.7754 0.429688H29.5684V1.13477H21.7754V0.429688ZM20.8848 1.13477H21.7754V4.67871H20.8848V1.13477ZM29.5684 1.13477H30.2734V15.8486H29.5684V1.13477ZM21.7754 4.67871H22.6475V9.81836H21.7754V4.67871ZM22.6475 9.81836H23.5381V18.502H22.6475V9.81836ZM30.2734 15.8486H31.1641V16.7207H32.9268V17.6113H30.2734V15.8486ZM32.9268 15.8486H38.957V16.7207H32.9268V15.8486ZM38.957 16.7207H39.8291V20.0977H38.957V16.7207ZM29.5684 17.6113H30.2734V18.502H29.5684V17.6113ZM23.5381 18.502H24.2432V25.2373H23.5381V18.502ZM39.8291 20.0977H40.7197V21.8604H39.8291V20.0977ZM38.0664 21.8604H39.8291V23.6416H37.1758V24.3467H35.4131V25.2373H32.9268V26.1094H29.5684V27H25.1338V26.1094H24.2432V25.2373H26.915V24.3467H31.1641V23.6416H34.708V22.751H38.0664V21.8604ZM50.0527 0.429688H58.7363V2.19238H57.8457V1.32031H50.0527V0.429688ZM48.457 1.32031H50.0527V2.19238H48.457V1.32031ZM47.585 2.19238H48.457V6.44141H47.585V2.19238ZM58.7363 2.19238H59.6084V3.97363H58.7363V2.19238ZM52.7061 3.97363H54.4873V4.8457H55.1924V5.56934H56.083V6.44141H56.9551V9.09473H50.9434V5.56934H51.834V4.8457H52.7061V3.97363ZM59.6084 3.97363H60.332V11.5811H59.6084V3.97363ZM52.7061 6.44141V7.33203H51.834V8.22266H56.083V7.33203H55.1924V6.44141H52.7061ZM46.6943 6.44141H47.585V12.4717H46.6943V6.44141ZM60.332 11.5811H61.2041V15.8301H60.332V11.5811ZM45.8037 12.4717H46.6943V17.5928H45.8037V12.4717ZM52.7061 15.125H56.9551V16.7207H55.1924V17.5928H50.9434V21.8418H50.0527V16.7207H50.9434V15.8301H52.7061V15.125ZM61.2041 15.8301H62.0947V18.4834H61.2041V15.8301ZM56.9551 16.7207H57.8457V19.374H56.9551V16.7207ZM44.9316 17.5928H45.8037V20.2461H44.9316V17.5928ZM62.0947 18.4834H62.9854V20.2461H62.0947V18.4834ZM57.8457 19.374H58.7363V21.8418H59.6084V24.4951H58.7363V22.7324H57.8457V19.374ZM44.208 20.2461H44.9316V20.9697H44.208V20.2461ZM62.9854 20.2461H63.8574V23.623H62.9854V20.2461ZM43.3359 20.9697H44.208V23.623H43.3359V20.9697ZM49.3477 21.8418H50.0527V24.4951H49.3477V21.8418ZM42.4453 23.623H43.3359V25.3857H48.457V24.4951H49.3477V26.0908H48.457V26.9814H43.3359V26.0908H42.4453V23.623ZM63.8574 23.623H64.748V25.3857H65.4531V26.9814H59.6084V24.4951H60.332V25.3857H63.8574V23.623ZM76.8457 0.429688H86.2344V1.32031H76.8457V0.429688ZM72.5967 1.32031H76.8457V2.21094H72.5967V1.32031ZM86.2344 1.32031H87.1064V4.67871H86.2344V1.32031ZM69.9248 2.21094H72.5967V3.08301H69.9248V2.21094ZM67.457 3.08301H69.9248V3.80664H68.3291V4.67871H67.457V3.08301ZM66.5664 4.67871H67.457V9.81836H69.9248V8.92773H74.3594V24.3467H81.9668V25.2373H81.0947V26.1094H80.2041V27H74.3594V26.1094H73.4688V10.709H70.8154V11.5996H67.457V10.709H66.5664V4.67871ZM87.1064 4.67871H87.9971V8.22266H87.1064V4.67871ZM82.8574 8.22266H87.1064V9.81836H84.6387V10.709H81.0947V15.8486H80.2041V10.709H79.499V8.92773H82.8574V8.22266ZM81.0947 15.8486H81.9668V22.751H81.0947V15.8486ZM81.9668 22.751H82.8574V24.3467H81.9668V22.751ZM91.6338 0.429688H102.562V1.37598H103.509V2.30371H100.688V1.37598H91.6338V0.429688ZM90.7061 1.37598H91.6338V4.95703H90.7061V1.37598ZM103.509 2.30371H104.455V5.88477H103.509V2.30371ZM89.7598 4.95703H90.7061V6.83105H94.2871V9.65137H92.3945V8.72363H90.7061V7.77734H89.7598V4.95703ZM99.7422 5.88477H103.509V7.77734H102.562V8.72363H100.688V20.5801H99.7422V7.77734H98.7959V6.83105H99.7422V5.88477ZM94.2871 9.65137H95.2148V18.6875H94.2871V9.65137ZM95.2148 18.6875H96.1611V21.5264H95.2148V18.6875ZM100.688 20.5801H103.509V21.5264H100.688V20.5801ZM91.6338 21.5264H95.2148V22.2686H91.6338V21.5264ZM103.509 21.5264H104.455V26.0352H103.509V26.9814H91.6338V26.0352H90.7061V22.2686H91.6338V25.1074H103.509V21.5264ZM109.298 0.429688H115.755V2.32227H114.809V1.37598H109.298V0.429688ZM120.301 0.429688H124.847V1.37598H120.301V0.429688ZM108.352 1.37598H109.298V2.32227H108.352V1.37598ZM119.354 1.37598H120.301V9.54004H121.247V11.4326H120.301V10.4863H119.354V9.54004H118.408V6.88672H119.354V1.37598ZM124.847 1.37598H125.812V14.2715H124.847V1.37598ZM107.405 2.32227H108.352V15.0322H107.405V2.32227ZM115.755 2.32227H116.701V3.26855H115.755V2.32227ZM116.701 3.26855H117.462V4.97559H116.701V3.26855ZM117.462 4.97559H118.408V6.88672H117.462V4.97559ZM113.862 12.3789H114.809V15.0322H115.755V16.9248H116.701V19.7822H117.462V22.4355H118.408V24.3281H119.354V25.2744H126.758V26.9814H118.408V25.2744H117.462V24.3281H116.701V22.4355H115.755V20.5244H114.809V24.3281H113.862V12.3789ZM125.812 14.2715H126.758V21.4893H125.812V14.2715ZM106.459 15.0322H107.405V25.2744H106.459V15.0322ZM126.758 21.4893H127.704V25.2744H126.758V21.4893ZM110.244 24.3281H113.862V26.0352H111.209V26.9814H107.405V25.2744H110.244V24.3281ZM131.359 0.429688H136.87V1.19043H131.359V0.429688ZM144.273 0.429688H147.112V1.19043H144.273V0.429688ZM130.413 1.19043H131.359V4.97559H130.413V1.19043ZM136.87 1.19043H137.816V9.54004H136.87V1.19043ZM143.327 1.19043H144.273V4.0293H143.327V1.19043ZM147.112 1.19043H147.873V2.13672H147.112V1.19043ZM147.873 2.13672H148.819V4.97559H147.873V2.13672ZM144.273 4.0293H145.22V10.4863H144.273V4.0293ZM129.467 4.97559H130.413V13.1396H129.467V4.97559ZM148.819 4.97559H149.766V9.54004H148.819V4.97559ZM137.816 9.54004H138.763V10.4863H137.816V9.54004ZM149.766 9.54004H150.73V14.0859H149.766V9.54004ZM138.763 10.4863H140.655V11.4326H138.763V10.4863ZM143.327 10.4863H144.273V11.4326H143.327V10.4863ZM140.655 11.4326H141.62V12.3789H140.655V11.4326ZM142.381 11.4326H143.327V12.3789H142.381V11.4326ZM141.62 12.3789H142.381V13.1396H141.62V12.3789ZM130.413 13.1396H131.359V18.8359H132.306V21.4893H133.271V22.4541H134.217V24.3467H135.924V25.293H140.655V24.3467H142.381V23.4004H143.327V22.4541H145.22V21.4893H146.166V20.543H147.112V19.5967H147.873V18.8359H148.819V14.0859H149.766V19.5967H148.819V20.543H147.873V22.4541H147.112V23.4004H146.166V24.3467H145.22V25.293H144.273V26.0537H143.327V27H135.163V26.0537H134.217V25.293H133.271V24.3467H132.306V23.4004H131.359V19.5967H130.413V13.1396ZM155.221 0.429688H161.437V2.32227H160.509V1.37598H155.221V0.429688ZM154.274 1.37598H155.221V11.1729H154.274V1.37598ZM164.09 1.37598H171.048V2.32227H164.09V1.37598ZM161.437 2.32227H162.197V4.95703H161.437V2.32227ZM163.144 2.32227H164.09V7.5918H162.197V4.95703H163.144V2.32227ZM171.048 2.32227H171.994V6.64551H171.048V2.32227ZM171.994 6.64551H172.94V11.1729H171.994V6.64551ZM153.347 11.1729H154.274V19.0771H153.347V11.1729ZM159.562 11.1729H160.509V12.8613H161.437V16.4424H162.197V18.1494H163.144V20.0234H164.09V19.0771H164.832V16.4424H165.778V14.5684H166.725V11.1729H167.467V16.4424H168.413V24.3652H171.048V23.4189H175.575V25.3115H174.629V26.0537H171.048V27H169.359V26.0537H167.467V23.4189H166.725V20.0234H165.778V21.7305H164.09V22.6582H162.197V20.7842H161.437V19.0771H160.509V20.7842H159.562V25.3115H158.802V27H155.981V26.0537H153.347V25.3115H152.586V19.0771H153.347V24.3652H155.981V25.3115H157.855V23.4189H158.802V13.8076H159.562V11.1729ZM172.94 11.1729H173.683V14.5684H172.94V11.1729ZM173.683 14.5684H174.629V18.1494H173.683V14.5684ZM174.629 18.1494H175.575V20.7842H174.629V18.1494ZM175.575 20.7842H176.336V23.4189H175.575V20.7842Z'
							fill='black'
						/>
					</svg>
				</Link>

				<Button
					fullHeight
					square
					routerLink={'/settings'}
					className={cn(styles.settingsButton, styles.disabled)}
				>
					<svg
						width='33'
						height='33'
						viewBox='0 0 33 33'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M16.4848 22.209C13.3319 22.209 10.7731 19.6501 10.7731 16.4973C10.7731 13.3444 13.3319 10.7855 16.4848 10.7855C19.6377 10.7855 22.1966 13.3444 22.1966 16.4973C22.1966 19.6501 19.6377 22.209 16.4848 22.209ZM16.4848 13.0702C14.5961 13.0702 13.0578 14.6086 13.0578 16.4973C13.0578 18.3859 14.5961 19.9243 16.4848 19.9243C18.3735 19.9243 19.9119 18.3859 19.9119 16.4973C19.9119 14.6086 18.3735 13.0702 16.4848 13.0702Z'
							fill='#646464'
						/>
						<path
							d='M21.374 32.0178C21.0541 32.0178 20.7343 31.9721 20.4144 31.8959C19.4701 31.637 18.678 31.043 18.1754 30.2052L17.9926 29.9006C17.094 28.347 15.8603 28.347 14.9616 29.9006L14.7941 30.19C14.2914 31.043 13.4994 31.6522 12.5551 31.8959C11.5955 32.1549 10.6055 32.0178 9.76773 31.5151L7.14795 30.0072C6.21884 29.4741 5.54866 28.606 5.25927 27.555C4.9851 26.504 5.12218 25.4226 5.65528 24.4935C6.09699 23.7167 6.21884 23.0161 5.95991 22.5744C5.70097 22.1327 5.04603 21.8737 4.14738 21.8737C1.92361 21.8737 0.111084 20.0612 0.111084 17.8374V15.1567C0.111084 12.9329 1.92361 11.1204 4.14738 11.1204C5.04603 11.1204 5.70097 10.8615 5.95991 10.4198C6.21884 9.97807 6.11222 9.27743 5.65528 8.50063C5.12218 7.57152 4.9851 6.47487 5.25927 5.43914C5.53343 4.38818 6.20361 3.51999 7.14795 2.9869L9.78296 1.479C11.5041 0.4585 13.7736 1.05252 14.8093 2.80412L14.9921 3.10875C15.8907 4.66234 17.1245 4.66234 18.0231 3.10875L18.1906 2.81935C19.2264 1.05252 21.4958 0.4585 23.2322 1.49423L25.852 3.00213C26.7811 3.53522 27.4513 4.40341 27.7407 5.45437C28.0148 6.50533 27.8778 7.58675 27.3447 8.51586C26.903 9.29266 26.7811 9.9933 27.04 10.435C27.299 10.8767 27.9539 11.1356 28.8526 11.1356C31.0763 11.1356 32.8889 12.9482 32.8889 15.1719V17.8527C32.8889 20.0764 31.0763 21.889 28.8526 21.889C27.9539 21.889 27.299 22.1479 27.04 22.5896C26.7811 23.0313 26.8877 23.7319 27.3447 24.5087C27.8778 25.4378 28.0301 26.5345 27.7407 27.5702C27.4665 28.6212 26.7963 29.4894 25.852 30.0225L23.217 31.5304C22.6382 31.8502 22.0137 32.0178 21.374 32.0178ZM16.4847 26.3822C17.8403 26.3822 19.1045 27.2351 19.9727 28.743L20.1403 29.0324C20.323 29.3523 20.6277 29.5808 20.9932 29.6721C21.3588 29.7635 21.7243 29.7178 22.0289 29.5351L24.664 28.0119C25.06 27.7835 25.3646 27.4027 25.4864 26.9457C25.6083 26.4888 25.5474 26.0166 25.3189 25.6206C24.4507 24.128 24.3441 22.5896 25.0143 21.4168C25.6845 20.244 27.0705 19.5738 28.8069 19.5738C29.7817 19.5738 30.5585 18.797 30.5585 17.8222V15.1415C30.5585 14.1819 29.7817 13.3899 28.8069 13.3899C27.0705 13.3899 25.6845 12.7197 25.0143 11.5469C24.3441 10.3741 24.4507 8.83572 25.3189 7.34305C25.5474 6.94704 25.6083 6.47487 25.4864 6.01793C25.3646 5.56099 25.0752 5.19544 24.6792 4.95174L22.0442 3.44384C21.3892 3.04782 20.521 3.27629 20.125 3.94647L19.9575 4.23586C19.0893 5.74376 17.8251 6.59672 16.4695 6.59672C15.1139 6.59672 13.8497 5.74376 12.9815 4.23586L12.814 3.93124C12.4332 3.29152 11.5803 3.06305 10.9253 3.44384L8.2903 4.96697C7.89428 5.19544 7.58966 5.57622 7.46781 6.03316C7.34596 6.4901 7.40688 6.96227 7.63535 7.35828C8.50354 8.85095 8.61015 10.3893 7.93998 11.5621C7.2698 12.7349 5.88375 13.4051 4.14738 13.4051C3.17258 13.4051 2.39578 14.1819 2.39578 15.1567V17.8374C2.39578 18.797 3.17258 19.589 4.14738 19.589C5.88375 19.589 7.2698 20.2592 7.93998 21.432C8.61015 22.6048 8.50354 24.1432 7.63535 25.6359C7.40688 26.0319 7.34596 26.504 7.46781 26.961C7.58966 27.4179 7.87905 27.7835 8.27507 28.0272L10.9101 29.5351C11.2299 29.7331 11.6107 29.7788 11.961 29.6874C12.3266 29.596 12.6312 29.3523 12.8292 29.0324L12.9968 28.743C13.865 27.2504 15.1292 26.3822 16.4847 26.3822Z'
							fill='#646464'
						/>
					</svg>
				</Button>
			</section>

			{taskbar !== false && (
				<TaskBar
					rightControl={(defaultTaskbarOptions as TaskBarProps).rightControl}
				/>
			)}
		</UiContainer.Header>
	);
};

export default Header;
