const React = require('react');
const Layout = require('./Layout');

function Game({user, card}) {
    return (
        <Layout classTag="game">
            <main className="game">
                <div class="row">
                    {console.log('cardview---->', card)}
                    {card ? card.map((item) => (
                    <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{item.question}</h5>
                            <a href="#" class="btn btn-primary">Да</a>
                            <a href="#" class="btn btn-primary">Нет</a>
                        </div>
                    </div>
                </div>
                    )): <h3>???</h3>}
                    <br />
                    <a href={`/score/${user.id}`} class="btn btn-primary">Узнать результат</a>
                </div>
                <br />
            </main>
        </Layout>
    );
}

module.exports = Game;
