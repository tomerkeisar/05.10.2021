import {Container} from 'react-bootstrap';
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import CreateCardComp from '../components/my-cards/CreateCardComp';
import {useState} from 'react';
function  BusinessRegistrationPage () {
    const[isStep1,setIsStep1]= useState(true);
    return  <Container>
                 {isStep1&&    <SimpleRegistrationComp clickHandler={registerAndNextForm} 
                                 text="Next" >
                    </SimpleRegistrationComp>}
                    {
                        !isStep1&& <CreateCardComp clickHandler={createCard} ></CreateCardComp>
                    }
           </Container>;

   function  registerAndNextForm() {
    alert('register');
    setIsStep1(false);
   }

   function  createCard() {
       alert('create card');
   }
}
export default BusinessRegistrationPage;