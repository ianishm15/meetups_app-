import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
  
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favorites from './pages/Favorites';

function App() {
  return(
  <div>
    <Routes>
<Router>
    <Route path='/' exact>
      <AllMeetups/>
    </Route>
    <Route path='/new-meetup'>
      <NewMeetups/>
    </Route>
    <Route path='/favorites'>
     <Favorites/>
     </Route>
    </Router>
    </Routes>
    </div>
  )};
  export default App;