import React from 'react';
import Main from '../layouts/Main';
import PhotoCard from '../components/Gallery/photo';
import data from '../data/photos';

const Gallery = () => (
  <Main title="Gallery" description="Some of my favorite photos">
    <article className="post-card" id="gallery">
      <header>
        <div className="title">
          <h2 data-testid="heading">Gallery</h2>
          <p>Some of my favorite photos and memories</p>
        </div>
      </header>
      {data.map((photo) => (
        <PhotoCard key={photo.id} data={photo} />
      ))}
    </article>
  </Main>
);

export default Gallery;
