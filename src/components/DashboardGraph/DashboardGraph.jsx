import { Area } from "@ant-design/plots"
import { useContext } from "react"
import "./DashboardGraph.css"
import { UserGlobalContext } from "../../context/UserContex"

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
    },
    label: {
      formatter: (value) => `$${value}`
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

  const { user, userStatuses } = useContext(UserGlobalContext)

  return (
    <div className="dashboardGraph dashboardGridItem">
      <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
        <p>Cuenta Corriente</p>
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7098 1.20986C13.6169 1.11613 13.5063 1.04174 13.3844 0.990969C13.2625 0.9402 13.1318 0.914062 12.9998 0.914062C12.8678 0.914062 12.7371 0.9402 12.6152 0.990969C12.4934 1.04174 12.3828 1.11613 12.2898 1.20986L7.70982 5.78985C7.61685 5.88358 7.50625 5.95797 7.38439 6.00874C7.26253 6.05951 7.13183 6.08565 6.99982 6.08565C6.86781 6.08565 6.7371 6.05951 6.61524 6.00874C6.49338 5.95797 6.38278 5.88358 6.28982 5.78985L1.70982 1.20986C1.61685 1.11613 1.50625 1.04174 1.38439 0.990969C1.26253 0.9402 1.13183 0.914062 0.999816 0.914062C0.867804 0.914062 0.737098 0.9402 0.615239 0.990969C0.49338 1.04174 0.382779 1.11613 0.289816 1.20986C0.103565 1.39722 -0.000976562 1.65067 -0.000976562 1.91486C-0.000976562 2.17904 0.103565 2.4325 0.289816 2.61986L4.87982 7.20985C5.44232 7.77165 6.20481 8.08721 6.99982 8.08721C7.79482 8.08721 8.55732 7.77165 9.11982 7.20985L13.7098 2.61986C13.8961 2.4325 14.0006 2.17904 14.0006 1.91486C14.0006 1.65067 13.8961 1.39722 13.7098 1.20986Z" fill="#4744CC" />
        </svg>
      </div>
      <div className="gridCard">
        {user.status === userStatuses['completo'] ? (
          <Area {...config} />
        ) : false}
      </div>
    </div>
  )
}
export default DashboardGraph
