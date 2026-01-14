import Data from './Data.js'

function getNotes(){

    return Data;
}

function addNote(note){
    Data.push(note);
    return Data;
}

export {getNotes,addNote}