import { useEffect, useState } from "react";
import { getUserById, updateProfile } from "../../services/userService";
import { useNavigate } from "react-router-dom";



export const UserForm = ({ currentUser }) => {

  const [user, setUser] = useState({})
  const navigate = useNavigate()


  useEffect(() => {
    getUserById(currentUser.id).then((data) => {
      const userObj = data[0]
      setUser(userObj)
    })
  }, [currentUser])

  const handleSave = (event) => {
    event.preventDefault()

    const editedProfile =  {
        id: user.id,
        fullName: user.fullName,
        email: user.email
    }

    updateProfile(editedProfile).then(() => {
        navigate(`/`)
    })
  } 


    return (
        <form className="profile">
          <h2>Update Profile</h2>
          <fieldset>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={user?.fullName}
                onChange={(event) => {
                  const copy = { ...user};
                  copy.fullName = event.target.value;
                  setUser(copy);
                }}
                required
                className="form-control"
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                value={user?.email}
                onChange={(event) => {
                    const copy = { ...user };
                    copy.email = event.target.value
                    setUser(copy)
                }}
                required
                className="form-control"
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <button className="form-btn btn-primary" onClick={handleSave}>Save Profile</button>
            </div>
          </fieldset>
        </form>
    )
}