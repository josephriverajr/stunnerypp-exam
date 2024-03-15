<?php include './connection/connect.php' ?>

<html>
    <head>
        <title>Song Lyrics Exam - Native PHP</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link href="./assets//css/styles.css" rel="stylesheet">
    </head>
    
   
    <body>
        <div class="container">
                <div class="d-flex justify-content-between pt-4">
                    <h2 class="title"> Song List </h2>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#addModal">
                        Add +
                    </button>
                </div> 

                <div class="alert alert-secondary mt-5 w-100 mx-auto" role="alert" id="alert-me" style="display:none;">
                     
                </div>
                <div id="song-added" class="row mt-4"> 
                </div>
                    <div class="row" id="loading-container" style="display: none ">
                        <div class="col-sm-12 text-center">
                            <div class="spinner-border text-warning" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    </body> 
    <?php include './components/addModal.php' ?>
    <?php include './components/editModal.php' ?>
    <?php include './components/deleteModal.php' ?>
</html>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> 
<script type="text/javascript" src="./assets/js/script.js"></script>