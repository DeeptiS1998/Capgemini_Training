import React, { useState } from "react";


import PayPal from "./PayPal"


function Profile() {
  const [checkout, setCheckOut] = useState(false);

  return ( 

    
    
    <div className="profile">
      {checkout ? (
        <PayPal />
      ) : (

           

    

        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default Profile;

