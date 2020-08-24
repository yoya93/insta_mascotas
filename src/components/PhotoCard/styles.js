import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Article = styled.article`
  min-height: 200px;
  margin-bottom: 50px;
`;
export const ImgWrapper = styled.div`
  display: block;
  border-radius: 10px;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  width: 100%;
  position: relative;
`;

export const Img = styled.img`
  ${fadeIn()}

  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin-right: 4px;
  }
`;
