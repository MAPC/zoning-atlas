import React from 'react';
import HoverImage from './HoverImage';
import Image1 from '../../images/Image1.png';
import Image2 from '../../images/Image2.png';
import ImageX from '../../images/ImageX.png';

const ImageBox = () => (
  <article className="hover-image__grid">
    <HoverImage image={Image1} title="Image 1" subtitle="Anonymous municipality's e360 dimensional restrictions table" />
    <HoverImage image={Image2} title="Image 2" subtitle="Anonymous municipality's MuniCode dimensional restrictions description for residential districts" />
    <HoverImage image={ImageX} title="Image X" subtitle="Anonymous municipality's dimensional requirements that vary by use" />
  </article>
);

export default ImageBox;
