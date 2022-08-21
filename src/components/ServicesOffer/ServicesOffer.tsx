import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as S from "./styles"
import type { ServicesQueryType, ServicosPrestadosProps } from "./interfaces"

const ServicesOffer = () => {
  const ServicosQuery = useStaticQuery(graphql`
    query Services {
      prismicServicoPrestado {
        data {
          titulo {
            text
          }
          servico_prestado {
            text
          }
          list_title {
            text
          }
          servicos {
            servico_image {
              url
            }
            servico_titulo {
              text
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
  console.log(window.screen.width)

  return (
    <>
      <S.ServicesOfferWrapper id="SERVIÇOS">
        <S.ServicesOfferContent>
          <S.ServicesOfferTitle>
            {servicosContent.data.titulo.text}
          </S.ServicesOfferTitle>
          <S.ServicesOfferParagraph>
            {servicosContent.data.servico_prestado.text}
          </S.ServicesOfferParagraph>
          <S.ServicesListTitle>
            {servicosContent.data.list_title.text}
          </S.ServicesListTitle>
          <S.ServiceItemsWrapper>
            {servicosList.map((item: ServicosPrestadosProps, index: number) => {
              return (
                <S.ServiceWrapper key={index}>
                  <S.ServiceTitleWrapper>
                    <S.ServiceTitle>{item.servico_titulo.text}</S.ServiceTitle>
                  </S.ServiceTitleWrapper>
                  <S.ServiceImageWrapper>
                    <S.ServiceImage
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
