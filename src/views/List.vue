
<template>
     
        <div class="col-9 px-5">
          <div class="row "> 
            <nav class="mt-3" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Snapbyte</a></li>
                <li class="breadcrumb-item active" aria-current="page"> <font-awesome-icon icon="fa-solid fa-user-secret" />My Recordings</li>
                 
              </ol>
            </nav>
            <div class="d-flex justify-content-between">
              <div class="lead">My Recordings <span class="badge rounded-pill text-secondary">5</span></div>
            
            <div class="d-flex justify-content-end">
                <button type="button" class="btn rounded-5 btn-outline-secondary mx-2">By Date</button>
                <button type="button" class="btn rounded-5 btn-outline-secondary mx-2">Add Filter</button>
                <button type="button" class="btn rounded-5 btn-info text-white mx-2">New Request</button>
                <button type="button" class="btn rounded-5 btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Start Recording</button>
            </div>
            </div>
          </div>
      
          <table class="table table-borderless mt-3">
            <thead>
              <tr>
                <th>Recordings</th>
                <th>Title</th>
                <th>Views</th>
                <th>Size</th>
                <th>Last Modified</th>
                <th></th>
              </tr>
              <tr>
                <td><video src=""></video></td>
                <td>
                  <b>getting it right the first time</b><br>
                  <small class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</small>
                </td>
                <td>views</td>
                <td>923kb</td>
                <td>3 months ago</td>
                <td> ...</td>
              </tr>
            </thead>
          </table>
          
        </div> 
</template>