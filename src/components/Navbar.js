import styled from "styled-components";
import { ReactComponent as HamburgerSvg } from "../utils/Hamburger.svg";
import Icons from "../utils/Icons";
import { Link } from "react-scroll";
import { useState } from "react";
import LogoWhite from "../logo/logo_white.png";
import LogoBlack from "../logo/logo_black.png";
import { device } from "../utils/device";

const Navbar = () => {
	const [showNavBar, setShowNavBar] = useState(false);
	const [logo, setLogo] = useState(LogoWhite);

	const changeBackground = () => {
		if (window.scrollY >= 150) {
			setShowNavBar(true);
			setLogo(LogoBlack);
		} else {
			setShowNavBar(false);
			setLogo(LogoWhite);
		}
	};

	window.addEventListener("scroll", changeBackground);

	return (
		<>
			<Container showNavBar={showNavBar}>
				<Row>
					<Logo src={logo} alt="e-Learn" />
					<Menu>
						{/* activeClass={"active"} is not necessary */}
						<MenuItem smooth={"easeOutQuart"} spy to={"home"}>
							Home
						</MenuItem>
						<MenuItem smooth spy offset={-80} to="categories">
							Categories
						</MenuItem>
						<MenuItem smooth spy offset={-80} to="courses">
							Courses
						</MenuItem>
						<MenuItem smooth spy offset={-80} to="offer">
							Offer
						</MenuItem>
						<MenuItem smooth spy offset={-80} to="faq">
							FAQ
						</MenuItem>
						<MenuItem smooth spy offset={-120} to="testimonials">
							Testimonials
						</MenuItem>
						<MenuItem
							smooth={"easeOutQuint"}
							offset={-80}
							spy
							to="blog"
						>
							Blog
						</MenuItem>
					</Menu>
					<Tools>
						<StyledIcon name={"search"}></StyledIcon>
						<StyledIcon name={"shopbag"}></StyledIcon>
						<StyledIcon name={"profile"}></StyledIcon>
						<HamContainer>
							<Hamburger />
						</HamContainer>
					</Tools>
				</Row>
			</Container>
		</>
	);
};

export default Navbar;

const Container = styled.div`
	z-index: 99;
	position: fixed;
	top: 0px;
	width: 100%;
	height: 100px;
	background: ${({ showNavBar }) => (showNavBar ? "white" : "transparent")};
	color: ${({ showNavBar }) => (showNavBar ? "#000" : "#fff")};
	fill: ${({ showNavBar }) => (showNavBar ? "#000" : "#fff")};
	box-shadow: ${({ showNavBar }) =>
		showNavBar ? "0px 5px 50px 5px rgba(0, 0, 0, 0.3)" : "none"};
`;

const Row = styled.div`
	max-width: 1270px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled.img`
	width: 200px;
	padding: 30px 0 30px 0;
	&:hover {
		cursor: pointer;
	}
	@media ${device.mobileS} {
		display: none;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-evenly;
	@media ${device.tablet} {
		display: none;
	}
`;

const MenuItem = styled(Link)`
	position: relative;
	font-size: 20px;
	font-weight: 700;
	margin: 15px;
	&:hover {
		cursor: pointer;
	}
	&.active {
		color: #ff5421;
	}
	&::after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		bottom: 0;
		left: 0;
		background-color: #ff5421;
		transform-origin: bottom center;
		transition: transform 0.5s ease-out;
	}
	&:hover::after {
		transform: scaleX(1);
		transform-origin: bottom center;
	}
`;

const Tools = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media ${device.mobileS} {
		display: contents;
	}
`;

const StyledIcon = styled(Icons)`
	font-size: 26px;
	padding: 5px;
	&:hover {
		cursor: pointer;
		color: #ff5421;
	}
	transition: all 0.5s ease;
`;

const HamContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	max-width: 100%;
	height: 40px;
`;

const Hamburger = styled(HamburgerSvg)`
	max-height: 30px;
	padding: 10px;
	&:hover {
		cursor: pointer;
		fill: #ff5421;
	}
	transition: all 0.5s ease;
`;
