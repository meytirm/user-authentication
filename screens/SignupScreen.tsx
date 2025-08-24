import AuthContent from '../components/auth/AuthContent';
import {createUser} from "../services/auth";
import {useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [loading, setLoading] = useState(false);
  async function signupHandler({email, password}: { email: string, password: string }) {
    setLoading(true)
    try {
      await createUser(email, password)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingOverlay message="Creating user..." />
  }

  return <AuthContent isLogin={false} onAuthenticate={signupHandler}/>;
}

export default SignupScreen;