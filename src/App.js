import Forms from "./Forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./Private";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />

          <Route exact path='/' element={<PrivateRoute />}>
            <Route path='/form' element={<Forms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
