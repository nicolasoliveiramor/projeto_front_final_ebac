import { PratoInterface, RestauranteInterface } from '../../models'

import { Pratos } from '../Pratos'
import { Restaurantes } from '../Restaurante'
import { GridRestaurantes, GridPratos } from './styles'

export const ListaDeRestaurantes = ({
  restaurantes
}: {
  restaurantes: RestauranteInterface[]
}) => {
  return (
    <div className="container">
      <GridRestaurantes>
        {restaurantes.map((item) => (
          <Restaurantes key={item.id} restaurante={item} />
        ))}
      </GridRestaurantes>
    </div>
  )
}

export const ListaDePratos = ({ prato }: { prato: PratoInterface[] }) => {
  return (
    <div className="container">
      <GridPratos>
        {prato.map((item) => (
          <Pratos key={item.id} prato={item} />
        ))}
      </GridPratos>
    </div>
  )
}
