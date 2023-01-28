import { useContext } from "react";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { GlobalContext } from "../../context/GlobalStateContext";
import classes from "../../theme/Styles";
import "./DashboardLastSales.css";

const DashboardLastSales = () => {
  const { lastSales, user, userStatuses } = useContext(GlobalContext);

  return (
    <div className="dashboardLastSales dashboardGridItem">
      <p>Últimas ventas aprobadas</p>
      <div className="gridCard">
        {user.status === userStatuses['completo'] ? (
          <TableContainer sx={{maxHeight: '380px'}}>
            <Table stickyHeader sx={classes.table}>
              <TableHead>
                <TableRow style={{height: 33}}>
                  <TableCell>Nº Venta</TableCell>
                  <TableCell>Prepaga</TableCell>
                  <TableCell>Plan / Cápitas</TableCell>
                  <TableCell>Titular/Monto</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lastSales.map((sale) => {
                  return (
                    <TableRow key={`lastSale ${sale.id}`}>
                      <TableCell>{sale.id}</TableCell>
                      <TableCell>{sale.prepaga}</TableCell>
                      <TableCell>
                        <p>{sale.plan}</p>
                        <div className="flexTableCell">
                          <GroupOutlinedIcon
                            sx={{
                              ...classes.menuIcon,
                              color: "var(--blink-main)",
                            }}
                          />
                          <p>{sale.capitas}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p>{sale.titular}</p>
                        <p>${sale.monto}</p>
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
export default DashboardLastSales;
