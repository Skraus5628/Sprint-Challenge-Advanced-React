import React, {Component} from 'react';
import axios from '.../axios';
import PlayerCard from './PlayerCard';

class Players extends  Component{
    constructor(){
        super();
        this.state = {
            players: [],
        }
    }


    componentDidMount(){
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            console.log(res.data)
            this.setState({
                players: res.data
            })
        })

        .catch(err => console.log(err));
    }


    render(){
        return(
            <div className= "cardCont">
                {/* {this.state.players.map(player => (
                    <div>
                        <h1>{player.name}</h1>
                        <p>{player.country}</p>
                        <p>{player.searches}</p>
                        </div> */}
                       {this.state.players.map(player => (                    
                    <PlayerCard 
                    name ={player.name} 
                    id ={player.id}  
                    country = {player.country} 
                    searches= {player.searches}  />  

                ))}

            </div>
        )
    }

}


export default Players;