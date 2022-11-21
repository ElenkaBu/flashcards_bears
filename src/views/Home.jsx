const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout classTag="home">
      <main className="home">
        <form method='POST' action='/game'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"  >Введите своё имя</label>
            <input type="login" className="name" id="name" aria-describedby="emailHelp" />
            
          </div>
          

          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>

      </main>
    </Layout>
  );
}

module.exports = Home;
