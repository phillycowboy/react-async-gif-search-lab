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
        // fetch("https://api.giphy.com/v1/gifs/search?q=dog&api_key=FsZrNsxa9DnCnSj7Hthwti595atrwtX3&rating=g")
        // .then(res => res.json())
        // .then(data => this.setState({ gifs: data.data}))
        this.fetchGifs()
        // hello ther!
    }

    fetchGifs = (event) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event}&api_key=FsZrNsxa9DnCnSj7Hthwti595atrwtX3&rating=g`)
        .then(res => res.json())
        .then(data => this.setState({ gifs: data.data}))
    }
    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                 <GifList gifs={this.state.gifs}/> 
            </div>
        )
    }
}

export default GifListContainer