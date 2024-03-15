$(document).ready(function () {
    function useEffect() {
        showLoading();
        
        
        $('#create-form #song_id').val("");
        $('#create-form #title').val("");
        $('#create-form #artist').val("");
        $('#create-form #lyrics').val("");

        setTimeout(() => {
            fetchSongs();
        }, 750)
    }

    function fetchSongs() {
        $.ajax({
            url: './connection/endpoints.php',
            type: "GET",
            success: function (response) {
                showLoading();
                console.log(response)
                if(response.message){
                    $("#alert-me").show();
                    $("#alert-me").text(response.message); 
                }
                else{
                    listOfSongs(response);
                    $("#alert-me").hide();
                }
            },
            error: function (e) { 
            }
        });
    }

    function listOfSongs(response) {
        let list = ``;
        response.forEach(element => {
            list += `
            <div class="col-6 col-sm-4 mb-2">
                <div class="card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between"> 
                            <span>${element.title}</span>
                            <div>
                                <span style="cursor: pointer" onclick="fetchEdit('${element.id}','${element.title}','${element.artist}','${element.lyrics}')">
                                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                </span>
                                <span style="cursor: pointer" onclick="fetchDelete('${element.id}','${element.title}','${element.artist}','${element.lyrics}')">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.23 9.78L15.01 12L17.23 14.22C17.52 14.51 17.52 14.99 17.23 15.28C17.08 15.43 16.89 15.5 16.7 15.5C16.51 15.5 16.32 15.43 16.17 15.28L13.95 13.06L11.73 15.28C11.58 15.43 11.39 15.5 11.2 15.5C11.01 15.5 10.82 15.43 10.67 15.28C10.38 14.99 10.38 14.51 10.67 14.22L12.89 12L10.67 9.78C10.38 9.49 10.38 9.01 10.67 8.72C10.96 8.43 11.44 8.43 11.73 8.72L13.95 10.94L16.17 8.72C16.46 8.43 16.94 8.43 17.23 8.72C17.52 9.01 17.52 9.49 17.23 9.78ZM21.32 7V17C21.32 17.96 20.54 18.75 19.57 18.75H7.64C7.02999 18.75 6.48 18.44 6.16 17.93L2.87 12.66C2.62 12.26 2.62 11.74 2.87 11.33L6.16 6.07C6.48 5.56 7.04 5.25 7.64 5.25H19.58C20.54 5.25 21.33 6.04 21.33 7H21.32ZM19.82 7C19.82 6.86 19.71 6.75 19.57 6.75H7.64C7.54999 6.75 7.47 6.79 7.43 6.87L4.22 12L7.43 17.13C7.48 17.2 7.56 17.25 7.64 17.25H19.58C19.72 17.25 19.83 17.14 19.83 17V7H19.82Z" fill="#000000"></path> </g></svg>
                                </span>
                            </div>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row"> 
                            <div class="col-sm-12">
                                <b>Lyrics</b>
                                <br/>
                                <span> ${element.lyrics} </span>
                            </div>
                        </div>
                        <p class="mb-0 mt-2" style="font-size: 80%; font-style: italic;">Created: <u>${element.artist}</u> (${element.date_created})</p>
                    </div>
                </div>
            </div>
            `
        });
        $("#song-added").append(list);
    }

    function showLoading() {
        $("#loading-container").toggle();
    }


    $("#create-form").submit(function (event) {
        event.preventDefault();
        let formData = $(this).serialize();
        $.ajax({
            url: './connection/endpoints.php',
            type: "POST",
            data: formData,
            success: function (response) {
                console.log(response);
                $("#song-added").empty(); 
                $('#close-add').click(); // for closing a modal with backdrop
                
                useEffect();
            },
            error: function (e) {
                console.log(e);
            }
        });
    });

    $("#update-form").submit(function (event) {
        event.preventDefault();
        let formData = $(this).serialize();
        let song_id = $("#song_id").serialize();
        $.ajax({
            url: './connection/endpoints.php',
            type: "PUT",
            data: formData,
            dataType: "json",
            success: function (response) {
                console.log(response);
                $("#song-added").empty(); 
                $('#close-update').click(); // for closing a modal with backdrop
                useEffect();
            },
            error: function (e) {
                console.log(e);
            }
        });
    });

    $("#delete-form").submit(function (event) {
        event.preventDefault();
        var song_id = $("#delete-form #song_id").val();  
        $.ajax({
            url: './connection/endpoints.php',
            type: "DELETE",
            data: {id : song_id},
            dataType: "json",
            success: function (response) {
                console.log(response) 
                $("#song-added").empty(); 
                $('#close-delete').click(); // for closing a modal with backdrop
                useEffect();
            },
            error: function (e) {
                console.log(e);
            }
        });
    });

    useEffect();
});


function fetchEdit(id,title, artist, lyrics){
    
    $('#editModal #song_id').val(id);
    $('#editModal #title').val(title);
    $('#editModal #artist').val(artist);
    $('#editModal #lyrics').val(lyrics);
    $('#editModal').modal('show');
}



function fetchDelete(id,title, artist, lyrics){
    
    $('#deleteModal #song_id').val(id);
    $('#deleteModal #title').text(title);
    $('#deleteModal #artist').text(artist);
    $('#deleteModal #lyrics').text(lyrics);
    $('#deleteModal').modal('show');
}