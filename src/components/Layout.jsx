const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: "640px", width: "100%", margin: "0 auto" }}>
      {children}
    </div>
  );
};

export default Layout;
