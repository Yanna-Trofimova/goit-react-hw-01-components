import { Profile } from "./components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";

import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friendsList from './components/FriendList/friendsList.json';
import transactions from './components/TransactionHistory/transactions.json';




export const App = () => {
  return (
    <div>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friendsList}/>

      <TransactionHistory items={transactions} />
    </div>
  );
}; 
