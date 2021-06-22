import React, {Component} from 'react'

class GifList extends Component{

    constructor(props){
        super(props);
        this.state = {
            img: this.props.img
        }
    }

    render(){
        return(
            <div>
                <ul>
                    <li><img src={this.props.img}/></li>
                </ul>
            </div>
        )
    }
}
export default GifList