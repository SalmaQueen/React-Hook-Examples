// The Effect Hook lets you perform side effects in function components:

// By using this Hook, you tell React that your component needs to do something after render.
// In this effect, we set the document title, but
//  we could also perform data fetching or call some other imperative API.

// works similar as componentDidMount and componentDidUpdate

// Earlier, we looked at how to express side effects that don’t require any cleanup. 
// However, some effects do. For example, we might want to set up a subscription 
// to some external data source.
//  In that case, it is important to clean up so that we don’t introduce a memory leak! 

import React, { useState, useEffect } from 'react';

const Example2=()=> {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>const [usersList, setUsersList] = useState([]);
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example2;