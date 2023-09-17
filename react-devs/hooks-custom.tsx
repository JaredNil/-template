// https://reactdev.ru/types/052/#usestate

import React from 'react'
import { useEffect, useState } from 'react'

// changeScrollHook

export const useScrollY = (): number | null => {
	const isBrowser = (typeof window === undefined)
	const [scrollY, setScrollY] = useState<number | null>(0)

	const handleScroll = () => {
		const currentScroolY = isBrowser ? window.scrollY : null
		setScrollY(currentScroolY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	return scrollY
}