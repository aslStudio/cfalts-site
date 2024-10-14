import { IconBase } from '@/shared/ui/IconBase'

import styles from './Aside.module.scss'
import { WebpImage } from '@/shared/ui/WebpImage'
import { images } from '@/shared/lib/images'

export const Aside = () => {
    return (
        <div className={styles.root}>
            <div className={styles.balance}>
                <IconBase 
                    type={'icon-coin'}
                />
                <p>182,928,037</p>
            </div>
            <div className={styles.menu}>
                <button>CLAIM TOKENS</button>

                <button>SELECT STAKED</button>
                <button>SELECT UNSTAKED</button>
                <button>UNSELECT ALL</button>

                <button>STAKE</button>
                <button>UNSTAKE</button>

                <button>BUY PROTECTION</button>
            </div>
            <button className={styles.attach}>
                <WebpImage 
                    className={styles['attach-image']}
                    src={images.dapp.attach}
                    alt='attach'
                />
            </button>
        </div>
    )
}