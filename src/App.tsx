import Sidebar from "./components/Sidebar.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import KTComponent from "./metronic/core";
import { useEffect } from "react";
import KTLayout from "./metronic/app/layouts/demo1.js";
import SearchModal from "./components/SearchModal.tsx";
import AppRoute from "./routing/AppRoute.tsx";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  useEffect(() => {
    KTComponent.init();
    KTLayout.init();
  }, []);

  return (
    <>
      <div className="flex grow">
        <Sidebar />
        <div className="wrapper flex grow flex-col">
          <Header />
          <main className="grow content pt-5 ps-5" role="content">
            {/* <Outlet /> */}
            <AppRoute />
          </main>
          {/* <Footer /> */}
        </div>
      </div>
      <SearchModal />
    </>
  );
}

export default App;
