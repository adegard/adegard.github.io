import react, {useState} from "react"
import reactDom from "react-dom";
import App from "../App"
import {BrowserRouter} from "react-router-dom";


const i1pic = new URL("../images/i1.jpeg", import.meta.url)

function Home(){

    const [mytext, setMytext]= useState(1)

    function changetext(){
          setMytext(oldvalue => oldvalue+1) 
    }

     return  <>
                
                    <h1>Home</h1>
                    <div class="i1pic">
                        <img src= {i1pic} />
                    </div>
                    <section>
                        {/* <p>Please enter a value:</p> */}

                        {/* <input type="text" onChange={afterChange} /> */}
                        <button onClick={changetext}>Click on it</button>
                        <p>{mytext}</p> 
                    </section>
                
            </>
}

export default Home
