import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import "./App.css";

console.log("Transactions from JSON:", transactions);

function App() {
  return (
    <div className="container">
      <div className="profile-friends-container">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends} />
      </div>

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
