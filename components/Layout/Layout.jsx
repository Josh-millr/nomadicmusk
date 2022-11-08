export const Layout = ({ TopNav, Footer, children }) => {
  return (
    <div className="md:h-[100vh] w-[100vw] max-w-[1280px] mx-auto">
      <TopNav />
      <div className="w-full m-[60px]"></div>
      {children}
      <Footer />
    </div>
  );
};
