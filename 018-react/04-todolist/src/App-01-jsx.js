import React,{Component,Fragment} from 'react';
class App extends Component{
	  render(){//注意只能返回一个标签
	  	// return  <div> <input/> <button></button> </div>
       
        // return <Fragment> <input/> <button></button> </Fragment>
        return (
        <div> <input/> <button></button> 
            {//注释要写在div里面
                 //
            }
        </div>
        )
    }
}

export default App