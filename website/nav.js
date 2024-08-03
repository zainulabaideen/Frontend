
const navhtml=`  <marquee>Winter Sale 50% off </marquee><nav class="navbar navbar-expand-lg bg-body-tertiary px-4 ">
<div class="container-fluid">
  <a class="navbar-brand" href="Index.html">Welcome to E-site</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     
      <li class="nav-item">
        <a class="nav-link" href="/AllProducts.html">All Products</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Categories
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Men</a></li>
          <li><a class="dropdown-item" href="#">Women</a></li>
          <li><a class="dropdown-item" href="#">Kids</a></li>
          <li><a class="dropdown-item" href="#">About</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link "  href="#">
            About
        </a>
      </li>
    </ul>
    <div class="d-flex nav-icons" >
     <a href="addtocart">   <i class="fa-solid fa-bag-shopping me-4"></i> </a>
        <i class="fa-solid fa-magnifying-glass "></i> 
    </div>
  </div>
</div>
</nav>`
const navElem = document.querySelector(".section-nav");
navElem.innerHTML=navhtml;