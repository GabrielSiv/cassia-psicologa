import React from "react"
import * as S from "./styles"
import type { HeaderLinksProps } from "./interfaces"

const Header = () => {
  const headerLinks: Array<HeaderLinksProps> = [
    { name: "INICIO", href: "/inicio" },
    { name: "SOBRE", href: "/sobre" },
    { name: "CONTATO", href: "/contato" },
    { name: "SERVIÇOS", href: "/servicos" },
  ]

  headerLinks.forEach((item: HeaderLinksProps, index: number) => {
    console.log(item.name)
  })
  return (
    <>
      <S.headerWrapper>
        <S.headerLinks>
          {headerLinks.map((item: HeaderLinksProps, index: number) => {
            return (
              <React.Fragment key={index}>
                <S.headerLink>
                  <a href={`${item.href}`}>{item.name}</a>
                </S.headerLink>
                {index < headerLinks.length - 1 ? (
                  <span style={{ color: "white" }}>|</span>
                ) : null}
              </React.Fragment>
            )
          })}
        </S.headerLinks>
      </S.headerWrapper>
    </>
  )
}

export default Header
