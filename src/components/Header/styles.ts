import styled from "styled-components"
import getVar from "../../utils/getVar"

export const headerWrapper = styled.nav`
  position: absolute;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${getVar("color-white-00")};
  z-index: 10;
`

export const headerLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  width: 1160px;
`
export const headerLink = styled.li`
  a {
    display: flex;
    font-family: ${getVar("font-family-primary")};
    font-size: ${getVar("font-size-xs")};
    color: ${getVar("color-white-00")};
    font-weight: ${getVar("font-weight-regular")};
  }
`
