import React from "react";
const ToDoNav = () => {
    return(
        <div>
          <form   className="form-inline rtl">
            <input  style={{backgroundColor:"#faefe8"}} className="form-control col-sm-4" type="text" placeholder="جستجو..."/>
            <button  className="btn fa fa-search" type="submit"></button>
            
          </form>

        </div>
    );
}

export default ToDoNav;
