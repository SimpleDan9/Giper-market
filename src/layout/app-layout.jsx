import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer/footer";

function AppLayout() {
  return (

    <div className="h-screen flex flex-col justify-between">
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}

export default AppLayout;
