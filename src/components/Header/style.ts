import styled from "styled-components";
import { device } from "../../Const";

export const Wrapper = styled.div`
  width: 100vw;
  background: #fff;
  z-index: 3;
  position: fixed;
`;

export const Container = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  left: 0;
  right: 0;
  top: 0;

  @media ${device.laptopL} {
    width: 80%;
  }
`;

export const Logo = styled.img`
  width: 139px;
  height: 20px;
`;

export const Menu = styled.img`
  margin-left: auto;
  @media ${device.laptopS} {
    display: none;
  }
`;
