import { useEffect, useMemo, useRef, useState } from 'react';

function isAnyElementInViewport(el: HTMLElement): boolean {
	if (el) {
		const rect = el.getBoundingClientRect()
		const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
		const windowWidth = (window.innerWidth || document.documentElement.clientWidth)

		const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
		const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)

		return (vertInView && horInView)
	}

	return false
}

export const useScrollAnimation = () => {
	const ref = useRef<HTMLDivElement | null>(null)
	const [isShowed, setIsShowed] = useState(false)

	const classes = useMemo(() => [
		'is-section-not-animated',
		isShowed ? 'is-section-animated' : ''
	].join(' '), [isShowed])

	function onScroll() {
		console.log(ref.current)
		if (ref.current && isAnyElementInViewport(ref.current)) {
			setIsShowed(true)
		}
	}

	useEffect(() => {
		document.body.addEventListener('scroll', onScroll)

		return () => {
			document.body.removeEventListener('scroll', onScroll)
		}
	}, []);

	return {
		ref,
		isShowed,
		classes,
	}
}