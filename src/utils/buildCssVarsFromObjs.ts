export default function buildCssVarsFromObjs(obj: {
  [key: string]: string | 0
}) {
  return Object.keys(obj)
    .map((item) => {
      return `${item}: ${obj[item]};`
    })
    .join('')
}
