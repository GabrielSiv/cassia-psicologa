import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import * as S from "./styles"
import type { HeaderLinksProps } from "./interfaces"
import Logo from "../Logo"
import DropDownMenu from "../DropDownMenu"

const Header = () => {
  const headerLinks: Array<HeaderLinksProps> = [
    { name: "INICIO", href: "/inicio" },
    { name: "SOBRE", href: "/sobre" },
    { name: "CONTATO", href: "/contato" },
    { name: "SERVIÇOS", href: "/servicos" },
  ]

  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderLinks>
          {headerLinks.map((item: HeaderLinksProps, index: number) => {
            return (
              <React.Fragment key={index}>
                <S.HeaderLink>
                  <a
                    href={`${item.href}`}
                    onClick={e => {
                      e.preventDefault()
                      scrollTo(`#${item.name}`)
                    }}
                  >
                    {item.name}
                  </a>
                </S.HeaderLink>
                {index < headerLinks.length - 1 ? (
                  <span style={{ color: "white" }}>|</span>
                ) : null}
              </React.Fragment>
            )
          })}
        </S.HeaderLinks>
        <S.HeaderMobileWrapper>
          <S.HeaderLinkMobile>
            <Logo width="57px" height="25px"></Logo>
            <DropDownMenu></DropDownMenu>
          </S.HeaderLinkMobile>
        </S.HeaderMobileWrapper>
      </S.HeaderWrapper>
    </>
  )
}

export default Header
