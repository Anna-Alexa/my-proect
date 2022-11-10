
import React from 'react';
import Router from 'next/router';
import Head from 'next/head';
import {FormaBox} from '../Components/ImegeStyle';
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [message, setMessage] = useState('');

const Forma=()=>{
  return(
<>
<Head>
   <title>Forma</title>
</Head>
 <React.Fragment>
 <FormaBox>
 <form>
   <label htmlFor="login">Login:</label>
   <input
     id="login"
     type="login"
     onChange={e => setName(e.target.value)}
   />
   <label htmlFor="password">Password:</label>
   <input
     id="password"
     type="password"
     onChange={e => setEmail(e.target.value)}
   />

   <button type="submit">Send</button>
 </form>
  </FormaBox>
 <button onClick ={()=>Router.push('/')}>Go back to the main page</button>
 </React.Fragment>
</>
  )

}
export default  Forma;
