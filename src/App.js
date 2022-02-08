import DataTableBase from "./DataTableBase";

function App() {
  return (
    <div className="App">
      <DataTableBase
        title="Movie List" // titulo
        expandableRows={true} // expandir la fila
        expandOnRowClicked={true} // expande la fila al hacer click en toda la fila
        selectableRows // para poder seleccionar filas
        responsive={true}
        subHeaderWrap={false}
        noHeader={false} // que no se vea la cabezera
        direction="auto" // "auto", "ltr", "rtl"
        disabled={false} // desabilitar todo datatable
        fixedHeader={false}
      />
    </div>
  );
}

export default App;
