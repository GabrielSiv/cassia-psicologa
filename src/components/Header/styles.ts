import styled from "styled-components"
import getVar from "../../utils/getVar"

export const HeaderWrapper = styled.nav`
  position: absolute;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${getVar("color-white-00")};
  z-index: 10;
  @media screen and (max-width: 1024px) {
    height: 44px;
  }
`

export const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 1160px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const HeaderLink = styled.li`
  a {
    display: flex;
    font-family: ${getVar("font-family-primary")};
    font-size: ${getVar("font-size-xs")};
    color: ${getVar("color-white-00")};
    font-weight: ${getVar("font-weight-regular")};
  }
`
export const HeaderLinkMobile = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 44px;
    align-items: center;
    justify-content: center;
  }
`
