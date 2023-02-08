import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Container>
      <Row>
        <Icon src={`./images/icons/011.png`} />
        <Header>Subscribe to Newsletter</Header>
        <TextField type="text" placeholder="Your email" />
        <Button>Submit</Button>
      </Row>
    </Container>
  );
};

export default NewsLetter;

const Container = styled.div`
  max-width: 1270px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  padding: 60px 70px;
  margin-bottom: -85px;
  background-color: #171f32;
  color: #fff;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const Header = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-right: 20px;
`;

const TextField = styled.input`
  font-size: 14px;
  color: #505050;
  padding: 15px 100px 14px 30px;
  outline: none;
  border: none;
  border-radius: 2px 0 0 2px;
  ::placeholder {
    color: #505050;
  }
`;

const Button = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 13px 32px;
  border-radius: 0 2px 2px 0;
  border: none;
  cursor: pointer;
  background-color: #ff5421;
  &:hover {
    opacity: 0.9;
  }
`;
