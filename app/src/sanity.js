import sanityClient from '@sanity/client'

export default sanityClient({
   projectId: 'ucnukgj8',
   dataset: 'production',
   apiVersion: '2022-05-25',
   useCdn: false
})