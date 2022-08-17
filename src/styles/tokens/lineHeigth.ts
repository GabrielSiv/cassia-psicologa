import getRem from "../../utils/getRem"

const lineHeight: {
  [key: string]: string | 0
} = {
  "--line-height-ul": getRem(64),
  "--line-height-xxxl": getRem(64),
  "--line-height-xxl": getRem(64),
  "--line-height-xl": getRem(56),
  "--line-height-lg": getRem(42),
  "--line-height-md": getRem(32),
  "--line-height-sm": getRem(24),
  "--line-height-xs": getRem(22),
  "--line-height-xxs": getRem(20),
  "--line-height-us": getRem(18),
  "--line-height-xus": getRem(16),
  "--line-height-xxus": getRem(14),
}

export default lineHeight
