

// custom hooks start with use, this is the convention
// DocTitleOne and DocTitleTwo has the same logic that is to change the document title, the main purpose of custom hooks is to avoid code repetition

import { useEffect } from 'react'

// our hooks has count as parameter and change update document.title with the count state
function useDocumentTitle(count) {

    useEffect(()=>{
        document.title = `Count ${count}`
    }, [count]) 
}

export default useDocumentTitle