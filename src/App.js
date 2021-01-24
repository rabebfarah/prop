

import { data } from './data'
import Profile from './Profile/profile'

  
    
function App() {
  const styles = {textAlign:"center" }
  return (
   
     
     <div style={{styles}}>
      
  
        <Profile data={data} />
       
        
      </div>
   
  );
}



export default App;
