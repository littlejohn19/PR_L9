import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import NotFound from "./components/notFound";
import Home from "./components/home";
import NavBar from "./components/common/navbar";
import loginComp from "./components/loginComp"

function App() {
  return (
      <div className="container-fluid">
        <NavBar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/posts"
                    component={Posts}/>
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={loginComp}/>
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
