import SubmitImg from '../assets/done.png'

const Submit = () => {
    const handleReload = () => {
        window.location.reload()
    }
  return (
    <div className='submit-container'>
      <img src={SubmitImg} alt="" />
      <h3>Submitted Succesfully!</h3>
      <button  className='btn' onClick={handleReload}>Done</button>
    </div>
  )
}

export default Submit
