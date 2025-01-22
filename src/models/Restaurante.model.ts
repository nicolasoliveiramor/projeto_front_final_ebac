export class Restaurante {
  title: string
  description: string
  rating: number
  infos: string[]
  image: string
  id: number

  constructor(
    title: string,
    description: string,
    rating: number,
    infos: string[],
    image: string,
    id: number
  ) {
    this.title = title
    this.description = description
    this.rating = rating
    this.infos = infos
    this.image = image
    this.id = id
  }
}
