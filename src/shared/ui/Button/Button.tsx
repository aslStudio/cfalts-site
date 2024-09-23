import React, { useMemo } from 'react';

import styles from './Button.module.scss'

export type ButtonProps = React.PropsWithChildren<{
	view?: 'brand' | 'purple' | 'pink' | 'disabled'
	size?: 'l' | 'm' | 's'
	isShadow?: boolean
	className?: string
	onClick: () => void
}>

export const Button = React.memo<ButtonProps>(({
	view = 'brand',
	size = 'm',
	className,
	children,
	onClick
}) => {
	const classes = useMemo(() => [
		styles.root,
		styles[`size-${size}`],
		styles[`view-${view}`],
		className ? className : ''
	].join(' '), [size, view, className])

	return (
		<button
			className={classes}
			onClick={onClick}
		>
			{children}
		</button>
	)
})