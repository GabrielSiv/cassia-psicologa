import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import type { LogoSizesProps, LogoQueryProps } from "./interfaces"
import * as S from "./styles"

const Logo: React.FC<LogoSizesProps> = ({ width, height }) => {
  const Logo = useStaticQuery(graphql`
    query LogoQuery {
      prismicLogo {
        data {
          logo {
            url
          }
        }
      }
    }
  `)
  const LogoQueryContent: LogoQueryProps = Logo.prismicLogo
  return (
    <>
      <S.Logo
        height={height}
        width={width}
        alt={"Logo Cassia"}
        src={LogoQueryContent.data.logo.url}
      />
    </>
  )
}
export default Logo
