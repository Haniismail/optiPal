import Im_Accueil from '../assets/img/icons/home.svg';
import Im_Facebook from '../assets/img/icons/facebook.svg';
import Im_Instagram from '../assets/img/icons/instagram.svg';
import Im_Youtube from '../assets/img/icons/youtube.svg';

export default {
  HEADERS_API: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },

  SIDEBAR_LIST: [
    {
      id: 1,
      icon: Im_Accueil,
      name: 'Accueil',
      url: '/',
      type: 'route',
      permission: false,
    },
  ],
  SOCIALS_LIST: [
    {
      name: 'Facebook',
      img: Im_Facebook,
      url: 'https://www.facebook.com/takiacademy',
    },
    {
      name: 'Instagram',
      img: Im_Instagram,
      url: 'https://www.instagram.com/takiacademy',
    },
    {
      name: 'Youtube',
      img: Im_Youtube,
      url: 'https://www.youtube.com/takiacademy',
    },
  ],
};
