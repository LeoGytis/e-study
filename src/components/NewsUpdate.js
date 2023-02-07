import styled from "styled-components";
import Icons from "../utils/Icons";
import { newsInfo } from "../utils/texts";

const NewsUpdate = () => {
  return (
    <Container>
      <Header1>News Update</Header1>
      <Header2>Latest News & events</Header2>
      <NewsContainer>
        {newsInfo.map((news, i) => {
          return (
            <News>
              <Image
                key={`coursecontainer-${i}`}
                image={`./images/photos/05${++i}` + `.jpg`}
                alt={news.header}
              />
              <Content>
                <InfoDetails>
                  <Detail>
                    <Icon name={"date"} />
                    {news.date}
                  </Detail>
                  <Detail>
                    <Icon name={"user"} />
                    {news.user}
                  </Detail>
                </InfoDetails>
                <ContentHeader>{news.header}</ContentHeader>
                <Comment>{news.comment} </Comment>
                <GreyLine />
                <InfoDetails>
                  <Detail>
                    <Icon name={"book"} />
                    {news.place}
                  </Detail>
                  <ReadMore>ReadMore ---</ReadMore>
                </InfoDetails>
              </Content>
            </News>
          );
        })}
      </NewsContainer>
    </Container>
  );
};

export default NewsUpdate;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Header1 = styled.div`
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  color: #ff5421;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Header2 = styled.div`
  font-size: 36px;
  line-height: 46px;
  font-weight: 800;
  color: #101010;
  margin-bottom: 26px;
`;

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 100% 100%;
  max-width: 1000px;
  max-height: 400px;
  gap: 20px;
  margin-bottom: 34px;
`;

const News = styled.div`
  height: 100%;
  font-size: 36px;
  line-height: 46px;
  font-weight: 800;
  border-radius: 4px;
  color: #101010;
  margin-bottom: 26px;
  background-color: #fff;
  border: 1px solid #b9b8b1;
`;

const Image = styled.div`
  height: 170px;
  background-image: url(${({ image }) => image || "none"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  z-index: 20;
  overflow: hidden;
`;

const ContentHeader = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  margin: 10px 0 15px 0;
  color: black;
  &:hover {
    cursor: pointer;
    color: #ff5421;
  }
  transition: all 0.3s ease;
`;

const Comment = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;

  margin-bottom: 10px;
`;

const GreyLine = styled.div`
  margin: 30px 10px 0px 10px;
  border-top: 1px solid #f4f0f0;
`;

const InfoDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Detail = styled.div`
  font-size: 10px;
  font-weight: 500;
`;

const Icon = styled(Icons)`
  font-size: 10px;
  margin-bottom: -1px;
  color: #ff5421;
  margin-right: 8px;
`;

const ReadMore = styled.div`
  font-size: 12px;
  font-weight: 500;
`;
