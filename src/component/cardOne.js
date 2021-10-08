import React, { Fragment, Component } from 'react'
import '../App.css'

class cardOne extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
}

componentDidMount() {
    fetch("http://localhost:8080/albums")
      .then(res => res.json())
      .then(parsedJSON => parsedJSON.results.map(data => (
        {
          id: `${data.id}`,
          NetworkDevice: `${data.NetworkDevice}`,
          WirelesClients: `${data.WirelesClients}`,
          WiredClients: `${data.WiredClients}`,
          P1: `${data.P1}`,
          P2: `${data.P2}`,
        } 
      )))
      .then(items => this.setState({
        items,
        isLoaded: false
      })) 
      .catch(error => console.log('parsing failed', error))
  }

  render(){
      const { items } = this.state;
      return(
        
            // <div>
            // {
            //     items.length > 0 ? items.map(item =>{
            //         const {NetworkDevice, WirelesClients, WiredClients, P1, P2} = item;
            //         return(
                        <Fragment> 
                        {/* const {NetworkDevice, WiredClients, WirelesClients, P1, P2}= item; */}
                        <div className="border ">
                        <h2 className="tofu">Healt</h2>
                        <h4 className="dom">Healt as of <span>Oct 8, 2021 12:05 am</span></h4>
                        <h1 className="foos">
                            {/* {NetworkDevice} */}
                            100%
                        </h1><br/>
                        <h4 className='liau'>Network Device</h4>
                        <h1 className="fooso">
                            {/* {WirelesClients}% */} 25%
                        </h1><br/>
                        <h4 className='liauo'>Wireless Clients</h4>
                        <h1 className="foosoo">
                            {/* {WiredClients}% */} 100%
                        </h1><br/>
                        <h4 className='liauoo'>Wired Clients</h4>
                        <h4 className="inBottom"> View Details</h4>
                    </div>
                    <div className="borderTwo">
                    <h2 className="tofu">Critical Issues</h2>
                        <h4 className="dom">Last 24 Hours</h4>
                        <h1 className="foosTwo">
                            {/* {P1} */} 0
                        </h1><br/>
                        <h4 className='liauTwo'>P1</h4>
                        <h1 className="foosoTwo">
                            {/* {P2} */} 0
                        </h1><br/>
                        <h4 className='liauoTwo'>P1</h4>
                        <h4 className="inBottom"> View Details</h4>
                    </div>
                    </Fragment>
                    );
    //             }) : null
    //         }
        
    //     </div>
    //   );
  }
}      
  export default cardOne;
