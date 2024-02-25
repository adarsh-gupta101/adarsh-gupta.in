/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"www.lambdatest.com",
                port:"",

            },{
                protocol:"https",
                hostname:"blog.talent500.co",
                port:""
            }
        ]
    }

    
};

export default nextConfig;
