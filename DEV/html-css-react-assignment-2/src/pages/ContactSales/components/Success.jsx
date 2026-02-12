import React from "react";

function Success({reStart}) {
  return (
    <div className='right-panel-step-three'>
      <div className='right-panel-step-three_box'>
        <h1 className='thanks-title'>Thanks for reaching out!</h1>
        <h4 className='thanks-description'>Our team will get back to you soon!</h4>
        <p>
          <a href=''>Get inspired</a> by Enterprises who have launched
          incredible conversational agents across <a href=''>sales</a>,{" "}
          <a href=''>customer support</a>, and <a href=''>staffing</a>.
        </p>
        <p>
          Head to our <a href=''>webinar page</a> for deep dives with industry
          experts and our product team.
        </p>
        <p>
          Or <a href=''>sign up free</a> to try our platform yourself.
        </p>
        <div className='thanks-iframe'>
          <iframe
            src='https://www.youtube.com/embed/v-EYzZCLF48'
            title='Introducing ElevenLabs Conversational Agents'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </div>
        <p>To submit updated details, start a new submission below:</p>
        <button onClick={reStart} className="thanks-btn">START NEW SUBMISSION</button>
      </div>
    </div>
  );
}

export default Success;
