import "./global.css";
import styles from "./app.module.css";
import { Button } from "./components";


export function App() {
  return (
    <div className={styles.container}>
      <Button name="Criar" onClick={() => alert("Ação de Criar")} />
      <span>0</span>
      <Button name="Apagar" onClick={() => alert("Ação de Apagar")} />
    </div>

  )
}