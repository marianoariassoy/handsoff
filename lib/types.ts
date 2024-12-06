export type Category = {
  title: string
  category: {
    title: string
    title_en: string
    href: string
  }[]
}

export type Menu = {
  title: string
  title_en: string
  alert: boolean
  href: string
  category: Category[]
}

export type Item = {
  title: string
  price: string
  image: string
  href: string
}
