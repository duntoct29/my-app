import "../styles/App.scss";
import React from "react";
import Home from "../components/Home";
import TodoList from "../components/TodoList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavTop from "../components/Nav";
import Contact from "../components/contact";
import Login from "../components/Login";
import CreateAccount from "../components/createAcc";

class App extends React.Component {
  state={
     infoUser:{}
  }
  handleCreAcc=(user)=>{
    this.setState({
       infoUser:user
    })
  }
  render() {
    let infoUser=this.state.infoUser;
    console.log(infoUser)
    return (
      <>
        <BrowserRouter>
          <header>
            <NavTop />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount CreUser={this.handleCreAcc} />} />
            </Routes>
          </main>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
