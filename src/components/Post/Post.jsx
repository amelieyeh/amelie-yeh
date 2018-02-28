import React, { Component } from 'react';
import style from './Post.module.scss';

class Post extends Component {
  render() {
    const post = this.props.post;

    return(
      <a href={post.link} target="_blank" className={style.post__link}>
        <img src={post.img} className={style.post__img}/>
        <div>
          <h5 className={style.post__item__subtitle}>{post.title}</h5>
        </div>
      </a>
    )
  }
}

export default Post;
