import { Component } from "react";
import "../src/tabl.css"


class To extends Component{
    constructor(){
        super()
        this.state={
          
            obj:[]        
        }
    }
    user1=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

        sub=(event)=>{
            event.preventDefault();
        var u={
            username:this.state.user,
            password1:this.state.password
        }
        this.setState({
            obj:[...this.state.obj,u]
        })
    }

    dele=(value,index)=>{
        var o=this.state.obj.filter((val,ind)=>{
        return index!==ind
    })
    this.setState({
        obj:o
    })
}
edi=(value,index)=>{
    var p=prompt("enter user name");
    var p2=prompt("enter password");
    var o={
        username:p,
        password1:p2
    }
    this.state.obj.splice(index,1,o)
    this.setState({
        obj:this.state.obj
   })
}
    render(){
        console.log(this.state)
        var res=this.state.obj.map((val,ind,arr)=>{
            return (<>
            <tr key={ind}>
                <td>{val["username"]}</td>
                <td>{val["password1"]}</td>
                <button onClick={()=>{this.dele(val,ind)}} >delete</button>
                <button onClick={()=>{
                    this.edi(val,ind)
                }}>edit</button>
            </tr>
            </>)  
        })
        return(<>
        <h1>hi this is to_do_list</h1>
        <form action="" onSubmit={this.sub}>
            <input type="text" name="user" onChange={this.user1} />
            <input type="text" name="password" onChange={this.user1} />
           <input type="submit" value="register" />
        </form>
        <br /><br />
        <table border={2 }>{res}</table>
        
        </>)
    }
}
export default To;
// ----------------------extra information---------------------
// console.log(event.target.value)
// console.log(event.target.name)

    // pas=(event)=>{ 
    //     this.setState({
    //         pass:event.target.value
    //     })
    // }

    // ----------------uncontrolled stracture---------------
    // sub=(event)=>{
    //     event.preventDefault();
    
    //     console.log(event.target[0].value)
    //     console.log(event.target[1].value)
    //     this.setState({
    //         user:event.target[0].value,
    //         pass:event.target[1].value
    //     })
    // }