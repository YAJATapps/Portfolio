import Header from './Header';
import ProjectBox from './ProjectBox';
import ProjectsContainer from './ProjectsContainer';
import SectionTitle from './SectionTitle';
import SectionBox from './SectionBox';
import AboutBox from './AboutBox';
import Footer from './Footer';

import postifySite from './../img/postify-site.png';
import messengerSite from './../img/messenger-site.png';
import pearSite from './../img/pear-site.png';
import weatherSite from './../img/weather-site.png';
import pearBanner from './../img/pear-banner.png';
import picscanBanner from './../img/picscan-banner.png';
import weatherBanner from './../img/weather-banner.png';
import reminderBanner from './../img/reminder-banner.png';
import newsBanner from './../img/news-banner.png';
import ticTacToeBanner from './../img/tictactoe-banner.png';
import EducationBox from './EductionBox';
import SkillsBox from './SkillsBox';
import ColorBox from './ColorBox';

// A function to return main screen of the app
function App() {
  return (
    <>
      <Header />

      <SectionTitle sectionName='About me' id='AboutScroll' />
      <SectionBox>
        <AboutBox />
      </SectionBox>

      <ColorBox boxColor='#f2f2f5'>
        <SectionTitle sectionName='Education' id='EducationScroll' />
        <SectionBox>
          <EducationBox />
        </SectionBox>
      </ColorBox>

      <SectionTitle sectionName='Projects' id='ProjectsScroll' />
      <ProjectsContainer>
        <ProjectBox projectName='Pear Launcher' projectDescription='Android Launcher App.' projectBanner={pearBanner} bannerAlt='Pear Launcher banner logo' buttons={{ playstore: 'https://play.google.com/store/apps/details?id=com.pearlauncher.pearlauncher' }} />
        <ProjectBox projectName='PicScan' projectDescription='Document Scanner App.' projectBanner={picscanBanner} bannerAlt='PicScan banner logo' buttons={{ playstore: 'https://play.google.com/store/apps/details?id=com.picscan' }} />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='Postify' projectDescription='A basic social media website written with PHP. University Project for Advanced Web Development course.' projectBanner={postifySite} bannerAlt='Postify banner logo' buttons={{ website: 'https://postify.yajatkumar.com', github: 'https://github.com/YAJATapps/Postify' }} />
        <ProjectBox projectName='Messenger' projectDescription='A test messenger.' projectBanner={messengerSite} bannerAlt='Messenger banner logo' buttons={{ website: 'https://messenger.yajatkumar.com', github: 'https://github.com/YAJATapps/Messenger' }} />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='Pear Launcher Website' projectDescription='Website for Pear Launcher.' projectBanner={pearSite} bannerAlt='Pear Launcher Site banner logo' buttons={{ website: 'https://pearlauncher.github.io/about.html', github: 'https://github.com/PearLauncher/pearlauncher.github.io' }} />
        <ProjectBox projectName='Weather Site' projectDescription='A react app that uses open weather map API.' projectBanner={weatherSite} bannerAlt='Weather site banner logo' buttons={{ website: 'https://weathersite.yajatkumar.com', github: 'https://github.com/YAJATapps/WeatherSite' }} />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='Weather App' projectDescription='University Project for Mobile App Development course.' projectBanner={weatherBanner} bannerAlt='Weather App banner logo' buttons={{ github: 'https://github.com/YAJATapps/WeatherApp' }} />
        <ProjectBox projectName='Reminder App' projectDescription='University Project for Human computer interaction course.' projectBanner={reminderBanner} bannerAlt='Reminder App banner logo' buttons={{ github: 'https://github.com/YAJATapps/ReminderApp' }} />
      </ProjectsContainer>

      <ProjectsContainer>
        <ProjectBox projectName='News App' projectDescription='Android app written in Kotlin which uses REST APIs to get data from news API.' projectBanner={newsBanner} bannerAlt='News App banner logo' buttons={{ playstore: 'https://play.google.com/store/apps/details?id=com.yajatkumar.newsapp', github: 'https://github.com/YAJATapps/NewsApp' }} />
        <ProjectBox projectName='TicTacToe' projectDescription='Made a Tic-tac-toe game, cross platform with swift that works on iOS and macOS.' projectBanner={ticTacToeBanner} bannerAlt='TicTacToe banner logo' buttons={{ github: 'https://github.com/YAJATapps/TicTacToe' }} />
      </ProjectsContainer>

      <ColorBox boxColor='#f2f2f5'>
        <SectionTitle sectionName='Skills' id='SkillsScroll' />
        <SectionBox>
          <SkillsBox />
        </SectionBox>
      </ColorBox>
      <br />

      <Footer />
    </>
  );
}

export default App;
