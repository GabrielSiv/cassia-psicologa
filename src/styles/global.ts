import { createGlobalStyle } from 'styled-components'
import buildCssVarsFromObjs from '../utils/buildCssVarsFromObjs'

import colors from './tokens/colors'
import fontFamily from './tokens/fontFamily'
import fontWeight from './tokens/fontWeight'


const GlobalStyles = createGlobalStyle`
  :root {
    /* ---------- apenas design tokens ---------- */

    /* ---- color ---- */
    ${buildCssVarsFromObjs(colors)}

    /* ---- typography ---- */
    /* family */
    ${buildCssVarsFromObjs(fontFamily)}

    /* weight */
    ${buildCssVarsFromObjs(fontWeight)}

   

    /* ---- z-index ---- */
    --modal-z-index: 10;

    box-sizing: border-box;
    color: var(--color-typography-2-pure);
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-regular);
    font-display: swap;

    --breakpoint-notebook: 1280px;

  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  button, input, optgroup, select, textarea {
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }

  main {
    padding-top: 137px;

    @media only screen and (max-width: 1024px) {
      padding-top: 56px;
    }
  }

  #portal {
    position: relative;
    z-index: 100;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes Spin {
        from { transform: rotate(0deg)}
        to { transform: rotate(360deg) }
  }

  @-webkit-keyframes Spin {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
  }
`

export default GlobalStyles
