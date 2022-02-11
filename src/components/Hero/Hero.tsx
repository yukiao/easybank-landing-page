import styled from "styled-components";
import { device } from "../../Const";

const Wrapper = styled.section`
  background-color: hsl(0, 0%, 98%);
  width: 100vw;
  overflow-x: hidden;
`;

const InnerWrapper = styled.div`
  @media ${device.laptopM} {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    min-height: 75vh;
  }

  @media ${device.laptopL} {
    width: 80%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media ${device.laptopM} {
    position: static;
    flex: 2;
  }
`;

const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media ${device.laptopM} {
    flex: 1;
    margin-top: 80px;
    text-align: left;
  }
`;

const IntroMobile = styled.img`
  display: block;
  @media ${device.laptopM} {
    display: none;
  }
`;
const IntroDesktop = styled.img`
  display: none;
  @media ${device.laptopM} {
    display: block;
    position: absolute;
    bottom: -20%;
    transform: scale(0.85);
    top: -25%;
  }
`;

const Mockup = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  bottom: 13%;

  @media ${device.laptopM} {
    top: -10%;
    width: auto;
    right: -9%;
  }
`;

const HeroHeading = styled.h1`
  font-weight: 400;
  font-size: 2.2rem;
  color: hsl(233, 26%, 24%);
`;

const HeroParagraph = styled.p`
  font-weight: 300;
  color: hsl(233, 8%, 62%);
  font-size: 0.8rem;
  line-height: 1.6;
  margin: 28px 0;

  @media ${device.laptopS} {
    font-size: 0.9rem;
  }
`;

const CTAButton = styled.button`
  border: none;
  font-weight: 700;
  color: white;
  background: linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
  padding: 12px 28px;
  border-radius: 50px;
  margin-bottom: 120px;

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <ImageWrapper>
          <IntroMobile src="/images/bg-intro-mobile.svg" />
          <IntroDesktop src="/images/bg-intro-desktop.svg" />
          <Mockup src="/images/image-mockups.png" />
        </ImageWrapper>
        <Container>
          <HeroHeading>Next generation digital banking</HeroHeading>
          <HeroParagraph>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </HeroParagraph>

          <CTAButton> Request Invite</CTAButton>
        </Container>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Hero;
