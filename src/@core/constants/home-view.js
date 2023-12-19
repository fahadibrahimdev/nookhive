import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'The one stop local market place for all your needs',
    text: 'from stationary, pet food, compost, bagels or coffee you search it we\'ll Nookhive it',
    updateLine: 'Recieve Updates on:',
    socials: 'New sign ups, promotions, discounts, special offers, loyalty points, affiliate program and much much more....',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Why go out when you can order in ... from your preferred local businesses',
    features: [
        {
            title: 'Browse Local Shops',
            description: 'Promote your local store network. ',
            icon: 'local-shops'
        },
        {
            title: 'Grocery and restaurant establishments',
            description: 'Order retail items and piping hot meals',
            icon: 'groceries'
        },
        {
            title: 'Resources for Shops',
            description: 'Shops listed in the Nookhive app receive a receipt printer and POS system.',
            icon: 'resources-collection'
        },
        {
            title: 'On time delivery',
            description: 'The driver closest to you is assigned, you can also pre order for delivery at a time that suits you. Never see a missed you card again.',
            icon: 'fast-delivery'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Is delivering on time enough? At Nookhive we are in the business of ensuring communities thrive and because of that we ensure that small retail outlets and eateries keep up the pace in the online delivery world.',
        'Users can browse an extensive list of local establishments near them and find nostalgic favourites without paying too much in courier feess.',
        'But that is not all, once a business becomes part of the Nookhive network we offer them the necessary tools to keep a log of inventory, invoices, and keep a track of orders as they are placed.',
    ],
}

export const benefitsContent = {
    heading: 'How Fight Roots Goes Beyond your Average App',
    text: 'Designed to cater to each individual and the martial art they practice, Fight Roots has a plethora of technical features, but it takes a step ahead and offers advantages that will allow users to amalgamate the app into their lifestyle.',
    benefits: [
        {
            title: 'Empowering Communities',
            description: 'Driving sales, providing jobs in your community whilst lowering our carbon footprint. Buy locally get delivered locally.',
            icon: 'empower'
        },
        {
            title: 'Convenient',
            description: 'Rate and tip your driver through the app on performance and quality of service.',
            icon: 'time-management'
        },
        {
            title: 'Easy gigs',
            description: 'Delivered at a time that suits you.',
            icon: 'package-checking'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is Nookhive Compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'What do I do in case something is not working on my app?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up as a store, driver, or a customer?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Nookhive your next order!',
    text: 'Sign up and stay tuned for Nookhive’s next campaign.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'twitter',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'instagram',
            link: '',
        },
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    accent: `Why ${siteName}?`,
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
