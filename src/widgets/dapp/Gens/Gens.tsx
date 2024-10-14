import React, { useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import styles from './Gens.module.scss'
import { useUnit } from "effector-react"
import { dappModel } from "@/entities/dapp"

export const Gens = () => {
    const [gen, setGen] = useUnit([
        dappModel.listModule.$gen,
        dappModel.listModule.genSelected
    ])

    const slidesPerView = useMemo(() => {
        if (window.innerWidth >= 769) {
            return 6
        }

        return 3
    }, [])

    return (
        <Swiper
            className={styles.root}
            slidesPerView={slidesPerView}
            loop={window.innerWidth < 769}
        >
            {Array(6).fill(0).map((_, id) => (
                <SwiperSlide className={styles['tab-slide']}>
                    <Tab 
                        id={id}
                        isActive={gen === id}
                        onClick={setGen}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

type TabProps = {
    id: number
    isActive: boolean
    onClick: (id: number) => void
}

const Tab: React.FC<TabProps> = ({
    id,
    isActive,
    onClick
}) => (
    <button
        className={`${styles.tab} ${isActive ? styles['is-active'] : ''}`.trim()}
        onClick={() => onClick(id)}
    >
        {`GEN#${id}`}
    </button>
)