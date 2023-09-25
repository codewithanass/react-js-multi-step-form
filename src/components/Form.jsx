import {useEffect, useState } from 'react'
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import OtherInfo from './OtherInfo';
import Submit from './Submit';

const Form = () => {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    })
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [passwordError, setPasswordError] = useState('')


    const FormTitles = ["SignUp", "Personal Info", "Other"];

    const pageDisplay = () => {
       if (page == 0) 
        {
            return <SignUpInfo 
                formData={formData} 
                setFormData={setFormData} 
                validateForm={validateForm} 
                passwordError={passwordError}
            />
        } else if (page == 1) {
            return <PersonalInfo 
                formData={formData} 
                setFormData={setFormData} 
                updateButtonDisabledState={updateButtonDisabledState} 
            />
       1} else {
        return <OtherInfo formData={formData} setFormData={setFormData} />
       }
    }

    const validateForm = () => {
        const isEmailValid =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
        const isPasswordMatch = formData.password === formData.confirmPassword;
        const passwordErrorMessage = isPasswordMatch ? '' : 'Passwords do not match';
    
        setIsNextButtonDisabled( !isEmailValid || !isPasswordMatch)
        setPasswordError(passwordErrorMessage)
    }

    const updateButtonDisabledState = () => {
        const isFirstNameEmpty = formData.firstName.trim() === '';
        const isLastNameEmpty = formData.lastName.trim() === '';
        const isUsernameEmpty = formData.username.trim() === '';
      
        // If any of the fields are empty, set the button as disabled
        setIsButtonDisabled(isFirstNameEmpty || isLastNameEmpty || isUsernameEmpty);
    };
      

    useEffect(() => {
        updateButtonDisabledState();
    }, [formData])

    const handleSubmit = () => {
        console.log(formData)
        setIsFormSubmitted(true)
    }
    

  return (
    <>
        <div className="progressbar">
          <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}} ></div>
        </div>
        {isFormSubmitted ? (
            <Submit />
        ) : (
            <div className='form'> 
                <div className="form-container">
                    <div className="header">
                        <h1>{FormTitles[page]}</h1>
                    </div>
                    <div className="body"> {pageDisplay()} </div>
                    <div className="footer">
                        <button 
                            className='btn'
                            disabled={page == 0}
                            onClick={() => {setPage((currPage) => currPage - 1)}}>
                            Prev
                        </button>
                        <button 
                            className='btn'
                            disabled={page == 0 ? isNextButtonDisabled : isButtonDisabled }
                            onClick={() => {
                                if(page == FormTitles.length - 1) {
                                    handleSubmit();
                                } else {
                                    setPage((currPage) => currPage + 1)}
                                    updateButtonDisabledState();
                                }
                                }>
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        )}
        
    </>
   
  )
}

export default Form
