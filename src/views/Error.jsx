const React = require('react');
const Layout = require('./Layout');

function Error(props) {
  //JS Code
  return (
    <Layout>
      <div>
        <hr></hr>
        <a href='/'> Перейти на главную страницу</a>
       <hr></hr>

        <h3>Error name: {props.error.name}</h3>
        <h3>Error message: {props.error.message}</h3>
        <h3>Error status: {props.error.status}</h3>
        <pre>Error stack: {props.error.stack}</pre>
      
      </div>
    </Layout>
  );
}

module.exports = Error;
