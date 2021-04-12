import Header from './Header';
import ProjectBox from './ProjectBox';
import ProjectsContainer from './ProjectsContainer';
import Footer from './Footer';

import postifySite from './../img/postify-site.png';
import messengerSite from './../img/messenger-site.png';
import pearSite from './../img/pear-site.png';
import weatherSite from './../img/weather-site.png';
import pearBanner from './../img/pear-banner.png';
import picscanBanner from './../img/picscan-banner.png';
import weatherBanner from './../img/weather-banner.png';
import reminderBanner from './../img/reminder-banner.png';

function App() {
  return (
    <>
      <Header />

      <ProjectsContainer>
        <ProjectBox projectName='Postify' projectDescription='A basic social media website written with PHP. University Project for Advanced Web Development course.' projectBanner={postifySite} bannerAlt='Postify banner logo' buttons={{ website:'https://postify.yajatkumar.com', github: 'https://github.com/YAJATapps/Postify' }} />
        <ProjectBox projectName='Messenger' projectDescription='The frontend of a test messenger. Not completed.' projectBanner={messengerSite} bannerAlt='Messenger banner logo' buttons={{ github: 'https://github.com/YAJATapps/Messenger' }} />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='Pear Launcher Website' projectDescription='Website for Pear Launcher.' projectBanner={pearSite} bannerAlt='Pear Launcher Site banner logo' buttons={{ website: 'https://pearlauncher.github.io/about.html', github: 'https://github.com/PearLauncher/pearlauncher.github.io' }} />
        <ProjectBox projectName='Weather Site' projectDescription='A react app that uses open weather map API.' projectBanner={weatherSite} bannerAlt='Weather site banner logo' buttons={{ website: 'https://weathersite.yajatkumar.com', github: 'https://github.com/YAJATapps/WeatherSite' }} />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='Pear Launcher' projectDescription='Android Launcher App.' projectBanner={pearBanner} bannerAlt='Pear Launcher banner logo' buttons={{ playstore: 'https://play.google.com/store/apps/details?id=com.pearlauncher.pearlauncher' }} />
        <ProjectBox projectName='PicScan' projectDescription='Document Scanner App.' projectBanner={picscanBanner} bannerAlt='PicScan banner logo' buttons={{ playstore: 'https://play.google.com/store/apps/details?id=com.picscan' }} />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='Weather App' projectDescription='University Project for Mobile App Development course.' projectBanner={weatherBanner} bannerAlt='Weather App banner logo' buttons={{ github: 'https://github.com/YAJATapps/WeatherApp' }} />
        <ProjectBox projectName='Reminder App' projectDescription='University Project for Human computer interaction course.' projectBanner={reminderBanner} bannerAlt='Reminder App banner logo' buttons={{ github: 'https://github.com/YAJATapps/ReminderApp' }} />
      </ProjectsContainer>

      <Footer />
    </>
  );
}

export default App;
