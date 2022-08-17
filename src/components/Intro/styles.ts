import styled from "styled-components"
import getVar from "../../utils/getVar"

interface IntroProps {
  href: string
}

export const IntroWrapper = styled.div`
  width: 100%;
  height: 1002px;
`
export const IntroContent = styled.div<IntroProps>`
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.href});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
`
export const IntroMainTitle = styled.h1`
  display: block;
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-uul")};
  color: ${getVar(`color-white-00`)};
  margin: 373px auto 0 auto;
`

export const IntroSubtitle = styled.h2`
  display: block;
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-ul")};
  color: ${getVar("color-white-00")};
  line-height: ${getVar("line-height-xl")};
  text-align: center;
  margin: 36px auto 0 auto;
  width: 491px;
`
export const Separador = styled.div`
  width: 0px;
  height: 81px;
  border-radius: 20px;
  border: 1px solid ${getVar("color-white-00")};
  margin: 56px auto;
`
