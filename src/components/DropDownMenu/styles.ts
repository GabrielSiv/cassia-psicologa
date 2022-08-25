import styled from "styled-components"

import getVar from "../../utils/getVar"

export const DropDownWrapper = styled.ul`
  position: relative;

  .dropdown-main-menu {
    display: none;
  }

  &.active .dropdown-main-menu {
    display: block;
    animation: show-up 0.3s forwards;
  }
  &.active .menuIcon {
    animation: menuRotate 0.3s forwards;
    @keyframes menuRotate {
      to {
        transform: rotate(90deg);
      }
    }
  }
  @keyframes show-up {
    from {
      opacity: 0;
      transform: translate3d(30px, 0, 0);
    }
    to {
      opacity: 0.95;
      transform: translate3d(0, 0, 0);
    }
  }
`
export const DropDownImg = styled.img`
  margin-top: 5px;
  height: 24px;
  width: 21;
`
export const DropDownMenuMain = styled.ul`
  position: absolute;
  top: 44px;
  right: 0px;

  background: ${getVar("color-white-00")};
  padding: 20px 20px 20px 20px;

  box-shadow: 2px 2px 2px ${getVar("color-red-10")};
  &:before {
    content: "";
    display: block;
    position: absolute;
    margin-left: 60px;
    top: -10px;
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${getVar("color-white-00")};
  }
`
export const ItemMenu = styled.li`
  padding-top: 6px;
  padding-bottom: 6px;

  a {
    text-decoration: none;
    color: ${getVar("color-red-10")};
    font-family: ${getVar("font-family-primary")};
  }
`
