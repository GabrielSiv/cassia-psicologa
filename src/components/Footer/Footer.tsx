import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import type { FooterQueryProps, ContatoNavProps } from "./interfaces"
import Logo from "../../components/Logo"
import * as S from "./styles"

const Footer = () => {
  const FooterQuery = useStaticQuery(graphql`
    query MyQuery {
      prismicFooter {
        data {
          contato_localizacao {
            text
          }
          contato_nav {
            icone_contato {
              url
            }
            texto_contato {
              text
            }
            link_contato {
              url
            }
          }
          mais_informacoes {
            text
          }
          texto_mais_informacoes {
            text
          }
          texto_rodape {
            text
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
      <S.ContatoWrapper>
        <S.ContatoMainWrapper>
          <S.ContatoLocalizacaoWrapper>
            <S.ContatoLocalizacaoTitle>
              {footerContent.data.contato_localizacao.text}
            </S.ContatoLocalizacaoTitle>
            <S.ContatoLocalizacaoSeparador />
            <S.ContatoLocalizacaoItemList>
              {contatoNavContent.map((item: ContatoNavProps, index: number) => {
                return (
                  <S.ContatoLocalizacaoItem key={index}>
                    <S.ContatoLocalizacaoLink href={item.link_contato.url}>
                      <S.ContatoLocalizacaoItemImg
                        src={item.icone_contato.url}
                      />
                      <S.ContatoLocalizacaoItemText>
                        {item.texto_contato.text}
                      </S.ContatoLocalizacaoItemText>
                    </S.ContatoLocalizacaoLink>
                  </S.ContatoLocalizacaoItem>
                )
              })}
            </S.ContatoLocalizacaoItemList>
          </S.ContatoLocalizacaoWrapper>
          <S.ContatoMaisInformacoesSeperador />
          <S.MaisInformacoesWrapper>
            <S.ContatoLocalizacaoTitle>
              {footerContent.data.mais_informacoes.text}
            </S.ContatoLocalizacaoTitle>
            <S.ContatoLocalizacaoSeparador />
            <S.MaisInformacoesText>
              {footerContent.data.texto_mais_informacoes.text}
            </S.MaisInformacoesText>
          </S.MaisInformacoesWrapper>
          <Logo width="270px" height="137px"></Logo>
        </S.ContatoMainWrapper>
        <S.FooterLastWrapper>
          <S.FooterLastContent>
            <S.FooterLastContentParagraph>
              {footerContent.data.texto_rodape.text}
            </S.FooterLastContentParagraph>
          </S.FooterLastContent>
        </S.FooterLastWrapper>
      </S.ContatoWrapper>
    </>
  )
}
export default Footer
