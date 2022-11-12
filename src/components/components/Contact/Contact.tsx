import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactHtmlParser from "react-html-parser"

import type { ContactProps, SocialMediaProps } from "./interface"
import * as S from "./styles"

const Contact = () => {
  const ContactQuery = useStaticQuery(graphql`
    query Contact {
      prismicContato {
        data {
          contato_main_title {
            html
          }
          contato_sub_title {
            html
          }
          descricao_social_media {
            html
          }
          social_medias {
            social_media_icon {
              url
            }
            social_media_name {
              html
            }
            perfil_link {
              url
            }
          }
          hover_socialmedia {
            url
          }
        }
      }
    }
  `)
  const contactContent: ContactProps = ContactQuery.prismicContato
  const socialMediaContent: Array<SocialMediaProps> =
    ContactQuery.prismicContato.data.social_medias

  return (
    <>
      <S.ContactWrapper
        id="CONTATO"
        data-sal="fade"
        data-sal-delay="50"
        data-sal-duration="400"
        data-sal-easing="ease-in-quad"
      >
        {ReactHtmlParser(contactContent.data.contato_main_title.html)}

        <S.SocialMediaWrapper>
          <S.SocialMediaTitleWrapper>
            {ReactHtmlParser(contactContent.data.contato_sub_title.html)}
          </S.SocialMediaTitleWrapper>

          {ReactHtmlParser(contactContent.data.descricao_social_media.html)}

          <S.SocialMediaItemsWrapper>
            {socialMediaContent.map((item: SocialMediaProps, index: number) => {
              return (
                <S.SocialMediaItem key={index}>
                  <S.SocialMediaItemLink
                    href={item.perfil_link.url}
                    target="__blank"
                    url={`${contactContent.data.hover_socialmedia.url}`}
                  >
                    <S.SocialMediaItemImg
                      src={item.social_media_icon.url}
                      alt={"Contact"}
                    />
                    {ReactHtmlParser(item.social_media_name.html)}
                  </S.SocialMediaItemLink>
                </S.SocialMediaItem>
              )
            })}
          </S.SocialMediaItemsWrapper>
        </S.SocialMediaWrapper>
      </S.ContactWrapper>
    </>
  )
}
export default Contact
