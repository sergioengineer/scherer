import {
  AddCircleOutlineOutlined,
  AssignmentIndOutlined,
  DeleteForeverOutlined,
  EditLocationAltOutlined,
  LocalPrintshopOutlined,
  MarkAsUnreadOutlined,
} from "@mui/icons-material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import {
  randFullName,
  randNumber,
  randPastDate,
  randText,
  randUserName,
} from "@ngneat/falso"
import { useRef, useState } from "react"
import { Spacer } from "../../globalStyles/globalStyleComponents"
import ChamadoDetailedView from "./ChamadoDetailedView"
import {
  Container,
  GridContainer,
  GridControl,
  GridControlSection,
  TitleBar,
  TitleControlSection,
} from "./styles"

const ChamadosManager: React.FC = () => {
  const [searchText, setSearchText] = useState("")
  const rowsRef = useRef(Array.from({ length: 5 }, () => makeFakeRow()))

  const columns = makeFakeColumns()

  return (
    <Container>
      <TitleBar>
        <AssignmentIndOutlined style={{ width: "16px" }} />
        <label>Chamados</label>
        <Spacer />
        <TitleControlSection>
          <label>Buscar cliente:</label>
          <input
            type={"text"}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
        </TitleControlSection>
      </TitleBar>

      <GridControlSection>
        <GridControl>
          <AddCircleOutlineOutlined style={{ width: 15 }} />
          Inserir
        </GridControl>
        <GridControl>
          <EditLocationAltOutlined style={{ width: 15 }} /> Editar
        </GridControl>
        <GridControl>
          <DeleteForeverOutlined style={{ width: 15 }} />
          Excluir
        </GridControl>
        <GridControl>
          <LocalPrintshopOutlined style={{ width: 15 }} />
          Imprimir
        </GridControl>
        <GridControl>
          <MarkAsUnreadOutlined style={{ width: 15 }} />
          Leituras pendentes(15)
        </GridControl>
      </GridControlSection>

      <GridContainer>
        <DataGrid
          columns={columns}
          headerHeight={25}
          rows={rowsRef.current.filter(
            (r) => r.client.includes(searchText) || r.title.includes(searchText)
          )}
        ></DataGrid>
      </GridContainer>

      <ChamadoDetailedView />
    </Container>
  )
}

function makeFakeRow() {
  return {
    id: randNumber(),
    client: randFullName({ withAccents: false }).toLowerCase(),
    idClient: randNumber(),
    date: randPastDate(),
    user: randUserName().toLowerCase(),
    title: randText().toLowerCase(),
  }
}

function makeFakeColumns(): GridColDef[] {
  return [
    {
      field: "id",
      headerName: "Id Scherer",
      flex: 1,
      headerClassName: "gridHeader",
    },
    {
      field: "client",
      headerName: "Cliente",
      flex: 1,
      headerClassName: "gridHeader",
    },
    {
      field: "idClient",
      headerName: "idClient",
      flex: 1,
      headerClassName: "gridHeader",
    },
    {
      field: "date",
      headerName: "Data",
      flex: 1,
      headerClassName: "gridHeader",
    },
    {
      field: "user",
      headerName: "Usuário",
      flex: 1,
      headerClassName: "gridHeader",
    },
    {
      field: "title",
      headerName: "Título",
      flex: 1,
      headerClassName: "gridHeader",
    },
  ]
}

export default ChamadosManager
