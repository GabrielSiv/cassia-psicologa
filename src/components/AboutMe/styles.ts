import styled from "styled-components"
import getVar from "../../utils/getVar"

export const AboutMeWrapper = styled.section`
  width: 100%;
`
export const AboutMeContentWrapper = styled.div`
  width: 1160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AboutMeTextWrapper = styled.div`
  width: 600px;
  justify-content: flex-start;
  align-items: flex-start;
`

export const AboutMeSubTitle = styled.h2`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-uul")};
  color: ${getVar("color-red-10")};
  margin-bottom: 24px;
  margin-left: -4px;
`

export const AboutMeTitle = styled.h1`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-md")};
  line-height: ${getVar("line-height-md")};
  color: ${getVar("color-red-10")};
  margin-bottom: 24px;
`

export const AboutMeParagraph = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xxs")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-red-10")};
`
export const AboutMeNotoriousWrapper = styled.div`
  width: 600px;
  height: 100px;
  margin: 67px auto 0 auto;
  display: flex;
`
export const AboutMeNotoriousItem = styled.div`
  width: 130px;
  height: 95px;
  overflow: hidden;
  justify-content: flex-start;
  &:not(:first-child) {
    margin-left: 31px;
  }
  &:not(:last-child) {
    border-right: 2px solid ${getVar("color-red-01")};
  }
`
export const AboutMeNotoriousTitle = styled.h3`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-sm")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-red-10")};
  font-weight: ${getVar("font-weight-bold")};
  &::first-letter {
    font-size: ${getVar("font-size-md")};
  }
`

export const AboutMeNotoriousParagraph = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-sm")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-red-08")};
  font-weight: ${getVar("font-weight-bold")};
  margin-top: 16px;
  width: 112px;
`

export const AboutMeImageWrapper = styled.div``
export const AboutMeImage = styled.img``
