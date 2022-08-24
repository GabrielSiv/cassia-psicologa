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
        gatsByImageData: {
          height: number
          images: []
          layout: string
          width: number
        }
      }
      social_media_name: {
        text: string
      }
      social_media_link: {
        text: string
      }
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
  social_media_link: {
    text: string
  }
}
