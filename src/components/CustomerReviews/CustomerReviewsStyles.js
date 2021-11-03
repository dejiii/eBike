import styled from "styled-components";
import Colors from "../../assets/colors";

export const ReviewCard = styled.div`
  background-color: ${Colors.yellow};
  border-radius: 10px;
  position: relative;
  padding: 60px;
  color: ${Colors.white};
  margin-bottom: 200px;
`;

export const ReviewCardHeader = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const ReviewerName = styled.h1`
  font-size: 22px;
  line-height: 48px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ReviewerRole = styled.span`
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ReviewText = styled.h1`
  font-size: 19px;
  line-height: 30px;
  font-weight: 400;
`;
