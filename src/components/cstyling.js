import React from 'react'
//npm install react-jss for css
import {createUseStyles} from 'react-jss'
 
const styles = createUseStyles({
  about : {
    marginTop :'50px',
    width: '40%',
    listStyleType:'none',
    textAlign:'center'
  }, 
    aboutus : {
    color : 'blue',
    fontSize : '16px',
    textAlign:'center'
  }
})

const Testimonial = (props) => {
  const classes = styles()
  const {img, name, post, addr} = props
  return(
    <div class="Container-fluid c1">
    <div class="col-sm-3">
      <div className={classes.about}>
      <div class="card bg-light">

    <img class="card-img-top" src={img} className={classes.aboutus} height='180px' width='180px'/>
    {/* <div class="col sm-3"><div className={classes.aboutus}>Image: {img}</div></div> */}
    {/* <div class="col sm-3"><div className={classes.aboutus}>Name : {name}</div></div>
    <div class="col sm-3"><div className={classes.aboutus}>post: {post}</div></div>
    <div class="col sm-3"><div className={classes.aboutus}>Address : {addr}</div></div> */}
    <div class="card-body">
      <h5 class="card-title"className={classes.aboutus}>Name : {name} </h5>
      <p class="card-text"className={classes.aboutus}>Post: {post}</p>
      <p class="card-text" className={classes.aboutus}>Address : {addr}</p>
    </div>
    </div>
    </div>
      </div>
      </div>

 

  )
}

export default Testimonial;