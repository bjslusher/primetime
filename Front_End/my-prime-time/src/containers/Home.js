import React from "react";


const Home = () => (
    <div class="container">
        <div class="jumbotron mt-5">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4" />
            <p>Sign In to View Content</p>
            <p class="lead">
            <a class="btn btn-primary btn-lg" href="/login" role="button">Sign In</a>
            </p>
        </div>
    </div>
);

export default Home;