const React = require('react');
const Layout = require('./Layout');

function Error(props) {
  //JS Code
  return (
    <Layout>
      <h2>{props.error.message}</h2>
      <div>
        <h3>Error name: {props.error.name}</h3>
        <h3>Error message: {props.error.message}</h3>
        <h3>Error status: {props.error.status}</h3>
        <pre>Error tack: {props.error.stack}</pre>
        <a href='/'>на главную</a>
      </div>
    </Layout>
  );
}

module.exports = Error;
