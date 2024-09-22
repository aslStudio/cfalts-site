import React, { useMemo } from 'react';

import styles from './Button.module.scss'

export type ButtonProps = React.PropsWithChildren<{
	view?: 'brand' | 'purple' | 'pink'
	size?: 'l' | 'm' | 's'
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