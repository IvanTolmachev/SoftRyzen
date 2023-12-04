import { Container } from 'settings/Container';
import AboutComponent from './About/About';
import HeaderComponent from './Header/Header';
import MainComponent from './Main/Main';
import { Main } from 'settings/Shared';
import ElectricityComponent from './Electricity/Electricity';
import FAQComponent from './FAQ/FAQ';

export const App = () => {
  return (
    <>
      <HeaderComponent />
      <Container>
        <Main>
          <MainComponent />
          <AboutComponent />
          <ElectricityComponent />
          <FAQComponent />
        </Main>
      </Container>
    </>
  );
};