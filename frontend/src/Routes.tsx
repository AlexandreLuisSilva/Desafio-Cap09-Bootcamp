import PrivateRoute from 'components/PrivateRoute';
import Auth from 'pages/Auth';
import Error from 'pages/Error';
import MovieReviews from 'pages/MovieReviews';
import { Router, Switch, Route } from 'react-router-dom';
import history from 'util/history';
import Navbar from './components/Navbar';
import MoviesList from './pages/MoviesList';

const Routes = () => (
  <Router history = {history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <PrivateRoute path="/movies/:movieId/reviews">
        <MovieReviews />
      </PrivateRoute>
      <PrivateRoute path="/movies">
        <MoviesList />
      </PrivateRoute>
      <Route path="/error">
        <Error />
      </Route>
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
