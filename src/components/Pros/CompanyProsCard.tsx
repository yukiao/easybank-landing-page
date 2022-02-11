import styled from "styled-components";
import { device } from "../../Const";

interface AppProps {
  image: string;
  title: string;
  description: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px 0 10px;

  @media ${device.laptopS} {
    align-items: flex-start;
  }
`;

const Heading = styled.h3`
  color: var(--color-dark-blue);
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 28px;
`;

const Paragraph = styled.p`
  font-weight: 300;
  color: hsl(233, 8%, 62%);
  font-size: 0.85rem;
  line-height: 1.6;
  margin: 28px 0;
`;

const CompanyProsCard: React.FC<AppProps> = ({ image, title, description }) => {
  return (
    <Wrapper>
      <img
        src={`/images/${image}`}
        alt={title.toLowerCase().split(" ").join("-")}
      />
      <Heading>{title}</Heading>
      <Paragraph>{description}</Paragraph>
    </Wrapper>
  );
};

export default CompanyProsCard;
