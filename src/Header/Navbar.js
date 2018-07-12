import React, { PureComponent } from 'react';
import styled from "styled-components";
import logo from "./headerLogo.svg";


const Header = styled.header`
    display: flex;
    position: fixed;
    left: 0;
    box-sizing: border-box;
    z-index: 3;
    width: 100%;
    margin-bottom: 40px;
    background: ${props => props.transparent ? 'transparent' : '#1f2d3c'};
    transition: background 500ms ease-out;
`

const Logo = styled.img`
    height: 52px;
    padding: 14px 0;
`

const Nav = styled.nav`
    font-family: "HelveticaBold";
    padding: 34px 0;
`

const Item = styled.a`
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;  
    line-height: 23px;

    &:hover{
    text-decoration: underline;
    }

`

class Navbar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { changeHeader: true };
      }
    
      componentDidMount() {
        window.addEventListener('scroll', () => {
          this.setState({ changeHeader: window.scrollY < 60 });
        });
      }

    render() {  
        return (
            <div>
            <Header transparent={this.state.changeHeader}>
                <div className="container">
                    <div className="row">
                        <div className="hidden-xs col-sm-6 start-sm">
                            <Logo src={logo}  />
                        </div>
                        <div className="center-xs col-sm-6 end-sm">
                            <Nav>
                                <Item>FAQ</Item>
                                <Item className="header-link">White list</Item>
                            </Nav>
                        </div>
                    </div>
                </div>
            </Header>
            </div>
        )
    }
}

export default Navbar
