import {images} from "@/shared/lib/images";

import styles from './Info.module.scss'

export const Info = () => {
    return (
        <section className={styles.root}>
            <video
                className={`${styles.video} lazy`}
                autoPlay={true}
                // @ts-ignore
                playsinline={true}
                loop={true}
                muted={true}
                poster={`${images.mint.info.preview}.png`}
                preload='none'
            >
                <source src={'/videos/gen0.mp4'} type={'video/mp4'}/>
            </video>
        </section>
    )
}