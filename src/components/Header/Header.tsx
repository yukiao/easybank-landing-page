import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../Const";
import Sidebar from "./Sidebar";
import { Wrapper, Menu, Logo, Container } from "./style";

const NavContainer = styled.nav`
  display: none;

  @media ${device.laptopS} {
    display: flex;
    flex: 1;
    justify-content: center;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    text-align: center;

    a {
      text-decoration: none;
      color: var(--color-grayish-blue);
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      position: relative;
    }

    a:hover {
      color: var(--color-dark-blue);
    }

    a:hover:after {
      display: block;
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 5px;

      background: linear-gradient(
        to right,
        hsl(136, 65%, 51%),
        hsl(192, 70%, 51%)
      );
    }
  }
`;
const LogoContainer = styled.div`
  @media ${device.laptopS} {
    flex: 1;
  }
`;

const ButtonContainer = styled.div`
  display: none;
  @media ${device.laptopS} {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

const CTAButton = styled.button`
  @media ${device.laptopS} {
    border: none;
    font-weight: 700;
    color: white;
    background: linear-gradient(
      to right,
      hsl(136, 65%, 51%),
      hsl(192, 70%, 51%)
    );
    padding: 12px 28px;
    border-radius: 50px;
    display: inline-block;
    margin-left: auto;
  }

  :hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toogleSidebar = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <LogoContainer>
            <Logo src="/images/logo.svg" alt="logo" />
          </LogoContainer>
          <NavContainer>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </NavContainer>

          <ButtonContainer>
            <CTAButton>Request Invite</CTAButton>
          </ButtonContainer>
          {isSidebarOpen ? (
            <Menu
              src="/images/icon-close.svg"
              alt="Close"
              onClick={toogleSidebar}
            />
          ) : (
            <Menu
              src="/images/icon-hamburger.svg"
              alt="Menu"
              onClick={toogleSidebar}
            />
          )}
        </Container>
      </Wrapper>
      <Sidebar isShown={isSidebarOpen} />
    </>
  );
};

export default Header;
