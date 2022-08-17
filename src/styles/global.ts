import { createGlobalStyle } from "styled-components"
import buildCssVarsFromObjs from "../utils/buildCssVarsFromObjs"

import colors from "./tokens/colors"
import fontFamily from "./tokens/fontFamily"
import fontSizes from "./tokens/fontSizes"
import fontWeight from "./tokens/fontWeight"
import lineHeight from "./tokens/lineHeigth"

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

    /* size */
    ${buildCssVarsFromObjs(fontSizes)}
    
    /* line heigth */
    ${buildCssVarsFromObjs(lineHeight)}

   

    /* ---- z-index ---- */
    --modal-z-index: 10;

    box-sizing: border-box;
    color: var(--color-typography-2-pure);
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-regular);
    font-display: swap;



  }


  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    line-height: 1;
    font-size: 100%;

  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  a{
    text-decoration: none;
  }
`

export default GlobalStyles
