import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      mytext:'',
      myarray:[]
     };
  }

  chaneUserInput(input){
    this.setState({
      mytext:input
    });
  }
  addtoList(input){
    let ListArray=this.state.myarray;
    ListArray.push(input);
    this.setState({
      myarray:ListArray,
      mytext:''
    })
  }
  render() {
    return (
      <>
        Name :<input type="text" placeholder="Enter data" name="txtname" value={this.state.mytext}
        onChange={(e)=>this.chaneUserInput(e.target.value)}/>
        <button onClick={()=>this.addtoList(this.state.mytext)}>Click Here.</button>

        <h3>{this.state.myarray.map((val)=><li>{val}</li>)}</h3>
      </>
      
    );
  }
}

export default App;