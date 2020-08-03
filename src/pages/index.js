import React from "react"
import Storymap from '../components/Storymap';
import MapSliderContainer from '../components/MapSliderContainer';
import { Helmet } from "react-helmet"
import '../styles/app.scss'

export default function Home() {
  return (
    <>
      <Helmet
        title={"Zoning Atlas"}
      >
        <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.4.0/mapbox-gl-compare.js"></script>
      </Helmet>
      <h1>Zoning Atlas</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis vitae arcu aliquam laoreet ut vitae turpis. Cras elementum diam sit amet ex fermentum congue. Cras mattis tristique dolor at vulputate. Phasellus aliquam enim iaculis cursus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sagittis, eros efficitur vulputate ultrices, turpis libero vulputate nunc, a ultricies ipsum mauris a mi. Maecenas pretium tincidunt faucibus. Pellentesque vel metus lectus. Curabitur tortor eros, blandit eget neque in, elementum sodales leo.
      </p>
      {/* <Storymap /> */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis vitae arcu aliquam laoreet ut vitae turpis. Cras elementum diam sit amet ex fermentum congue. Cras mattis tristique dolor at vulputate. Phasellus aliquam enim iaculis cursus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sagittis, eros efficitur vulputate ultrices, turpis libero vulputate nunc, a ultricies ipsum mauris a mi. Maecenas pretium tincidunt faucibus. Pellentesque vel metus lectus. Curabitur tortor eros, blandit eget neque in, elementum sodales leo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis vitae arcu aliquam laoreet ut vitae turpis. Cras elementum diam sit amet ex fermentum congue. Cras mattis tristique dolor at vulputate. Phasellus aliquam enim iaculis cursus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sagittis, eros efficitur vulputate ultrices, turpis libero vulputate nunc, a ultricies ipsum mauris a mi. Maecenas pretium tincidunt faucibus. Pellentesque vel metus lectus. Curabitur tortor eros, blandit eget neque in, elementum sodales leo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis vitae arcu aliquam laoreet ut vitae turpis. Cras elementum diam sit amet ex fermentum congue. Cras mattis tristique dolor at vulputate. Phasellus aliquam enim iaculis cursus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sagittis, eros efficitur vulputate ultrices, turpis libero vulputate nunc, a ultricies ipsum mauris a mi. Maecenas pretium tincidunt faucibus. Pellentesque vel metus lectus. Curabitur tortor eros, blandit eget neque in, elementum sodales leo.
      </p>
      <MapSliderContainer />
      
      <link href="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css" rel="stylesheet" />
      <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.4.0/mapbox-gl-compare.css"
          type="text/css"
        />
    </>
  )
}
