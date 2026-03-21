import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: '首页模板',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: '初创企业',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: '移动应用',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: '个人主页',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    {
      text: '页面',
      links: [
        // {
        //   text: '特性（锚点链接）',
        //   href: getPermalink('/#features'),
        // },
        // {
        //   text: '服务',
        //   href: getPermalink('/services'),
        // },
        // {
        //   text: '价格',
        //   href: getPermalink('/pricing'),
        // },
        {
          text: '关于我们',
          href: getPermalink('/about'),
        },
        {
          text: '联系我们',
          href: getPermalink('/contact'),
        },
        {
          text: '条款',
          href: getPermalink('/terms'),
        },
        {
          text: '隐私政策',
          href: getPermalink('/privacy'),
        },
      ],
    },
    // {
    //   text: '登录页面',
    //   links: [
    //     {
    //       text: '潜在客户生成',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: '长表单销售',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: '点击通过',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: '产品详情（或服务）',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: '即将推出或预发布',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: '订阅',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    {
      text: '博客',
      links: [
        {
          text: '博客列表',
          href: getBlogPermalink(),
        },
        {
          text: '文章',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        // {
        //   text: '文章（带MDX）',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        // {
        //   text: '分类页面',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: '标签页面',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    // {
    //   text: '组件',
    //   href: '#',
    // },
  ],
  actions: [{ text: '联系我们', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    // {
    //   title: '产品',
    //   links: [
    //     { text: '特性', href: '#' },
    //     { text: '安全', href: '#' },
    //     { text: '团队', href: '#' },
    //     { text: '企业', href: '#' },
    //     { text: '客户故事', href: '#' },
    //     { text: '价格', href: '#' },
    //     { text: '资源', href: '#' },
    //   ],
    // },
    // {
    //   title: '平台',
    //   links: [
    //     { text: '开发者API', href: '#' },
    //     { text: '合作伙伴', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind桌面版', href: '#' },
    //   ],
    // },
    // {
    //   title: '支持',
    //   links: [
    //     { text: '文档', href: '#' },
    //     { text: '社区论坛', href: '#' },
    //     { text: '专业服务', href: '#' },
    //     { text: '技能', href: '#' },
    //     { text: '状态', href: '#' },
    //   ],
    // },
    // {
    //   title: '公司',
    //   links: [
    //     { text: '关于', href: '#' },
    //     { text: '博客', href: '#' },
    //     { text: '招聘', href: '#' },
    //     { text: '新闻', href: '#' },
    //     { text: '包容性', href: '#' },
    //     { text: '社会影响', href: '#' },
    //     { text: '商店', href: '#' },
    //   ],
    // },
  ],
  secondaryLinks: [
    { text: '条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    由 <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> 制作 · 保留所有权利。
  `,
};
