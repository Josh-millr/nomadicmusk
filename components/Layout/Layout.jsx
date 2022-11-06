export const Layout = ({ TopNav, Footer, children }) => {
  return (
    <div className="h-[100vh] w-[100vw] max-w-[1280px]">
      <TopNav />
      {children}
      <Footer />
    </div>
  );
};