import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ChangePassword from '@pages/auth/ChangePassword';
import CreatePasswordBoard from '@pages/auth/ChangePasswordBoard';
import Dashboard from '@pages/main/Dashboard';
import ForgotPassword from '@pages/auth/ForgotPassword';
import SignIn from '@pages/auth/SignIn';
import SignUp from '@pages/auth/SignUp';
import SignInBoard from '@pages/auth/SignUpBoard';
import SignOutBoard from '@pages/auth/SignOutBoard';

import './setupAxios';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-board" element={<SignInBoard />} />
        <Route path="/signout-board" element={<SignOutBoard />} />
        <Route
          path="/create-password-board"
          element={<CreatePasswordBoard />}
        />
        <Route path="/change-password" element={<ChangePassword />} />

        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
