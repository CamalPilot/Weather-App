import './Input.css'
import search from './assets/icon_search.svg'

const Input = ({onChange, value, onClick }) => {
  
  return (
    <div className='input'>
        <input type="text" placeholder='City' value={value} onChange={onChange}/>
        <button><img src={search} alt="search" onClick={onClick}/></button>
    </div>
  )
}

export default Input