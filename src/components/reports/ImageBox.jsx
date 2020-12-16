import React from 'react';
import HoverImage from './HoverImage';
import Image1 from '../../images/Image1.png';
import Image2 from '../../images/Image2.png';
import Image3 from '../../images/Image3.png';
import Image4 from '../../images/Image4.png';

const ImageBox = () => (
  <article className="hover-image__grid">
    <HoverImage image={Image1} title="Image 1" subtitle="Example municipality's e360 dimensional restrictions table" />
    <HoverImage image={Image2} title="Image 2" subtitle="Example municipality's MuniCode dimensional restrictions description for residential districts" />
    <HoverImage image={Image3} title="Image 3" subtitle="Example municipality's dimensional requirements that vary by use" />
    <HoverImage image={Image4} title="Image 4" subtitle="Example municipality's dimensional requirements that vary by height" />
  </article>
);

export default ImageBox;
