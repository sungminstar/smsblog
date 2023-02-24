import {Outlet} from "react-router-dom";

const Header = () => {

  return (
    <div>
      <header> 이것은 Header 레이아웃 입니다. </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Header;