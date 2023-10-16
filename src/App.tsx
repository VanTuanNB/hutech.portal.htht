import { ReactElement } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { rootRouter } from './routes/route.route';

function App(): ReactElement {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        { rootRouter.map((route, index) => {
          return <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? <route.protected>
                    <route.component></route.component>
                  </route.protected>
                  :
                  <route.component></route.component>
                }                  
            >
            
          </Route>
        }) }
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
