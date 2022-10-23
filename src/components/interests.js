import './App.css';

function Interests( {interest}) {
    return (
        <div className= "interests">
                    <ul>
                        <li>{interest}</li>
                    </ul>
        </div>
    );
}

export default Interests;