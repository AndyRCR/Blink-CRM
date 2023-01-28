import './Switch.css'

const Switch = ({setState, state, name}) => {

  return (
    <div className='switch'>
        <div
        onClick={() => setState({
            ...state,
            [name]: !state[name]
        })}
        className={state[name] ? 'switchContainer on' : 'switchContainer off'}>
            <div className={state[name] ? 'button on' : 'button off'}></div>
        </div>
    </div>
  )
}
export default Switch