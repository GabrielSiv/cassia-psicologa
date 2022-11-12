export type ServicesQueryType = {
  data: {
    main_tittle: {
      html: string
    }
    auxiliar_text: {
      html: string
    }
    list_tittle: {
      html: string
    }
    services: {
      servico_image: {
        url: string
      }
      srv_tittle: {
        html: string
      }
    }
  }
}

export type ServicosPrestadosProps = {
  servico_image: {
    url: string
  }
  srv_tittle: {
    html: string
  }
}
