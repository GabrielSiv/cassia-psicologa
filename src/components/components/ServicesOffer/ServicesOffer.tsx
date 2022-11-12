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
          main_tittle {
            html
          }
          auxiliar_text {
            html
          }
          list_tittle {
            html
          }
          services {
            servico_image {
              url
            }
            srv_tittle {
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
    ServicosQuery.prismicServicoPrestado.data.services

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
          {ReactHtmlParser(servicosContent.data.main_tittle.html)}
          {ReactHtmlParser(servicosContent.data.auxiliar_text.html)}
          {ReactHtmlParser(servicosContent.data.list_tittle.html)}

          <S.ServiceItemsWrapper>
            {servicosList.map((item: ServicosPrestadosProps, index: number) => {
              return (
                <S.ServiceWrapper key={index}>
                  <S.ServiceTitleWrapper>
                    {ReactHtmlParser(item.srv_tittle.html)}
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
