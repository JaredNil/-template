import React from 'react'

// Пока всё в index.ts
// При мастабировании сюда



// Типизация стандартный кастомных элементов HTML
import { InputHTMLAttributes } from 'react'
interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
	isValid: boolean,
}
function Input(props: inputProps) {
	return (
		<input className={props.className}
		// Теперь в пропсах наследуются любые атрибуты от родного инпута
		/>
	)
}


