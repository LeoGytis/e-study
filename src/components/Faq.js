import styled, { keyframes } from "styled-components";
import Icons from "../utils/Icons";
import { offerInfo, questionsInfo } from "../utils/texts";

const Faq = () => {
  return (
    <Container id="faq">
      <Content>
        <LeftSide>
          <Header>Frequently Asked Questions</Header>
          <QuestionsContainer>
            {questionsInfo.map((question, i) => {
              return (
                <Question key={`Questioncontainer-${i}`}>
                  <Icon name={"faq"} />
                  {question.question}
                </Question>
              );
            })}
          </QuestionsContainer>
        </LeftSide>
        <RightSide>
          <PlayIconLink href="https://www.youtube.com/watch?v=4I1kGIC41lg&pp=ygUQb25saW5lIGVkdWNhdGlvbg%3D%3D&ab_channel=StudyportalsHQ">
            <PlayIcon name={"play"} />
            <AroundCircle />
          </PlayIconLink>
        </RightSide>
      </Content>
    </Container>
  );
};

export default Faq;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin: 100px;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 600px;
  background-color: #f9f8f8;
`;

const Header = styled.div`
  max-width: 400px;
  font-size: 30px;
  line-height: 46px;
  font-weight: 700;
  margin-bottom: 26px;
`;

const QuestionsContainer = styled.div`
  max-width: 400px;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 40px;
`;

const Question = styled.div`
  max-width: 400px;
  font-size: 16px;
  line-height: 46px;
  font-weight: 800;
  color: #fff;
  background-color: #ff5421;
  margin-bottom: 10px;
  padding: 15px 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

const Icon = styled(Icons)`
  font-size: 20px;
  margin-bottom: -3px;
  margin-right: 8px;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 50%;
  background-image: url("./images/photos/030.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PlayIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
`;

const PlayIcon = styled(Icons)`
  position: absolute;
  font-size: 80px;
  color: #fff;
`;

const circleMove = keyframes`
  0% {
    width: 40px;
    height: 40px;
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    height: 200px;
    width: 200px;
    opacity: 0;
  }
`;

const AroundCircle = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid white;
  border-radius: 50%;
  animation-name: ${circleMove};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
