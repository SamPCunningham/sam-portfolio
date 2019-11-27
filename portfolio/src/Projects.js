import React from "react"
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="https://hope-chess.herokuapp.com"
        image="https://upload.wikimedia.org/wikipedia/commons/6/66/Chess_gameboard..jpg"
        title="React Chess App"
        category="Web Application using React, Node and Express"
      />
      <Thumbnail
        link="www.todo-react-live.herokuapp.com"
        image="https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_960_720.jpg"
        title="React To Do List"
        category="Web Application using React, Node and Express"
      />
      <Thumbnail
        link="https://grammable-sam-cunningham.herokuapp.com"
        image="https://cdn.pixabay.com/photo/2019/06/20/01/11/camera-4285891_960_720.jpg"
        title="Photo Sharing Application"
        category="Web Application using Ruby on Rails, postgreSQL, JQuery, and AWS S3 buckets."
      />
      <Thumbnail
        link="https://flixter-sam-cunningham.herokuapp.com"
        image="data:image/jpeg;base64,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"
        title="Video Instuction Site"
        category="Web Application using Ruby on Rails, postgreSQL, JQuery, and AWS S3 buckets."
      />
    </div>
  )
}
 
export default Projects;