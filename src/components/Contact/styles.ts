import styled from "styled-components"
import getVar from "../../utils/getVar"

export const ContactWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 164px;
  padding-bottom: 164px;
  @media (max-width: 640px) {
    margin-top: 64px;
    padding-bottom: 64px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    margin-top: 84px;
    padding-bottom: 84px;
  }
`
export const ContactTitle = styled.h1`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-uul")};
  color: ${getVar("color-red-10")};
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  @media (max-width: 640px) {
    font-size: ${getVar("font-size-xl")};
    margin-bottom: 44px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-xxl")};
    margin-bottom: 64px;
  }
`

export const SocialMediaWrapper = styled.div`
  width: 560px;
  border: 2px solid ${getVar("color-red-10")};
  @media (max-width: 640px) {
    width: 320px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 600px;
  }
`

export const SocialMediaTitleWrapper = styled.div`
  width: 556px;
  height: 108px;
  background-color: ${getVar("color-red-10")};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    width: 317px;
    height: 61px;
    margin-top: -1px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 597px;
    height: 84px;
    margin-left: -1px;
    margin-top: -1px;
  }
`
export const SocialMediaTitle = styled.h1`
  font-family: ${getVar("font-family-secondary")};
  font-size: ${getVar("font-size-xl")};
  line-height: ${getVar("line-height-xl")};
  color: ${getVar("color-white-00")};
  @media (max-width: 640px) {
    font-size: ${getVar("font-size-md")};
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-lg")};
  }
`
export const SocialMediaParagraph = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xxs")};
  line-height: ${getVar("line-height-sm")};
  color: ${getVar("color-red-10")};
  margin: 64px 64px 44px 64px;
  @media (max-width: 640px) {
    margin: 40px 40px 40px 40px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    margin: 48px 48px 48px 48px;
  }
`

export const SocialMediaItemsWrapper = styled.ul`
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 64px 64px 64px;
  @media (max-width: 640px) {
    margin: 0 0 40px 40px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    margin: 0 0 36px 48px;
    width: 500px;
    justify-content: space-between;
  }
`
export const SocialMediaItem = styled.li`
  width: 150px;
  height: 45px;
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  @media (max-width: 640px) {
    height: 32px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 32px;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`
export const SocialMediaItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`
export const SocialMediaItemImg = styled.img`
  height: 45px;
  width: 45px;
  @media (max-width: 640px) {
    height: 32px;
    width: 32px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    height: 32px;
    width: 32px;
  }
`
export const SocialMediaItemName = styled.p`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-sm")};
  font-weight: ${getVar("font-weight-bold")};
  color: ${getVar("color-red-10")};
  margin-left: 13px;
  @media (max-width: 640px) {
    font-size: ${getVar("font-size-xxs")};
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-xs")};
  }
`
