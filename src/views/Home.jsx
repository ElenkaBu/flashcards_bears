const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout classTag="home">
      <main className="home">
        <form action='/games'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"  >Введите своё имя</label>
            <input type="login" className="name" id="name" aria-describedby="emailHelp" />

          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>

          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>

      </main>
    </Layout>
  );
}

module.exports = Home;
