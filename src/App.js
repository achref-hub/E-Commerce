import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home,Contact} from './pages';
import {Footer, Header} from './components';


function App() {
  return (
  <>
  <BrowserRouter>
  <Switch>
  <Header/>
          <Route exact path="/" component= {Home} />
          <Route exact path="/contact" component= {Contact} />
          {/* <Route exact path="/contact" element={<Contact/ >} /> */}
        
  </Switch>
  </BrowserRouter>
  <Footer/>
  </>
  );
}

export default App;
