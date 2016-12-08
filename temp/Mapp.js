import React from 'react';

class Mapp extends React.Component{
    render(){
        return <button>I <Heart/> Кицю</button>
    }
}
const Button = (props)=> <button>{props.children}</button>

class Heart extends React.Component {
    render(){
        return <span>&hearts;</span>
    }
}

export default Mapp;