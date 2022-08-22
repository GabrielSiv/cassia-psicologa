import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import * as S from "./styles"
import Teste from "../../images/menu-outlined.png"
import type { HeaderLinksProps } from "../Header/interfaces"

const DropDownMenu = () => {
  const headerLinks = [
    { name: "SOBRE", href: "/sobre" },
    { name: "CONTATO", href: "/contato" },
    { name: "SERVIÇOS", href: "/servicos" },
  ]

  const display = React.useRef(null)
  const wrapperRef = React.useRef(null)

  function useOutsideAlerter(ref) {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          display.current.classList.remove("active")
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }

  function handleClick() {
    if (display.current.className.includes("active")) {
      display.current.classList.remove("active")
      return
    }
    display.current.classList.add("active")
  }

  useOutsideAlerter(display)
  return (
    <>
      <S.DropDownWrapper ref={display}>
        <li>
          <S.DropDownImg
            className="menuIcon"
            alt="Drop Down Menu"
            src={Teste}
            onMouseDown={() => {
              handleClick()
            }}
          />
        </li>
        <li>
          <S.DropDownMenuMain ref={wrapperRef} className="dropdown-main-menu">
            {headerLinks.map((item: HeaderLinksProps, index: number) => {
              return (
                <React.Fragment key={index}>
                  <S.ItemMenu>
                    <a
                      href={`${item.href}`}
                      onClick={e => {
                        e.preventDefault()
                        scrollTo(`#${item.name}`)
                      }}
                    >
                      {item.name.toLocaleLowerCase()}
                    </a>
                  </S.ItemMenu>
                </React.Fragment>
              )
            })}
          </S.DropDownMenuMain>
        </li>
      </S.DropDownWrapper>
    </>
  )
}
export default DropDownMenu
