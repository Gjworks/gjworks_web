import Header from "src/layouts/fullLayout/Header";
import Footer from "src/layouts/fullLayout/Footer";
import SubNav from "src/layouts/fullLayout/SubNav";

const FullLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative min-h-[calc(100vh-236px)]">{children}</main>
      <footer className="relative">
        <Footer />
      </footer>
    </>
  );
};

export default FullLayout;
