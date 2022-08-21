import styled from "styled-components"
import getVar from "../../utils/getVar"

interface Display {
  displayType: string
}

export const AboutMeWrapper = styled.section`
  width: 100%;
`
export const AboutMeContentWrapper = styled.div`
  width: 1024px;
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
  @media (max-width: 640px) {
    font-size: ${getVar("font-size-xl")};
    width: 160px;
    margin: 0px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-xxl")};
    width: 185px;
    margin: 0px;
  }
`

export const AboutMeTitle = styled.h1`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-md")};
  line-height: ${getVar("line-height-md")};
  color: ${getVar("color-red-10")};
  margin-bottom: 24px;

  @media (max-width: 640px) {
    font-size: ${getVar("font-size-xxs")};
    line-height: ${getVar("line-height-xs")};
    margin-bottom: 8px;
    width: 130px;
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-sm")};
    line-height: ${getVar("line-height-xs")};
    margin-bottom: 16px;
    width: 160px;
  }
`

export const AboutMeParagraph = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xxs")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-red-10")};
  width: 560px;
  @media (max-width: 640px) {
    width: 315px;
    margin: 40px auto 30px auto;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 600px;
    margin: 40px auto 30px auto;
  }
`
export const AboutMeNotoriousWrapper = styled.div`
  width: 550px;
  height: 100px;
  margin: 67px 0 0 0;
  display: flex;
  @media (max-width: 640px) {
    justify-content: space-between;
    width: 320px;
    height: 91px;
    margin: 0 auto;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    justify-content: space-between;
    width: 600px;
    height: 91px;
    margin: 0 auto;
  }
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
  @media (max-width: 1024px) {
    height: 91px;
    &:not(:first-child) {
      margin-left: 13px;
    }
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
  @media (max-width: 1024px) {
    font-size: ${getVar("font-size-xxs")};
    &::first-letter {
      font-size: ${getVar("font-size-md")};
    }
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
  @media (max-width: 1024px) {
    font-size: ${getVar("font-size-xus")};
    line-height: ${getVar("line-height-xxs")};
    width: 67px;
  }
`

export const AboutMeImageWrapper = styled.div`
  height: 857px;
  width: 420px;
`
export const AboutMeImage = styled.img`
  height: 857px;
  width: 420px;
  object-fit: cover;
  object-position: center;
`

///Mobile

export const AboutMeFirst = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
    height: 220px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    justify-content: flex-start;
    height: 360px;
    width: 600px;
  }
`
export const AboutMeImageWrapperMob = styled.div`
  width: auto;
  height: 220px;
  margin-right: 50px;
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 360px;
  }
`
export const AboutMeImageMob = styled.img`
  width: auto;
  height: 220px;
  object-fit: cover;
  object-position: center;
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 360px;
  }
`
export const AboutMeFirstTextWrapper = styled.div`
  padding-top: 75px;
  width: 160px;
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`
