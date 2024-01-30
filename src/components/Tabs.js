import { HeaderTabsInfo } from "../utils/texts";
import React from "react";
import styled from "styled-components";
import { waveBeat } from "../utils/Animations";
import { device } from "../utils/device";

const Tabs = () => {
	return (
		<Container>
			{HeaderTabsInfo.map((tab, i) => {
				return (
					<TabContainer key={`tabcontainer-${i}`}>
						<Icon
							src={`./images/icons/00${++i}` + `.png`}
							delay={i}
							alt=""
						/>
						<HeaderContainer>
							<Header>{tab.header}</Header>
							<Description>{tab.description}</Description>
						</HeaderContainer>
					</TabContainer>
				);
			})}
		</Container>
	);
};

export default Tabs;

const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	max-width: 1270px;
	gap: 20px;
	margin-bottom: 100px;
	@media ${device.mobile} {
		flex-direction: column;
	}
`;

const TabContainer = styled.div`
	flex: 0 0 auto;
	width: 33.33%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background: #171f32;
	padding: 20px 15px;
	border-radius: 5px;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
		transform: scale(0.98);
	}
	@media ${device.tablet} {
		flex-direction: column;
		padding: 12px 8px;
	}
	@media ${device.mobile} {
		width: 100%;

		flex-direction: row;
	}
`;

const Icon = styled.img`
	max-width: 50px;
	margin-right: 20px;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
	animation-name: ${waveBeat};
	animation-duration: 3s;
	animation-delay: ${({ delay }) => delay * 0.5 + "s"};
	animation-fill-mode: both;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	@media ${device.tablet} {
		max-width: 30px;
		margin-right: 10px;
	}
`;

const HeaderContainer = styled.div``;

const Header = styled.div`
	display: flex;
	width: 100%;
	font-size: 22px;
	font-weight: 700;
	margin-bottom: 5px;
	@media ${device.tablet} {
		font-size: 18px;
	}
`;

const Description = styled.div`
	font-size: 16px;
	font-weight: 400;
	margin: 0;
	@media ${device.tablet} {
		font-size: 14px;
	}
`;
