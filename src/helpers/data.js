// hero images
import HeroImg1 from '../assets/1.webp';
import HeroImg2 from '../assets/2.webp';
import HeroImg3 from '../assets/3.jpg';
import HeroImg4 from '../assets/4.jpg';

// hero
export const hero = [
    {
        hero: [
            {
                img: HeroImg1,
                title: 'Sign up for Starbucks® Rewards',
                p: 'Starting 4/22, get 25 Stars when you bring your clean, reusable cup into the café.Stars can quickly add up to Rewards.* ',
                text: 'text-black',
                btn: 'Join now',
                flexDirection: 'lg:flex-row',
                marginTop: 'mt-0'
            }
        ]
    },
    {
        hero: [
            {
                img: HeroImg2,
                title: 'Planet-positive tips',
                p: 'April is earth month, but our commitment to reducing our environmental impact is year round.Try these tips on your next Starbucks visit.',
                text: 'text-white',
                btn: 'Learn how',
                flexDirection: 'lg:flex-row-reverse',
                marginTop: 'mt-8'
            }
        ]
    },
    {
        hero: [
            {
                img: HeroImg3,
                title: 'Iced shaken awakening',
                p: 'Introducing our new Iced Toasted Vanilla Oatmilk Shaken Espresso with rich, creamy layers and nondairy goodness.',
                text: 'text-white',
                btn: 'Order now',
                flexDirection: 'lg:flex-row',
                marginTop: 'mt-8'
            }
        ]
    },
    {
        hero: [
            {
                img: HeroImg4,
                title: 'Taste of tomorrow',
                p: 'The trailblazing Starbucks Odyssey Blend™ boldly envisions a more sustainable future for the coffee industry.',
                text: 'text-white',
                btn: 'Learn now',
                flexDirection: 'lg:flex-row-reverse',
                marginTop: 'mt-8'
            }
        ]
    },
];

// footer sitemap
export const sitemap = [
    {
        sitemapList: [
            {
                title: 'About us',
                list: [
                    'Our Company',
                    'Our Coffee',
                    'Stories and News',
                    'Customer Service'
                ]
            }
        ]
    },
    {
        sitemapList: [
            {
                title: 'Profession',
                list: [
                    'Culture and Values',
                    'Inclusion, Diversity and Equity',
                    'College Achievement',
                    'U.S Careers',
                    'Internation Careers'
                ]
            }
        ]
    },
    {
        sitemapList: [
            {
                title: 'Social Impact',
                list: [
                    'People',
                    'Planet',
                    'Social Impact Reporting',
                    'Customer Service'
                ]
            }
        ]
    },
    {
        sitemapList: [
            {
                title: 'Order and Pickup',
                list: [
                    'Order on the App',
                    'Order on the Web',
                    'Delivery',
                    'Order and Pickup',
                    'Explore and Find Coffee for Home'
                ]
            }
        ]
    }
];

// social icons
export const socialIcons = [
    'fa-facebook',
    'fa-pinterest',
    'fa-instagram-square',
    'fa-youtube',
    'fa-twitter'
];

// legal
export const legal = [
    {
        p: 'Privacy Policy',
        verticalBar: true
    },
    {
        p: 'Term of Use',
        verticalBar: true
    },
    {
        p: 'CA Supply Chain Act',
        verticalBar: true
    },
    {
        p: 'Cookie Preferences',
        verticalBar: false
    }
];
