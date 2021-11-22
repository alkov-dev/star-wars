import PeoplePage from '../containers/peoplePage/PeoplePage'
import HomePage from '../containers/HomePage'
import PersonPage from '../containers/PersonPage'
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage'
import FavoritePage from '../containers/FavoritePage/FavoritePage'
import SearchPage from '../containers/SearchPage/SearchPage'
import ErrorMassage from '../components/ErrorMessage/ErrorMessage'

const routesConfig = [
    {
        path: '/',
        exact: true,
        component: <HomePage/>
    },
    {
        path: '/people',
        exact: true,
        component: <PeoplePage/>
    },
    {
        path: '/favorites',
        exact: true,
        component: <FavoritePage/>
    },
    {
        path: '/search',
        exact: true,
        component: <SearchPage/>
    },
    {
        path: '/people/:id',
        exact: true,
        component: <PersonPage />
    },
    {
        path: '/fail',
        exact: true,
        component: <ErrorMassage />
    },
    {
        path: '/not-found',
        exact: true,
        component: <NotFoundPage/>
    },
    {
        path: '*',
        exact: false,
        component: <NotFoundPage/>
    }
   
]

export default routesConfig


{/* <Route path="/" exact element={<HomePage/>} />
<Route path="/people" element={<PeoplePage/>} />
<Route path="/people/:id" element={<PersonPage/> } />
<Route path="/not-found" element={<NotFoundPage/>} />
<Route path="*" element={<NotFoundPage/>} /> */}