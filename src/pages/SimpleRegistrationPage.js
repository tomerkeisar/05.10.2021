import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
function  SimpleRegistrationPage () {
    return <Container> 
                 <SimpleRegistrationComp clickHandler={registerUser} 
                     text="Sign up" >
                    </SimpleRegistrationComp>
             </Container>;

             function  registerUser() {
                  alert('register');
             }
}
export default SimpleRegistrationPage;