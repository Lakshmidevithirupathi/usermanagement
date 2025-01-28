import { useEffect,useState} from "react"
import PopupCon from "../Popup"
import "./index.css"
import Loader from "../Loader"
import Header from "../Header"

const Home = ()=>{
    const [usersList,setUsersList] = useState([])

    const [isLoading,setLoading] = useState(true)

    const [searchName,setSearchName] = useState("")

    const addUser=(data)=>{
        addingNewUser(data)
    }

    const addingNewUser  = async(data)=>{
        const options = {
            method:"Post",
            body:JSON.stringify(data)
        }
        const response = await fetch("https://jsonplaceholder.typicode.com/users",options)
        const {id} = await response.json()
        setUsersList([...usersList,{id,name:data.name,email:data.email,username:data.username,website:data.website}]) 
    }
    
    const updateUsersInList = (updatedUser)=>{
        updatingExistingUser(updatedUser)
    }

    const updatingExistingUser = async (updatedUser)=>{
        const options = {
            method:"PUT",
            body:JSON.stringify(updatedUser)
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`,options)
        const value = await response.json()
        console.log(value)
        const newUpdatedUsersList = usersList.map(each=>{
            if(each.id === updatedUser.id){
                
                return updatedUser
            }
            else{
               
                return each
            }
          })
          setUsersList(newUpdatedUsersList)
    }

    const onDeletingUser = async (id)=>{
        const options = {
            method:"Delete"
        }
        const response  = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const jsondata = await response.json()
        console.log(jsondata,"gsdgfsafsaegsea")
        const updatedUsersList =  usersList.filter(each=>{
            if(each.id !== id){
                return each
            }
        })
        setUsersList(updatedUsersList)
     }

    const getUsers = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const usersData = await response.json()
        const updatedUsersList = usersData.map(each=>({
            id:each.id,
            name:each.name,
            username:each.username,
            email:each.email,
            website:each.website
        }))
        setUsersList(updatedUsersList)
        setLoading(false)
    }

     useEffect(()=>{
        getUsers()
     },[])

     const updateSearchName = (value)=>{
         setSearchName(value.toLowerCase())
     }

     const getUpdatedUsersList = ()=>{
       const updatedUsersList =  usersList.filter(each=>{
            if(each.name.toLowerCase().includes(searchName)){
                return each
            }
        })
        return updatedUsersList;
     }

   

    return (
        <div className = "bg-container">
             <div>
             {isLoading?
         <Loader/>:<div>
            <Header updateSearchName = {updateSearchName} addUser={addUser} />
            <div className  = "heading-and-table-container">
                    <h1 className = "users-details-heading">User Details</h1>
                    <table className = "table-container">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th className="website-style">Website</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getUpdatedUsersList().map((each) => (
                                <tr key={each.id}>
                                    <td>{each.id}</td>
                                    <td>{each.name}</td>
                                    <td>{each.username}</td>
                                    <td>{each.email}</td>
                                    <td className="website-style">{each.website}</td>
                                    <td>
                                        <PopupCon each={each}  updateUsersInList={updateUsersInList}/>
                                    </td>
                                    <td>
                                        <button className = "edit-and-delete-btn" onClick = {()=>{onDeletingUser(each.id)}} type="button">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
        </div>
      </div>}
             </div>
        </div>

    )

}

export default Home