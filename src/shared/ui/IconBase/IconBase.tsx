import React from 'react';
import { icons } from '@/shared/assets/icons';

export type IconBaseProps = {
	className?: string
	type: keyof typeof icons
}

export const IconBase = React.memo<IconBaseProps>(({
	className,
	type
}) => (
	<img className={className} src={icons[type]} alt={type} />
))