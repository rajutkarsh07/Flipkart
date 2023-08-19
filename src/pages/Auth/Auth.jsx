import "./Auth.scss";
import { SignInForm } from "../../components/SinginForm/SigninForm";
import { SignUpForm } from "../../components/SignupForm/SignupForm";

const Auth = () => {
  return (
    <div className="auth">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Auth;
