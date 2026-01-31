// content.config.ts
import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        post: defineCollection({
            type: 'page',
            source: 'post/**/*.md',
            schema: z.object({
                title: z.string(),
                date: z.string(),
                description: z.string().optional(),  
                slug: z.string(),
                coverImage: z.string(),
                categories: z.array(z.string()).optional()
            })
        })
    }
})