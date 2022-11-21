const React = require('react');
const Layout = require('./Layout');

function Games() {
  return (
    <Layout classTag="games">
      <h1>Выберете игру</h1>
      <main className="games" method="POST">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/games/game" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <br />
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="/games/game" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}

module.exports = Games;
