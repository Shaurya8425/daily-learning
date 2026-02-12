import React, { useState } from "react";
import LeftPanel from "./components/LeftPanel";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import Success from "./components/Success";

function ContactSalesPage() {
  const [step, setStep] = useState(1);
  function goNext() {
    setStep(2);
  }
  function submit() {
    setStep(3);
  }
  function reStart() {
    setStep(1);
  }
  function goBack() {
    setStep(1);
  }
  return (
    <div className='home'>
      <LeftPanel />
      <div className='right-panel'>
        <div
          className='steps-track'
          style={{ transform: `translateX(-${step - 1})` }}
        >
          {step === 1 && <StepOne onNext={goNext} />}

          {step === 2 && <StepTwo submit={submit} onBack={goBack} />}

          {step === 3 && <Success reStart={reStart} />}
        </div>
      </div>
    </div>
  );
}

export default ContactSalesPage;
