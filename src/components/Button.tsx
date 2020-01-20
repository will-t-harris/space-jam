import React from 'react'

interface ButtonProps {
	
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
	return (
		<button>Button Component</button>
	)
	}

export default Button;