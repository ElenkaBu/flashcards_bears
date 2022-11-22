const React = require('react');
const Layout = require('./Layout');

function Games({ decks, name }) {
  return (
    <Layout classTag="games">
      <h1>{`Выберете игру, ${name}`}</h1>
      <main className="games" method="POST">

        <div className="row">
          {decks ? decks.map((deck) => (

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <hr />
                  <h5 className="card-title">{deck.title}</h5>
                 <hr />
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
