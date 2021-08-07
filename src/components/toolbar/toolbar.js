// import { useSnapshot } from 'valtio';
import '../../assets/styles/Toolbar.css';
import { state } from '../../state/state';


const handleDarkSkin = () => {
    state.skinColor.right = "#aaab6e";
    state.skinColor.left = " #727341";
};

function handleWhiteScin() {
    state.skinColor.right = "#f0c087";
    state.skinColor.left = "#e6af78";
}

function Toolbar() {
    // const snap = useSnapshot(state);

    return(
        <div className="bar">
            <ul>
                <li> Skin Color
                    <ul>
                        <li onClick={ handleWhiteScin }>White</li>
                        <li onClick={ handleDarkSkin }>Dark</li>
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
