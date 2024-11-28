import { Category } from '@/lib/types'
import { Facebook, Instagram, Twitter, Pinterest, Vimeo } from '@/components/ui/icons'

const submenu_casa: Category[] = [
  {
    title: 'Muebles',
    category: [
      {
        title: 'Sofas',
        title_en: 'Chairs',
        href: ''
      },
      {
        title: 'Respaldos',
        title_en: 'Wardrobes',
        href: ''
      },
      {
        title: 'Mesas y asientos',
        title_en: 'Tables and chairs',
        href: ''
      },
      {
        title: 'Iluminación',
        title_en: 'Lighting',
        href: ''
      }
    ]
  },
  {
    title: 'Dormitorio',

    category: [
      {
        title: 'Almohadones',
        title_en: 'Sofas',
        href: ''
      },
      {
        title: 'Cubres',
        title_en: 'Wardrobes',
        href: ''
      },
      {
        title: 'Mantas',
        title_en: 'Chairs',
        href: ''
      },
      {
        title: 'Respaldos',
        title_en: 'Wardrobes',
        href: ''
      },
      {
        title: 'Fundas de almohadones',
        title_en: 'Sofa bases',
        href: ''
      },
      {
        title: 'Sabanas',
        title_en: 'Tables',
        href: ''
      }
    ]
  },
  {
    title: 'Mesa',
    category: [
      {
        title: 'Servilletas',
        title_en: 'Cushions',
        href: ''
      },
      {
        title: 'Individuales',
        title_en: 'Individual',
        href: ''
      },
      {
        title: 'Repasadores',
        title_en: ' ',
        href: ''
      },
      {
        title: 'Manteles',
        title_en: 'Cushions',
        href: ''
      },
      {
        title: 'Ceramica',
        title_en: 'Ceramic',
        href: ''
      },
      {
        title: 'Madera',
        title_en: 'Wood',
        href: ''
      },
      {
        title: 'Otros',
        title_en: 'Others',
        href: ''
      }
    ]
  },
  {
    title: 'Baño',
    category: [
      {
        title: 'Cortinas de baño',
        title_en: 'Bathroom fixtures',
        href: ''
      },
      {
        title: 'Toallas',
        title_en: 'Toilets',
        href: ''
      },
      {
        title: 'Accesorios',
        title_en: 'Accessories',
        href: ''
      }
    ]
  },
  {
    title: 'Generos',

    category: [
      {
        title: '100% Algodon',
        title_en: '100% Organic',
        href: ''
      }
    ]
  },
  {
    title: 'Accesorios',
    category: [
      {
        title: 'Todos',
        title_en: 'All',
        href: ''
      }
    ]
  }
]

const submenu_indumentaria: Category[] = [
  {
    title: 'Mujer',
    category: [
      {
        title: 'Jeans',
        title_en: 'Jeans',
        href: ''
      },
      {
        title: 'Pantalones',
        title_en: 'Pants',
        href: ''
      },
      {
        title: 'Shorts',
        title_en: 'Shorts',
        href: ''
      },
      {
        title: 'Polleras',
        title_en: 'Skirts',
        href: ''
      },
      {
        title: 'Manga larga',
        title_en: 'Long Sleeve',
        href: ''
      },
      {
        title: 'Cuero',
        title_en: 'Leather',
        href: ''
      },
      {
        title: 'Sweater',
        title_en: 'Sweater',
        href: ''
      },
      {
        title: 'Mamelucos',
        title_en: 'Embroidery',
        href: ''
      },
      {
        title: 'Bolsos & mochilas',
        title_en: 'Bags & Backpacks',
        href: ''
      },
      {
        title: 'Bikinis',
        title_en: 'Bikinis',
        href: ''
      }
    ]
  },
  {
    title: 'Hombre',
    category: [
      {
        title: 'Jeans',
        title_en: 'Jeans',
        href: ''
      }
    ]
  },
  {
    title: 'Niñas',
    category: [
      {
        title: 'Jeans',
        title_en: 'Denim',
        href: ''
      },
      {
        title: 'Remeras',
        title_en: 'T-Shirts',
        href: ''
      }
    ]
  },
  {
    title: 'Accesorios',
    category: [
      {
        title: 'Todos',
        title_en: 'All',
        href: ''
      }
    ]
  }
]

const submenu_accesorios: Category[] = [
  {
    title: 'Accesorios',
    category: [
      {
        title: 'Cueros',
        title_en: 'Leather',
        href: ''
      },
      {
        title: 'Fragancias',
        title_en: 'Fragance',
        href: ''
      },
      {
        title: 'Escritorio',
        title_en: 'Desktop',
        href: ''
      },
      {
        title: 'Playa',
        title_en: 'Beach',
        href: ''
      },
      {
        title: 'Otros',
        title_en: 'Others',
        href: ''
      }
    ]
  }
]

export const menu: {
  title: string
  title_en: string
  alert: boolean
  href: string
  category: Category[]
}[] = [
  {
    title: 'New In',
    title_en: 'New In',
    href: '/new-in',
    alert: true,
    category: []
  },
  {
    title: 'Casa',
    title_en: 'House',
    alert: false,
    href: '',
    category: submenu_casa
  },
  {
    title: 'Indumentaria',
    title_en: 'Indumentaria',
    alert: false,
    href: '',
    category: submenu_indumentaria
  },
  {
    title: 'Accesorios',
    title_en: 'Accessories',
    alert: false,
    href: '',
    category: submenu_accesorios
  },
  {
    title: 'Ups! MISTAKES',
    title_en: 'Ups! MISTAKES',
    alert: false,
    href: '/mistakes',
    category: []
  },
  {
    title: 'Propuestas',
    title_en: 'Proposals',
    alert: true,
    href: '/propuestas',
    category: []
  },
  {
    title: 'Prensa',
    title_en: 'Press',
    alert: false,
    href: '/prensa',
    category: []
  }
]

export const menu_footer: {
  title: string
  title_en: string
  category: {
    title: string
    title_en: string
    href: string
  }[]
}[] = [
  {
    title: 'HANDS OFF!',
    title_en: 'HANDS OFF!',
    category: [
      {
        title: 'Jeans',
        title_en: 'Jeans',
        href: ''
      },
      {
        title: 'Cueros',
        title_en: 'Leather',
        href: ''
      },
      {
        title: 'Sofas',
        title_en: 'Sofas',
        href: ''
      },
      {
        title: 'Polleras',
        title_en: 'Skirts',
        href: ''
      },
      {
        title: 'Accesorios',
        title_en: 'Accessories',
        href: ''
      },
      {
        title: 'Fragancias',
        title_en: 'Fragance',
        href: ''
      }
    ]
  },
  {
    title: 'FAQ & AYUDA',
    title_en: 'FAQ & HELP',
    category: [
      {
        title: 'Compras',
        title_en: 'Purchases',
        href: '/info/compras'
      },
      {
        title: 'Envios',
        title_en: 'Shipments',
        href: '/info/envios'
      },
      {
        title: 'Politica de cambios',
        title_en: 'Policy of Changes',
        href: '/info/politica-de-cambios'
      },
      {
        title: 'Guia de talles',
        title_en: 'Height Guide',
        href: '/info/guia-de-talles'
      },
      {
        title: 'Propuestas',
        title_en: 'Proposals',
        href: '/propuestas'
      }
    ]
  },
  {
    title: 'Nosotros',
    title_en: 'About Us',
    category: [
      {
        title: 'Compañía',
        title_en: 'Company',
        href: '/info/compania'
      },
      {
        title: 'RR.HH.',
        title_en: 'HH.RR.',
        href: '/info/rr-hh'
      },
      {
        title: 'Blog',
        title_en: 'Blog',
        href: '#'
      },
      {
        title: 'Contacto',
        title_en: 'Contact',
        href: '/contacto'
      }
    ]
  },
  {
    title: 'Tiendas',
    title_en: 'Shops',
    category: [
      {
        title: 'PALERMO SOHO Headquarters',
        title_en: 'PALERMO SOHO Headquarters',
        href: ''
      },
      {
        title: 'Venta Mayorista HO!',
        title_en: 'Venta Mayorista HO!',
        href: ''
      }
    ]
  }
]

export const socials = [
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/handsoff2010',
    icon: Instagram
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/handsoff2010',
    icon: Twitter
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/HandsOff.com.ar',
    icon: Facebook
  },
  {
    title: 'Pinterest',
    href: 'https://www.pinterest.com/gligli/hands-off',
    icon: Pinterest
  },
  {
    title: 'Vimeo',
    href: 'https://vimeo.com/handsoff',
    icon: Vimeo
  }
]
