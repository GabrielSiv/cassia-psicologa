import styled from "styled-components"
import getVar from "../../utils/getVar"

export const ServicesOfferWrapper = styled.div`
  width: 100%;
  padding-top: 164px;
  padding-bottom: 164px;
  justify-content: center;
  background-color: ${getVar("color-red-02")};
`

export const ServicesOfferContent = styled.div`
  margin: 0 auto;
  width: 1160px;
`
export const ServicesOfferTitle = styled.h1`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-uul")};
  color: ${getVar("color-red-10")};
  margin-bottom: 24px;
`
export const ServicesOfferParagraph = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xxs")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-red-10")};
  margin-top: 24px;
  width: 796px;
`
export const ServicesListTitle = styled.h3`
  margin: 56px 0;
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-md")};
  line-height: ${getVar("line-height-md")};
  color: ${getVar("color-red-10")};
`

export const ServiceItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1160px;
`
export const ServiceWrapper = styled.div`
  width: 560px;
  height: 360px;
  border: 2px solid ${getVar("color-red-10")};
`
export const ServiceTitleWrapper = styled.div`
  display: flex;
  width: 558px;
  height: 73px;
  background-color: ${getVar("color-red-10")};
  align-items: center;
`
export const ServiceTitle = styled.h3`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-md")};
  line-height: ${getVar("line-height-md")};
  color: ${getVar("color-white-00")};
  margin: 0 auto;
`
export const ServiceImageWrapper = styled.div`
  height: 285px;
  width: 556px;
`
export const ServiceImage = styled.img`
  height: 283px;
  width: 556px;
  object-fit: cover;
  object-position: center;
`
