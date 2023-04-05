import styled from "styled-components";
import ellipse from "../../assets/shape.svg";

const Container = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  font-weight: 400;
  background-color: #eaf2f2;
  background-image: url(${ellipse});
  background-repeat: no-repeat;
  background-position: top left;
`;

const StyledForm = styled.form`
  display: grid;
  grid-gap: 45px;
  margin-top: 203px;
  justify-content: center;
  @media (max-width: 768px) {
    grid-gap: 25px;
    margin-top: 100px;
  }
`;

const Title = styled.p`
  font-size: 40px;
  line-height: 58px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const Subtitle = styled.p`
  font-size: 32px;
  line-height: 38px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
const InputWrapper = styled.div`
  display: grid;
  grid-gap: 32px;
  width: 456px;
  @media (max-width: 768px) {
    grid-gap: 17px;
    max-width: 330px;
  }
`;

const Total = styled.p`
  margin: 0 auto;
  margin-left: 0px;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
  @media (max-width: 568px) {
    font-size: 18px;
  }
`;

export { Container, StyledForm, Title, Subtitle, InputWrapper, Total };
