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
    text: string
  }
}
