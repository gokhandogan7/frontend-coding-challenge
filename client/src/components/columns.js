import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters: true
        

    },
    {
        Header: 'Name',
        accessor: 'userName',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Type of Absence',
        accessor: 'type',
        Filter: ColumnFilter,
        
    },
    {
        Header: 'Period',
        accessor:'period',
        Filter: ColumnFilter,
    },
    {
        Header: 'Member Note',
        accessor: 'memberNote',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Status',
        accessor:'status',
        Filter: ColumnFilter,
        disableFilters: true
    },
    {
        Header: 'Admitter Note',
        accessor:'admitterNote',
        Filter: ColumnFilter,
        disableFilters: true
    },
]

