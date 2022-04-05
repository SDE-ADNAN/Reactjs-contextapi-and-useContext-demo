import React, { useContext } from "react";
import { name } from "./App";

// const ChildC = () => {
//     return (
//         <name.Consumer>
//             {(ctx)=>{
//                 return(
//                     <>
//                     <h1>My Full name -- Fname={ctx.fname} and lname={ctx.lname}</h1>
//                     </>
//                 )
//             }}
//         </name.Consumer>
//     );
// };

const ChildC = () => {
  const nameCtx = useContext(name);
  return (
    <>
      <h1>
        My Full name--Fname = {nameCtx.fname}  and lname = {nameCtx.lname}
      </h1>
    </>
  );
};

export default ChildC;
