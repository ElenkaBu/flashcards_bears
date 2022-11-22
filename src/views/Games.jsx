const React = require('react');
const Layout = require('./Layout');

function Games({decks}) {
  return (
    <Layout classTag="games">
      <h1>Выберете игру, Пользователь</h1>
      <main className="games" method="POST">

        <div className="row">
          {decks ? decks.map((deck) => (
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{deck.title}</h5>
                  {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                  <a href="/games/game" className="btn btn-primary">Играть!</a>
                </div>
              </div>
            </div>
          )) : <h3>Список пуст</h3>}
        </div>

      </main>
    </Layout>
  );
}

module.exports = Games;
