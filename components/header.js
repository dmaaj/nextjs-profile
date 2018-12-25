import React from 'react'
import {Collapse,Navbar,NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
        };
        // console.log(this.props)
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        return(
            <section className="container">
                <Navbar color="white" light expand="md">
                    <NavbarBrand href="/">
                        <h1 className="tags">&#60;</h1>
                        <img src="../static/img/kng_maaj.png" alt="kng_maaj" className="profile"/>
                        <h1 className="tags">&#62;</h1>
                    </NavbarBrand>
                    
                    <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={this.props.about} className={`${this.props.currentIndex ==1 ? 'active' : ''} nav-text`}>
                                    About me
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.props.work} className={`${this.props.currentIndex ==2 ? 'active' : ''} nav-text`}>
                                    My Works
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.props.article} className={`${this.props.currentIndex ==3 ? 'active' : ''} nav-text`}>
                                    Articles
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.props.contact} className={`${this.props.currentIndex ==4 ? 'active' : ''} nav-text`}>
                                    Contact me
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                </Navbar>
            </section>
        );
    }
}

export default Header;