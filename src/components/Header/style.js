import styled from "styled-components";

export const Nav = styled.div`   
background: linear-gradient(
    45deg,
    hsl(272, 15%, 37%) 0%,
    hsl(193, 100%, 28%) 50%,
    hsl(162, 95%, 77%) 100%
  );
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 12);
  z-index: 10;

  ul{
    margin: 10px;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }
 .logo {
    padding:0;
  }
  li{
    margin-right: 60px;
    padding: 10px;
    
  }

  ul a {
    font-size: 26px;
    font-weight: 400;
    color: #fff;
    text-decoration: none;
  }
`;
Nav.displayName = 'Nav'