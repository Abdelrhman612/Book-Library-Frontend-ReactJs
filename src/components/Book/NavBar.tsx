import type { NavBarProps } from "./InterFace";

const NavBar = ({ searchTerm, setSearchTerm }: NavBarProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <a className="navbar-brand" href="/">
        📚 مكتبة الكتب
      </a>
      <form className="form-inline my-2 my-lg-0 ms-auto">
        <input
          className="form-control me-sm-2"
          type="search"
          placeholder="ابحث عن كتاب..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default NavBar;
