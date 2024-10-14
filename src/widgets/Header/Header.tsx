import { Link } from 'react-router-dom';
import React, {useMemo, useState} from "react";
import {createPortal} from "react-dom";

import {ModalConnectWallet} from "@/features/ModalConnectWallet/ModalConnectWallet";
import {TokenSaleModal} from "@/features/TokenSaleModal";

import { WebpImage } from '@/shared/ui/WebpImage';
import { images } from '@/shared/lib/images';

import { Burger } from './ui'
import styles from './Header.module.scss'
import { toast } from 'react-toastify';
import { useUnavailbleToken } from '@/shared/lib/hooks/useUnavailableToken';

const IS_TOKEN_AVAILABLE = false

export type HeaderProps = {
	type?: 'dapp' | 'main'
}

export const Header: React.FC<HeaderProps> = ({
	type = 'main'
}) => {
	const { trigger } = useUnavailbleToken()

	const [isOpen, setIsOpen] = useState(false)
	const [isConnectWallet, setIsConnectWallet] = useState(false)
	const [isTokenSale, setIsTokenSale] = useState(false)

	const [ isBackground, setIsBackground ] = useState(false)

	const logo = useMemo(() => {
		if (type === 'dapp') {
			return images.main.header['logo-dapp']
		}

		return images.main.header.logo
	}, [type])

	function onOpenWallet() {
		if (window.innerWidth < 769) {
			setIsBackground(true)
		}
		setIsConnectWallet(true)
	}

	return (
		<>
			<header className={`${styles.root} ${isBackground ? styles['is-background'] : ''}`}>
				<div className={`${styles.container} container ${type === 'dapp' ? styles['is-wide'] : ''}`}>
					<Link
						className={styles.logo}  
						to={'/'}
					>
						<WebpImage 
							src={logo} 
							alt={'Logo'}
						/>
					</Link>
					<div className={styles.info}>
						<div className={styles.links}>
							<Link className={styles.link} to={'/dapp'}>DApp</Link>
							<a className={styles.link} onClick={trigger}>Token</a>
							<Link className={styles.link} to={'/mint'}>Mint</Link>
							<a
								className={styles.link}
								href={'https://docs.cryptoflats.io/'}
								target={'_blank'}
								rel={'noreferrer noopener'}
							>
								Litepaper
							</a>
						</div>
						<div className={styles.socials}>
							<a className={styles.social} href={'https://t.me/cflats'} target={'_blank'} rel={'noreferrer noopener'}>
								<WebpImage src={images.main.header.telegram} alt={'telegram'}/>
							</a>
							<a className={styles.social} href={'https://x.com/cflatsproject'} target={'_blank'} rel={'noreferrer noopener'}>
								<WebpImage src={images.main.header.x} alt={'x'}/>
							</a>
							<a className={styles.social} href={'https://discord.gg/cflats'} target={'_blank'} rel={'noreferrer noopener'}>
								<WebpImage src={images.main.header.discord} alt={'discord'}/>
							</a>
						</div>
						{type === 'main' && (
							<button className={styles.wallet} onClick={trigger}>
								<WebpImage src={images.main.header.wallet} alt={'wallet'}/>
							</button>
						)}
						{type === 'dapp' && (
							<WebpImage 
								className={styles.avatar}
								src={images.main.header.avatar}
								alt='avatar'
							/>
						)}
						<Burger
							isOpen={isOpen}
							className={styles.burger}
							onClick={setIsOpen}
						/>
					</div>
				</div>
				<Dropdown
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					onToken={() => {
						setIsOpen(false)
						// setIsTokenSale(true)
						trigger()
					}}
				/>
				<ModalConnectWallet
					isOpen={isConnectWallet}
					onClose={() => {
						setIsBackground(false)
						setIsConnectWallet(false)
					}}
				/>
				<TokenSaleModal 
					isOpen={isTokenSale}
					onClose={() => setIsTokenSale(false)}
				/>
			</header>
		</>
	)
}

type DropdownProps = {
	isOpen: boolean
	onClose: () => void
	onToken: () => void
}

const Dropdown = React.memo<DropdownProps>(({ isOpen, onClose, onToken }) => {
	return createPortal(
		<div className={`${styles.dropdown} ${isOpen ? styles['is-active'] : ''}`}>
			<div className={styles['dropdown-links']}>
				<a className={styles['dropdown-link']} onClick={onToken}>Token</a>
				<Link className={styles['dropdown-link']} to={'/mint'} onClick={onClose}>Mint</Link>
				<Link className={styles['dropdown-link']} to={'/dapp'} onClick={onClose}>DApp</Link>
				<a
					className={styles['dropdown-link']}
					href={'https://docs.cryptoflats.io/'}
					target={'_blank'}
					rel={'noreferrer noopener'}
					onClick={onClose}
				>
					Litepaper
				</a>
			</div>
			<div className={styles['dropdown-socials']}>
				<a
					className={styles.social}
					href={'https://t.me/cflats'}
					target={'_blank'}
					rel={'noreferrer noopener'}
					onClick={onClose}
				>
					<WebpImage src={images.main.header.telegram} alt={'telegram'}/>
				</a>
				<a
					className={styles.social}
					href={'https://x.com/cflatsproject'}
					target={'_blank'}
					rel={'noreferrer noopener'}
					onClick={onClose}
				>
					<WebpImage src={images.main.header.x} alt={'x'}/>
				</a>
				<a
					className={styles.social}
					href={'https://discord.gg/cflats'}
					target={'_blank'}
					rel={'noreferrer noopener'}
					onClick={onClose}
				>
					<WebpImage src={images.main.header.discord} alt={'discord'}/>
				</a>
			</div>
		</div>,
		document.querySelector('#root')!
	)
})