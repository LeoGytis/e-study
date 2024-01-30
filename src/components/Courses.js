import styled from "styled-components";
import Icons from "../utils/Icons";
import { coursesInfo } from "../utils/texts";
import { device } from "../utils/device";

const Courses = () => {
	return (
		<Container id="courses">
			<Header1>Select Courses</Header1>
			<Header2>Explore Popular Courses</Header2>
			<CoursesContainer>
				{coursesInfo.map((course, i) => {
					return (
						<Course key={`coursegrid-${i}`}>
							<ImageContainer>
								<Image
									src={`./images/photos/01${-1 + ++i}.jpg`}
									alt={course.header}
								/>
							</ImageContainer>
							<PriceTag>{course.price}€</PriceTag>
							<Content>
								<Rating>
									<Star name={"star"} />
									<Star name={"star"} />
									<Star name={"star"} />
									<Star name={"star"} />
									<Star
										name={"star"}
										fill={"#4B4B49"}
										padding={"10px"}
									/>
									1 rating
								</Rating>
								<Header>{course.header}</Header>
								<GreyLine />
								<Counter>
									<StudentsCount>
										<StudentsIcon name={"students"} />
										{course.students}
									</StudentsCount>
									<LessonsCount>
										<LessonsIcon name={"lessons"} />
										{course.lessons}
									</LessonsCount>
								</Counter>
							</Content>
						</Course>
					);
				})}
			</CoursesContainer>
		</Container>
	);
};

export default Courses;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f9f8f8;
	max-width: 100%;
	border: 2px solid red;
	padding: 100px 0;
	@media ${device.mobile} {
		padding: 40px 10px;
	}
`;

const Header1 = styled.div`
	font-size: 18px;
	line-height: 28px;
	font-weight: 700;
	color: #ff5421;
	text-transform: uppercase;
	margin-bottom: 10px;
	@media ${device.mobile} {
		font-size: 16px;
	}
`;

const Header2 = styled.div`
	font-size: 36px;
	line-height: 46px;
	font-weight: 800;
	color: #101010;
	margin-bottom: 26px;
	@media ${device.mobile} {
		font-size: 28px;
		line-height: 24px;
		text-align: center;
	}
`;

const CoursesContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-template-rows: auto auto;
	width: 100%;
	max-width: 1270px;
	gap: 20px;
	margin-bottom: 34px;
	@media ${device.tablet} {
		grid-template-columns: auto auto;
	}
	@media ${device.mobile} {
		grid-template-columns: auto;
	}
`;

const Course = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 36px;
	line-height: 46px;
	font-weight: 800;
	border-radius: 4px;
	color: #101010;
	margin-bottom: 26px;
	background-color: #fff;
	border: 1px solid #b9b8b1;
	position: relative;
	overflow: hidden;
`;

const ImageContainer = styled.div`
	overflow: hidden;
`;

const Image = styled.img`
	display: flex;
	height: 250px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	&:hover {
		cursor: pointer;
		transform: scale(1.1);
	}
	transition: all 0.5s ease-out;
`;

const PriceTag = styled.div`
	display: flex;
	align-items: center;
	height: 30px;
	font-size: 16px;
	font-weight: 600;
	color: #fff;
	background: #ff5421;
	border-radius: 5px;
	position: absolute;
	top: 20px;
	right: 20px;
	padding: 0px 20px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 35px 35px;
	z-index: 20;
	overflow: hidden;
`;

const Rating = styled.div`
	display: flex;
	width: 100%;
	font-size: 16px;
	line-height: 19px;
	font-weight: 500;
	padding-bottom: 10px;
`;

const Star = styled(Icons)`
	fill: ${({ fill }) => fill || "#fcb903"};
	padding-right: ${({ padding }) => padding || 0};
`;

const Header = styled.div`
	font-size: 22px;
	font-weight: 700;
	line-height: 30px;
	margin-bottom: 10px;
	&:hover {
		cursor: pointer;
		color: #ff5421;
	}
	transition: all 0.3s ease;
`;

const GreyLine = styled.div`
	display: flex;
	justify-content: space-between;
	list-style: none;
	margin: 25px 0 0;
	padding: 25px 0 0;
	font-size: 14px;
	border-top: 1px solid #f4f0f0;
`;

const Counter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`;

const StudentsCount = styled.div`
	font-size: 14px;
	font-weight: 400;
	color: black;
`;

const LessonsCount = styled.div`
	font-size: 14px;
	font-weight: 500;
	color: black;
`;

const StudentsIcon = styled(Icons)`
	font-size: 20px;
	margin-bottom: -3px;
	color: #ff5421;
	margin-right: 8px;
`;

const LessonsIcon = styled(Icons)`
	font-size: 20px;
	margin-bottom: -3px;
	color: #ff5421;
	margin-right: 8px;
`;
