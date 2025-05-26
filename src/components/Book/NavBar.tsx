import { Form, Nav } from "react-bootstrap";
import type { NavBarProps } from "./InterFace";

const NavBar = ({ searchTerm, setSearchTerm }: NavBarProps) => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Form className="form-inline my-2 my-lg-0 ms-auto">
        <input
          className="form-control me-sm-2"
          type="search"
          placeholder="ابحث عن كتاب..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
    </Nav>
  );
};

export default NavBar;
