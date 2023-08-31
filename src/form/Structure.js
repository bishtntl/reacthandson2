import React,{Component} from 'react'
import './style.css'

class StructureCompo extends Component{
    constructor(){
        super();
        this.state={
            Name:" ",
            Department:" ",
            Rating:" ",
            subarr:[]
        }
    }
    changedata =(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(e.target.value)
      
    }
    clickme=(a)=>{
        a.preventDefault()
        const  objtem={
            name:this.state.Name,
            department:this.state.Department,
            rating:this.state.Rating
            }
            this.state.subarr.push(objtem)
            this.setState({
                subarr: this.state.subarr,
                Name:" ",
            Department:" ",
            Rating:" ",
            })
    }
    render(){
        return(
            <>
           
        
            <h1 className='heading'>Employee FeeDBack Form</h1>


            <form> 
              <label htmlFor="name"><b style={{fontSize:'1.5em'}}>Name :</b></label>
                <input type='text' name='Name' id='name' placeholder='Enter Your Name' value={this.state.Name} autoComplete='off' required className='round' onChange={this.changedata}/><br/><br/>
                <label htmlFor="depart"><b style={{fontSize:'1.5em'}}>Department :</b></label>
                <input type='text' name='Department' id='depart' placeholder='Enter Your Department' value={this.state.Department} autoComplete='off' required className='round' onChange={this.changedata}/><br/><br/>
                <label htmlFor="rate"><b style={{fontSize:'1.5em'}}>Rating :</b></label>
                <input type='text' name='Rating' placeholder='Give Your Rating' value={this.state.Rating}  autoComplete='off' required  className='round' onChange={this.changedata}/><br/><br/>

             <button onClick={this.clickme} className='btn'>Submit</button>

              </form>
             <div className='global'>

          {this.state.subarr.map((item,index)=>{
            return(
                <div key={index} className='showiteam'> 
                {/* <div className='childiteam'> */}
                    {/* <p>{index}</p> */}
                    <h1>Name :{item.name}</h1>
                    <h1>Department:{item.department}</h1>
                    <h1>Rating:{item.rating}</h1>

                    {/* </div> */}

                </div>
            )
          })
        }
        </div>

           
            </>
        )
    }
}
export default StructureCompo;