export type ContactProps = {
  data: {
    contato_main_title: {
      html: string
    }
    contato_sub_title: {
      html: string
    }
    descricao_social_media: {
      html: string
    }
    social_medias: {
      social_media_icon: {
        url: string
      }
      social_media_name: {
        html: string
      }
      perfil_link: {
        url: string
      }
    }
    hover_socialmedia: {
      url: string
    }
  }
}

export type SocialMediaProps = {
  social_media_icon: {
    url: string
  }
  social_media_name: {
    html: string
  }
  perfil_link: {
    url: string
  }
}
