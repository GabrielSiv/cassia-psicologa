import styled from "styled-components"
import getVar from "../../../utils/getVar"

export const HeaderWrapper = styled.header`
  position: absolute;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${getVar("color-white-00")};
  z-index: 10;
  @media screen and (max-width: 1024px) {
    height: 60px;
    justify-content: center;
  }
`

export const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 1024px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const HeaderLink = styled.li`
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xs")};
  color: ${getVar("color-white-00")};
  font-weight: ${getVar("font-weight-regular")};
  cursor: pointer;
  ::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    position: relative;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    top: 2px;
  }
  :hover::after {
    width: 100%;
    left: 0;
  }
`
export const HeaderMobileWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 640px) {
    width: 320px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 640px;
  }
`
export const HeaderLinkMobile = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    width: 210px;
    align-items: center;
    justify-content: space-between;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    display: flex;
    width: 380px;
    height: 44px;
    align-items: center;
    justify-content: space-between;
  }
`
