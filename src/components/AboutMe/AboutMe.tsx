import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AboutMeQueryProps, TrabalhosNotoriosProps } from "./interfaces"
import * as S from "./styles"

import useIsMobile from "../../utils/useIsMobile"

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
  const aboutMeContent: AboutMeQueryProps = AboutMeQuery.prismicSobreMim
  const trabalhosNotorios: Array<TrabalhosNotoriosProps> =
    AboutMeQuery.prismicSobreMim.data.trabalhos_notorios

  const isMobile = useIsMobile()

  return isMobile.widthBool ? (
    <>
      <S.AboutMeWrapper>
        <S.AboutMeContentWrapper>
          <S.AboutMeTextWrapper>
            <S.AboutMeTitle>{aboutMeContent.data.titulo.text}</S.AboutMeTitle>
            <S.AboutMeSubTitle>
              {aboutMeContent.data.sub_titulo.text}
            </S.AboutMeSubTitle>
            <S.AboutMeParagraph>
              {aboutMeContent.data.sobre_mim.text}
            </S.AboutMeParagraph>
            <S.AboutMeNotoriousWrapper>
              {trabalhosNotorios.map(
                (item: TrabalhosNotoriosProps, index: number) => {
                  return (
                    <S.AboutMeNotoriousItem key={index}>
                      <S.AboutMeNotoriousTitle>
                        {item.trabalhos_notorios_titulo.text}
                      </S.AboutMeNotoriousTitle>
                      <S.AboutMeNotoriousParagraph>
                        {item.trabalhos_notorios_descricao.text}
                      </S.AboutMeNotoriousParagraph>
                    </S.AboutMeNotoriousItem>
                  )
                }
              )}
            </S.AboutMeNotoriousWrapper>
          </S.AboutMeTextWrapper>
          <S.AboutMeImageWrapper>
            <S.AboutMeImage src={`${aboutMeContent.data.sobre_mim_foto.url}`} />
          </S.AboutMeImageWrapper>
        </S.AboutMeContentWrapper>
      </S.AboutMeWrapper>
    </>
  ) : (
    <>
      <S.AboutMeWrapper>
        <S.AboutMeFirst>
          <S.AboutMeImageWrapperMob>
            <S.AboutMeImageMob
              src={`${aboutMeContent.data.sobre_mim_foto.url}`}
            ></S.AboutMeImageMob>
          </S.AboutMeImageWrapperMob>
          <S.AboutMeFirstTextWrapper>
            <S.AboutMeTitle>{aboutMeContent.data.titulo.text}</S.AboutMeTitle>
            <S.AboutMeSubTitle>
              {aboutMeContent.data.sub_titulo.text}
            </S.AboutMeSubTitle>
          </S.AboutMeFirstTextWrapper>
        </S.AboutMeFirst>
        <S.AboutMeParagraph>
          {aboutMeContent.data.sobre_mim.text}
        </S.AboutMeParagraph>
        <S.AboutMeNotoriousWrapper>
          {trabalhosNotorios.map(
            (item: TrabalhosNotoriosProps, index: number) => {
              return (
                <S.AboutMeNotoriousItem key={index}>
                  <S.AboutMeNotoriousTitle>
                    {item.trabalhos_notorios_titulo.text}
                  </S.AboutMeNotoriousTitle>
                  <S.AboutMeNotoriousParagraph>
                    {item.trabalhos_notorios_descricao.text}
                  </S.AboutMeNotoriousParagraph>
                </S.AboutMeNotoriousItem>
              )
            }
          )}
        </S.AboutMeNotoriousWrapper>
      </S.AboutMeWrapper>
    </>
  )
}
export default AboutMe
