import react from "react"
import reactDom from "react-dom"
import App  from "./App"
import {BrowserRouter} from "react-router-dom";


const app = document.getElementById("app")

reactDom.render( <BrowserRouter> <App /> </BrowserRouter>, app)
