# Zoning Atlas

Originally identified as one of the top ten "Most Wanted Datasets" in MetroFuture: Making a Greater Boston Region, the MAPC Zoning Atlas is a data product nine years in the making. It is the first regional zoning map since 1999, and the first to include information about multifamily housing, residential density, commercial density, and overlay districts.

[Introduction to the Zoning Atlas](https://zoningatlas.mapc.org/reports/1/) is the first research brief to come from this massive undertaking. It outlines the processes and challenges of collecting and synthesizing 101 municipal zoning codes into one unified resource. Zoning codes can be remarkably complex, and discrepancies in their storage, maintenance, accessibility, and interpretation make creating a regional overview both difficult and necessary to achieve.

[The Zoning Atlas](https://zoningatlas.mapc.org/) will always be a work in progress, and it will rely on municipal collaboration and community input in order to best serve its purpose. As it continues to grow and develop, we hope it will be useful to municipal staff, researchers, and advocates in their work to build a better Greater Boston.

## Setup
1. Set up .ENV file with `DB_PASS`, `DB_USER`, and `HOST` values. These should connect you to the Zoning Atlas table of the GISData database (see line 26 of `gatsby-config.js`)
2. `yarn install`
3. `gatsby develop`

## Deployment
This repo deploys automatically when the `master` branch is pushed to GitHub. To click-test what the deployment will look like, `gatsby build` and `gatsby serve` will create a static version of the site to explore locally.

## Testing
`yarn test`