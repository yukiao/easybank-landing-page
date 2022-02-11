import styled from "styled-components";
import { device } from "../../Const";
import CompanyProsCard from "./CompanyProsCard";

const Wrapper = styled.div`
  background: hsl(220, 16%, 96%);
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media ${device.laptopS} {
    text-align: left;
  }

  @media ${device.laptopL} {
    width: 80%;
  }
`;

const Heading = styled.h2`
  color: var(--color-dark-blue);
  font-weight: 400;
  font-size: 1.95rem;
`;

const Paragraph = styled.p`
  font-weight: 300;
  color: hsl(233, 8%, 62%);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 28px 0;
`;

const CompanyProsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  @media ${device.laptopS} {
    flex-direction: row;
  }
`;

const Pros: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Why choose Easybank?</Heading>
        <Paragraph>
          We leverage Open Banking to turn your bank account into yout financial
          hub. Control your finances like never before.
        </Paragraph>
        <CompanyProsContainer>
          <CompanyProsCard
            image="icon-online.svg"
            title="Online Banking"
            description="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
          <CompanyProsCard
            image="icon-budgeting.svg"
            title="Simpe Budgeting"
            description="See exactly where your money goes each month. Receive notification when you're close to your hitting limits."
          />
          <CompanyProsCard
            image="icon-onboarding.svg"
            title="Fast Onboarding"
            description="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          />

          <CompanyProsCard
            image="icon-api.svg"
            title="Open API"
            description="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </CompanyProsContainer>
      </Container>
    </Wrapper>
  );
};

export default Pros;
