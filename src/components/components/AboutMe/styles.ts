import styled from "styled-components"
import getVar from "../../../utils/getVar"

export const AboutMeWrapper = styled.section`
  width: 100%;
`

export const AboutMeContentWrapper = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`

export const AboutMeTextWrapper = styled.div`
  width: 600px;
  justify-content: flex-start;
  align-items: flex-start;
  h4 {
    font-family: ${getVar("font-family-secondary")};
    font-size: ${getVar("font-size-md")};
    line-height: ${getVar("line-height-md")};
    color: ${getVar("color-red-10")};
    margin-bottom: 24px;
  }
  h3 {
    font-family: ${getVar("font-family-secondary")};
    font-size: ${getVar("font-size-uul")};
    color: ${getVar("color-red-10")};
    margin-bottom: 24px;
    margin-left: -4px;
  }
  p {
    font-family: ${getVar("font-family-primary")};
    font-size: ${getVar("font-size-xxs")};
    line-height: ${getVar("line-height-sm")};
    color: ${getVar("color-red-10")};
    width: 560px;
    strong {
      font-weight: ${getVar("font-weight-bold")};
    }
    margin-bottom: 12px;
  }
`

export const AboutMeNotoriousWrapper = styled.div`
  width: 550px;
  height: auto;
  margin: 67px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    width: 320px;
    height: auto;
    margin: 24px auto 0 auto;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 600px;
    height: auto;
    margin: 28px auto 0 auto;
  }
`

export const AboutMeNotoriousItem = styled.div`
  width: 130px;
  height: 95px;
  overflow: hidden;
  justify-content: flex-start;
  margin-top: 4px;

  &:not(:last-child) {
    border-right: 2px solid ${getVar("color-red-01")};
  }
  &:not(:first-child) {
    padding-left: 8px;
  }
  &:not(:last-child) {
    margin-right: 8px;
  }
  @media (max-width: 640px) {
    &:not(:nth-child(odd)) {
      border-right: none;
    }
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    &:not(:first-child) {
      margin-left: 12px;
    }
  }

  @media (max-width: 1024px) {
    width: 110px;
    height: 91px;
  }
`

export const AboutMeNotoriousTitle = styled.h5`
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
    width: 90px;
    &::first-letter {
      font-size: ${getVar("font-size-md")};
    }
  }
`

export const AboutMeNotoriousParagraph = styled.p`
  &.notorious {
    font-family: ${getVar("font-family-primary")};
    font-size: ${getVar("font-size-xxs")};
    line-height: ${getVar("line-height-sm")};
    color: ${getVar("color-red-09")};
    font-weight: ${getVar("font-weight-bold")};
    margin: 0;
    margin-top: 16px;
    width: 120px;
    @media (max-width: 1024px) {
      font-size: ${getVar("font-size-xus")};
      line-height: ${getVar("line-height-xxs")};
      width: 90px;
    }
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

export const AboutMeMobileWrapper = styled.div`
  display: none;
  width: 100%;

  p {
    font-family: ${getVar("font-family-primary")};
    font-size: ${getVar("font-size-xxs")};
    line-height: ${getVar("line-height-sm")};
    color: ${getVar("color-red-10")};
    strong {
      font-weight: ${getVar("font-weight-bold")};
    }
    @media (max-width: 640px) {
      width: 315px;
      margin: 0 auto 12px auto;
    }
    @media (min-width: 641px) and (max-width: 1024px) {
      margin: 0 auto 12px auto;
      width: 600px;
    }
  }
  @media (max-width: 1024px) {
    display: block;
  }
`

export const AboutMeFirst = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 640px) {
    height: 220px;
    margin: 0px auto 40px auto;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    margin: 0px auto 40px auto;
    justify-content: flex-start;
    height: 360px;
    width: 600px;
  }
`

export const AboutMeImageWrapperMob = styled.div`
  width: 108px;
  height: 220px;
  margin-right: 50px;
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 360px;
    width: 176px;
  }
`

export const AboutMeImageMob = styled.img`
  width: 108px;
  height: 220px;
  object-fit: cover;
  object-position: center;
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 360px;
    width: 176px;
  }
`

export const AboutMeFirstTextWrapper = styled.div`
  padding-top: 76px;
  width: 160px;

  h3,
  h4 {
    font-family: ${getVar("font-family-secondary")};
    color: ${getVar("color-red-10")};
  }
  h3 {
    margin: 0px;
    @media (max-width: 640px) {
      font-size: ${getVar("font-size-xl")};
      width: 160px;
    }
    @media (min-width: 641px) and (max-width: 1024px) {
      font-size: ${getVar("font-size-xxl")};
      width: 185px;
    }
  }
  h4 {
    margin-bottom: 24px;
    font-size: ${getVar("font-size-sm")};
    width: 170px;
    @media (max-width: 640px) {
      font-size: ${getVar("font-size-xxs")};
      line-height: ${getVar("line-height-xs")};
      margin-bottom: 8px;
      width: 130px;
    }
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`
