import "../Styles/Header.css"
import { useState } from 'react';


const Header = () => {
    const [name, setName] = useState('');
    return ( 
        <div classname="container">
            <div className="row">
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Enter your name" 
                onChange={(e) => setName(e.target.value)}
                />
                <div>{name}</div>
            </div>
        </div>
     );

     
}
 
export default Header;