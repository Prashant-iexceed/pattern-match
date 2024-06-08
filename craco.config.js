const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // Background color for <body>
              '@body-background': '#F9FAFB',

              // Font
              '@font-family':
                "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",

              '@primary-color': '#F28021',

              '@border-radius-base': '10px',

              // Text
              '@text-color': '#4E4E4E',

              // Button
              '@btn-border-radius-base': '10px',

              '@btn-default-color': '#5b608F',
              '@btn-default-border': '#D7DBEC',

              // Input field
              '@input-bg': '#F8F8F8',
              '@input-hover-border-color': '#F28021',

              // Layout
              '@layout-body-background': 'transparent',
              // '@layout-sider-background-light': '#F2F3F5',

              // Menu item
              // '@menu-item-active-bg': 'transparent',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
