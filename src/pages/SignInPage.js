import {Container} from 'react-bootstrap';
import SignInComp from "../components/sign-in/SignInComp";
function  SignInPage() {
     return  <Container> 
                <SignInComp clickHandler={signIn}></SignInComp>
            </Container>;

            function  signIn() {
                 alert('sign in');
            }
}
export default SignInPage;