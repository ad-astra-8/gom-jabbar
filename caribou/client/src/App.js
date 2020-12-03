import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from './Login';
import Register from './Register';
import Navbar from "./Navbar";
import About from "./About";
import Tracker from "./Tracker";
import LiveChat from "./LiveChat";
import AddPost from "./AddPost";
import Data from "./Data"
import ReadChat from "./ReadChat";

class App extends Component {
  state = {
    chat: []
  };

  
  // componentDidMount() {
  //   fetch("")
  //     // if the api returns data ...
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Something went wrong, please try again later.");
  //       }
  //       // ... convert it to json
  //       return res.json();
  //     })
  //     // use the json api output
  //     .then((data) => {
  //       //check if there is meaningful data
        
  //       this.setState({
  //         chat: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       this.setState({
  //           error: err.message
  //       })
  //     });
  // }

  // updatePost = (post) => {
  //   this.setState({
  //     chat: [...this.state.chat, post],
  //   });
  // }


  render() {
    const messages = Data.map(chat => 
      <ReadChat chat={chat} key={chat.id}/>
)

    return (
      <div className="App">
        <main>
          <div>
            <BrowserRouter>
              <Switch>
                <Route exact path="/landingPage" component={LandingPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route exact path="/" component={About} />
              </Switch>
            </BrowserRouter>
            {/* <LandingPage />
          // <Login />
          // <Register />*/}
            <Navbar />
            {/* <About /> */}
            <Tracker />
            <LiveChat 
            // updatePost={this.updatePost}
            />
            {/* {messages}*/}
            <AddPost /> 
          </div>
        </main>
      </div>
    );
  }
}
export default App;
