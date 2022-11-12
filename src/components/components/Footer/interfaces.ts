export type FooterQueryProps = {
  data: {
    contato_localizacao: {
      html: string
    }
    contato_nav: {
      icone_contato: {
        url: string
      }
      texto_contato: {
        html: string
      }
      link_contato: {
        url: string
      }
    }
    mais_informacoes: {
      html: string
    }
    texto_mais_informacoes: {
      html: string
    }
    texto_rodape: {
      html: string
    }
  }
}
export type ContatoNavProps = {
  icone_contato: {
    url: string
  }
  texto_contato: {
    html: string
  }
  link_contato: {
    url: string
  }
}
