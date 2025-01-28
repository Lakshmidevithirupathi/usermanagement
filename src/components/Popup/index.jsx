import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./index.css"
import { useState } from "react";


const PopupCon=(props)=>{
    const {addUser,each,updateUsersInList}=props
  const [name,setName]=useState(each===undefined? "" : each.name)
  const [username,setUsername]=useState(each===undefined? "" : each.username)
  const [email,setEmail]=useState(each===undefined? "" : each.email)
  const [website,setWebsite]=useState(each===undefined? "" : each.website)

  const updateUser=()=>{
    updateUsersInList({id:each.id,name,username,email,website})
  }
  
    return(
        <div>
        <Popup
          trigger={<button type="button" className = "add-btn">{each===undefined ? "+ Add user":"Update"}</button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <form onSubmit={(e)=>{
                e.preventDefault()
                if(each===undefined){
                addUser({name,username,email,website})
                }else{
                    updateUser()
                }
                close()
              }}>
                <div className="input-container">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
   
                <div className="input-container">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
                </div>
   
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                </div>
   
                <div className="input-container">
                  <label htmlFor="website">Website</label>
                  <input type="text" id="website" onChange={(e)=>setWebsite(e.target.value)} value={website}/>
                </div>
                <button type="submit">{each===undefined ? "Add":"Update"}</button>
              </form>
            </div>
          )}
        </Popup>
      </div>
    )
}

export default PopupCon