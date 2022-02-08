import Checkbox from "@material-ui/core/Checkbox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import React from "react";
import DataTable from "react-data-table-component";
const sortIcon = <ArrowDownward />;
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

const ExpandedComponent = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

function DataTableBase(props) {
  return (
    <DataTable
      {...props}
      columns={columns}
      data={data}
      pagination // ver la paginacion
      selectableRowsComponent={Checkbox} // para personalizar el chekbox
      selectableRowsComponentProps={selectProps} // para
      sortIcon={sortIcon}
      dense // filas mas estrechas
      expandableRowsComponent={ExpandedComponent} // componente que se renderiza al expandir la fila
    />
  );
}

export default DataTableBase;
