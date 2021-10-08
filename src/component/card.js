import React, { Fragment } from 'react'

const Card = () => {
    return (
        <Fragment>
            
                <h2 className="ass">
                    Network Snapshot
                </h2>
                <div className="borderx ">
                        <h2 className="tofu">Sites</h2>
                        <h4 className="dom">As of<span>Oct 8, 2021 12:30 am</span></h4>
                        <h1 className="foos">
                            {/* {NetworkDevice} */}
                            213
                        </h1><br/>
                        <h4 className ='nets'>
                        DNS Servers: <span>1</span>
                        </h4>
                        <h4 className="netso">
                        NTP Servers: <span>0</span>
                        </h4>
                        <h4 className="inBottoms"> View Sites</h4>
                </div>
                <div className="borderxx">
                        <h2 className="tofu">Network Devices</h2>
                        <h4 className="dom">As of<span>Oct 8, 2021 12:30 am</span></h4>
                        <h1 className="foos">
                            {/* {NetworkDevice} */}
                            16
                        </h1><br/>
                        <h4 className ='nets1'>
                        Unclaimed : <span>32</span>
                        </h4>
                        <h4 className="netso1">
                        Unprovisioned : <span>15</span>
                        </h4>
                        <h4 className="netsol">
                        Unreachable : <span>2</span>
                        </h4>
                        <h4 className="inBottoms1"> Find New Devices</h4>
                </div>
                <div className="borderxxx">
                        <h2 className="tofu">Network Profiles</h2>
                        <h4 className="dom">As of<span>Oct 8, 2021 12:30 am</span></h4>
                        <h1 className="foos">
                            {/* {NetworkDevice} */}
                            31
                        </h1><br/>
                        <h4 className="inBottoms2"> Find New Devices</h4>
                </div>
                <div className="borderx ">
                        <h2 className="tofu">Images</h2>
                        <h4 className="dom">As of<span>Oct 8, 2021 12:30 am</span></h4>
                        <h1 className="foos">
                            {/* {NetworkDevice} */}
                            2
                        </h1><br/>
                        <h4 className ='nets5'>
                        Untagged Images : <span>0</span>
                        </h4>
                        <h4 className="netso5">
                        Unverified Images : <span>0</span>
                        </h4>
                        <h4 className="inBottoms3"> View Images/SMUs</h4>
                </div>
                <div className="borderxxxx ">
                        <h2 className="tofu">Cisco DNA Licensed Devices</h2>
                        <h4 className="dom">As of<span>Oct 8, 2021 12:30 am</span></h4>
                        <h1 className="foos">
                            {/* {NetworkDevice} */}
                            2
                        </h1><br/>
                        <h4 className ='nets6'>
                        Switches : <span>32</span>
                        </h4>
                        <h4 className="netso6">
                        Routers : <span>15</span>
                        </h4>
                        <h4 className="netsol1">
                        Wireless : <span>2</span> </h4>
                        <h4 className="inBottoms4"> Manage Licenses</h4>
                </div>
                
        </Fragment>
    )
}

export default Card
