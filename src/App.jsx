import Header from './components/Header';
import ProjectBox from './components/ProjectBox';
import ProjectsContainer from './components/ProjectsContainer';

import postifySite from './img/postify-site.png';
import messengerSite from './img/messenger-site.png';
import pearSite from './img/pear-site.png';
import weatherSite from './img/weather-site.png';
import pearBanner from './img/pear-banner.png';
import picscanBanner from './img/picscan-banner.png';
import weatherBanner from './img/weather-banner.png';
import reminderBanner from './img/reminder-banner.png';

function App() {
  return (
    <>
      <Header />

      <ProjectsContainer>
        <ProjectBox projectName='Postify' projectDescription='A basic social media website written with PHP. University Project for Advanced Web Development course.' projectBanner={postifySite} bannerAlt='Postify banner logo' projectUrl='https://github.com/YAJATapps/Postify' />
        <ProjectBox projectName='Messenger' projectDescription='The frontend of a test messenger. Not completed.' projectBanner={messengerSite} bannerAlt='Messenger banner logo' projectUrl='https://github.com/YAJATapps/Messenger' />
      </ProjectsContainer>


      <ProjectsContainer>
        <ProjectBox projectName='Pear Launcher Website' projectDescription='Website for Pear Launcher.' projectBanner={pearSite} bannerAlt='Pear Launcher Site banner logo' projectUrl='https://pearlauncher.github.io/about.html' />
        <ProjectBox projectName='Weather Site' projectDescription='A react app that uses open weather map API.' projectBanner={weatherSite} bannerAlt='Weather site banner logo' projectUrl='https://github.com/YAJATapps/WeatherSite' />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='Pear Launcher' projectDescription='Android Launcher App.' projectBanner={pearBanner} bannerAlt='Pear Launcher banner logo' projectUrl='https://play.google.com/store/apps/details?id=com.pearlauncher.pearlauncher' />
        <ProjectBox projectName='PicScan' projectDescription='Document Scanner App.' projectBanner={picscanBanner} bannerAlt='PicScan banner logo' projectUrl='https://play.google.com/store/apps/details?id=com.picscan' />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='Weather App' projectDescription='University Project for App Development course.' projectBanner={weatherBanner} bannerAlt='Weather App banner logo' projectUrl='https://github.com/YAJATapps/WeatherApp' />
        <ProjectBox projectName='Reminder App' projectDescription='University Project for Human computer interaction course.' projectBanner={reminderBanner} bannerAlt='Reminder App banner logo' projectUrl='https://github.com/YAJATapps/ReminderApp' />
      </ProjectsContainer>
    </>
  );
}

export default App;
