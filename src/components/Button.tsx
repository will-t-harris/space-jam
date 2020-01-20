import React from "react"
import styled from "styled-components"
import colorVariables from "../shared/variables/_colors"

interface ButtonProps {
  theme: string
}

const StyledButton = styled.button`
  border: 4px solid ${colorVariables.darkOrange};
  border-radius: 8px;
`

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <>
      <StyledButton className="cursor-pointer hover:bg-orange-500 shadow-xl px-5 py-2 inline-block text-orange-100 hover:text-white rounded w-auto">
        Button Component
      </StyledButton>
      <StyledButton className="cursor-pointer hover:bg-orange-500 shadow-xl px-5 py-2 inline-block text-orange-100 hover:text-white rounded w-auto">
        Button Component
      </StyledButton>
    </>
  )
}

export default Button
