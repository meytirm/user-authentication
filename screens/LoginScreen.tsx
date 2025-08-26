import AuthContent from '../components/auth/AuthContent';
import {useContext, useState} from "react";
import {loginUser} from "../services/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext)
  async function loginHandler({email, password}: { email: string, password: string }) {
    if (!authContext) {
      throw new Error('AuthContext not found')
    }
    setLoading(true)
    try {
      const response = await loginUser(email, password)
      const token = response._tokenResponse.idToken
      authContext.authenticate(token)
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