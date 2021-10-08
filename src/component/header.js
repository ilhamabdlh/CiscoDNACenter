import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { PlayCircleOutlined } from '@ant-design/icons'

const Header = () => {
    return (
        <>
            <div>
            <h1 style={{marginLeft:130}}>
                    <span style={{
                        fontFamily: "arial",
                        fontSize:25,
                        fontWeight:20
                }}> Welcome, </span> 
                    <span style={{
                    color: '#15cdfc',
                    fontFamily: "arial",
                    fontSize:25,
                    fontWeight: 20,
                    cursor: 'pointer'

                }}> devnetuser </span>
            </h1>
            <h4 style={{
                color: '#159bbd',
                cursor: 'pointer',
                float: 'right',
                marginTop: -50,
                marginRight: 250
            }}
            >Take a Tour </h4>
            <h4 style={{
                color: '#159bbd',
                cursor: 'pointer',
                float: 'right',
                marginTop: -50,
                marginRight: 100
            }}
            > <PlayCircleOutlined/> Learn More </h4>
            </div>
            
            <div>
                <h2 className="ass" >
                    Assurance Summary
                </h2>
            </div>
            
        </>
    )
}

export default Header
