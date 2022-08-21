import styled from "styled-components"
import getVar from "../../utils/getVar"

export const ServicesOfferWrapper = styled.div`
  width: 100%;
  padding-top: 164px;
  padding-bottom: 164px;
  justify-content: center;
  background-color: ${getVar("color-red-02")};
  @media screen and (max-width: 640px) {
    padding-top: 64px;
    padding-bottom: 64px;
    margin-top: 64px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    padding-top: 84px;
    padding-bottom: 84px;
    margin-top: 84px;
  }
`

export const ServicesOfferContent = styled.div`
  margin: 0 auto;
  width: 1024px;
  @media screen and (max-width: 640px) {
    width: 320px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 600px;
  }
`
export const ServicesOfferTitle = styled.h1`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-uul")};
  color: ${getVar("color-red-10")};
  margin-bottom: 24px;
  @media screen and (max-width: 640px) {
    font-size: ${getVar("font-size-xl")};
    line-height: ${getVar("line-height-xl")};
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-xxl")};
    margin-bottom: 36px;
  }
`
export const ServicesOfferParagraph = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xxs")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-red-10")};
  margin-top: 24px;
  width: 796px;
  @media screen and (max-width: 1024px) {
    line-height: ${getVar("line-height-xxs")};
    width: 100%;
  }
`
export const ServicesListTitle = styled.h3`
  margin: 53px 0;
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-md")};
  line-height: ${getVar("line-height-md")};
  color: ${getVar("color-red-10")};
  @media screen and (max-width: 1024px) {
    font-size: ${getVar("font-size-sm")};
    line-height: ${getVar("line-height-sm")};
    margin: 32px 0 0 0;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-sm")};
    line-height: ${getVar("line-height-sm")};
    margin: 32px 0 0 0;
  }
`

export const ServiceItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 1024px;
  @media screen and (max-width: 640px) {
    width: 320px;
    justify-content: center;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 600px;
    justify-content: space-between;
  }
`
export const ServiceWrapper = styled.div`
  width: 500px;
  height: 360px;
  border: 2px solid ${getVar("color-red-10")};
  @media screen and (max-width: 640px) {
    width: 320px;
    height: 205px;
    margin-top: 33px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 280px;
    height: 179px;
    margin-top: 33px;
  }
`
export const ServiceTitleWrapper = styled.div`
  display: flex;
  width: 498px;
  height: 73px;
  background-color: ${getVar("color-red-10")};
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 318px;
    height: 41px;
    margin-top: -1px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 278px;
    height: 41px;
  }
`
export const ServiceTitle = styled.h3`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-md")};
  line-height: ${getVar("line-height-md")};
  color: ${getVar("color-white-00")};
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    font-size: ${getVar("font-size-xxs")};
  }
`
export const ServiceImageWrapper = styled.div`
  height: 285px;
  width: 496px;
  @media screen and (max-width: 640px) {
    width: 317px;
    height: 162px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 280px;
    height: 162px;
  }
`
export const ServiceImage = styled.img`
  height: 283px;
  width: 496px;
  object-fit: cover;
  object-position: center;
  @media screen and (max-width: 640px) {
    width: 317px;
    height: 162px;

    padding-bottom: 0.5px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 276px;
    height: 135px;
  }
`
