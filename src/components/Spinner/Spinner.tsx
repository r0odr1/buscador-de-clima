import './Spinner.css'

export default function Spinner() {
  return (
    <div className='wrapper'>
      <div className="spinner"></div>
      <p className="loading-text">Consultando clima...</p>
    </div>
  )
}
