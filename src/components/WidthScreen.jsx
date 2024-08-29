import { useState, useEffect } from "react"

export default function WidthScreen() {
    const [width, setWidth] = useState(window.innerWidth)


    // mount react
    useEffect(() => {
        // menambahkan event listener
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })

        return () => {
            // menghapus event listener
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
        }
    }, [])


    return (
        <div className="contaner p-2">
            lebar layar :
            {width}
        </div>
    )
}
