import CloseIcon from '@mui/icons-material/Close'
import './CustomModal.css'

const CustomModal = ({children, open, setOpen, header, body}) => {

  const handleClose = (e) => {
    if(e.currentTarget === e.target) setOpen(false)
  }

  return (
    <div className={open ? 'customModal visible' : 'customModal'} onClick={e => handleClose(e)}>
      <div className="customMmodalContainer">
        <div className={header ? 'closeIcon headerIcon' : 'closeIcon'}>
          <CloseIcon style={{cursor: 'pointer'}} onClick={() => setOpen(false)}/>
        </div>

        {header ? (
          <div className="modalHeader">{header}</div>
        ) : false }

        <div className='modalBody'>{body}</div>
      </div>
    </div>
  )
}
export default CustomModal