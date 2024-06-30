import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faEtsy } from '@fortawesome/free-brands-svg-icons/faEtsy';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faAmazon } from '@fortawesome/free-brands-svg-icons/faAmazon';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://alaportrartist.etsy.com',
    label: 'Esty',
    icon: faEtsy,
  },
  {
    link: 'https://www.instagram.com/alaportrartist?igsh=eWlsNXVtN2cxMW0y&utm_source=qr',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/maiatalbert?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:maiyuri.artist@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://open.spotify.com/artist/70SHxkiWLYrLVx313341NR?si=5ADGp-5yTDGDBqeNZ6Jidw',
    label: 'Spotify',
    icon: faSpotify,
  },
  {
    link: 'https://music.apple.com/us/artist/maia-ann/1702428626',
    label: 'Apple Music',
    icon: faApple,
  },
  {
    link: 'https://music.youtube.com/channel/UC4Vc8NTVQXUfwl2BoFBe43w?si=eYsrqxCmm7JnhEHz',
    label: 'YouTube Music',
    icon: faYoutube,
  },
  {
    link: 'https://amazon.com/music/player/artists/B0CFKG9KCF/maia-ann?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_2suAKaVW09iAqhgQ4bv2dpMih',
    label: 'Amazon Music',
    icon: faAmazon,
  },
];

export default data;
