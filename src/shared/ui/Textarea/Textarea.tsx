import React from 'react';

import styles from './Textarea.module.scss'

export type TextareaProps = {
	value: string
	disabled?: boolean
	className?: string
	placeholder: string
	onInput: (v: string) => void
}

export const Textarea = React.memo<TextareaProps>(({
	value,
	placeholder,
	disabled,
	className = '',
	onInput,
}) => {
	return (
		<textarea 
			className={`${styles.root} ${className}`} 
			value={value}
			placeholder={placeholder} 
			disabled={disabled}
			onChange={e => onInput(e.target.value)}
		/>
	)
})