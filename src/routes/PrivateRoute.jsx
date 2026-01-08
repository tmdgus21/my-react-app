// routes/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
//<Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
//사용할떄 App.jsx에 사용