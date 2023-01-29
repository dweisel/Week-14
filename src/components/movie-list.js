//cannot get the image from Up to work!
// import Up from './Up.jpg';

import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
        render() {
            return (
                <div className="movieList container">
                    <Movie {...
                        {id: 1,
                            key: 1,
                            title: 'Up', 
                            //cannot get this image to link
                            // image: Up,
                            synopsis: "A wonderful story.",
                            rating: "PG"}} />
                </div>
            );
        }
}