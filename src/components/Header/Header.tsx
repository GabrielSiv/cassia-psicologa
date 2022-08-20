import React from "react"
import * as S from "./styles"
import type { HeaderLinksProps } from "./interfaces"
import Logo from "../Logo"

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
                  <a href={`${item.href}`}>{item.name}</a>
                </S.HeaderLink>
                {index < headerLinks.length - 1 ? (
                  <span style={{ color: "white" }}>|</span>
                ) : null}
              </React.Fragment>
            )
          })}
        </S.HeaderLinks>
        <S.HeaderLinkMobile>
          <Logo width="57px" height="25px"></Logo>
        </S.HeaderLinkMobile>
      </S.HeaderWrapper>
    </>
  )
}

export default Header
