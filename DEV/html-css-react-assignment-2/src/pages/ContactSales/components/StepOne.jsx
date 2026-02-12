import React from 'react'

function StepOne({onNext}) {
  return (
    <div className='right-panel-step-one'>
      <div className='right-panel-step-one-container'>
        <p className='right-panel-step-one-container-title'>Contact sales form</p>
        <p className='right-panel-step-one-container-detail'>
          Please fill out the form below to get started
        </p>
        <form className='right-panel-step-one-form' action=''>
          <label className='right-panel-step-one-form-lable' htmlFor=''>
            Company Website
          </label>
          <input className='right-panel-step-one-form-input' type='text' />
          <label className='right-panel-step-one-form-lable' htmlFor=''>
            Business Email
          </label>
          <input className='right-panel-step-one-form-input' type='text' />
        </form>
        <div className='right-panel-step-one-form-box'>
          <button className='right-panel-step-one-form-box-btn' onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default StepOne