import { v4 as uuidv4 } from "uuid";
function musicData() {
    return [
        {
            name: "Velocities",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/9e04907d0cf68c974c4a5f530b082a8d83a2d41f-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7988",
            color: ["#C9E7ED", "#FCF4CF"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Glory Days",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
            artist: "Sitting Duck, Hoffy Beats",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7981",
            color: ["#6A9D94", "#4D5B41"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Vibe Vibe",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
            artist: "Moods, Yasper",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10002",
            color: ["#C8EFFE", "#AE8F38"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Keep Going",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
            color: ["#CD607D", "#c94043"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Where We Met",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/06/faa452681fe33146c42a1b422fdf7cd7fd082637-1024x1024.jpg",
            artist: "xander",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9203",
            color: ["#902E36", "#5B3655"],
            id: uuidv4(),
            active: false,
        },
     
        {
            name: "Far Away",
            cover:
                "https://chillhop.com/wp-content/uploads/2020/07/bc9a7af2ad67de703541c2c7a91e3df74ab494c0-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7951",
            color: ["#D7878D", "#3B4E5D"],
            id: uuidv4(),
            active: false,
        },
        //ADD MORE HERE
    ];
}

export default musicData;