import React, { Component } from 'react';
import Firebase from 'firebase'
import {Card, ListGroup} from 'react-bootstrap'
import ParticlesContainer from './../components/Particlecontainer'
import InlineBlock from 'react-inline-block'
import Nava from './nav';
const style3={
    width:'18rem',
    height : '20rem',
    display:'block',
    margin:'25px 50px 75px 100px',
    paddingLeft: '5px',
    boxShadow: '0 4px 50px 0 rgba(173, 9, 138, 0.2)',
    transition: '0.3s',
    borderRadius:'20px',
    'backgroundImage':"linear-gradient( #A1FFCE,#faffd1)",
    color:'#4B0082'

}
 class home extends Component {

    constructor(props){
        super(props);
        this.routeChange=this.routeChange.bind(this);
        this.state={
            Aman:[]
        }
    }

    
    
    getUserData = () => {
        let database = Firebase.database();
        let data=[];
        database.ref('request').on('value' , (snapshot)=>{
            snapshot.forEach((childsnapshot)=>{
                        data.push({
                            id:childsnapshot.key,
                            ...childsnapshot.val()
                        })
                    })
                    this.setState({Aman:data})
        })
      }

      componentDidMount()
      {
          this.getUserData();
      }

     

      routeChange(id) {
        let path = '/details/'+id;
        this.props.history.push(path);

      }
    

    render(){
        
        console.log(this.state.Aman)
        return (
            <div>
                <Nava/>
                <ParticlesContainer/>
                {this.state.Aman.map(item =>(
                    <InlineBlock>
                        <Card onClick={()=>this.routeChange(item.id)} style={style3}>
                            <Card.Body>
                                <Card.Title>{item.Bloodgrogp}</Card.Title>
                                <ListGroup>
                                    <ListGroup.Item variant="warning">Addres : {item.Adress}</ListGroup.Item>
                                    <ListGroup.Item variant="warning">Name : {item.Name}</ListGroup.Item>
                                    <ListGroup.Item variant="warning">Mobile no : {item.Mobile}</ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                            <Card.Footer>
                            </Card.Footer>
                        </Card>
                    </InlineBlock>
                ))}
            </div>
        );
}
}




export default home