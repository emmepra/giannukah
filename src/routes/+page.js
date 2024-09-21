// src/routes/+page.js
import { dev } from '$app/environment';
import { bestemmie } from '../bestemmie.js';
import { backgroundImages } from '../images.js';

export function load({ params }) {
    const randomBestemmia = bestemmie[Math.floor(Math.random() * bestemmie.length)];
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    
    return {
        randomBestemmia: randomBestemmia,
        randomImage: randomImage,
    };
}
