import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactHtmlParser from "react-html-parser"

import { IntroQueryProps } from "./interfaces"
import NavButton from "../../baseComponents/NavButton"

import * as S from "./styles"

const Intro = () => {
  const IntroQuery = useStaticQuery(graphql`
    query Intro {
      prismicHead {
        data {
          head_bg {
            url
          }
          titulo_principal {
            html
          }
          sub_titulo {
            html
          }
          texto_auxiliar {
            html
          }
        }
      }
    }
  `)

  const IntroContent: IntroQueryProps = IntroQuery.prismicHead

  return (
    <>
      <S.IntroWrapper
        data-sal="fade"
        data-sal-delay="50"
        data-sal-duration="400"
        data-sal-easing="ease-in-quad"
        href={IntroContent.data.head_bg.url}
        id="INICIO"
      >
        <S.IntroContent>
          {ReactHtmlParser(IntroContent.data.titulo_principal.html)}

          {ReactHtmlParser(IntroContent.data.sub_titulo.html)}

          <S.Separador />
          <S.IntroLastContentWrapper>
            {ReactHtmlParser(IntroContent.data.texto_auxiliar.html)}
            <NavButton content="AGENDAMENTO" link="#CONTATO"></NavButton>
          </S.IntroLastContentWrapper>
        </S.IntroContent>
      </S.IntroWrapper>
    </>
  )
}

export default Intro
