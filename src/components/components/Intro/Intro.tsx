import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
            text
          }
          sub_titulo {
            text
          }
          texto_auxiliar {
            text
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
          <S.IntroMainTitle>
            {IntroContent.data.titulo_principal.text}
          </S.IntroMainTitle>
          <S.IntroSubtitle>{IntroContent.data.sub_titulo.text}</S.IntroSubtitle>
          <S.Separador />
          <S.IntroLastContentWrapper>
            <S.IntroCRP>{IntroContent.data.texto_auxiliar.text}</S.IntroCRP>
            <NavButton content="AGENDAMENTO" link="#CONTATO"></NavButton>
          </S.IntroLastContentWrapper>
        </S.IntroContent>
      </S.IntroWrapper>
    </>
  )
}

export default Intro
