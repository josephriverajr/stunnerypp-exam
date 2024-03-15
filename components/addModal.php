<div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addModalLabel">Add Modal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
        <form id="create-form">
        <div class="modal-body">
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" required id="title" name="title" placeholder="Eg. 3:15 (Breathe)">
                </div>
                <div class="mb-3">
                    <label for="artist" class="form-label">Artist</label>
                    <input type="text" class="form-control" required id="artist" name="artist" placeholder="Russ">
                </div>
                <div class="mb-3">
                    <label for="lyrics" class="form-label">Lyrics</label>
                    <textarea class="form-control" id="lyrics" name="lyrics" rows="3" placeholder="You are in my head like, breathe"></textarea>
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="close-add" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-success">Add</button>
        </div>
        </form>
    </div>
  </div>
</div>