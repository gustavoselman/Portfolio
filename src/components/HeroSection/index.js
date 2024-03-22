import React from 'react';
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImage from '../../images/HeroImage.jpg';
import HeroBgAnimation from '../HeroBgAnimation';
import { 
  HeroContainer,
  HeroBg,
  HeroInnerContainer,
  HeroLeftContainer,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  Image,
  HeroRightContainer,
  TextLoop
} from './HeroStyle';

const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={HeroImage} alt='Hero Image' />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero