<script setup>
import Header from './components/Header.vue'
import SideBar from './components/Sidebar.vue'
</script>

<template>
<Header></Header> 
<div class="row ">
  <SideBar></SideBar>
  
  <RouterView />
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New Recording</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body mx-4">
        <div class="form-floating">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Select a project</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label for="floatingSelect">Save the Recording in</label>
        </div>
        <div class="form-check form-switch mt-3 d-flex justify-content-between">
          <label class="form-check-label" for="flexSwitchCheckChecked">Record screen</label>
          <input class="form-check-input mr-5 pr-5" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        </div>
        <div class="form-check form-switch my-4 d-flex justify-content-between">
          <label class="form-check-label" for="flexSwitchCheckChecked">Record camera</label>
          <input class="form-check-input mr-5 pr-5"  type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
        </div>
        <div class="form-check form-switch my-4 d-flex justify-content-between">
          <label class="form-check-label" for="flexSwitchCheckChecked">Record mic</label>
          <input class="form-check-input mr-5 pr-5" type="checkbox" role="switch" id="flexSwitchCheckChecked" >
        </div>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto mb-4">
        <button type="button" class="btn d-block rounded-5 btn-info text-white" data-bs-dismiss="modal">Start Recording</button> 
      </div>
    </div> 
  </div>
</div>
</template>

