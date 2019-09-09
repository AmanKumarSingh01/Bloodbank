import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import axios from './../components/Axios';
import ParticlesContainer from './../components/Particlecontainer'
import Nava from './nav';
const style1={
    'margin': 'auto',
//   'width': '50%',
  'border': '3px solid green',
  'padding': '10px',
  'width': '20rem',
  'opacity':'100%',

  'backgroundImage':"linear-gradient( #A1FFCE,#faffd1)"
  
}
 class requestpage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', result :'' , Mobile:'' , Email: '' ,Bloodgrogp: '', Adress:''};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeAdress = this.handleChangeAdress.bind(this);
        this.handleChangeBg = this.handleChangeBg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChangeName(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value)
      }
      handleChangePhone(event) {
        this.setState({Mobile: event.target.value});
        console.log(event.target)
      }
      handleChangeEmail(event) {
        this.setState({Email: event.target.value});
      }
      handleChangeBg(event) {
        this.setState({Bloodgrogp: event.target.value});
      }
      handleChangeAdress(event) {
        this.setState({Adress: event.target.value});
      }


      handleSubmit(event) {
        var Aman ={
            Name : this.state.value,
            Mobile : this.state.Mobile,
            Email : this.state.Email,
            Bloodgrogp : this.state.Bloodgrogp,
            Adress : this.state.Adress
          }
            axios
              .post("/request.json" , Aman)
              .then(res => {alert('Your request has been made')} )
              .catch(err => console.error(err));
            
          event.preventDefault();
      }


    render(){
        
        return (
            <div>
              <Nava/>
                <ParticlesContainer/>
              <Card style={style1} >
                  <Card.Header>
                      Get Help!!
                  </Card.Header>
                  <Card.Title> Please enter the details"</Card.Title>
                  <Card.Body>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChangeName} />
                        </label>
                        <label>
                            Phone:
                            <input type="text" value={this.state.Mobile}  onChange={this.handleChangePhone} />
                        </label>
                        <label>
                            Email:
                            <input type="Email" value={this.state.Email}  onChange={this.handleChangeEmail} />
                        </label>
                        <label>
                            Bloodgrogp:
                            <input type="text" value={this.state.Bloodgrogp}  onChange={this.handleChangeBg} />
                        </label>
                        <label>
                            Adress:
                            <input type="text" value={this.state.Adress}  onChange={this.handleChangeAdress} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                  </Card.Body>
              </Card>
          </div>
        );
}
}



export default requestpage