import {images} from "@/shared/lib/images";

import styles from './Info.module.scss'
import {useMemo} from "react";
import {useDeviceSize} from "@/shared/lib/hooks/useDeviceSize";

export const Info = () => {
    const { mobile, tablet } = useDeviceSize()

    const videoSource = useMemo(() => {
        if (mobile) {
            return '/videos/gen0-mobile.mp4'
        }
        if (tablet) {
            return '/videos/gen0-tablet.mp4'
        }

        return '/videos/gen0.mp4'
    }, [mobile, tablet])

    const preview = useMemo(() => {
        if (mobile) {
            return images.mint.info.previewMobile
        }
        if (tablet) {
            return images.mint.info.previewTablet
        }

        return images.mint.info.preview
    }, [mobile, tablet])

    return (
        <section className={styles.root}>
            <video
                className={`${styles.video} lazy`}
                autoPlay={true}
                playsInline={true}
                loop={true}
                muted={true}
                poster={`${preview}.png`}
                preload='none'
            >
                <source src={videoSource} type={'video/mp4'}/>
            </video>
        </section>
    )
}