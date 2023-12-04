import ButtonMore from 'components/Buttons/ButtonArrow';
import React from 'react';
import HeroImageDesktop1x from '../../images/heroImgx1.jpg';
import HeroImageDesktop2x from '../../images/heroImgx2.jpg';
import HeroImageTablet1x from '../../images/heroImgTabletx1.jpg';
import HeroImageTablet2x from '../../images/heroImgTabletx2.jpg';
import HeroImagePhone1x from '../../images/heroImgPhonex1.jpg';
import HeroImagePhone2x from '../../images/heroImgPhonex2.jpg';
import {
  Copyright,
  HeroDescription,
  HeroInformation,
  HeroLocation,
  HeroMail,
  HeroMailBox,
  HeroText,
  HeroTitle,
  HeroTitleBox,
  HeroTopText,
} from './Main.styled';

const MainComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div>
      <div>
        <HeroTopText>
          <HeroTitleBox>
            <HeroTitle>Renewable energy for any task</HeroTitle>
          </HeroTitleBox>
          <HeroDescription>
            <HeroText>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </HeroText>
            <ButtonMore onClick={handleClick} label="Learn more" />
          </HeroDescription>
        </HeroTopText>
        <HeroInformation>
          <HeroLocation href="https://maps.app.goo.gl/VetCRL1nfsCvXd8i7">
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </HeroLocation>
          <HeroMailBox>
            <HeroMail href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </HeroMail>
            <Copyright>ecosolution © 2023</Copyright>
          </HeroMailBox>
        </HeroInformation>
        <picture>
          <source
            srcSet={`${HeroImageDesktop1x} 1x, ${HeroImageDesktop2x} 2x`}
            media="(min-width: 1280px)"
            type="image/jpeg"
          />
          <source
            srcSet={`${HeroImageTablet1x} 1x, ${HeroImageTablet2x} 2x`}
            media="(min-width: 768px)"
            type="image/jpeg"
          />
          <source
            srcSet={`${HeroImagePhone1x} 1x, ${HeroImagePhone2x} 2x`}
            media="(max-width: 767px)"
            type="image/jpeg"
          />
          <img src={HeroImageDesktop1x} alt="HeroImage" width="1280" />
        </picture>
      </div>
    </div>
  );
};

export default MainComponent;
