import MovieInput from './components/MovieInput';
import MovieDetails from './components/MovieDetails';
import NotFound from './components/NotFound';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <h2 className='text-center'>Box Office</h2>
      <Switch>
        <Route path='/movie/:id' component={MovieDetails} />
        <Route path='/not-found' component={NotFound} />
        <Route path='/' exact component={MovieInput} />
        <Redirect to='/not-found' />
      </Switch>
    </div>
  );
}

export default App;
