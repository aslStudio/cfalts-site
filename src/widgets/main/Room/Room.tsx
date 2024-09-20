import { images } from '@/shared/assets/images';

import styles from './Room.module.scss'

const data = [
	{
		class: `${styles.gen1} ${styles.gen}`,
		image: images.Main.Room.Gen1,
		title: 'GEN#1',
		description: 'Living Room'
	},
	{
		class: `${styles.gen2} ${styles.gen}`,
		image: images.Main.Room.Gen2,
		title: 'GEN#2',
		description: 'Bedroom'
	},
	{
		class: `${styles.gen3} ${styles.gen}`,
		image: images.Main.Room.Gen3,
		title: 'GEN#3',
		description: 'Dining Room'
	},
	{
		class: `${styles.gen4} ${styles.gen}`,
		image: images.Main.Room.Gen4,
		title: 'GEN#4',
		description: 'Playroom'
	},
	{
		class: `${styles.gen5} ${styles.gen}`,
		image: images.Main.Room.Gen5,
		title: 'GEN#5',
		description: 'Secret room'
	},
]

export const Room = () => {
	return (
		<div className={'container'}>
			<div className={styles.root}>
				<img className={styles.room} src={images.Main.Room.Room} alt={'room'} />
				{data.map((item, key) => (
					<div className={item.class} key={key}>
						<img src={item.image} alt={`gen${key + 1}`} />
						<div className={styles.content}>
							<p className={styles.title}>{item.title}</p>
							<p className={styles.description}>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}