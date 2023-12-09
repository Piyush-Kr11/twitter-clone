import React from "react";
import { UserContext } from "./UserContext";
// const UserProvider = (props) => {
//   const [response, setResponse] = React.useState(undefined);
//   React.useEffect(() => {
//     const getData = async () => {
//       console.log("value ", document.cookie);
//       const data = await fetch(`http://localhost:4000/users/${props}`,{
//         headers:{
//           "authorization":document.cookie.split("=")[1],
//         },
//       });
//       const response = await data.json();
//       setResponse(response);
//     };
//     getData();
//   }, []);
//   return (
//     <UserContext.provider value={response}>
//       {React.Children}
//     </UserContext.provider>
//   );
// };

// export default UserProvider;

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: undefined,
    };
    this.getData=this.getData.bind(this);
  }
  getData = async () => {
    //console.log("value ", document.cookie);
    const data = await fetch(`http://localhost:4000/users/${this.props}`, {
      headers: {
        authorization: document.cookie.split("=")[1],
      },
    });
    const response = await data.json();
    this.setState({response:response});
  };
  componentDidMount() {
    this.getData();
  }
  render(){
    return (
      <UserContext.provider value={this.state.response}>
        {React.Children}
      </UserContext.provider>
    );
  }
}

export default UserProvider;