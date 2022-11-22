const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout classTag="home">
      <main className="home">
        <form action="/home/addForm" method="POST">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Введите своё имя</label>
            <input type="login" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label"> Придумайте пароль </label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
          </div>

          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>

      </main>
    </Layout>
  );
}

module.exports = Home;
