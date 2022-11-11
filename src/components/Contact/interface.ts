export type ContactProps = {
  data: {
    contato_main_title: {
      text: string
    }
    contato_sub_title: {
      text: string
    }
    descricao_social_media: {
      text: string
    }
    social_medias: {
      social_media_icon: {
        url: string
      }
      social_media_name: {
        text: string
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
    text: string
  }
  perfil_link: {
    url: string
  }
}
