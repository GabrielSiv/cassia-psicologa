import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
  console.log(IntroContent.data.sub_titulos[1].sub_titulo.text)

  return (
    <>
      <S.IntroWrapper>
        <S.IntroContent href={IntroContent.data.head_bg.url}>
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
            <S.IntroNavButton href="/">AGENDAMENTO</S.IntroNavButton>
          </S.IntroLastContentWrapper>
        </S.IntroContent>
      </S.IntroWrapper>
    </>
  )
}

export default Intro
