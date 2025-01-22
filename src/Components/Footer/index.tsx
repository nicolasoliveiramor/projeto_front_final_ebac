import { Container, Link } from './styles'

import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

export const Footer = () => (
  <Container>
    <img src={logo} />
    <ul>
      <li>
        <Link href="https://www.instagram.com" target="_blank">
          <img src={instagram} alt="Instagram" />
        </Link>
      </li>
      <li>
        <Link href="https://www.facebook.com" target="_blank">
          <img src={facebook} alt="Facebook" />
        </Link>
      </li>
      <li>
        <Link href="https://www.twitter.com" target="_blank">
          <img src={twitter} alt="Twitter" />
        </Link>
      </li>
    </ul>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Container>
)
