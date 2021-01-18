import React from 'react';
import './Headline.css'
export class Headline extends React.Component {
    //Async example
    /*constructor(props){
        super(props);
        console.log('start');
        setTimeout(()=>{
            console.log('middle');
        }, 2000);
        console.log('end');
    }*/
    render() {
         return (
            <h1 className="headline">{this.props.headline}</h1>
         );
    };
}