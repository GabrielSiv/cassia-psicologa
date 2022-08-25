import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import * as S from "./styles"
import type { HeaderLinksProps } from "./interfaces"
import Logo from "../Logo"
const DropDownMenu = React.lazy(() => import("../DropDownMenu"))

const Header = () => {
  const headerLinks: Array<HeaderLinksProps> = [
    { name: "INICIO", href: "/inicio" },
    { name: "SOBRE", href: "/sobre" },
    { name: "CONTATO", href: "/contato" },
    { name: "SERVIÇOS", href: "/servicos" },
  ]

  return (
    <>
      <S.HeaderWrapper
        data-sal="fade"
        data-sal-delay="50"
        data-sal-duration="400"
        data-sal-easing="ease-in-quad"
      >
        <S.HeaderLinks>
          {headerLinks.map((item: HeaderLinksProps, index: number) => {
            return (
              <React.Fragment key={index}>
                <S.HeaderLink
                  onClick={e => {
                    e.preventDefault()
                    scrollTo(`#${item.name}`)
                  }}
                >
                  {item.name}
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
            <Logo width="90px" height="60px" logoID={2}></Logo>
            <DropDownMenu></DropDownMenu>
          </S.HeaderLinkMobile>
        </S.HeaderMobileWrapper>
      </S.HeaderWrapper>
    </>
  )
}

export default Header
