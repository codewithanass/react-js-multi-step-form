import {useEffect, useState} from 'react'
import {BiHide, BiShowAlt} from 'react-icons/bi'
import ContactImg from '../assets/contact.png'
import PasswordStrengthBar from 'react-password-strength-bar'

const SignUpInfo = ({formData, setFormData, validateForm, passwordError}) => {
  const [password, setPassword] = useState(formData.password);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(formData.confirmPassword);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  }

  const toggleConfirmPassVisibility = () => {
    setShowConfirmPassword(showConfirmPassword => !showConfirmPassword)
  }

  const handleOnChnage = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData, 
      [name] : value,
    });

    if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    }
  }

  useEffect(() => {
    validateForm();
  }, [formData, password, confirmPassword])

  

  return (
    <div className='sign-up-container'>

      <div>
        <img src={ContactImg} alt="contact-image" />
      </div>


      <div className="input-fields-container">
      <input 
        type="email" 
        placeholder='Email Address' 
        name='email'
        value={formData.email} 
        onChange={handleOnChnage} 
        required
        // autoComplete='off'
      />
      <div className="password-field">
        <input 
          type={showPassword ? "text" : "password"} 
          placeholder='Password' 
          name='password'
          value={password} 
          onChange={handleOnChnage}
        />
        {showPassword ? 
          <BiHide className='icon' onClick={togglePasswordVisibility}/> : 
          <BiShowAlt className='icon' onClick={togglePasswordVisibility} /> 
        }
        <PasswordStrengthBar password={password} scoreWords={['short', 'weak', 'okay', 'good', 'strong']} />
      </div>
      
      <div className="confirmPass-field">
        <input 
          type={showConfirmPassword ? "text" : "password"}
          placeholder='Confirm Password'
          name='confirmPassword'
          value={confirmPassword} 
          onChange={handleOnChnage}  
        />
        {showConfirmPassword ? 
          <BiHide className='icon' onClick={toggleConfirmPassVisibility}/> : 
          <BiShowAlt className='icon' onClick={toggleConfirmPassVisibility} /> 
        }
        {passwordError && <div className='errorMessage'>{passwordError}</div>}
      </div>
      </div>
    </div>
  )
}

export default SignUpInfo
