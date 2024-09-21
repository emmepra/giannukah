import { backgroundImages } from '../../images.js';

export function load({ params }) {
    let slug = params.slug
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

    // Replace dashes with spaces
    slug = slug.replace(/-/g, ' ');

    return {
        slug: slug,
        randomImage: randomImage,
    };
}
