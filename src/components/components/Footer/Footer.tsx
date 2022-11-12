import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactHtmlParser from "react-html-parser"

import type { FooterQueryProps, ContatoNavProps } from "./interfaces"
import Logo from "../../baseComponents/Logo"
import * as S from "./styles"

const Footer = () => {
  const FooterQuery = useStaticQuery(graphql`
    query MyQuery {
      prismicFooter {
        data {
          contato_localizacao {
            text
            html
          }
          contato_nav {
            icone_contato {
              url
            }
            texto_contato {
              text
              html
            }
            link_contato {
              url
            }
          }
          mais_informacoes {
            text
            html
          }
          texto_mais_informacoes {
            text
            html
          }
          texto_rodape {
            text
            html
          }
        }
      }
    }
  `)
  const footerContent: FooterQueryProps = FooterQuery.prismicFooter
  const contatoNavContent: Array<ContatoNavProps> =
    FooterQuery.prismicFooter.data.contato_nav

  return (
    <>
      <S.ContatoWrapper
        data-sal="fade"
        data-sal-delay="50"
        data-sal-duration="400"
        data-sal-easing="ease-in-quad"
      >
        <S.ContatoMainWrapper>
          <S.ContatoLocalizacaoWrapper>
            {ReactHtmlParser(footerContent.data.contato_localizacao.html)}
            <S.ContatoLocalizacaoSeparador />
            <S.ContatoLocalizacaoItemList>
              {contatoNavContent.map((item: ContatoNavProps, index: number) => {
                return (
                  <S.ContatoLocalizacaoItem key={index}>
                    <S.ContatoLocalizacaoLink
                      href={item.link_contato.url}
                      target={"__blank"}
                    >
                      <S.ContatoLocalizacaoItemImg
                        src={item.icone_contato.url}
                        alt={"Contact"}
                      />
                      {ReactHtmlParser(item.texto_contato.html)}
                    </S.ContatoLocalizacaoLink>
                  </S.ContatoLocalizacaoItem>
                )
              })}
            </S.ContatoLocalizacaoItemList>
          </S.ContatoLocalizacaoWrapper>
          <S.ContatoMaisInformacoesSeperador />
          <S.MaisInformacoesWrapper>
            {ReactHtmlParser(footerContent.data.mais_informacoes.html)}
            <S.ContatoLocalizacaoSeparador />
            {ReactHtmlParser(footerContent.data.texto_mais_informacoes.html)}
          </S.MaisInformacoesWrapper>
          <Logo logoID={1} width="270px" height="137px"></Logo>
        </S.ContatoMainWrapper>
        <S.FooterLastWrapper>
          <S.FooterLastContent>
            {ReactHtmlParser(footerContent.data.texto_rodape.html)}
          </S.FooterLastContent>
        </S.FooterLastWrapper>
      </S.ContatoWrapper>
    </>
  )
}
export default Footer
