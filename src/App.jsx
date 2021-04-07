import Header from './components/Header';
import ProjectBox from './components/ProjectBox';
import ProjectsContainer from './components/ProjectsContainer';
import pearBanner from './img/pear-banner.png';
import picscanBanner from './img/picscan-banner.png';

function App() {
  return (
    <>
      <Header />

      <ProjectsContainer>
        <ProjectBox projectName='Pear Launcher' projectDescription='Android Launcher App' projectBanner={pearBanner} bannerAlt='Pear Launcher banner logo' />
        <ProjectBox projectName='PicScan' projectDescription='Document Scanner App' projectBanner={picscanBanner} bannerAlt='PicScan banner logo' />
      </ProjectsContainer>
    </>
  );
}

export default App;
