import React, { useState } from "react";

function HookCounterWithObject() {
  const [name, nameSetter] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) =>
          nameSetter({...name,
            firstName: e.target.value,
          })
        }
      ></input>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) =>
          nameSetter({...name,
            lastName: e.target.value,
          })
        }
      ></input>
      <h1>Your FirstName is : {name.firstName}</h1>
      <h2>Your LastName is : {name.lastName}</h2>
    </div>
  );
}

export default HookCounterWithObject;
