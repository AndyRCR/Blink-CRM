import './Switch.css'

const Switch = ({ disabled, setState, state, name }) => {

  return (
    <div className='switch'>
      <div
        style={{cursor: disabled ? 'default' : 'pointer'}}
        onClick={() => {
          if (!disabled) {
            setState({
              ...state,
              [name]: !state[name]
            })
          }
        }}
        className={state[name] ? 'switchContainer on' : 'switchContainer off'}>
        <div className={state[name] ? 'button on' : 'button off'}></div>
      </div>
    </div>
  )
}
export default Switch