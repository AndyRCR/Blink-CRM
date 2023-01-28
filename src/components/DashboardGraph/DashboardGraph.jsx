import { Area } from "@ant-design/plots"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalStateContext"
import "./DashboardGraph.css"

const data = [
  { month: "Ene", ammount: 550 },
  { month: "Feb", ammount: 700 },
  { month: "Mar", ammount: 1050 },
  { month: "Abr", ammount: 880 },
  { month: "May", ammount: 600 },
  { month: "Jun", ammount: 420 },
  { month: "Jul", ammount: 500 },
  { month: "Ago", ammount: 630 },
  { month: "Sep", ammount: 220 },
  { month: "Oct", ammount: 470 },
  { month: "Nov", ammount: 760 },
  { month: "Dic", ammount: 990 },
]

const config = {
  data,
  height: 380,
  xField: "month",
  yField: "ammount",
  smooth: true,
  areaStyle: {
    fill: "#DADAF5",
    fillOpacity: 1
  },
  line: {
    color: "#4744CC",
  },
  meta: {
    month: {
      range: [0, 1],
      alias: "Mes",
    },
    ammount: {
      alias: "Cantidad",
    },
  },
  point: {
    size: 5,
    shape: "circle",
    style: {
      fill: "#4744CC",
      lineWidth: 0,
    },
  },
  yAxis: {
      grid: {
        line: {
          style: {
            stroke: 'transparent',
            lineWidth: 0
          }
        }
      },
      line: {
          style: {
              stroke: 'black',
              lineWidth: 1,
          }
      }
  },
  xAxis: {
      line: {
          style: {
              stroke: 'black',
              lineWidth: 1,
          }
      }
  }
}

const DashboardGraph = () => {

  const {user, userStatuses} = useContext(GlobalContext)

  return (
    <div className="dashboardGraph dashboardGridItem">
      <p>Cuenta Corriente</p>
      <div className="gridCard">
        {user.status === userStatuses['completo'] ? (
          <Area {...config} />
        ) : false}
      </div>
    </div>
  )
}
export default DashboardGraph
