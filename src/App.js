import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import SideBar from './SideBar';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'; 
import EmailList from './EmailList';
import Mail from './Mail';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import {useSelector} from "react-redux";
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';




function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

      useEffect(() =>{
        auth.onAuthStateChanged(user => {
            if (user){
                    dispatch (login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoUrl,
                    
                    }))
            }
        })
    },[])
  return (
  <Router>
    {!user ? (<Login/>) : (
      <div className="App"> 
        <Header/>  
      
      <div className="app__body">
      <SideBar/>
      <Switch>
        <Route path="/mail">
          <Mail/>
        </Route>
        <Route path="/">
          <EmailList/>
        </Route>
      </Switch>

      </div>
        {sendMessageIsOpen && <SendMail/>}
      </div>
    
  )
 
  }
  </Router> 
)
    
}

export default App;
