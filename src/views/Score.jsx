const React = require('react');
const Layout = require('./Layout');

module.exports = function Score() {
  return (
    <Layout>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Имя игрока</h5>
          <h6 className="card-subtitle mb-2 text-muted">Общее количество очков</h6>
          <a href="/games" className="card-link">Выбрать новую игру</a>
        </div>
      </div>
    </Layout>

  );
};
