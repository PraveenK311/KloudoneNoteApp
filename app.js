
import Textarea from "react-expanding-textarea";
import TimeAgo from 'react-timeago';
import { Link } from "react-router-dom";
import defaultExport from 'module';
import Login from "./Googlesignin/main.js";
import Date from "./dateandtime/date.js";
import Time from "./dateandtime/time.js";
import { FontAwesomeIcon } from "@fontwesome/react-fontawesome";
import Footer from "./Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Main} from "./Navbar.js";
import React from "react";
import ReactDOM from "react-dom";
import store from "./Componentsnote/store";
import { Provider } from "react-redux";
import AddNoteForm from "./Componentsnote/AddNoteForm";
import NoteList from "./Componentsnote/NoteList";
import "./Componentsnote/styles.scss";

function App() {
  return (
    <Navbar/><br/><br/>
   <Login/><br/><br/>
<Date/><br/><br/>
<Time/><br/><br/>

<Main/><br/><br/>
    <Provider store={store}>
      <div className="note-taking-app">
        <NoteList />
        <AddNoteForm />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);


  return (
<Login/><br/><br/>
<Date/><br/><br/>
<Time/><br/><br/>
<Navbar/><br/><br/>
<Main/><br/><br/>
    
    
      <Footer/>   
      </div>
  );
};

