import '../styles/Header.scss';
import { useLocation, NavLink } from 'react-router-dom';
import {Navbar, Nav, Row} from 'react-bootstrap';

export default function Header() {
    const { pathname } = useLocation();

    return (
        <div className="header">
            <Navbar expand="md" variant='dark'>
                <Row className="top-row">
                    <Navbar.Brand>
                        <div className="title">
                            <Nav.Link exact as={NavLink} to="/">Kees Tucker</Nav.Link>
                        </div>
                    </Navbar.Brand>
                </Row>

                <Row>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link exact as={NavLink} to="/projects" isActive={() => ['/', '/projects'].includes(pathname)} className="nav-item">Projects</Nav.Link>
                            <Nav.Link exact as={NavLink} to="/gallery" isActive={() => ['/gallery'].includes(pathname)} className="nav-item">Gallery</Nav.Link>
                            {/*<Nav.Link exact as={NavLink} to="/blog" isActive={() => ['/blog'].includes(pathname)} className="nav-item">Blog</Nav.Link>*/}
                            <Nav.Link exact as={NavLink} to="/contact" isActive={() => ['/contact'].includes(pathname)} className="nav-item">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Row>
            </Navbar>
        </div>
    )
}
