const React = require('react');
const Layout = require('./Layout');

function Welcome() {
  return (
    <Layout classTag="welcome">
      <main className="welcome">
        <br/>
          <h1>Добро пожаловать в игру!</h1>
          <br/>
        <a href="/home" className="btn btn-primary">Регистрация</a>

      </main>
    </Layout>
  );
}

module.exports = Welcome;
