import "./table.css";
import React, { useMemo, useEffect, useState } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { COLUMNS } from "../../constants/columns";
import { absenceServices } from "../../services/absenceService";
import { BounceLoader } from "react-spinners";
import { getApiErrorMessage } from "../../utils/getErrorMesage";
import { TableFooter } from "../../components";

export const AbsenceTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [absences, setAbsences] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await absenceServices.getAllAbsences();
      setLoading(false);
      setAbsences(data.payload);
    } catch (error) {
      setLoading(false);
      setErrorMessage(getApiErrorMessage(error));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data: absences,
    },
    useFilters,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  return (
    <div className = 'tableContainer'>
      {loading && <BounceLoader color={"#fca138"} size={150} loading />}
      {!!errorMessage && <p>{errorMessage}</p>}
      {!errorMessage && !loading && (
        <>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                      <div>
                        {" "}
                        {column.canFilter ? column.render("Filter") : null}{" "}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <TableFooter absences={absences} tableInstance={tableInstance} />
        </>
      )}
    </div>
  );
};
