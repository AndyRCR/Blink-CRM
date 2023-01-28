import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import classes from "../../theme/Styles";
import "./DashboardQuotes.css";

const DashboardQuotes = () => {

  const {quotes, user, userStatuses} = useContext(GlobalContext)

  return (
    <div className="dashboardQuotes dashboardGridItem">
      <p>Cotizaciones</p>
      <div className="gridCard">
        {user.status === userStatuses['completo'] ? (
          <TableContainer sx={{ maxHeight: "140px" }}>
            <Table stickyHeader sx={classes.table}>
              <TableHead>
                <TableRow style={{height: 33}}>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Prepaga</TableCell>
                  <TableCell>Plan</TableCell>
                  <TableCell>Cápitas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {quotes.map((quote) => {
                  return (
                    <TableRow key={`quote ${quote.id}`}>
                      <TableCell>{quote.fecha}</TableCell>
                      <TableCell>
                        <p>{quote.nombre}</p>
                        <p>{quote.apellido}</p>
                      </TableCell>
                      <TableCell>
                        <p>{quote.prepaga}</p>
                      </TableCell>
                      <TableCell>
                        <p>{quote.plan}</p>
                      </TableCell>
                      <TableCell>
                        <div className="flexTableCell">
                            <GroupOutlinedIcon
                              sx={{
                                ...classes.menuIcon,
                                color: "var(--blink-main)",
                              }}
                            />
                            <p>{quote.capitas}</p>
                          </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : false}
      </div>
    </div>
  );
};
export default DashboardQuotes;
