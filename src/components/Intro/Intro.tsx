import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

import { IntroQueryProps } from "./interfaces"

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
          sub_titulos {
            sub_titulo {
              text
            }
          }
        }
      }
    }
  `)

  const IntroContent: IntroQueryProps = IntroQuery.prismicHead

  return (
    <>
      <S.IntroWrapper
        href={IntroContent.data.head_bg.url}
        id="INICIO"
        data-sal="fade"
        data-sal-delay="50"
        data-sal-duration="400"
        data-sal-easing="ease-in-quad"
      >
        <S.IntroContent>
          <S.IntroMainTitle>
            {IntroContent.data.titulo_principal.text}
          </S.IntroMainTitle>
          <S.IntroSubtitle>
            {IntroContent.data.sub_titulos[0].sub_titulo.text}
          </S.IntroSubtitle>
          <S.Separador />
          <S.IntroLastContentWrapper>
            <S.IntroCRP>
              {IntroContent.data.sub_titulos[1].sub_titulo.text}
            </S.IntroCRP>
            <S.IntroNavButton
              href=""
              onClick={e => {
                e.preventDefault()
                scrollTo("#CONTATO")
              }}
            >
              AGENDAMENTO
            </S.IntroNavButton>
          </S.IntroLastContentWrapper>
        </S.IntroContent>
      </S.IntroWrapper>
    </>
  )
}

export default Intro
