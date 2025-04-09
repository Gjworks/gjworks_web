import Header from "src/layouts/fullLayout/Header";
import Footer from "src/layouts/fullLayout/Footer";
import SubNav from "src/layouts/fullLayout/SubNav";

const FullLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="overflow-hidden">
        <div className="relative max-w-screen-2xl mx-auto">
          <SubNav />
          <div className="absolute left-0 top-0 bottom-0 w-8 max-sm:hidden dark:text-white/10 text-gray-950/5 border-x border-x-current bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)] z-10"></div>
          <main className="relative min-h-[calc(100vh-226px)] sm:px-8">
            {children}
          </main>
          <div className="absolute right-0 top-0 bottom-0 w-8 max-sm:hidden dark:text-white/10 text-gray-950/5 border-x border-x-current bg-[size:10px_10px] bg-fixed bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,_transparent_0,_transparent_50%)] z-10"></div>
          <footer className="relative sm:px-8">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

export default FullLayout;
