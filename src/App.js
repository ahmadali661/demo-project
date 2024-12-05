import { useAuthContext } from './contexts/AuthContext';
import Loader from './components/Screen Loader/Loader';
import Routes from '../src/pages/Routes'


import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";


function App() {

  const { isAppLoading } = useAuthContext()
  if (isAppLoading)
    return <Loader />
  return (
    <Routes />
  );
}

export default App;
