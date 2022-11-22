const React = require('react');
const { all } = require('../routs/game.route');
const Layout = require('./Layout');

module.exports = function Score({ user, round, allRounds }) {
  return (
    <Layout>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Привет {user.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Общее количество очков за эту игру {round.score}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Общее количество очков за все игры - {
            allRounds.reduce((acc, b) => (acc + Number(b.score)), 0)}
            {console.log('allRounds', allRounds)}
          </h6>
          {allRounds ? allRounds.map((allRounds) =>
            (<h6 className="card-subtitle mb-2 text-muted"> Игра № {allRounds.id} счет - {allRounds.score}</h6>)
          ) : <h6 className="card-subtitle mb-2 text-muted"> игр нет</h6>}

          <a href={`/games/${user.id}`} className="card-link">Выбрать новую игру</a>
        </div>
      </div>
    </Layout>

  );
};
