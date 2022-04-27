import React from "react";
import { Button, Input, TableFooterContainer } from "./ui";


export const TableFooter = ({ tableInstance, absences }) => {
  const {
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state
  } = tableInstance;

  const handleChange = (e) => {
    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
    gotoPage(pageNumber);
  };
  const { pageIndex } = state;

  return (
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
      <Button title="Next Page" onClick={nextPage} disabled={!canNextPage} />
      <Button
        title=">>"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      />
    </TableFooterContainer>
  );
};
