// hero images
import HeroImg1 from '../assets/hero01.jpg';
import HeroImg2 from '../assets/hero02.jpg';
import HeroImg3 from '../assets/hero03.jpg';
import HeroImg4 from '../assets/hero04.jpg';
import HeroImg5 from '../assets/hero05.webp';

// hero
export const hero = [
    {
        hero: [
            {
                img: HeroImg1,
                bgSize: 'lg:bg-contain',
                bgColor: 'bg-darkGreen',
                title: 'Summer is brighter with free treats.*',
                titleTextSize: 'text-[24px]',
                p: '',
                marginBottom: 'mb-8',
                text: 'text-white',
                btn: 'Join Starbucks® Rewards',
                borderColor: 'border-white',
                hover: 'hover:bg-white/[.06]',
                flexDirection: 'lg:flex-row',
                marginTop: 'mt-0',
                padding: 'sm:p-10'
            }
        ]
    },
    {
        hero: [
            {
                img: HeroImg2,
                bgSize: 'lg:bg-cover',
                bgColor: 'bg-lightPink',
                title: 'Summer’s brightest new drinks',
                titleTextSize: 'text-[50px]',
                p: 'Introducing the Pineapple Passionfruit Starbucks Refreshers® beverage and the Starbucks® Paradise Drink with creamy coconutmilk.',
                marginBottom: 'mb-8',
                text: 'text-darkGreen',
                btn: 'Learn more',
                hover: 'hover:bg-black/[.06]',
                borderColor: 'border-darkGreen',
                flexDirection: 'lg:flex-row-reverse',
                marginTop: 'mt-0',
                padding: 'sm:p-24'
            }
        ]
    },
    {
        hero: [
            {
                img: HeroImg3,
                bgSize: 'lg:bg-cover',
                bgColor: 'bg-lightGreen',
                title: 'Anytime protein',
                titleTextSize: 'text-[50px]',
                p: 'The Impossible™ Breakfast Sandwich** will keep you going with a plant-based sausage patty, cage-free fried egg and Cheddar on a sesame ciabatta bun.',
                marginBottom: 'mb-8',
                text: 'text-darkGreen',
                btn: 'Order now',
                hover: 'hover:bg-black/[.06]',
                borderColor: 'border-darkGreen',
                flexDirection: 'lg:flex-row',
                marginTop: 'mt-8',
                padding: 'sm:p-24'
            }
        ]
    },
    {
        hero: [
            {
                img: HeroImg4,
                bgSize: 'lg:bg-cover',
                bgColor: 'bg-darkGreen',
                title: 'Vacation vibes',
                titleTextSize: 'text-[50px]',
                p: 'With zesty lime frosting and sweet, dried coconut, our new Lime-Frosted Coconut Bar tastes like summertime.',
                marginBottom: 'mb-8',
                text: 'text-white',
                btn: 'Order now',
                hover: 'hover:bg-white/[.06]',
                borderColor: 'border-white',
                flexDirection: 'lg:flex-row-reverse',
                marginTop: 'mt-8',
                padding: 'sm:p-24'
            }
        ]
    },
    {
        hero: [
            {
                img: HeroImg5,
                bgSize: 'lg:bg-cover',
                bgColor: 'bg-starGreen',
                title: 'Celebrating Disability Pride Month',
                titleTextSize: 'text-[50px]',
                p: 'Alongside the Disability Advocacy Partner Network, we’re building more inclusive communities through awareness, action and allyship.',
                marginBottom: 'mb-8',
                text: 'text-black',
                btn: 'Get involved',
                hover: 'hover:bg-black/[.06]',
                borderColor: 'border-black',
                flexDirection: 'lg:flex-row',
                marginTop: 'mt-8',
                padding: 'sm:p-24'
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
