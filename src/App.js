import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
import ToDoNav from "./components/ToDoNav";


class App extends Component {
   
    myMessage = ()=> {
     prompt ( "عنوان تسک را مشخص کنید")
     prompt ( " تاریخ را مشخص کنید")
    };
    render (){

        return (
          <div >
              <ToDoNav/>
             
              <br/>
              <button  className="btn float-right fa fa-check-square-o" onClick={this.myMessage}> کلیک کنید</button>
              <br/>
              <hr/>
              <hr/>
              <ToDoList/>
              
          </div>
        )
    }
}
 export default App;