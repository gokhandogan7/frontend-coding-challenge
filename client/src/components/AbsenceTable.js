import React, { useMemo, useEffect, useState } from "react";
import { useTable, useFilters } from "react-table";
import { COLUMNS } from "./columns";
import "./table.css";
import { absenceServices } from "../services/absenceService";
import { BounceLoader } from "react-spinners";

export const AbsenceTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const [absences, setAbsences] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await absenceServices.getAllAbsences();
      console.log(data);
      setLoading(false);
      setAbsences(data.payload);
    } catch (error) {
      setLoading(false);
    }
  };
  console.log(loading, absences);
  useEffect(() => {
    fetchData();
  }, []);

  const tableInstance = useTable({
    columns,
    data: absences,
  },
  useFilters
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      {loading ? (
        <BounceLoader color={'#fca138'} size={150} loading />
      ) : (
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
          {rows.map((row, index) => {
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
      )}
    </div>
  );
};
