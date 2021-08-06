import React from 'react'
import '../../assets/styles/Toolbar.css';

function Toolbar() {
    return(
        <div className="bar">
            <ul>
                <li title="Skin Color" className="fa fa-adjust">
                    <ul>
                        <li title="White">White</li>
                        <li title="Dark">Dark</li>
                    </ul>
                </li>
                <li title="link 2" className="fa fa-bullseye"></li>
                <li title="link 3" className="fa fa-clone"></li>
                <li title="link 4" className="fa fa-check"></li>
                <li title="Group 1" className="fa fa-bell">
                    <ul>
                        <li title="link 1" className="fa fa-bell-o"></li>
                        <li title="link 3" className="fa fa-bell-slash"></li>
                    </ul>
                </li>
                <li title="" className="fa fa-exclamation-circle">
                    <ul>
                        <li title="link 1" className="fa fa-exclamation-triangle"></li>
                        <li title="link 2" className="fa fa-exclamation-circle"></li>
                    </ul>
                </li>
                <li title="Final link" className="fa fa-commenting"></li>
            </ul>
        </div>
    )
}

export default Toolbar;
