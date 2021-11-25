import styles from '@styles/index.css'
import PeoplePage from '../peoplePage/PeoplePage.jsx'
import PersonPage from '../PersonPage/PersonPage.jsx';
import HomePage from '@containers/HomePage';
import { BrowserRouter, Route, Routes, NavLink, Switch  } from 'react-router-dom'
import Header from '@components/Header/Header';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import routesConfig from '../../routes/RoutesConfig.js';


function App() {

  return (
    <div>
      <BrowserRouter>
      <div className={styles.wrapper}>

        <Header/>

        <Routes>
          {routesConfig.map((route, index) => (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.component}
                id={4} 
            />
          ))}
          {/* <Route path="/" exact element={<HomePage/>} />
          <Route path="/people" element={<PeoplePage/>} />
          <Route path="/people/:id" element={<PersonPage/> } />
          <Route path="/not-found" element={<NotFoundPage/>} />
          <Route path="*" element={<NotFoundPage/>} /> */}
        </Routes>
      </div>
      </BrowserRouter>

    </div>

  );
}

export default App;
