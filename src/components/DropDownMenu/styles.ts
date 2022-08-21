import styled from "styled-components"

import getVar from "../../utils/getVar"

export const DropDownWrapper = styled.ul`
  position: relative;

  .dropdown-main-menu {
    display: none;
  }
  &:hover .dropdown-main-menu,
  &.active .dropdown-main-menu {
    display: block;
    animation: show-up 0.3s forwards;
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
  height: 20px;
  width: 20px;
`
export const DropDownMenuMain = styled.ul`
  position: absolute;
  top: 28px;
  right: 1px;
  background: ${getVar("color-red-03")};
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px ${getVar("color-red-10")};
`
export const ItemMenu = styled.li`
  :not(:last-child) {
    margin-bottom: 8px;
  }
  a {
    text-decoration: none;
    color: ${getVar("color-red-10")};
    font-family: ${getVar("font-family-primary")};
  }
`
