import Button from '@material-ui/core/Button';
import './bubble.css';

function Bubble({type}) {
    return (
        <div className="button-wrapper">
            <Button className="button" variant="contained" >
                {type}
            </Button>
            <img className="plus" src={'Plus.png'} alt={'plus'}></img>
        </div>
    )
}

export default Bubble;