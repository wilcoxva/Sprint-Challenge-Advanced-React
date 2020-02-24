import React from 'react';
import styled from 'styled-components';

class UserCard extends React.Component {

    constructor() {
        super();
        this.state ={ players :[]
        };}

    componentDidMount() {
        fetch("http://localhost:5000/api/players")
            .then(res => res.json())
            .then(players => this.setState({ players }))
            .catch(err => console.log("Error:", err));
        }
    
    render() {
      console.log(this.state.players)
      return (
        <div className="UserCard">
          <header className="UserCard-header">
            {this.state.players.map(res => (
                <Div>
                    <h1>{res.name}</h1>
                    <p>{res.country}</p>
                    <p>Searches: {res.searches}</p>
                </Div>
            ))}
          </header>
        </div>
      );
    }
    
  }
  
  export default UserCard;
  
  const Div = styled.div`
    background-color: gray;
    border-radius: 25px;
  `