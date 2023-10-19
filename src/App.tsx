import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PrimaryLayout from './layouts/Primary/Primary.layout';
import { rootRouter } from './routes/route.route';

function App(): ReactElement {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {rootRouter.map((route, index) => {
                        const layout = route.layout ? (
                            <route.layout>
                                <route.component></route.component>
                            </route.layout>
                        ) : (
                            <PrimaryLayout>
                                <route.component></route.component>
                            </PrimaryLayout>
                        );
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.protected ? <route.protected>{layout}</route.protected> : layout}
                            ></Route>
                        );
                    })}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
// falsy: 0, '', null, undefined, false,
export default App;
