const React = require('react');
const Layout = require('./Layout');

function Games() {
    return (
        <Layout classTag="games">
            <h1>Выберете игру</h1>
            <main className="games" method='POST'>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="/games/game" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="/games/game" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </Layout>
    );
}

module.exports = Games;
