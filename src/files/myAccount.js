import React from "react";
import Firebase from 'firebase'
import Tilt from 'react-tilt'
import InlineBlock from 'react-inline-block'
import { Card, ListGroup, ListGroupItem, CardGroup } from "react-bootstrap";
import ParticlesContainer from './../components/Particlecontainer'
import Nava from "./nav";
const style3={
  width:'18rem',
  height : 'auto',
  display:'block',
  margin:'25px 50px 75px 100px',
  paddingLeft: '5px',
  boxShadow: '0 4px 50px 0 rgba(173, 9, 138, 0.2)',
  transition: '0.3s',
  borderRadius:'20px',
  'backgroundImage':"linear-gradient( #A1FFCE,#faffd1)",
  color:'#4B0082'

}
class myAccount extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Raman:[]
    }

  }
  componentDidMount(){
    this.getUserdata();
  }
  getUserdata = () =>{
    let database = Firebase.database();
        let data=[];
        database.ref('/helps/'+localStorage.getItem('uid')).on('value' , (snapshot)=>{
            snapshot.forEach((childsnapshot)=>{
                        data.push({
                            id:childsnapshot.key,
                            ...childsnapshot.val()
                        })
                    })
                    console.log(data)
                    this.setState({Raman:data})
        })
        
}

  
  render(){
    return(
<div>
  <Nava/>
<div className='container' style={{display:'flex' , flexDirection:'row'}}>
    <ParticlesContainer/>
      <Card style={{width:'1000px'}}>
        <Card.Title style={{textAlign:'center'}}>Personal details</Card.Title>
         <CardGroup>
         <Card style ={style3}>
           <img style={{width:'21rem' , height:'20rem'}} src ={localStorage.getItem('url')}/>
           <ListGroup>
             <ListGroupItem variant ='danger'>Name : {localStorage.getItem('Name')}</ListGroupItem>
             <ListGroupItem variant ='danger'>Name : {localStorage.getItem('Email')}</ListGroupItem>
           </ListGroup>
         </Card>
         <Card style={style3}>
           <Card.Title style={{textAlign:'center'}}>Helps!!</Card.Title>
           {this.state.Raman.map((item)=>(
          <ListGroup>
            <ListGroupItem variant ='danger'>Name : {item.Name}</ListGroupItem>
            <ListGroupItem variant ='danger'>Name : {Date(item.date)}</ListGroupItem>
          </ListGroup>
        ))}
       </Card>
         </CardGroup>
       </Card>
       
    
  </div>
</div>
    )
  }
}

export default myAccount;
