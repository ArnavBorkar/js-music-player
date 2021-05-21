//Database
// List of all songs------------>


let LikedList = []
let playlist_List_index =1; // temporary fixed value
let totalPlaylists = 1;

//List conataing all the custom Playlists---------->
let playlist_List = [
    {   name: "AllSongs",
        customList : [
            {
                name : "Perfect",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fperfect.mp3?alt=media&token=328c0bec-65d7-40b2-affa-0a9cdee0c32f",
                image : "images/perfect.jpeg"
            },
            {   
            
                 name : "Sugar",
                 path : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fsugar.mp3?alt=media&token=deea1bad-586c-4835-bf58-69b211597ab8",
                 image : "images/sugar.jpeg"
        
            },
            {   
            
                name : "Demons",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fdemons.mp3?alt=media&token=9d79d6d1-bebf-4376-afa3-59828415a352",
                image : "images/demons.jpg"
        
           },
            {   
             
            name : "Paris",
            path : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fparis.mp3?alt=media&token=2d5806eb-bf58-4583-9448-1019e8c929b7",
            image : "images/paris.jpeg"
        
            },
        
            {
                name : "Kabira",
                path : "songs/kabira.mp3",
                image : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fkabira.mp3?alt=media&token=6231a2b3-b6d6-4a32-9e9a-1e1d60ac0383"
            },
            {   
            
                 name : "Raabta",
                 path : "songs/raabta.mp3",
                 image : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fraabta.mp3?alt=media&token=0e12058e-0578-4de5-8cc8-465f59361be3"
        
            },
            {   
            
                name : "Iktara",
                path : "https://firebasestorage.googleapis.com/v0/b/music-player-2f363.appspot.com/o/songs%2Fiktara.mp3?alt=media&token=c92da0fa-93e7-4f37-abdc-bb08d84268d1",
                image : "images/iktara.jpeg"
        
           }
        ]
    },
    {
        name: "Custom Playlist 1", //index 1
        customList : []
    },
    {
        name: "Custom Playlist 2",
        customList : []
    },
    {
        name: "Custom Playlist 3",
        customList : []
    },
    {
        name: "Custom Playlist 4",
        customList : []
    },    {
        name: "Custom Playlist 5",
        customList : []
    },
    {
        name: "Custom Playlist 6",
        customList : []
    }

]

  ///be careful of one 

//Selecting all the elements and assigning them variables


let prev_btn = document.querySelector(".next_btn");
let next_btn = document.querySelector(".prev_btn");
let playpause_btn = document.querySelector(".playpause_btn");

let isPlaying = false;
let track_index = 0;

let currentTrack = document.createElement("audio");

let songname = document.querySelector(".songname");
let songimg = document.getElementById("songImg");




//Adding songs to list--------------------------------------



for (var listCounter = 0; listCounter < playlist_List[0].customList.length; listCounter++) {
    var l_name = playlist_List[0].customList[listCounter].name;
    var li = document.createElement('li');
    li.innerHTML = l_name;  
    document.getElementById('songList').appendChild(li);
}

function updateLikedlist(){

        var listCounter = LikedList.length - 1; 
        var l_name = LikedList[listCounter].name;
        var li = document.createElement('li');
        li.innerHTML = l_name;  
        document.getElementById('likedList').appendChild(li);
    
    }

    function updatePlaylist(){

        var listCounter = playlist_List[playlist_List_index].customList.length - 1; 
        var l_name = playlist_List[playlist_List_index].customList[listCounter].name;
        var li = document.createElement('li');
        li.innerHTML = l_name;  
        document.getElementById(playlist_List_index_name).appendChild(li);
    
    }


//Selecting Playlist--------------------------
var currentList = customList;

function selectPlaylist(){
    currentList = playlist_List[0].customList;
    track_index = 0;
    prevTrack();

}

function playLikedSongs(){
    currentList = LikedList;
    track_index = 0;
    prevTrack();
}



function selectCustomlist(listParameter){
    console.log(listParameter.slice(4,listParameter.length-1));
    
    var playlist_List_index2 = playlist_List.map(function(e) { return e.name; }).indexOf(listParameter.slice(4,listParameter.length-1));
     currentList = playlist_List[playlist_List_index2].customList;
     track_index = 0;
     prevTrack();
}


//Add to playlists





// updating playlist list index
function getOption() {
    var obj = document.getElementById("playlist_form");
    playlist_List_index_name = obj.options[obj.selectedIndex].text;
  }

// playlist_List_index = playlist_List.map(function(e) { return e.name; }).indexOf(playlist_List_index_name);



// operations----------------------------

function loadTrack(track_index){
    currentTrack.src = currentList[track_index].path;
    currentTrack.load;


    //track details

    songimg.src = currentList[track_index].image;
    songname.innerHTML = currentList[track_index].name;
}


function playPauseTrack() {
    if (!isPlaying) playTrack();
    else pauseTrack();
}

function playTrack(){
    currentTrack.play();
    isPlaying = true;

    playpause_btn.innerHTML = '<i class="fas fa-pause"></i>';
}

function pauseTrack(){
    currentTrack.pause();
    isPlaying = false;

    playpause_btn.innerHTML = '<i class="fas fa-play"></i>';
}

function nextTrack() {
 
   if (track_index < currentList.length - 1)
   track_index += 1;
   else track_index=0;

   loadTrack(track_index);
   playTrack();
}

function prevTrack() {
    
    if (track_index > 0)
    track_index -= 1;
    else track_index=0;
 
    loadTrack(track_index);
    playTrack();
 }



 //Add to playlist




 var playlist_pointer=0;
function addToPlaylist(){


    playlist_pointer=0;
    getOption();
    playlist_List_index = playlist_List.map(function(e) { return e.name; }).indexOf(playlist_List_index_name);

    playlist_pointer = playlist_List[playlist_List_index].customList.length;
    playlist_List[playlist_List_index].customList[playlist_pointer] = playlist_List[0].customList[track_index];
    
    updatePlaylist();

}


function addToLikedSongs(){


    var playlist_pointer=0;
    playlist_pointer = LikedList.length;
    LikedList[playlist_pointer] = playlist_List[0].customList[track_index];
    updateLikedlist();

}


//Add the created new playlist to options list function---

function addPlaylistOption(){
    var x = document.getElementById("playlist_form");
    var option = document.createElement("option");
    option.text = playlist_List[totalPlaylists].name;
    x.add(option);
}





//Create a new playlist

function createNewPlaylist(){
    
    playlist_List[totalPlaylists].name = prompt("Enter Name for your New Playlist").split(" ").join("-");
    var newNode = document.createElement('div');
    newNode.setAttribute("class", "customlist");

    newNode.innerHTML = '<h2><button class="playlist-btn" id=btn-'+ playlist_List[totalPlaylists].name +'" onclick="selectCustomlist(this.id)"><i class="fas fa-play"></i></button>' +  playlist_List[totalPlaylists].name + '</h2><ol id="'+playlist_List[totalPlaylists].name+'"></ol>' ;
    document.querySelector('.listContainer').appendChild(newNode);



    addPlaylistOption();
    totalPlaylists=totalPlaylists+1;
   

}



//////-------------------------------

loadTrack(track_index);


