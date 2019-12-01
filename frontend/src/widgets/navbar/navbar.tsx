
 
import * as React from "react"
import { Navbar, Nav, Form, FormControl, Button, Image, Row } from 'react-bootstrap'
import dashboardIcon from '../../thirdparty/icons/dashboard.svg'
import Styles from './styles.module.css'


export const CustomNavbar = () => {
  return (
    <Navbar bg="light" variant="light">
        <Navbar.Brand className={Styles.BrandWrapper}>
          <Image src={dashboardIcon} className={Styles.LogoIcon}/>
          паблик                    
        </Navbar.Brand>
            <Nav className="mr-auto">   
            <Nav.Link>Вход</Nav.Link>             
            <Nav.Link>Карта</Nav.Link>
            <Nav.Link>Справка</Nav.Link>            
        </Nav>
        <Form inline className="d-none d-sm-block">
            <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
            <Button variant="outline-primary">Найти</Button>
        </Form>
  </Navbar>
  )
}

export default CustomNavbar