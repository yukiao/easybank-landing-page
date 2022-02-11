import styled from "styled-components";
import { device } from "../../Const";

interface AppProps {
  image: string;
  writer: string;
  title: string;
  description: string;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  margin-top: 32px;

  @media ${device.laptopS} {
    margin: 32px 10px 0 10px;
  }
`;

const CardImageWrapper = styled.div`
  overflow-y: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardContent = styled.div`
  padding: 36px 28px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const CardWriter = styled.span`
  color: var(--color-grayish-blue);
  font-size: 0.8rem;
  margin: 0 0 20px 0;
`;

const CardTitle = styled.h3`
  color: var(--color-dark-blue);
  font-weight: 400;
  font-size: 1.05rem;
  margin: 0 0 20px 0;
`;

const CardDescription = styled.p`
  color: var(--color-grayish-blue);
  font-size: 0.9rem;
`;

const ArticleCard: React.FC<AppProps> = ({
  image,
  title,
  writer,
  description,
}) => {
  return (
    <CardWrapper>
      <CardImageWrapper style={{ aspectRatio: "8/5", background: "#000" }}>
        <CardImage
          src={`/images/${image}`}
          alt={title.toLowerCase().split(" ").join("-")}
        />
      </CardImageWrapper>
      <CardContent>
        <CardWriter>By {writer}</CardWriter>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

export default ArticleCard;
