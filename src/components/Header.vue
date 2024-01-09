<template>
    <nav class="navbar border navbar-expand-lg bg-body-tertiary" style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <a class="navbar-brand " style="width: 329px;" href="#">
        <div class="rounded " style="width: 40px; height: 40px; background: #FBBD71 0% no-repeat padding-box;">
     <b style="font: normal normal bold 28px/32px helvetica;
        letter-spacing: 0px;
        color: #21455E;
        padding-left: 50px;
        ">Adilo</b>   
        </div>
        </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active"  :to="{name: 'list'}">Project</RouterLink>  
          </li>
  
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tools & App
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Snapbyte Recorder</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">AudioBounce</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Sugar Voice</a></li>
            </ul>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#">Channels</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#">Contacts</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#">Analytics</a>
          </li>
  
          <li class="nav-item">
            <a class="nav-link" href="#">Settings</a>
          </li>
        </ul>
        <span class="navbar-text">
          <b>Help</b>
         <span class="px-3">|</span>
         <!-- <div class="rounded" style="width: 40px; height: 40px; background: #FBBD71 0% no-repeat padding-box;">
          </div> -->
          <b><small>Cody Fisher</small></b>
          <small>Cody Fisher@gmail.com</small>
        </span>
      </div>
    </div>
  </nav>
</template>
