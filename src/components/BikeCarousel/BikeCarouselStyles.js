import styled from "styled-components";
import Colors from "../../assets/colors";

export const CarouselHeader = styled.h1`
  color: ${Colors.black};
  line-height: 56px;
  font-weight: 600;
  font-size: 24px;
  margin-top: 80px;
`;

export const CarouselText = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const CarouselCard = styled.div`
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
  border: 2px solid ${Colors.white};
  transition: ease-in 0.3s border;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    border: 2px solid ${Colors.yellow};
    box-shadow: none;
  }
`;
