import OtherImg from '../assets/globe-earth.png'

const OtherInfo = ({formData, setFormData}) => {
  return (
    <div className='other-info-container'>
      <div className="image">
        <img src={OtherImg} alt="globe-icon" />
      </div>
      <div className="input-fields-container">
      <input 
        type="text" 
        placeholder='Nationality'
        value={formData.nationality} 
        onChange={(event) => setFormData({...formData, nationality: event.target.value})}
      />
      <input 
        type="text" 
        placeholder='Other'
        value={formData.other} 
        onChange={(event) => setFormData({...formData, other: event.target.value})}
      />
      </div>
    </div>
  )
}

export default OtherInfo
