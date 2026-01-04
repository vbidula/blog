// import avatar from '../assets/images/avatar.jpg';
// import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://bidula.dev',
    // avatar: {
    //     src: avatar,
    //     alt: 'Vadym Bidula'
    // },
    title: 'Vadym Bidula',
    // subtitle: 'Building a radio telescope!',
    description: 'Personal website and blog',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        {
            text: 'Contact',
            href: '/contact'
        },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        // title: 'Hi & welcome to !',
        text: `I'm a software/firmware developer with a background in physics and astronomy, based in Montreal.

Right now, I'm helping build a [radio telescope](https://en.wikipedia.org/wiki/Hydrogen_Intensity_and_Real-time_Analysis_eXperiment) in the Karoo.

Have a look around for [projects](/projects) I worked on, or [posts](/blog) about things I'm curious about.`,
        // image: {
        //     src: hero,
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        // actions: [
        //     {
        //         text: 'Get in Touch',
        //         href: '/contact'
        //     }
        // ]
    },
    // subscribe: {
    //     enabled: true,
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     form: {
    //         action: '#'
    //     }
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
