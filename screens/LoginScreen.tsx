import AuthContent from '../components/auth/AuthContent';
import {useState} from "react";
import {loginUser} from "../services/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";

function LoginScreen() {
  const [loading, setLoading] = useState(false);
  async function loginHandler({email, password}: { email: string, password: string }) {
    setLoading(true)
    try {
      await loginUser(email, password)
    } catch (e) {
      Alert.alert('Authentication failed!', 'could not login. please check your credentials')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <LoadingOverlay message="Logging in..." />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;