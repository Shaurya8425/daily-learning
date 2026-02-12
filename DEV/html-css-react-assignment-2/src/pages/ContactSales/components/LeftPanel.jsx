import React from "react";
import Cisco from "../../../assets/cisco-white.svg";
import DeutscheTelekom from "../../../assets/deutsche-telekom-white.svg";
import WaltDisney from "../../../assets/walt-disney-studios-white.svg";
import Nvidia from "../../../assets/nvidia-white.svg";
import Salesforce from "../../../assets/salesforce-white.svg";
import Rocket from "../../../assets/rocket.svg";
import Shield from "../../../assets/shield.svg";
import Star from "../../../assets/star-svgrepo-com.svg";
import HalfStar from "../../../assets/half-star-svgrepo-com.svg";
import Enterprise from "../../../assets/enterprise.svg";
function LeftPanel() {
  return (
    <div className='home-left'>
      <p className="home-left-name">IIElevenLabs</p>
      <div className='home-left-content'>
      <p className="home-left-title">Contact our sales team</p>
        <p>
          <img src={Rocket} alt='' />
          Custom pricing and elevated concurrency
        </p>
        <p>
          <img src={Shield} alt='' />
          Enterprise-grade security including SOC II, GDPR and HIPAA compliance
        </p>
        <p>
          <img src={Enterprise} alt='' />
          Enterprise support and SLAs
        </p>
        <p className="home-left-trusted">Trusted by 10,000+ leading businesses</p>
      </div>
      <div className='home-left-company-logo'>
        <img src={Cisco} alt='' />
        <img src={DeutscheTelekom} alt='' />
        <img src={WaltDisney} alt='' />
        <img src={Nvidia} alt='' />
        <img src={Salesforce} alt='' />
      </div>
      <div className="home-left-review">
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={Star} alt="" />
        <img src={HalfStar} alt="" />
        <p>4.5 stars and 1,059+ reviews</p>
      </div>
    </div>
  );
}

export default LeftPanel;
