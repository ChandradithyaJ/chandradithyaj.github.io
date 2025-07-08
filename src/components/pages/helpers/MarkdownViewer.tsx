import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

export const MarkdownViewer: React.FC = () => {
    const [markdown, setMarkdown] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const { filename } = useParams<{ filename: string }>();
    console.log(`filename: ${filename}`)
    const filepath = `/public/assets/blogs/${filename}.md`;

    useEffect(() => {
        const loadMarkdownFile = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(filepath)
                if (!response.ok) {
                    throw new Error(`Failed to load file: ${response.statusText}`)
                }
                const content = await response.text()
                setMarkdown(content)

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        if (filepath) {
            loadMarkdownFile()
        }
    }, [filepath])

    if (loading) return <div>Loading markdown file...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
            {markdown}
        </Markdown>
    )
};