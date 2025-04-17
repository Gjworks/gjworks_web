import Header from "src/layouts/fullLayout/Header";
import Footer from "src/layouts/fullLayout/Footer";
import SubNav from "src/layouts/fullLayout/SubNav";

const FullLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative min-h-[calc(100vh-226px)]">{children}</main>
      <footer className="relative sm:px-8">
        <Footer />
      </footer>
    </>
  );
};

export default FullLayout;
