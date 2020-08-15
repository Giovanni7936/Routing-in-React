import React from 'react'
import {Link, Route} from 'react-router-dom'
import {Switch} from 'react-router'

let path = '${match.url}/relative-path'

function Navigation(props){
    return(
        
        <div className = 'Navigation'>
            <ul>
           <li> <Link to = '/'>Home</Link></li>
            <li><Link to = '/Clock'>Clock</Link> </li>
            <li><Link to='/Contact'>Contact</Link> </li>
            </ul>
            

        </div>
    )

}
export default Navigation