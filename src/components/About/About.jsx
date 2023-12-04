import { Section } from 'settings/Section';
import About1Img1x from '../../images/About1@1x.jpg';
import About1Img2x from '../../images/About1@2x.jpg';
import About2Img1x from '../../images/About2@1x.jpg';
import About2Img2x from '../../images/About2@2x.jpg';

import {
  AboutBlock,
  AboutDescription,
  AboutItem,
  AboutList,
  AboutText,
  AboutTitle,
  MainDescription,
  MainTitle,
  MainValues,
  Picture,
} from './About.styled';

const AboutComponent = () => {
  return (
    <Section>
      <MainValues>
        <MainTitle>Main values of our company</MainTitle>
        <MainDescription>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </MainDescription>
      </MainValues>
      <AboutDescription>
        <AboutBlock>
          <AboutList>
            <AboutItem>
              <AboutTitle>Openness</AboutTitle>
              <AboutText>
                to the world, people, new ideas and projects
              </AboutText>
            </AboutItem>
            <AboutItem>
              <AboutTitle>Responsibility</AboutTitle>
              <AboutText>
                we are aware that the results of our work have an impact on our
                lives and the lives of future generations
              </AboutText>
            </AboutItem>
          </AboutList>
          <Picture>
            <source
              srcSet={`${About1Img1x} 1x, ${About1Img2x} 2x`}
              type="image/jpeg"
            />
            <img src={About1Img1x} alt="AboutImage" />
          </Picture>
        </AboutBlock>
        <AboutBlock>
          <Picture>
            <source
              srcSet={`${About2Img1x} 1x, ${About2Img2x} 2x`}
              type="image/jpeg"
            />
            <img src={About2Img1x} alt="AboutImage" />
          </Picture>
          <AboutList>
            <AboutItem>
              <AboutTitle>Innovation</AboutTitle>
              <AboutText>
                we use the latest technology to implement non-standard solutions
              </AboutText>
            </AboutItem>
            <AboutItem>
              <AboutTitle>Quality</AboutTitle>{' '}
              <AboutText>
                we do not strive to be the first among others, but we want to be
                the best in our business
              </AboutText>
            </AboutItem>
          </AboutList>
        </AboutBlock>
      </AboutDescription>
    </Section>
  );
};

export default AboutComponent;
