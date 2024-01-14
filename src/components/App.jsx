import "./App.css";
import userData from "./Profile/userData.json";
import friends from "./FriendList/friends.json";

import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";

export const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
};
