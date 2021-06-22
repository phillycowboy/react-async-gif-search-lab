import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


class GifListContainer extends Component{
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }
    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/search?q=dog&api_key=FsZrNsxa9DnCnSj7Hthwti595atrwtX3&rating=g")
        .then(res => res.json())
        .then(data => this.setState({gifs: data.gifs}))
    }
    render(){
        return(
            <div>
                {this.state.gifs.map((gif) => <GifList img={gif.url} alt={gif.url}/> )}
                <GifSearch />
            </div>
        )
    }
}

export default GifListContainer