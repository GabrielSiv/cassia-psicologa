import styled from "styled-components"
import getVar from "../../utils/getVar"

interface IntroProps {
  href: string
}

export const IntroWrapper = styled.div<IntroProps>`
  display: flex;
  align-items: center;
  background-image: url(${props => props.href});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  min-height: 1002px;
  height: 100vh;

  @media screen and (max-width: 640px) {
    width: 100%;
    min-height: 460px;
    height: 100vh;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 100%;
    min-height: 580px;
    height: 100vh;
  }
`
export const IntroContent = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`
export const IntroMainTitle = styled.h1`
  display: block;
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-uul")};
  color: ${getVar(`color-white-00`)};
  margin: 120px auto 0 auto;

  @media screen and (max-width: 640px) {
    font-size: ${getVar("font-size-xl")};
    margin: 60px auto 0 auto;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-uul")};
    margin: 0 auto 0 auto;
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
    font-size: ${getVar("font-size-lg")};
    line-height: ${getVar("line-height-lg")};
    width: 300px;
    margin: 24px auto 0 auto;
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
    height: 72px;
    margin: 48px auto;
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
  font-weight: ${getVar("font-weight-bold")};
  color: ${getVar("color-white-00")};
  padding-top: 15px;
  width: 195px;
  height: 54px;
  border: 2px solid ${getVar("color-white-00")};
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-us")};
    width: 133px;
    height: 34px;
    padding-top: 8px;
  }
  @media screen and (max-width: 1024px) {
    font-size: ${getVar("font-size-xxs")};
    width: 200px;
    height: 50px;
    padding-top: 16px;
  }
`
