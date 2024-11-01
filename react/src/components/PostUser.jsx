import axios from "axios";
import { useState } from "react";

const PostUser = () => {
    const [user, setUser] = useState({
        name:'',
        age:'',
        email:'',
    });
    const createUser = async () => {
        await axios.post("http://localhost:8080/api/form", 
        user, 
        {
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            }
        })
        .then((response)=>{
            setUser({name:'',age:'',email:'',});
            console.log(response);
            return alert("User Created: "+ `${JSON.stringify(response.data,null,4)}`);
        })
        .catch((err)=>{
            return alert(err)
        });
    };


const onChangeForm = (e) => {
    if(e.target.name === 'name') {
        setUser({...user, name:e.target.value});
    }else if (e.target.name === 'age'){
        setUser({...user, age:e.target.value});
    }else if (e.target.name === 'name'){
        serUser({...user, email:e.target.value});
    }
};

return (
    <div>
        <div>
            <div>
                <h1>Create User</h1>
                <form>
                    
                    <div>
                        <div>
                            <label>Name</label>
                            <input type="text" value={user.name} onChange={()=>onChangeForm()} name="name" id="name" placeholder="Name"/>
                        </div>
                        
                        <div>
                            <label>Age</label>
                            <input type="text" value={user.age} onChange={()=>onChangeForm()} name="Age" id="Age" placeholder="Age"/>
                        </div>
                        
                        <div>
                            <label>Email</label>
                            <input type="text" value={user.email} onChange={()=>onChangeForm()} name="Email" id="Email" placeholder="Email"/>
                        </div>
                    </div>
                    <button type ="button" on Click={()=>createUser()}>Create</button>
                </form>
            </div>
        </div>
    </div>
);
};
export default PostUser;