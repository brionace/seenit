import { useState, useEffect, useCallback, useRef } from "react";
import useUploads from "./lib/useUploads"
import { Card } from "./components/Card";
import { Modal } from "./components/Modal"

/**
 * App fetches from API and displays the results
 * @returns html
 */
export default function App(){

    // Manage state and lifecycle of compenents here
    const [ toggle, toggleModal ] = useState(false)
    const [ children, setChildren] = useState(null)
    const [ offset, setOffset ] = useState(10)
    const { loading, error, list } = useUploads(offset)
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setOffset((prev) => prev + 10);
        }
    }, []);

    useEffect(() => {
        // Use IntersectionObserver for lazy load functionality
        const option = {
          root: null,
          rootMargin: "32px",
          threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
      }, [handleObserver]);

    // Show preview of card
    function showPreview (e) {
        const prev = list.filter(x => x.char_id.toString() === e.target.getAttribute('data-id').toString())
        setChildren(<Card content={prev[0]} preview={true} />)
        handleToggle()
    }

    // Toggle modal
    function handleToggle(){
        toggleModal(!toggle)
    }

    const cards = list.map((content, i) => <Card key={content.char_id + i} content={content} showPreview={showPreview} />)

    return (
        <div className="container">
            <h1>Library</h1>
            <div className="card_list">
                {cards}
            </div>
            {error && <p>Error!</p>}
            {loading && <p>Loading...</p>}
            <div ref={loader} />
            {toggle && <Modal handleToggle={handleToggle} animate="animate"><style>{`body{overflow:hidden;}`}</style>{children}</Modal>}
        </div>
    )
}
