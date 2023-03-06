import { BrowserRouter, Route} from 'react-router-dom';
import {Home,Contact,Login,Register,Reset} from './pages';
import {Footer, Header} from './components';


function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
          <Route  path="/" component= {Home} />
          <Route  path="/contact" component= {Contact} />
          <Route  path="/login" component= {Login} />
          <Route  path="/register" component= {Register} />
          <Route  path="/reset" component= {Reset} />

  <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
