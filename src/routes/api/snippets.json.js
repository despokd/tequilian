export const get = async () => {
    // Get all snippets
    const snippetsFiles = import.meta.glob('../snippets/*.md');
    const snippetsList = Object.entries(snippetsFiles);

    const snippets = await Promise.all(
        snippetsList.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const snippetPath = path.slice(2, -3); // remove '../' and '.md'

            return {
                meta: metadata,
                path: snippetPath,
            };
        })
    )

    // Sort snippets by date
    const sortedSnippets = snippets.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    })

    // Return snippets
    return {
        body: sortedSnippets
    }
}