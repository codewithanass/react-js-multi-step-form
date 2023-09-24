import PersonalImg from '../assets/id-card.png'

const PersonalInfo = ({formData, setFormData, updateButtonDisabledState}) => {

  const handleOnChnage = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value
    });
  } 
  

  return (
    <div className='personal-info-container'>

      <div className='image'>
        <img src={PersonalImg} alt="women-image" />
      </div>

      <div className="input-fields-container">
        <input 
          type="text" 
          placeholder='First Name'
          name='firstName'
          value={formData.firstName} 
          onChange={handleOnChnage} 
        />
        <input 
          type="text" 
          placeholder='Last Name'
          name='lastName'
          value={formData.lastName} 
          onChange={handleOnChnage} 
        />
        <input 
          type="text" 
          placeholder='Username'
          name='username'
          value={formData.username} 
          onChange={handleOnChnage} 
        />
      </div>
    </div>
  )
}

export default PersonalInfo
