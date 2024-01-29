import styled from "styled-components";
import Tabs from "./Tabs";

const MainHome = () => {
	return (
		<Container id="home">
			<Row>
				<Header1 bg="#ff5421">Start learning today</Header1>
				<Header2>Online Courses From Leading Experts</Header2>
				<Button>Find Course</Button>
			</Row>
			<Tabs />
		</Container>
	);
};

export default MainHome;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-image: url("./images/photos/001.jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: auto;
	background-size: cover;
	color: #fff;
	/* "homepage": "https://leogytis.github.io/e-study", */
`;

const Row = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 250px 0 200px 0;
`;

const Header1 = styled.div`
	font-size: 22px;
	line-height: 30px;
	font-weight: 700;
	color: #ff5421;
	margin-bottom: 22px;
	text-transform: uppercase;
`;

const Header2 = styled.div`
	max-width: 750px;
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
	cursor: pointer;
	padding: 15px 30px !important;
	background: #ff5421;
	color: #fff;
	&:hover {
		background: #171f32;
		opacity: 0.9;
		transform: scale(0.98);
	}
	transition: all 0.5s ease;
`;
