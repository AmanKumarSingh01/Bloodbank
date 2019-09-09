import React, { Component } from 'react';
import Firebase from 'firebase'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import axios from './../components/Axios'
import Nava from './nav';
class onClickHandle extends Component {
    constructor(props){
        super(props);
        this.getUserdata=this.getUserdata.bind(this);
        this.handleClick=this.handleClick.bind(this)
        this.state ={
            id :this.props.match.params.id,
            Name : '',
            Adress : '',
            Bloodgroup :'',
            Email: '',
            Mobile:' '
        }
    }
   
    getUserdata = () =>{
        let database = Firebase.database();
        let data =[];
        database.ref('request/'+this.state.id).on('value' , (snapshot) =>{
            data=snapshot.val()
        });
        console.log(data);
        return this.Displaydata(data);
    }
    Displaydata(data){
        var dasa = <div>
            <Card className='container' style={{width:'20rem'}}>
                <Card.Title>Full Details</Card.Title>
                <Card.Body>
                    <ListGroup>
                        <ListGroupItem variant ='danger'>Name :{data.Name}</ListGroupItem>
                        <ListGroupItem variant ='danger'>Bloodgroup :{data.Bloodgrogp}</ListGroupItem>
                        <ListGroupItem variant ='danger'>Email :{data.Email}</ListGroupItem>
                        <ListGroupItem variant ='danger'>Mobile :{data.Mobile}</ListGroupItem>
                        <ListGroupItem variant ='danger'>Adress :{data.Adress}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
                <Card.Footer className='container'>
                    <Button onClick={()=>this.handleClick(data)}>Proceed!!</Button>
                </Card.Footer>
            </Card>
        </div>
        return dasa;
    }

    handleClick(data){
        alert('Do you want to continue');
        var Aman ={
            date : Date.now(),
            Name : data.Name,
            Email : data.Email,
            Phone : data.Phone
        }
        axios
        .post('/helps/'+localStorage.getItem('uid')+'.json' , Aman)
        .then( res=>{console.log(res); alert('Done!!')})
        .catch(err => console.error(err));
        // database.ref('request').child(this.state.id).remove()
        // this.props.history.push('/feed');
    }
    
    render(){
       console.log(this.props.match.params.id);
        return (
            <div>
                <Nava/>
                <div>Welcome to Onclick Handler!!</div>
                <div>
                    {this.getUserdata()}
                </div>
            </div>
        );
}
}


export default onClickHandle

