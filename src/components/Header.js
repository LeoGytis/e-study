import styled from "styled-components";
import Tab from "./Tab";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Start bg="#ff5421">Start learning today</Start>
        <CoursesText>Online Courses From Leading Experts</CoursesText>
        <Button bg="#ff5421" color="#fff">
          Find Course
        </Button>
        <Tab></Tab>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("./images/photos/001.jpg");
  color: white;
`;

const HeaderContainer = styled.div`
  color: white;
`;

const Start = styled.div`
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: #ff5421;
  margin-bottom: 22px;
  text-transform: uppercase;
`;

const CoursesText = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 70px;
  line-height: 80px;
  font-weight: 700;
  margin-bottom: 65px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  margin-bottom: 50px;
`;
