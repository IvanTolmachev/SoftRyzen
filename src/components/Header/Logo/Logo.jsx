import logo from '../../../images/logo.svg';
import {
  LinkLogo,
  LogoImg,
} from './Logo.styled';

const LogoComponent = () => {
  return (
    <LinkLogo href="/index">
      <LogoImg src={logo} alt="Logo" />
    </LinkLogo>
  );
};

export default LogoComponent;
