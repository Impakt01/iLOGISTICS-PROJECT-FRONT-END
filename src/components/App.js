import Home  from './pages/Home'
import Signup  from './pages/Signup'
import { Route, Routes
 } from 'react-router-dom';
import BusinessSignup from './pages/BusinessSignup';
import Pricing from './pages/Pricing';
import Login from './pages/login';
import BusinessDashboard from './pages/BusinessDashboard';
import DriverDashboard from './pages/DriverDashboard';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/businessSignup' element={<BusinessSignup />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/business/dashboard' element={<BusinessDashboard />} />
      <Route path='/driver/dashboard' element={<DriverDashboard />} />
    </Routes>
  );
}

export default App;
