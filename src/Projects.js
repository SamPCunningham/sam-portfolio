import React from "react"
import Thumbnail from './Thumbnail.js';
import Logo from './logo.svg';
import './App.css';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="https://hope-chess.herokuapp.com"
        image="/chessboard.jpg"
        title="React Chess App"
        category="Web Application using React, Node and Express"
      />
      <Thumbnail
        link="www.todo-react-live.herokuapp.com"
        image="/note.jpg"
        title="React To Do List"
        category="Web Application using React, Node and Express"
      />
      <Thumbnail
        link="https://grammable-sam-cunningham.herokuapp.com"
        image="/cam.jpg"
        title="Photo Sharing Application"
        category="Web Application using Ruby on Rails, postgreSQL, JQuery, and AWS S3 buckets."
      />
      <Thumbnail
        link="https://flixter-sam-cunningham.herokuapp.com"
        image="/studio.jpg"
        title="Video Instuction Site"
        category="Web Application using Ruby on Rails, postgreSQL, JQuery, and AWS S3 buckets."
      />
      <br />
      <br />
      <h2>This portfolio created using React</h2>
      <img src="/logo192.png" />
    </div>
  )
}
 
export default Projects;