import styled from "styled-components";
import Colors from "../../assets/colors";

export const LandingPageCaptionText = styled.h1`
  font-size: 48px;
  line-height: 56px;
  font-weight: 700;
  color: ${Colors.black};
`;

export const LandingPageDescText = styled.p`
  font-size: 21px;
  line-height: 32px;
  font-weight: 300;
  padding-top: 24px;
  color: ${Colors.gray};
`;

export const LandingPageSearcHBox = styled.div`
  padding: 7px;
  border: 1px solid ${Colors.ash};
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
