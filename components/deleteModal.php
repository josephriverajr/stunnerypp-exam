<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="deleteModalLabel">Add Modal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <form id="delete-form">
            <input type="hidden" class="form-control" required id="song_id" name="song_id" placeholder="Work Out">
        <div class="modal-body">
                <p>Are you sure you want to delete <b id="title"></b> by <b id="artist"></b> ?</p>
                <p> Lyrics : <span id="lyrics"></span></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="close-delete" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-success">Confirm</button>
        </div>
        </form>
    </div>
  </div>
</div>