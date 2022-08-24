export type AboutMeQueryProps = {
  data: {
    sobre_mim_foto: {
      gatsByImageData: {
        height: number
        images: []
        layout: string
        width: number
      }
    }
    titulo: {
      text: string
    }
    sub_titulo: {
      text: string
    }
    sobre_mim: {
      text: string
    }
    trabalhos_notorios: {
      trabalhos_notorios_titulo: {
        text: string
      }
      trabalhos_notorios_descricao: {
        text: string
      }
    }
  }
}
export type TrabalhosNotoriosProps = {
  trabalhos_notorios_titulo: {
    text: string
  }
  trabalhos_notorios_descricao: {
    text: string
  }
}
