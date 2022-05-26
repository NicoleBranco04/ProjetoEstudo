import {useState,useEffect} from "react";
import Form from "./Form";
import View from "./View";
import  {path}  from "../config/path";
import "../css/bootstrap.min.css"

export default function Container(){
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() =>{
        fetch(`${path}/`)
        .then((result)=>result.json())
        .then((data)=>{
            setUsuarios(data.payload)
        })
        .catch((error)=>console.log(error));
    },[])
    return(
        <div className = "container">
          <Form></Form>
          <View data = {usuarios}></View>
        </div>
    )
}