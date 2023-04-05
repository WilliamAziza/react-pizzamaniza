import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-default navbar-home">

    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">PIZZAMANIA </a>
    </div>

    
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Pizza</a></li>
        <li><a href="#">Pizza Type</a></li>
      </ul>

</nav>
        </div>
    );
}

export default Header;
