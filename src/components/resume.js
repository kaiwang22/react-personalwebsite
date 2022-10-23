import './App.css';

function Resume( {resume}) {
    return (
        <div className= "resume">
                    <ul>
                        <li>{resume}</li>
                    </ul>
        </div>
    );
}

export default Resume;