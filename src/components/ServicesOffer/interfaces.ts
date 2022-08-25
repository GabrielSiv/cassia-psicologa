export type ServicesQueryType = {
  data: {
    titulo: {
      text: string
    }
    servico_prestado: {
      text: string
    }
    list_title: {
      text: string
    }
    servicos: {
      servico_image: {
        gatsByImageData: {
          height: number
          images: []
          layout: string
          width: number
        }
      }
      servico_titulo: {
        text: string
      }
    }
  }
}

export type ServicosPrestadosProps = {
  servico_image: {
    gatsByImageData: {
      height: number
      images: []
      layout: string
      width: number
    }
  }
  servico_titulo: {
    text: string
  }
}
