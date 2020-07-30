import React, { useState } from "react"
import Storymap from '../components/Storymap';
import '../styles/app.scss'

export default function Home() {
  const [currentPanel, setCurrentPanel] = useState();
  return (
    <>
      <h1>Zoning Atlas</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis vitae arcu aliquam laoreet ut vitae turpis. Cras elementum diam sit amet ex fermentum congue. Cras mattis tristique dolor at vulputate. Phasellus aliquam enim iaculis cursus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sagittis, eros efficitur vulputate ultrices, turpis libero vulputate nunc, a ultricies ipsum mauris a mi. Maecenas pretium tincidunt faucibus. Pellentesque vel metus lectus. Curabitur tortor eros, blandit eget neque in, elementum sodales leo.
      </p>
      <Storymap />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis vitae arcu aliquam laoreet ut vitae turpis. Cras elementum diam sit amet ex fermentum congue. Cras mattis tristique dolor at vulputate. Phasellus aliquam enim iaculis cursus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sagittis, eros efficitur vulputate ultrices, turpis libero vulputate nunc, a ultricies ipsum mauris a mi. Maecenas pretium tincidunt faucibus. Pellentesque vel metus lectus. Curabitur tortor eros, blandit eget neque in, elementum sodales leo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis vitae arcu aliquam laoreet ut vitae turpis. Cras elementum diam sit amet ex fermentum congue. Cras mattis tristique dolor at vulputate. Phasellus aliquam enim iaculis cursus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sagittis, eros efficitur vulputate ultrices, turpis libero vulputate nunc, a ultricies ipsum mauris a mi. Maecenas pretium tincidunt faucibus. Pellentesque vel metus lectus. Curabitur tortor eros, blandit eget neque in, elementum sodales leo.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at felis vitae arcu aliquam laoreet ut vitae turpis. Cras elementum diam sit amet ex fermentum congue. Cras mattis tristique dolor at vulputate. Phasellus aliquam enim iaculis cursus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sagittis, eros efficitur vulputate ultrices, turpis libero vulputate nunc, a ultricies ipsum mauris a mi. Maecenas pretium tincidunt faucibus. Pellentesque vel metus lectus. Curabitur tortor eros, blandit eget neque in, elementum sodales leo.
      </p>
    </>
  )
}
