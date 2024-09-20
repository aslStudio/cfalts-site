import { Link } from 'react-router-dom';

import { images } from '@/shared/assets/images';

import { Burger } from './ui'
import styles from './Header.module.scss'
import React, {useState} from "react";
import {createPortal} from "react-dom";
import {ModalConnectWallet} from "@/features/ModalConnectWallet/ModalConnectWallet";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isConnectWallet, setIsConnectWallet] = useState(false)

	return (
		<>
			<header className={styles.root}>
				<div className={`${styles.container} container`}>
					<img className={styles.logo} src={images.Main.Header.Logo} alt={'Logo'}/>
					<div className={styles.info}>
						<div className={styles.links}>
							<Link className={styles.link} to={'/'}>Token</Link>
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
								<img src={images.Main.Header.Telegram} alt={'telegram'}/>
							</a>
							<a className={styles.social} href={'https://x.com/cflatsproject'} target={'_blank'} rel={'noreferrer noopener'}>
								<img src={images.Main.Header.X} alt={'x'}/>
							</a>
							<a className={styles.social} href={'https://discord.gg/cflats'} target={'_blank'} rel={'noreferrer noopener'}>
								<img src={images.Main.Header.Discord} alt={'discord'}/>
							</a>
						</div>
						<button className={styles.wallet} onClick={() => setIsConnectWallet(true)}>
							<img src={images.Main.Header.Wallet} alt={'wallet'}/>
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
				/>
				<ModalConnectWallet
					isOpen={isConnectWallet}
					onClose={() => setIsConnectWallet(false)}
				/>
			</header>
		</>
	)
}

type DropdownProps = {
	isOpen: boolean
	onClose: () => void
}

const Dropdown = React.memo<DropdownProps>(({ isOpen, onClose }) => {
	return createPortal(
		<div className={`${styles.dropdown} ${isOpen ? styles['is-active'] : ''}`}>
			<div className={styles['dropdown-links']}>
				<Link className={styles['dropdown-link']} to={'/'} onClick={onClose}>Token</Link>
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
					<img src={images.Main.Header.Telegram} alt={'telegram'}/>
				</a>
				<a
					className={styles.social}
					href={'https://x.com/cflatsproject'}
					target={'_blank'}
					rel={'noreferrer noopener'}
					onClick={onClose}
				>
					<img src={images.Main.Header.X} alt={'x'}/>
				</a>
				<a
					className={styles.social}
					href={'https://discord.gg/cflats'}
					target={'_blank'}
					rel={'noreferrer noopener'}
					onClick={onClose}
				>
					<img src={images.Main.Header.Discord} alt={'discord'}/>
				</a>
			</div>
		</div>,
		document.querySelector('#root')!
	)
})