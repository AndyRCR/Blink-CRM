import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./DashboardLiquidations.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";

const DashboardLiquidations = () => {

  const {user, userStatuses} = useContext(GlobalContext)

  return (
    <div className="dashboardLiquidations dashboardGridItem">
      <p>Liquidaciones</p>
      <div className="liquidationsContainer">
        <div className="gridCard">
          {user.status === userStatuses['completo'] ? (
            <>
              <div className="row">
                <div className="cell">
                  <b>1</b>
                  <p>Cápitas CC</p>
                </div>
                <GroupOutlinedIcon
                  sx={{
                    "&.MuiSvgIcon-root": {
                      width: "auto",
                      height: "56px",
                    },
                  }}
                />
              </div>
              <div className="row">
                <AccountBalanceWalletOutlinedIcon
                  sx={{
                    "&.MuiSvgIcon-root": {
                      width: "auto",
                      height: "56px",
                    },
                  }}
                />
                <div className="cell">
                  <b>$7.469</b>
                  <p>CC 11/2022</p>
                </div>
              </div>
            </>
          ) : false}
        </div>
        <div
          className="gridCard"
          style={{
            backgroundColor: user.status === userStatuses['completo'] ? 'var(--blink-main)' : 'white',
            color: "#fff",
          }}
        >
          {user.status === userStatuses['completo'] ? (
            <>
              <div className="row">
                <div className="cell">
                  <b>1</b>
                  <p>Cápitas CC</p>
                </div>
                <GroupOutlinedIcon
                  sx={{
                    "&.MuiSvgIcon-root": {
                      width: "auto",
                      height: "56px",
                    },
                  }}
                />
              </div>
              <div className="row">
                <AccountBalanceWalletOutlinedIcon
                  sx={{
                    "&.MuiSvgIcon-root": {
                      width: "auto",
                      height: "56px",
                    },
                  }}
                />
                <div className="cell">
                  <b>$7.469</b>
                  <p>CC 11/2022</p>
                </div>
              </div>
            </>
          ) : false}
        </div>
      </div>
    </div>
  );
};
export default DashboardLiquidations;
