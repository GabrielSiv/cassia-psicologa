export type AboutMeQueryProps = {
  data: {
    sobre_mim_foto: {
      url: string
    }
    main_tittle: {
      html: string
    }
    sub_tittle: {
      html: string
    }
    sobre_mim: {
      html: string
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
