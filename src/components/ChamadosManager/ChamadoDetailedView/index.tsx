import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridSelectionModel,
} from "@mui/x-data-grid"
import { randNumber, randPastDate, randText, randUserName } from "@ngneat/falso"
import { useRef, useState } from "react"
import { Container, Section, TextSection } from "./styles"

const ChamadoDetailedView: React.FC = () => {
  const rowsRef = useRef(Array.from({ length: 3 }, (_) => makeFakeRow()))
  const [selectedChamado, setSelectedChamado] = useState<FakeRow>()

  const onSelectionChanged = (
    selectionModel: GridSelectionModel,
    details: GridCallbackDetails
  ) => {
    const selectedRow = rowsRef.current.find((r) => r.id === selectionModel[0])
    setSelectedChamado(selectedRow)
  }

  return (
    <Container>
      <TextSection>{selectedChamado?.fullText}</TextSection>
      <Section>
        <DataGrid
          headerHeight={35}
          onSelectionModelChange={onSelectionChanged}
          columns={makeFakeColumns()}
          rows={rowsRef.current}
        ></DataGrid>
      </Section>
      <TextSection>{selectedChamado?.statusText}</TextSection>
    </Container>
  )
}

export default ChamadoDetailedView

function makeFakeColumns(): GridColDef[] {
  return [
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
      field: "status",
      headerName: "Status",
      flex: 1,
      headerClassName: "gridHeader",
    },
  ]
}
function makeFakeRow(): FakeRow {
  return {
    id: randNumber(),
    date: randPastDate(),
    user: randUserName().toLowerCase(),
    status: randText().toLowerCase(),
    fullText: randText({ length: 80 }).join(","),
    statusText: randText({ length: 40 }).join(","),
  }
}

interface FakeRow {
  id: Number
  date: Date
  user: string
  status: string
  fullText: string
  statusText: string
}
