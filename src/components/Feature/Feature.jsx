import React from 'react';
import styles from './Feature.module.scss';
import config from '../../../config/SiteConfig';

const Feature = () => (
  <div className={styles.feature}>
    <h2>Hello I am a <span className={styles.yellowLine}>web developer</span><br/>who loves designing and creating<br/>better user experience with passion and love.</h2>
  </div>
);

export default Feature;
