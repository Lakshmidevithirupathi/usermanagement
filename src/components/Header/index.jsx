import "./index.css"

import PopupCon from "../Popup"

import { useNavigate } from "react-router-dom";

const Header = (props)=>{
                const {updateSearchName,addUser} = props
                const navigate = useNavigate()
                const onChangingName = (event)=>{
                      updateSearchName(event.target.value)
                }

                const onLoggingOut = ()=>{
                   navigate("/")
                }

                return(<div className = "header-container">
                    <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/team-spirit-3407349-2840493.png" className="logo-image"/>
                    <div className="inputel-and-popup-container">< input className = "search-element" placeholder="Search by name" type="search" onChange={onChangingName} />
                    <PopupCon addUser={addUser}/>
                    <button type="button" className="add-btn" onClick={onLoggingOut}>Logout</button>
                    </div>
                 </div>)
                 }


export default Header