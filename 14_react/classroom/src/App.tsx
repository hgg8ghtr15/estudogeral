import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { Button3 } from "./components";
import "./global.css";




export function App() {

  const [count, setCount] = useState(0);

  function addCount() {
    if (count >= 0) {
      setCount(count + 1)
    }
  }

  function removeCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    console.log(`O valor Mudou! ${count}`)
  }, [count])

  return (
    <div className={styles.container}>
      <Button3 name="Aumentar" onClick={addCount} />
      <span>{count}</span>
      <Button3 name="Diminuir" onClick={removeCount} />
    </div>

    //     <div className={styles.container}>
    //   <Button2 name="Aumentar" onClick={() => setCount(count + 1)} />
    //   <span>{count}</span>
    //   <Button2 name="Diminuir" onClick={() => setCount(count - 1)} />
    // </div>
  )
} 