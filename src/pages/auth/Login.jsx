import AuthLayout from "../../layouts/AuthLayout.jsx";
import LoginCard from "../../components/loginCard/LoginCard.jsx";

const Login = () => {
  return (
    <AuthLayout>
      <LoginCard title="Login" />
    </AuthLayout>
  );
};

export default Login;