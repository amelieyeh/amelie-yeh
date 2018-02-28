import React, { Component } from 'react';
import Post from './Post';
import postData from './postData';
import penData from './penData';
import style from './Post.module.scss';

class PostSection extends Component {
  constructor() {
    super();

    this.state = {
      posts: postData,
      pens: penData
    }
  }

  render() {
    return(
      <section className="section">
        <div className={style.post}>
          <h3 className="about__title">Posts & Pens</h3>
          <div className={style.post__block}>
            <div className={style.post__item}>
              <h4 className={style.post__item__title}>Medium</h4>
              {
                Object.keys(this.state.posts)
                      .map(key => <Post key={key} post={this.state.posts[key]}/>)
              }
              <div><a href="https://medium.com/me/stories/public" target="_blank" className={style.post__more}>view more &rarr;</a></div>
            </div>
            <div className={style.post__item}>
              <h4 className={style.post__item__title}>CodePen</h4>
              {
                Object.keys(this.state.pens)
                      .map(key => <Post key={key} post={this.state.pens[key]}/>)
              }
              <div><a href="https://codepen.io/amelieyeh/" target="_blank" className={style.post__more}>view more &rarr;</a></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
  
export default PostSection;