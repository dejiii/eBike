import styled from "styled-components";

export const FooterHeader = styled.p`
  font-size: 20px;
  line-height: 60px;
  font-weight: 700;
`;

export const FooterLinks = styled.p`
  font-size: 18px;
  line-height: 28px;
`;

export const FooterDesc = styled.div`
  max-width: 75%;
  font-size: 18px;
  line-height: 28px;
  font-weight: 300;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const FooterYear = styled.div`
  margin-top: 31px;
  font-size: 16px;
  line-height: 28px;
`;
