import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Preloader from "./components/Preloader/Preloader";

function App() {

  const [loading,setLoading]=useState(true);

  useEffect(()=>{

    const timer=setTimeout(()=>{

      setLoading(false);

    },2000);

    return ()=>clearTimeout(timer);

  },[]);

  return loading ? <Preloader/> : <Home/>;

}

export default App;