export interface LogoSizesProps {
  width: string
  height: string
  logoID: number
}

export type LogoQueryProps = {
  data: {
    logo_1: {
      url: string
    }
    logo_2: {
      url: string
    }
  }
}
