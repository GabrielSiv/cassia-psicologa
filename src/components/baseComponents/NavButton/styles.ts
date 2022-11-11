import styled from "styled-components"
import getVar from "../../../utils/getVar"

export const IntroNavButton = styled.button`
  justify-self: center;
  background-color: transparent;
  text-align: center;
  font-family: ${getVar("font-family-primary")};
  font-size: ${getVar("font-size-xs")};
  font-weight: ${getVar("font-weight-bold")};
  color: ${getVar("color-white-00")};
  width: 195px;
  height: 54px;
  border: 2px solid ${getVar("color-white-00")};
  cursor: pointer;
  @media screen and (max-width: 640px) {
    font-size: ${getVar("font-size-us")};
    width: 164px;
    height: 42px;
  }
  @media (min-width: 641px) and (max-width: 1024px) {
    font-size: ${getVar("font-size-xxs")};
    width: 224px;
    height: 57px;
  }
  :hover {
    transition: all 0.3s;
    background-color: #fff;
    color: ${getVar("color-red-06")};
  }
`
