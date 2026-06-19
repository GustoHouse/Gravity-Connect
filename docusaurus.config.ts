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

  headTags: [
    {
      tagName: 'style',
      attributes: {},
      innerHTML: '@layer overrides, docusaurus;',
    },
  ],

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
          blogSidebarTitle: 'Recent Posts',
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
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      logo: {
        alt: 'Gravity Connect Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'right',
          label: 'Guides',
        },
        {
          to: '/api',
          label: 'Docs',
          position: 'right',
        },
        {
          to: '/blog',
          label: 'Resources',
          position: 'right',
        },
        {
          to: '/support',
          label: 'Support',
          position: 'right',
        },
        {
          to: '/about',
          label: 'About',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Gravity Connect Logo',
        src: 'img/logo-dark.svg',
        href: 'https://gravityconnect.com',
        width: 255,
        height: 47,
      },
      links: [
        {
          label: 'Link',
          href: '/',
        },
        {
          label: 'Link',
          href: '/',
        },
        {
          label: 'Link',
          href: '/',
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
