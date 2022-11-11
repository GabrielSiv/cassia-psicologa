import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import * as S from "./styles"
import { ButtonProps } from "./interface"

const NavButton: React.FC<ButtonProps> = ({ content, link = "#" }) => {
  return (
    <S.IntroNavButton
      onClick={e => {
        e.preventDefault()
        scrollTo(link)
      }}
    >
      {content}
    </S.IntroNavButton>
  )
}

export default NavButton
