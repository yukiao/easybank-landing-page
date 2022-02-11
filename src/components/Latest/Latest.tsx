import styled from "styled-components";
import { device } from "../../Const";
import ArticleCard from "./ArticleCard";

const Wrapper = styled.section`
  background: var(--color-very-light-gray);
  padding: 100px 0;
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
  text-align: center;

  @media ${device.laptopS} {
    text-align: left;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media ${device.laptopS} {
    flex-direction: row;
  }
`;

const Latest: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Latest Articles</Heading>
        <ArticleContainer>
          <ArticleCard
            image="image-currency.jpg"
            writer="Claire Robinson"
            title="Receive money in any currency with no fees"
            description="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
          />
          <ArticleCard
            image="image-restaurant.jpg"
            writer="Wilson Hutton"
            title="Treat yourself without worrying about money"
            description="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
          />
          <ArticleCard
            image="image-plane.jpg"
            writer="Wilson Hutton"
            title="Take your Easybank wherever you go"
            description="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
          />
          <ArticleCard
            image="image-confetti.jpg"
            writer="Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            description="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
          />
        </ArticleContainer>
      </Container>
    </Wrapper>
  );
};

export default Latest;
