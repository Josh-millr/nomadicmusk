export const Layout = ({ TopNav, Footer, children }) => {
  return (
    <div className="mx-auto w-[100vw] max-w-[1280px] md:h-[100vh]">
      <TopNav />
      <div className="m-[60px] w-full"></div>
      {children}
      <Footer />
    </div>
  );
};
