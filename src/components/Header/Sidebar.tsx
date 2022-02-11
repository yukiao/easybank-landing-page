import styled from "styled-components";
import { device } from "../../Const";

interface AppProps {
  isShown: boolean;
}

const Wrapper = styled.div`
  height: 100vh;
  background: linear-gradient(
    to bottom,
    hsla(233, 26%, 24%, 1),
    hsla(233, 26%, 24%, 0)
  );
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
`;

const NavContainer = styled.nav`
  background: #fff;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

const HiddenContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media ${device.laptopL} {
    width: 80%;
  }
`;

const Link = styled.a`
  color: var(--color-dark-blue);
  margin: 10px 0;
  text-decoration: none;
`;

const Sidebar: React.FC<AppProps> = ({ isShown }) => {
  return (
    <>
      {isShown && (
        <Wrapper>
          <HiddenContainer>
            <NavContainer>
              <Link href="#">Home</Link>
              <Link href="#">About</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Carrers</Link>
            </NavContainer>
          </HiddenContainer>
        </Wrapper>
      )}
    </>
  );
};

export default Sidebar;
