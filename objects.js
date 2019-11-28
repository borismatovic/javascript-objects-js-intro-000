var playlist = {
  faithNoMore: "King for a day, fool for a lifetime",
  jamiroquai: "Lightstar",
  suicidalTendencies: "Medicine man"
}

function updatePlaylist(playlist, artistName, songTitle){
  return playlist.artistName = songTitle
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}