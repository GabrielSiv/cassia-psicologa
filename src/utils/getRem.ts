import REM_FACTOR from "./REMFactor"

export default function getRem(px: number) {
  return px > 0 ? `${px / REM_FACTOR}rem` : 0
}
