
import {createClient} from 'next-sanity'

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: 'k1du3ikd',
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true, 
});
 
const imgBuilder = imageUrlBuilder(client);

export function urlFor(source) { 
    return imgBuilder.image(source);
}
