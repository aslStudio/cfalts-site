import React from 'react';

import styles from './Input.module.scss'

export type InputProps = {
	className?: string
	placeholder?: string
}

export const Input = React.memo<InputProps>(({
	placeholder,
	className = ''
}) => {
	return (
		<input
			className={`${styles.root} ${className}`}
			placeholder={placeholder}
		/>
	)
})