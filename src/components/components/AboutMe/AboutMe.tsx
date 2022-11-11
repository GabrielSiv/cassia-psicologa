import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactHtmlParser from "react-html-parser"

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
          main_tittle {
            html
          }
          sub_tittle {
            html
          }
          sobre_mim {
            html
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

  return (
    <>
      <S.AboutMeWrapper
        id="SOBRE"
        data-sal="fade"
        data-sal-delay="50"
        data-sal-duration="400"
        data-sal-easing="ease-in-quad"
      >
        <S.AboutMeContentWrapper>
          <S.AboutMeTextWrapper>
            {ReactHtmlParser(aboutMeContent.data.main_tittle.html)}
            {ReactHtmlParser(aboutMeContent.data.sub_tittle.html)}
            {ReactHtmlParser(aboutMeContent.data.sobre_mim.html)}
            <S.AboutMeNotoriousWrapper>
              {trabalhosNotorios.map(
                (item: TrabalhosNotoriosProps, index: number) => {
                  return (
                    <S.AboutMeNotoriousItem key={index}>
                      <S.AboutMeNotoriousTitle>
                        {item.trabalhos_notorios_titulo.text}
                      </S.AboutMeNotoriousTitle>
                      <S.AboutMeNotoriousParagraph className="notorious">
                        {item.trabalhos_notorios_descricao.text}
                      </S.AboutMeNotoriousParagraph>
                    </S.AboutMeNotoriousItem>
                  )
                }
              )}
            </S.AboutMeNotoriousWrapper>
          </S.AboutMeTextWrapper>
          <S.AboutMeImageWrapper>
            <S.AboutMeImage
              src={`${aboutMeContent.data.sobre_mim_foto.url}`}
              alt={"CassiaLace"}
            />
          </S.AboutMeImageWrapper>
        </S.AboutMeContentWrapper>
        <S.AboutMeMobileWrapper>
          <S.AboutMeFirst>
            <S.AboutMeImageWrapperMob>
              <S.AboutMeImageMob
                src={`${aboutMeContent.data.sobre_mim_foto.url}`}
                alt={"CassiaLace"}
              ></S.AboutMeImageMob>
            </S.AboutMeImageWrapperMob>
            <S.AboutMeFirstTextWrapper>
              {ReactHtmlParser(aboutMeContent.data.main_tittle.html)}
              {ReactHtmlParser(aboutMeContent.data.sub_tittle.html)}
            </S.AboutMeFirstTextWrapper>
          </S.AboutMeFirst>
          {ReactHtmlParser(aboutMeContent.data.sobre_mim.html)}
          <S.AboutMeNotoriousWrapper>
            {trabalhosNotorios.map(
              (item: TrabalhosNotoriosProps, index: number) => {
                return (
                  <S.AboutMeNotoriousItem key={index}>
                    <S.AboutMeNotoriousTitle>
                      {item.trabalhos_notorios_titulo.text}
                    </S.AboutMeNotoriousTitle>
                    <S.AboutMeNotoriousParagraph className="notorious">
                      {item.trabalhos_notorios_descricao.text}
                    </S.AboutMeNotoriousParagraph>
                  </S.AboutMeNotoriousItem>
                )
              }
            )}
          </S.AboutMeNotoriousWrapper>
        </S.AboutMeMobileWrapper>
      </S.AboutMeWrapper>
    </>
  )
}
export default AboutMe
