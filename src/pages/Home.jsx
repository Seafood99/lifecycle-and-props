import { useState, useEffect } from "react"

export default function Home() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect')
    }, [count])

  return (
    <div className="container py-5">
        <p>{count}</p>
        <button
            className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white p-3"
            onClick={() => {
                setCount(count + 1)
            }}
        >
            increment
        </button>
      
    </div>
  )
}
