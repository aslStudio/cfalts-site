import React from 'react';

import styles from './Input.module.scss'

export type InputProps = {
	value: string
	className?: string
	disabled?: boolean
	placeholder?: string
	onInput: (v: string) => void
}

export const Input = React.memo<InputProps>(({
	value,
	placeholder,
	disabled,
	className = '',
	onInput
}) => {
	return (
		<input
			className={`${styles.root} ${className}`}
			value={value}
			disabled={disabled}
			placeholder={placeholder}
			onChange={e => onInput(e.target.value)}
		/>
	)
})