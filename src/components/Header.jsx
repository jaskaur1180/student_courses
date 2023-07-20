import './Header.css';
import abroadImg from '../assets/study_abroad_logo.png';
import Navigation from './Navigation'

function Header() {

  return (
    <>
    <Navigation />
    <div className="container-header">
      <div className="container-banner">
        <div className="container-text"> 
          <h1 className='title'>Study Abroad!</h1>
            <p>This an amazing opportunity to spend an academic year at one of our partner universities around the world studying modules to help you learn about your host country and/or related to your degree subject in Liverpool. </p>
            <p>Click on the available courses below to find out where you could be studying next year... </p>
        </div>
          <img className="d-none d-lg-block img-abroadImg" src={abroadImg} alt="Study Abroad Logo"/>
      </div>
    </div>
    </>
  )
}

export default Header
