const React = require('react');

function Layout({ children }) {
  return (

    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/styles/main.css" />
        <title>Flash Cards</title>
      </head>
      <header>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="/home">| Home |</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/games">| Game |</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/score">| Score |</a>
          </li>
        </ul>

      </header>

      <div className="container">
        {children}
      </div>

      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossOrigin="anonymous" />
      <body />
    </html>

  );
}

module.exports = Layout;
