import AuthContent from '../components/auth/AuthContent';
import {createUser} from "../services/auth";
import {useContext, useState} from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import {Alert} from "react-native";
import {AuthContext} from "../store/auth-context";

function SignupScreen() {
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext)

  async function signupHandler({email, password}: { email: string, password: string }) {
    if (!authContext) {
      throw new Error('AuthContext not found')
    }
    setLoading(true)
    try {
      const response = await createUser(email, password)
      const token = response._tokenResponse.idToken
      authContext.authenticate(token)
    } catch (e) {
      Alert.alert('Authentication failed!', 'could not create user. please check your credentials')
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