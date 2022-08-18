import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AboutMeQueryProps, TrabalhosNotoriosProps } from "./interfaces"

import * as S from "./styles"

const AboutMe = () => {
  const AboutMeQuery = useStaticQuery(graphql`
    query About {
      prismicSobreMim {
        data {
          sobre_mim_foto {
            url
          }
          titulo {
            text
          }
          sub_titulo {
            text
          }
          sobre_mim {
            text
          }
          trabalhos_notorios {
            trabalhos_notorios_titulo {
              text
            }
            trabalhos_notorios_descricao {
              text
            }
          }
        }
      }
    }
  `)
  const AboutMeContent: AboutMeQueryProps = AboutMeQuery.prismicSobreMim
  const TrabalhosNotorios: Array<TrabalhosNotoriosProps> =
    AboutMeQuery.prismicSobreMim.data.trabalhos_notorios

  return (
    <>
      <S.AboutMeWrapper>
        <S.AboutMeContentWrapper>
          <S.AboutMeTextWrapper>
            <S.AboutMeTitle>{AboutMeContent.data.titulo.text}</S.AboutMeTitle>
            <S.AboutMeSubTitle>
              {AboutMeContent.data.sub_titulo.text}
            </S.AboutMeSubTitle>
            <S.AboutMeParagraph>
              {AboutMeContent.data.sobre_mim.text}
            </S.AboutMeParagraph>
            <S.AboutMeNotoriousWrapper>
              {TrabalhosNotorios.map((item: TrabalhosNotoriosProps) => {
                return (
                  <S.AboutMeNotoriousItem>
                    <S.AboutMeNotoriousTitle>
                      {item.trabalhos_notorios_titulo.text}
                    </S.AboutMeNotoriousTitle>
                    <S.AboutMeNotoriousParagraph>
                      {item.trabalhos_notorios_descricao.text}
                    </S.AboutMeNotoriousParagraph>
                  </S.AboutMeNotoriousItem>
                )
              })}
            </S.AboutMeNotoriousWrapper>
          </S.AboutMeTextWrapper>
          <S.AboutMeImageWrapper>
            <S.AboutMeImage src={`${AboutMeContent.data.sobre_mim_foto.url}`} />
          </S.AboutMeImageWrapper>
        </S.AboutMeContentWrapper>
      </S.AboutMeWrapper>
    </>
  )
}
export default AboutMe
