"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  const decrement = () => {
    setCount((prev) => prev - 1)
  }

  return (
    <div>
      <Button size="icon" onClick={decrement}>
        -
      </Button>
      {count}
      <Button size="icon" onClick={increment}>
        +
      </Button>
    </div>
  )
}

export default Counter
