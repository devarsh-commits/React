import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective, Adjective }) => {
    console.log('rendering')
    return (
        <div>
            <div>I am {adjective} bar</div>
            {/* rerendering is happening bcz in js same valued fuction are not same */}
            <div>{Adjective()}</div>
        </div>

    )
}
// here it's rerendering is stopped
export default memo(Navbar) 