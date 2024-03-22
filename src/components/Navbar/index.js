import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import {
	Nav,
	NavContainer,
	NavLogo,
	Span,
	MobileIcon,
	NavItems,
	NavLink,
	ButtonContainer,
	GithubButton,
	MobileMenu,
	MobileLink
} from './NavbarStyledComponent';

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const theme = useTheme();
	return (
		<Nav>
			<NavContainer>
				<NavLogo to="/">
					<a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
						<DiCssdeck size="3rem" /> <Span>Portfolio</Span>
					</a>
				</NavLogo>
				<MobileIcon>
					<FaBars
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					/>
				</MobileIcon>
				<NavItems>
					<NavLink href='#about'>About</NavLink>
					<NavLink href='#skills'>Skills</NavLink>
					<NavLink href='#experience'>Experience</NavLink>
					<NavLink href='#projects'>Projects</NavLink>
					<NavLink href='#education'>Education</NavLink>
				</NavItems>
				<ButtonContainer>
					<GithubButton>Github Profile</GithubButton>
				</ButtonContainer>
			</NavContainer>
			{
				isOpen && (
					<MobileMenu isOpen={isOpen}>
						<MobileLink href="#about" onClick={() => {
							setIsOpen(!isOpen)
						}}>About</MobileLink>
						<MobileLink href='#skills' onClick={() => {
							setIsOpen(!isOpen)
						}}>Skills</MobileLink>
						<MobileLink href='#experience' onClick={() => {
							setIsOpen(!isOpen)
						}}>Experience</MobileLink>
						<MobileLink href='#projects' onClick={() => {
							setIsOpen(!isOpen)
						}}>Projects</MobileLink>
						<MobileLink href='#education' onClick={() => {
							setIsOpen(!isOpen)
						}}>Education</MobileLink>
						<GithubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href="/" target="_blank">Github Profile</GithubButton>
					</MobileMenu>
				)
			}
		</Nav>
	);
};

export default Navbar;