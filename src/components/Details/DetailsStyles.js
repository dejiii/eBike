import styled from "styled-components";
import Colors from "../../assets/colors";

export const DetailsHeading = styled.h1`
  font-size: 36px;
  line-height: 56px;
  font-weight: 700;
  color: ${Colors.black};
  margin-top: 20px;
`;

export const DetailText = styled.p`
  color: ${Colors.gray};
  margin-top: 30px;
  /* max-width: 80%; */
  font-weight: 300;
  font-size: 18px;
  line-height: 30px;
`;

export const DetailsCardWrapper = styled.div`
  box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 24px 30px;
`;

export const DetailsPrice = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${Colors.gray};
`;

export const DetailsPriceTag = styled.p`
  font-size: 20px;
  line-height: 25px;
  font-weight: 700;
  color: ${Colors.black};
`;
