import styled from "styled-components"
import getVar from "../../utils/getVar"

export const ContatoWrapper = styled.div`
  padding-top: 64px;
  width: 100%;
  background-color: ${getVar("color-red-01")};
  @media (min-width: 641px) and (max-width: 1024px) {
    padding-top: 84px;
  }
`
export const ContatoMainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
  padding-bottom: 64px;
  @media (max-width: 640px) {
    display: flex;
    flex-wrap: wrap;
    width: 320px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    width: 600px;
  }
`
export const ContatoLocalizacaoWrapper = styled.nav`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 640px) {
    width: 268px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 350px;
  }
`
export const ContatoLocalizacaoTitle = styled.h3`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-lg")};
  color: ${getVar("color-red-10")};
  height: 40px;
  @media (max-width: 640px) {
    font-size: ${getVar("font-size-md")};
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-lg")};
  }
`
export const ContatoMaisInformacoesSeperador = styled.div`
  background-color: ${getVar("color-red-10")};
  width: 2px;
  height: 200px;
  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    display: none;
  }
`
export const ContatoLocalizacaoSeparador = styled.div`
  width: 37px;
  margin-top: 8px;
  margin-right: 200px;
  height: 2px;
  background-color: ${getVar("color-red-10")};
  @media (max-width: 640px) {
    margin-top: 0px;
  }
`
export const ContatoLocalizacaoItemList = styled.ul`
  margin-top: 16px;
  width: 350px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    width: 268px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 400px;
  }
`
export const ContatoLocalizacaoItem = styled.li`
  width: 410px;
  height: 29px;
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  @media (max-width: 640px) {
    width: 268px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 400px;
  }
`
export const ContatoLocalizacaoLink = styled.a`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
`
export const ContatoLocalizacaoItemImg = styled.img`
  height: 29px;
  width: 29px;
`
export const ContatoLocalizacaoItemText = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xxs")};
  text-decoration: none;
  color: ${getVar("color-red-10")};
  font-weight: ${getVar("font-weight-bold")};
  align-self: center;
  margin-left: 16px;
  @media (max-width: 640px) {
    font-weight: ${getVar("font-weight-regular")};
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-weight: ${getVar("font-weight-regular")};
  }
`
export const MaisInformacoesWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 44px;
  @media (max-width: 640px) {
    width: 268px;
    margin-left: 0px;
    margin-top: 56px;
    margin-bottom: 56px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    margin-left: 0px;
    margin-left: 0px;
    margin-top: 64px;
    margin-bottom: 64px;
  }
`
export const MaisInformacoesText = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xxs")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-red-10")};
  width: 250px;
  margin-top: 24px;
`
export const FooterLastWrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: ${getVar("color-red-10")};
`
export const FooterLastContent = styled.div`
  height: 70px;
  width: 1024px;
  margin: 0 auto;
  display: flex;

  @media (max-width: 640px) {
    width: 320px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 600px;
  }
`
export const FooterLastContentParagraph = styled.p`
  font-family: ${getVar("font-family-primary")};
  color: ${getVar("color-white-00")};
  font-size: ${getVar("font-size-xxs")};
  align-self: center;
`
