export type FooterQueryProps = {
  data: {
    contato_localizacao: {
      text: string
    }
    contato_nav: {
      icone_contato: {
        url: string
      }
      texto_contato: {
        text: string
      }
      link_contato: {
        url: string
      }
    }
    mais_informacoes: {
      text: string
    }
    texto_mais_informacoes: {
      text: string
    }
    texto_rodape: {
      text: string
    }
  }
}
export type ContatoNavProps = {
  icone_contato: {
    url: string
  }
  texto_contato: {
    text: string
  }
  link_contato: {
    url: string
  }
}
