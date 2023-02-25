// import React, { useState, useEffect } from "react";
// import { myData } from "../api-adapter";

// function Profile(props) {
//   const [notifications, setNotifications] = useState([]);
//   useEffect(() => {
//     const getData = async () => {
//       const result = await myData();
//       setNotifications(result.notifications);
//     };
//     props.getData(getData);
//   }, []);

//   return (
//     <div>
//       {props.notifications.map((notification) => (
//         <div key={notification.id}>{notification.message}</div>
//       ))}
//     </div>
//   );
// }

// export default Profile;
