import styled from "styled-components"
import type { LogoSizesProps } from "./interfaces"

export const Logo = styled.img<LogoSizesProps>`
  height: ${props => props.height};
  width: ${props => props.width};
`
