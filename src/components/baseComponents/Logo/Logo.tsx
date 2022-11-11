import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import type { LogoSizesProps, LogoQueryProps } from "./interfaces"
import * as S from "./styles"

const Logo: React.FC<LogoSizesProps> = ({ width, height, logoID }) => {
  const Logo = useStaticQuery(graphql`
    query Logo {
      prismicLogos {
        data {
          logo_1 {
            url
          }
          logo_2 {
            url
          }
        }
      }
    }
  `)
  const LogoQueryContent: LogoQueryProps = Logo.prismicLogos

  return (
    <>
      <S.Logo
        logoID={logoID}
        height={height}
        width={width}
        alt={"Logo Cassia"}
        src={
          logoID === 1
            ? LogoQueryContent.data.logo_1.url
            : LogoQueryContent.data.logo_2.url
        }
      />
    </>
  )
}
export default Logo
