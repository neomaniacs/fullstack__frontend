import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import {useAuth} from "./security/AuthContext";

function WelcomeComponent() {
    const { username } = useParams();

    const [message, setMessage] = useState(null)
  
    const useContext = useAuth()
    
    function callHelloWorldRestApi() {
      console.log('called')
      retrieveHelloWorldBean()
      .then( (response) => successfulResponse(response) )
      .catch( (error) => errorResponse(error) )
      .finally( () => console.log('cleanup') )     
    
      
      retrieveHelloWorldPathVariable('Ranga', useContext.token)
      .then( (response) => successfulResponse(response) )
      .catch( (error) => errorResponse(error) )
      .finally( () => console.log('cleanup') )    
    }
    

    function successfulResponse(response) {
      console.log(response)
      setMessage(response.data.message)
    }

    function errorResponse(error) {
      console.log(error)
    }

    return (
      <div className="WelcomeComponent">
        <h1>Welcome {username}</h1>
        <div>
          Manage your todos - <Link to="/todos">Go here</Link>
        </div>
        <div>
          <button className="btn btn-success" onClick={callHelloWorldRestApi}>Call Hello World</button>
        </div>
        <div className="text-info">{message}</div>
      </div>
    );
  }

  export default WelcomeComponent;