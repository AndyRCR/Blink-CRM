import './EscuelitaApuntes.css'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'

const apuntes = ['Introducción', 'Prepagas', 'Título']

const EscuelitaApuntes = () => {
    return (
        <div className="escuelitaApuntes">
            {apuntes.map((el, i) => {
                return (
                    <div className='apunteItem' key={`apunte${i + 1}`}>
                        <p>{i + 1}. {el}</p>
                        <FileDownloadOutlinedIcon/>
                    </div>
                )
            })}
        </div>
    )
}
export default EscuelitaApuntes