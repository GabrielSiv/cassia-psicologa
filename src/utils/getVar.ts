export type ColorVarNames =
  | "color-red-10"
  | "color-red-09"
  | "color-red-08"
  | "color-red-07"
  | "color-red-06"
  | "color-red-05"
  | "color-red-04"
  | "color-red-03"
  | "color-red-02"
  | "color-red-01"
  | "color-grey-12"
  | "color-grey-11"
  | "color-grey-10"
  | "color-grey-09"
  | "color-grey-08"
  | "color-grey-07"
  | "color-grey-06"
  | "color-grey-05"
  | "color-grey-04"
  | "color-grey-03"
  | "color-grey-02"
  | "color-grey-01"
  | "color-white-00"

export type FontVarNames =
  | "font-family-primary"
  | "font-family-secondary"
  | "font-family-tertiary"
  | "font-size-uul"
  | "font-size-ul"
  | "font-size-xxxl"
  | "font-size-xxl"
  | "font-size-xl"
  | "font-size-lg"
  | "font-size-md"
  | "font-size-sm"
  | "font-size-xs"
  | "font-size-xxs"
  | "font-size-us"
  | "font-size-xus"
  | "font-size-xxus"
  | "font-weight-regular"
  | "font-weight-medium"
  | "font-weight-bold"
  | "line-height-ul"
  | "line-height-xxxl"
  | "line-height-xxl"
  | "line-height-xl"
  | "line-height-lg"
  | "line-height-md"
  | "line-height-sm"
  | "line-height-xs"
  | "line-height-xxs"
  | "line-height-us"
  | "line-height-xus"
  | "line-height-xxus"

type VarNames = ColorVarNames | FontVarNames

/**
 * Imprime a custom propery (variável css) de acordo
 * com as que temos listadas no projeto.
 * @param {VarNames} varName
 * @returns var(--varName)
 * @example
 * `color: ${getVar('color-brand-1-pure')};`
 * // color: var(--color-brand-1-pure);
 */
function getVar(varName: VarNames) {
  return `var(--${varName})`
}

export default getVar
