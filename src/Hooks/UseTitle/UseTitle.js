import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} - Redoy Hossin`;
    }, [title])
};

export default UseTitle;