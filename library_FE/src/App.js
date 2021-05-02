import React, {Suspense} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from './routes';
import {img} from './assets/img/index.js' 

const loading = () => (
  <div className="text-center" style={{ paddingTop: '50%' }}>
    <img src={img.logo} alt="loading" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading()}>
        <Switch>
        {
          routes.map((route, idx) =>
            route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => <route.component {...props}/>}
              />
            ) : null
          )
        }
        </Switch>
      </Suspense>
    </BrowserRouter>  
  );
}

export default App;
