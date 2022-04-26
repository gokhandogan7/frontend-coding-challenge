import React, { useMemo, useEffect, useState } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { COLUMNS } from "./columns";
import "./table.css";
import { absenceServices } from "../services/absenceService";
import { BounceLoader } from "react-spinners";
import { getApiErrorMessage } from "../utils/getErrorMesage";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { TableFooterContainer } from "./ui/TableFooterContainer";

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


  const { pageIndex } = state;
  const handleChange = (e) => {
    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
    gotoPage(pageNumber);
  };

  return (
    <div>
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
          <TableFooterContainer>
            <span>
              Page{""}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span>
              | Results{""}
              <strong>
                {page.length} of {absences.length}
              </strong>
            </span>
            <span>
              | Go to Page : {""}
              <Input
                max={pageOptions.length}
                defaultValue={pageIndex + 1}
                onChange={handleChange}
              />
            </span>
            <Button
              title="<<"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            />
            <Button
              title="Previous Page"
              onClick={previousPage}
              disabled={!canPreviousPage}
            />
            <Button
              title="Next Page"
              onClick={nextPage}
              disabled={!canNextPage}
            />
            <Button
              title=">>"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            />
          </TableFooterContainer>
        </>
      )}
    </div>
  );
};
