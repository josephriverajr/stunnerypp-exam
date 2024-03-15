<?php
include './connect.php';


if($_SERVER['REQUEST_METHOD'] === "GET"){
    $sql = "SELECT * FROM listedsongs";
    $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) > 0){
            $songs = array();
            while ($row = mysqli_fetch_assoc($result)){
                $songs[] = $row;
            }
            $response = $songs;
        }
        else{
            $response = array("message" => "No Recrod(s) Found");
        }
}
else if($_SERVER['REQUEST_METHOD'] === "POST"){
    $title = $_POST['title'];
    $artist = $_POST['artist'];
    $lyrics = $_POST['lyrics'];

    $sql = "INSERT INTO `listedsongs`(`id`, `title`, `artist`, `lyrics`) VALUES (NULL,'$title','$artist','$lyrics')";

    if(mysqli_query($conn, $sql)){
        $response = array("message" => "New Song added : ".$title);
    }
}
else if($_SERVER['REQUEST_METHOD'] === "PUT"){
    parse_str(file_get_contents("php://input"), $_PUT);
    $song_id = $_PUT['song_id'];
    $title = $_PUT['title'];
    $artist = $_PUT['artist'];
    $lyrics = $_PUT['lyrics'];
 
    $sql = "UPDATE `listedsongs` SET `title`='$title',`artist`='$artist',`lyrics`='$lyrics' WHERE id='$song_id'";
    // echo $sql;
    if(mysqli_query($conn, $sql)){
        $response = array("message" => "Song Updated : ".$title);
    }
}
else if($_SERVER['REQUEST_METHOD'] === "DELETE"){
    parse_str(file_get_contents("php://input"), $_GET);
    $song_id = $_GET['id']; ;
  
    $sql = "DELETE FROM `listedsongs` WHERE id='$song_id'"; 
    if(mysqli_query($conn, $sql)){
        $response = array("message" => "Song Deleted");
    }
}
else{
    echo "Error";
}

header("Content-Type: application/json");
echo json_encode($response);
// mysqli_close($conn);
 
?>