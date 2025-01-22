import { Prato as PratoModel } from '../../models/Pratos.model'
import { Restaurante as RestauranteModel } from '../../models/Restaurante.model'
import { Pratos } from '../Product'
import { Restaurantes } from '../Restaurant'
import { GridRestaurantes, GridPratos } from './styles'

export const ListaDeRestaurantes = ({
  restaurante
}: {
  restaurante: RestauranteModel[]
}) => (
  <div className="container">
    <GridRestaurantes>
      {restaurante.map((item) => (
        <Restaurantes key={item.id} restaurante={item} />
      ))}
    </GridRestaurantes>
  </div>
)

export const ListaDePratos = ({ pratos }: { pratos: PratoModel[] }) => (
  <div className="container">
    <GridPratos>
      {pratos.map((item) => (
        <Pratos key={item.id} pratos={item} />
      ))}
    </GridPratos>
  </div>
)
