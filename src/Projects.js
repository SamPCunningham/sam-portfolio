import React from "react"
import Thumbnail from './Thumbnail.js';
import Logo from './logo.svg';
import './App.css';

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        image="/chessboard.jpg"
        category="Web Application using React, Node and Express"
      />
      <a href="https://hope-chess.herokuapp.com" class="thumblinks">React Chess App Link</a>
      <Thumbnail
        image="/studio.jpg"
        category="Web Application using Ruby on Rails, postgreSQL, JQuery, and AWS S3 buckets."
      />
      <a href="https://edustream-sam-cunningham.herokuapp.com" class="thumblinks">Video Instruction Site - "Edustream" Link</a>
      <Thumbnail
        image="/note.jpg"
        category="Web Application using React, Node and Express"
      />
      <a href="https://todo-react-live.herokuapp.com//" class="thumblinks">To Do React App Link</a>
      <Thumbnail
        image="/cam.jpg"
        category="Web Application using Ruby on Rails, postgreSQL, JQuery, and AWS S3 buckets."
      />
      <a href="https://grammable-sam-cunningham.herokuapp.com" class="thumblinks">Photo Sharing Site - "Grammable" Link</a>

      <br />
      <br />
      <h2>This portfolio created using React</h2>
      <img src="/logo192.png" />
    </div>
  )
}

export default Projects;
