// create your App component here
import React from 'react';

export default class App extends React.Component{
    state ={
        peopleInSpace: []
    }
    render(){
        return (
            <div>
                <h1>Astronauts In Space</h1>
                <ul>
                    {this.state.peopleInSpace.map(person=>{
                        return <li>{person.name}</li>
                    })}
                </ul>
            </div>

        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(r=> r.json())
        .then(data =>{
            console.log(data)
            this.setState({
                peopleInSpace: data.people
            })
        })
    }
}