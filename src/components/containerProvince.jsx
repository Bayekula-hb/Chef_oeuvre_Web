import * as React from 'react';
import {Box} from "@mui/material";
import CardEntity from "./card"
import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';
import Stack from '@mui/material/Stack';

const ContainerProvince = ()=>{
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    const data = ["kinshasa","kongo-central","haut-katanga",
     "bas-uele","kwango", "Kivu", "sud-kivu", "equateur", "kasaï",
      "kasaï-occidental", "kasaï-oriental", "haut-lomami"]
    return(
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            flexWrap:"wrap",
            mt:"5%",
            // border:"solid",
            width:"100vw",
        }}>
            {data.map((data)=>{
                return (
                    <>
                    <CardEntity>
                        {data}
                    </CardEntity>
                    </>
                )
            })}
            <Stack 
                sx={{display:"flex",flexDirection:"row",justifyContent:"end",fontSize:"1.6rem",alignSelf:"center", width:"100%"}}>
                <TablePagination
                sx={{alignSelf:"end"}}
                component="div"
                count={data.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Stack>
        </Box>
    )
}
export default ContainerProvince;