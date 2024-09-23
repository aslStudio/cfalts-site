import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';

import styles from './Form.module.scss'
import { useMemo } from 'react';
import { Button } from '@/shared/ui/Button';

export const Form = () => {
	const formClasses = useMemo(() => [
		styles['form-wrapper'],
		window.innerWidth >= 1300 ? '' : 'container'
	].join(' '), [])

	return (
		<section className={styles.root}>
			<div className={'container'}>
				<h3 className={styles.title}>CONTACT US</h3>
				<p className={styles.description}>We always stay in touch and open to suggestions</p>
			</div>
			<div className={formClasses}>
				<div className={styles.form}>
					<div className={styles.inputs}>
						<Input className={styles.input} placeholder={'E-mail*'} />
						<Input className={styles.input} placeholder={'Topic*'} />
					</div>
					<Textarea className={styles.textarea} placeholder={'Message...'} />
				</div>
				<Button
					className={styles.button}
					view={'purple'}
					size={'s'}
					onClick={() => {
					}}
				>
					Send message
				</Button>
			</div>
		</section>
	)
}