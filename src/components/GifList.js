import React from 'react'

const GifList = (props) =>{


        return(
            <div>
                <ul>
                    {/* <li><img src={this.props.img}/></li> */}
                    {props.gifs.map((gif) => <li>
                        <img key={gif.images.original.url} src={gif.images.original.url} alt={gif.images.original.url}/>
                    </li>)}
                </ul>
            </div>
        )
    
}
export default GifList