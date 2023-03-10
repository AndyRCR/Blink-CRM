import PerfilNivel from '../PerfilNivel/PerfilNivel'
import './PerfilNiveles.css'

const levels = [
  {level: 1,status: 2, items: [
    'Acceso a Mis cursos',
    'Escala comisional a definir',
    'Acceso a CRM completo',
    'Acceso a folletería'
  ]},
  {level: 2,status: 1, items: [
    'Acceso a Mis cursos',
    'Escala comisional a definir',
    'Acceso a CRM completo',
    'Acceso a folletería',
    'Acceso a campañas de MKT'
  ], upgrades: [
    'Superar “n” cápitas por mes',
    'Superar “x” facturación',
    'Realizar curso Nivel 1 + evaluación'
  ]},
  {level: 3,status: 1, items: [
    'Acceso a Mis cursos',
    'Escala comisional a definir',
    'Acceso a CRM completo',
    'Acceso a folletería',
    'Acceso a campañas de MKT',
    'Creación e landing propia'
  ], upgrades: [
    'Superar “n” cápitas por mes',
    'Superar “x” facturación',
    'Realizar curso Nivel 2 + evaluación'
  ]},
  {level: 4,status: 0, items: []},
  {level: 5,status: 0, items: []},
  {level: 6,status: 0, items: []}
]

const PerfilNiveles = () => {
  return (
    <div className="perfilNiveles">
      {levels.map( (level, i) => {
        return <PerfilNivel key={`levelContainer ${i}`} level = {level}/>
      })}
    </div>
  )
}
export default PerfilNiveles