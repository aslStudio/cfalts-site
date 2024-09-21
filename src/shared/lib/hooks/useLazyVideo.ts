import {useEffect} from "react";

export const useLazyVideo = () => {
    // function onDOMContentLoaded() {
    //     console.log('load 123')

    //     const videos = document.querySelectorAll('video.lazy')

    //     videos.forEach(item => {
    //         const video = item as HTMLVideoElement
    //         const sources = video.querySelectorAll('source')

    //         console.log(sources)

    //         sources.forEach(source => {
    //             console.log(source.getAttribute('data-src'))
    //             if (source.getAttribute('data-src')) {
    //                 source.src = source.getAttribute('data-src')!
    //             }
    //         })
    //         video.load()
    //         video.classList.remove('lazy')
    //     })
    // }

    // useEffect(() => {
    //     document.body.onload = () => {
    //         console.log('window.onload')
    //         onDOMContentLoaded()
    //     }
    //     document.addEventListener('DOMContentLoaded', () => {
    //         console.log('DOMContentLoaded')
    //     })
    //     document.addEventListener('loadeddata', () => {})

    //     return () => {
    //         console.log('removed')
    //         window.removeEventListener('load', onDOMContentLoaded)
    //     }
    // }, []);
}