import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routing } from './routing/Routing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="layout">
      <Routing/>
    </div>
  )
}

export default App
