export default function useIsMobile() {
  function displayCheck() {
    var check = false
    if (window.screen.width < 1024) {
      check = true
    }

    return check
  }

  const display = displayCheck()

  return { display }
}
