import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactHtmlParser from "react-html-parser"

import * as S from "./styles"
import type { ServicesQueryType, ServicosPrestadosProps } from "./interfaces"

const ServicesOffer = () => {
  const ServicosQuery = useStaticQuery(graphql`
    query Services {
      prismicServicoPrestado {
        data {
          titulo {
            text
            html
          }
          servico_prestado {
            text
            html
          }
          list_title {
            text
            html
          }
          servicos {
            servico_image {
              url
            }
            servico_titulo {
              text
              html
            }
          }
        }
      }
    }
  `)

  const servicosContent: ServicesQueryType =
    ServicosQuery.prismicServicoPrestado
  const servicosList: Array<ServicosPrestadosProps> =
    ServicosQuery.prismicServicoPrestado.data.servicos
  console.log(servicosContent.data.list_title.html)

  return (
    <>
      <S.ServicesOfferWrapper
        id="SERVIÇOS"
        data-sal="fade"
        data-sal-delay="50"
        data-sal-duration="400"
        data-sal-easing="ease-in-quad"
      >
        <S.ServicesOfferContent>
          {ReactHtmlParser(servicosContent.data.titulo.html)}
          {ReactHtmlParser(servicosContent.data.servico_prestado.html)}
          {ReactHtmlParser(servicosContent.data.list_title.html)}

          <S.ServiceItemsWrapper>
            {servicosList.map((item: ServicosPrestadosProps, index: number) => {
              return (
                <S.ServiceWrapper key={index}>
                  <S.ServiceTitleWrapper>
                    {ReactHtmlParser(item.servico_titulo.html)}
                  </S.ServiceTitleWrapper>
                  <S.ServiceImageWrapper>
                    <S.ServiceImage
                      alt="Servicess"
                      src={`${item.servico_image.url}`}
                    ></S.ServiceImage>
                  </S.ServiceImageWrapper>
                </S.ServiceWrapper>
              )
            })}
          </S.ServiceItemsWrapper>
        </S.ServicesOfferContent>
      </S.ServicesOfferWrapper>
    </>
  )
}

export default ServicesOffer
