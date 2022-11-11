export type ServicesQueryType = {
  data: {
    titulo: {
      html: string
    }
    servico_prestado: {
      html: string
    }
    list_title: {
      html: string
    }
    servicos: {
      servico_image: {
        url: string
      }
      servico_titulo: {
        text: string
      }
    }
  }
}

export type ServicosPrestadosProps = {
  servico_image: {
    url: string
  }
  servico_titulo: {
    html: string
  }
}
