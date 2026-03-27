import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Gravity Connect',
  tagline: 'The open standard for DER integrations',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://GustoHouse.github.io',
  baseUrl: '/Gravity-Connect/',

  organizationName: 'GustoHouse',
  projectName: 'Gravity-Connect',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/GustoHouse/Gravity-Connect/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent posts',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/GustoHouse/Gravity-Connect/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gravity Connect',
      logo: {
        alt: 'Gravity Connect Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Integration Guides',
        },
        {
          to: '/api',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/support',
          label: 'Support',
          position: 'left',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started' },
            { label: 'Authentication', to: '/docs/authentication' },
            { label: 'Certification Testing', to: '/docs/certification' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'API Documentation', to: '/api' },
            { label: 'Release Notes', to: '/blog' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Support', to: '/support' },
            { label: 'Virtual Peaker', href: 'https://www.virtualpeaker.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Virtual Peaker, Inc. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
