import React, { useMemo, useEffect, useState } from "react";
import { useTable, useFilters, usePagination } from "react-table";
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

  const tableInstance = useTable(
    {
      columns,
      data: absences,
    },
    useFilters,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    prepareRow,
  } = tableInstance;
  console.log(absences.length);

  const { pageIndex } = state;

  return (
    <div>
      {loading ? (
        <BounceLoader color={"#fca138"} size={150} loading />
      ) : (
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
          <div>
            <span>
              Page{""}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span>
              Results{""}
              <strong>
                {page.length} of {absences.length}
              </strong>
            </span>
            <span>
              | Goaa to Page : {""}
              <input
                type="number"
                min="1"
                max={pageOptions.length}
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
                style={{ width: 50 }}
              />
            </span>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
