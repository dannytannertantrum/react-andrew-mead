const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {/* props.children is built-in - you have to call it that. */}
      {/* It accesses all the children elements */}
      {props.children}
      <p>footerr</p>
    </div>
  );
};

ReactDOM.render((
  <Layout>
    <div>
      <h1>Page title</h1>
      <p>This is my page</p>
    </div>
  </Layout>
), document.getElementById('app'));