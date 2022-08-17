import getRem from "../../utils/getRem"

const fontSizes: {
  [key: string]: string | 0
} = {
  "--font-size-uul": getRem(96),
  "--font-size-ul": getRem(48),
  "--font-size-xxxl": getRem(48),
  "--font-size-xxl": getRem(48),
  "--font-size-xl": getRem(48),
  "--font-size-lg": getRem(32),
  "--font-size-md": getRem(24),
  "--font-size-sm": getRem(18),
  "--font-size-xs": getRem(18),
  "--font-size-xxs": getRem(16),
  "--font-size-us": getRem(14),
  "--font-size-xus": getRem(12),
  "--font-size-xxus": getRem(10),
}

export default fontSizes
