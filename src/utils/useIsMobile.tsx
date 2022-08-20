import React from "react"
export default function useIsMobile() {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window
    const innerWidthBool = innerWidth > 1024 ? true : false
    return { innerWidthBool, innerHeight }
  }
  const [windowSize, setWindowSize] = React.useState(getWindowSize())

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  let widthBool = windowSize.innerWidthBool
  return { widthBool }
}
