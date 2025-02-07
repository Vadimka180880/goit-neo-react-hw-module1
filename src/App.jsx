import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import "./App.css"; 

function App() {
  return (
    <div className="profile-container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
