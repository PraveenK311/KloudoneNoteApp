import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import store from "./store";
import { Provider } from "react-redux";

import AddNoteForm from "./components/AddNoteForm";
import NoteList from "./components/NoteList";

import "./styles.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="note-taking-app">
        <NoteList />
        <AddNoteForm />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById("root"));











