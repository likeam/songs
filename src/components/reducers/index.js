
import { combineReducers } from "redux";

export const songsReducer = () => {
    return  [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarena', duration: '2:30'},
    {title: 'All star', duration: '3:15'},
    {title: 'I Want it That Way', duration: '1:45'},
]
};

export const selectedSongReducer = (selectedSong=null, action) => {

    if(action.type === 'SONG_SELECTED'){
        return action.playload;
    }
    
    return selectedSong;

}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
