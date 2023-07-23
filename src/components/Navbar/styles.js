import styled from "styled-components";

export const Nav = styled.div`   

background: ${props => props.theme.background};
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 12);
  z-index: 10;


  header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	padding: 0 2rem;
}
nav a {
	margin: 0 1rem;
	    font-size: 24px;
    font-weight: 350;
	color: ${props => props.theme.linkColor};
	text-decoration: none;
}

nav a:hover {
	font-size: 150%;
}

header .nav-btn {
	padding: 5px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: ${props => props.theme.linkColor};
	visibility: hidden;
	opacity: 0;
	font-size: 1.8rem;
}

header div,
nav {
	display: flex;
	align-items: center;
}

@media only screen and (max-width: 1024px) {
	header .nav-btn {
		visibility: visible;
		opacity: 1;
	}

	header nav {
		position: fixed;
		top: -100vh;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background: ${props => props.theme.background};
		transition: 1s;
	}

	header .responsive_nav {
		transform: translateY(100vh);
	}

	nav .nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 2rem;
	}

	nav a {
		font-size: 1.5rem;
		
	}
}

`;
Nav.displayName = 'Nav'

