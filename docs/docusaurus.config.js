const path = require('path');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'React Native Scrollable Navigation Bar',
    tagline: '60 FPS scroll animation for all Platforms.',
    url: 'https://zobeirhamid.github.io',
    baseUrl: '/react-native-scrollable-navigation-bar/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'zobeirhamid',
    projectName: 'react-native-scrollable-navigation-bar',
    themes: ['@docusaurus/theme-live-codeblock'],

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            routeBasePath: '/',
            editUrl:
              'https://github.com/zobeirhamid/react-native-scrollable-navigation-bar/edit/master/docs/',
            remarkPlugins: [require('./src/plugins/remark-npm2yarn.js')],
          },
          blog: {
            showReadingTime: true,
            editUrl:
              'https://github.com/zobeirhamid/react-native-scrollable-navigation-bar/edit/master/docs/blog/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'React Native Scrollable Navigation Bar',
          items: [
            {
              type: 'doc',
              docId: 'welcome/getting-started',
              position: 'left',
              label: 'Docs',
            },
            { to: '/blog', label: 'Blog', position: 'left' },
            {
              href: 'https://github.com/zobeirhamid/react-native-scrollable-navigation-bar',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} <a rel="noreferrer" href="https://zobeirhamid.me/" target="_blank">Zobeir Hamid</a>. Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
        colorMode: {
          defaultMode: 'dark',
          disableSwitch: true,
        },
        liveCodeBlock: {
          playgroundPosition: 'bottom',
        },
      }),
    plugins: [
      path.resolve(
        __dirname,
        'src/plugins/docusaurus-plugin-react-native-scrollable-navigation-bar.js'
      ),
    ],
  }
);
