/** @type {import('next').NextConfig} */
// const nextConfig = {
//      remotePatterns: [
//           {
//                hostname: 'cdn.sanity.io',
//           },
//      ],
// };

//   export default nextConfig;

module.exports = {
     
     images: {
          remotePatterns: [ 
               
               {hostname:'cdn.sanity.io', },
     ],
 },

};

// module.exports = {
// 	images: {
// 		domains: ['cdn.sanity.io'],
// 		loader: 'custom'
// 	}
// };

// next.config.js
// module.exports = {
// 	images: {
// 		domains: ['cdn.sanity.io']
// 	}
// };