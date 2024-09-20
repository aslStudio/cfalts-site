import React from 'react';

import styles from './Textarea.module.scss'

export type TextareaProps = {
	className?: string
	placeholder: string
}

export const Textarea = React.memo<TextareaProps>(({
	placeholder,
	className = ''
}) => {
	return <textarea className={`${styles.root} ${className}`} placeholder={placeholder} />
})