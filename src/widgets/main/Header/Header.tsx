import { Link } from 'react-router-dom';
import React, {useState} from "react";
import {createPortal} from "react-dom";

import {ModalConnectWallet} from "@/features/ModalConnectWallet/ModalConnectWallet";
import {TokenSaleModal} from "@/features/TokenSaleModal";

import { WebpImage } from '@/shared/ui/WebpImage';
import { images } from '@/shared/lib/images';

import { Burger } from './ui'
import styles from './Header.module.scss'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isConnectWallet, setIsConnectWallet] = useState(false)
	const [isTokenSale, setIsTokenSale] = useState(false)

	return (
		<>
			<header className={styles.root}>
				<div className={`${styles.container} container`}>
					<WebpImage className={styles.logo} src={images.main.header.logo} alt={'Logo'}/>
					<div className={styles.info}>
						<div className={styles.links}>
							<a className={styles.link} onClick={() => setIsTokenSale(true)}>Token</a>
							<Link className={styles.link} to={'/'}>Mint</Link>
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
						<button className={styles.wallet} onClick={() => setIsConnectWallet(true)}>
							<WebpImage src={images.main.header.wallet} alt={'wallet'}/>
						</button>
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
						setIsTokenSale(true)
					}}
				/>
				<ModalConnectWallet
					isOpen={isConnectWallet}
					onClose={() => setIsConnectWallet(false)}
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
				<Link className={styles['dropdown-link']} to={'/'} onClick={onClose}>Mint</Link>
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