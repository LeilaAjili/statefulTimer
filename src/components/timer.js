import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import  './timer.css'


class Timer extends Component{
    constructor (props)
    {

   super(props)
        
        this.state={
            status:false,
            minutes:0,
            seconds:0,
            hours:0,
            elapsedTime:0

        }

setInterval(() => {
    
      if(this.state.status){
          this.setState({
              elapsedTime:this.state.elapsedTime+1000
          })
          this.convert(this.state.elapsedTime)
      }


}, 100)

}

convert=(ms) => {
    this.setState({
        hours:Math.floor(ms/3600000),
        minutes:Math.floor((ms-(this.state.hours*3600000))/60000),
        seconds:parseInt((ms-(this.state.hours*3600000)-(this.state.minutes*60000))/1000)
    })
}
start = () => {
    this.setState( {status: !this.state.status} )
}

reset=()=>{
    this.setState({
        status:false,
        elapsedTime:0,
        seconds:0,
        hours:0,
        minutes:0
    });
};



    render(){
        return(

            <div className="div">
              <div className="div2"></div>
              <div className="bloc">
                <div className="timer">
                    <p className="time">{String(this.state.hours).padStart(2, '0')} :</p>
                    <p className="time">{String(this.state.minutes).padStart(2, '0')} :</p>
                    <p className="time">{String(this.state.seconds).padStart(2, '0')}</p>
                       
                </div>
                       
                <div className="buttons">

                    <Button variant="outline-info"className="bouton" onClick={this.start} >{this.state.status ? 'PAUSE' : 'START'}</Button>
                    <Button variant="outline-danger" className="bouton" onClick={this.reset}>RESET</Button>

                 </div>

               </div>

            </div>
            
        )
    }
}

export default Timer