app.component('ishimuraNavbar', {

    props: {},

    methods: {},

    computed: {},

    template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ishimura Logistics</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Index</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Receiving.html">Receiving</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Shipping.html">Shipping</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <form class="d-flex justify-content-end">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </ul>
      </div>
    </div>
    </nav>
<!--      <nav class="navbar navbar-expand-md navbar-brand m-3" id="ishiNavBar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Ishimura Shipping</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="ishimuraNavbar"
                aria-controls="ishimuraNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="ishimuraNavbar">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="index.html">Manifest</a>
            <a class="nav-link" href="Receiving.html">Receiving</a>
            <a class="nav-link" href="#">Company Statement</a>
            <a class="nav-link" href="#">Customer Welfare</a>
          </div>
        </div>
      </div>
      </nav>
      <script>export default {
        components: {}
      }
      </script>-->
    `
});