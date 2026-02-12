import React from "react";
import Back from "../../../assets/angle-left-svgrepo-com.svg";
import Info from "../../../assets/info-svgrepo-com.svg";
function StepTwo({ onBack, submit }) {
  return (
    <div className='right-panel-step-two'>
      <div className='right-panel-step-two-box'>
        <h1 className='right-panel'>Tell us about yourself</h1>
        <h4>Help us understand your need better</h4>
        <form className='right-panel-step-two_form' action=''>
          <div className='tell-about_name'>
            <div className='tell-about_name_first'>
              <label htmlFor=''>First Name</label>
              <input type='text' placeholder='First name' />
            </div>
            <div className='tell-about_name_last'>
              <label htmlFor=''>Last Name</label>
              <input type='text' placeholder='Last name' />
            </div>
          </div>
          <div className='tell-about_country'>
            <label htmlFor=''>Country</label>
            <img src={Info} alt='' />
          </div>
          <input type='text' />
          <div className='tell-about_phone'>
            <label htmlFor=''>Phone Number</label>
            <span>Optional</span>
          </div>
          <input type='text' />

          <label htmlFor=''>
            Please tell us more about your use case and how we can best help you
          </label>
          <textarea></textarea>
          <div className='tell-about_hear'>
            <label htmlFor=''>How did you hear about us</label>
            <span>Optional</span>
          </div>
          <input type='text' />
        </form>
        <div className='tell-about_back_submit'>
          <button className='tell-about_back' onClick={onBack}>
            <img src={Back} alt='' />
          </button>
          <button className='tell-about_submit' onClick={submit}>
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
