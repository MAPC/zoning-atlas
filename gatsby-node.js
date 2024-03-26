exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          path: require.resolve("path-browserify")
        },
        fallback: {
          fs: false,
        }
      },
      module: {
        rules: [
          {
            test: /mapbox-gl-compare/,
            use: loaders.null(),
          },
          {
            test: /esri-leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  // Make the front page match everything client side.
  // Normally your paths should be a bit more judicious.
  if (page.path === `/reports/Report1/`) {
    createPage({
      path: '/reports/1/',
      component: page.component,
    });
  } else {
    createPage(page);
  }
}
