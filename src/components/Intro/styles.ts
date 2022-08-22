import styled from "styled-components"
import getVar from "../../utils/getVar"

interface IntroProps {
  href: string
}

export const IntroWrapper = styled.div`
  width: 100%;
  height: 1002px;
  @media screen and (max-width: 640px) {
    width: 100%;
    height: 460px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    height: 580px;
  }
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

  @media screen and (max-width: 640px) {
    font-size: ${getVar("font-size-xl")};
    margin: 128px auto 20px auto;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-xxl")};
    margin: 120px auto 20px auto;
  }
`

export const IntroSubtitle = styled.h2`
  display: block;
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-xl")};
  color: ${getVar("color-white-00")};
  line-height: ${getVar("line-height-xl")};
  text-align: center;
  margin: 36px auto 0 auto;
  width: 491px;
  @media screen and (max-width: 640px) {
    font-size: ${getVar("font-size-sm")};
    line-height: ${getVar("line-height-sm")};
    width: 179px;
    margin: 0 auto;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-md")};
    line-height: ${getVar("line-height-md")};
    width: 260px;
    margin: 0 auto;
  }
`
export const Separador = styled.div`
  width: 1px;
  height: 81px;
  border-radius: 20px;
  background-color: ${getVar("color-white-00")};
  border: 1px solid ${getVar("color-white-00")};
  margin: 56px auto;
  @media screen and (max-width: 640px) {
    height: 32px;
    margin: 36px auto;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 48px;
    margin: 42px auto;
  }
`

export const IntroLastContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  width: 1024px;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

export const IntroCRP = styled.span`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xxs")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-white-00")};
  width: 148px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const IntroNavButton = styled.a`
  justify-self: center;
  text-align: center;
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xs")};
  color: ${getVar("color-white-00")};
  padding-top: 15px;
  width: 195px;
  height: 54px;
  border: 2px solid ${getVar("color-white-00")};
  @media screen and (max-width: 1024px) {
    font-size: ${getVar("font-size-us")};
    width: 133px;
    height: 34px;
    padding-top: 8px;
  }
`
