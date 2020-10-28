exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
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