import React from 'react'
import { connect} from 'react-redux'

const SongDetails = ({song}) =>{
    if(!song){
        return <div>Select a song</div>
    }
    return( <div >
        <h3>{song.title}</h3>
        {song.duration}</div>)
}

const mapStateToProps =(state) =>{
    return { song : state.selectedSong}
}

export default connect(mapStateToProps) (SongDetails);