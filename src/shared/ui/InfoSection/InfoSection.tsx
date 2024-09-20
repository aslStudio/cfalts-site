import React from "react";

import styles from './InfoSection.module.scss'

export type InfoSectionProps = {
    sectionRef?: React.MutableRefObject<HTMLDivElement | null>
    className?: string
    title: string
    description: string
    view: 'blue' | 'yellow' | 'lightBlue' | 'purple' | 'red' | 'darkBlue' | 'surface'
}

export const InfoSection = React.memo<InfoSectionProps>(({
    className,
    title,
    description,
    view,
    sectionRef,
}) => (
    <section ref={sectionRef} className={[styles[`view-${view}`], className ? className : ''].join(' ')}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
    </section>
))