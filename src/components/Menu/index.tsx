import Link from "next/link"
import { Container, MenuItem } from "./styles"

const Menu: React.FC = () => {
  return (
    <Container>
      <Link href={"Chamados"}>
        <MenuItem>Chamados</MenuItem>
      </Link>
      <Link href="/">
        <MenuItem>Configurações</MenuItem>
      </Link>
    </Container>
  )
}

export default Menu
