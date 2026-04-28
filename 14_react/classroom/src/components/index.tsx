import { useEffect } from "react";
import { useMessage } from '../hooks/UseMessage';
import styles from './styles.module.css';

type Props = React.ComponentProps<'button'> & {
  name: string
  idade: number
}
type Props2 = {
  name: string
  onClick: () => void
}


//Forma padrão de passar props para o componente, a variável "props" recebe todas as props passadas para o componente
export function Button({ name, onClick }: Props) {
  const { show } = useMessage({ name: "Fabio", idade: 25 })

  return (
    <button className={styles.container} onClick={() => { show("Hello World") }}>
      <span>
        {name}
      </span>
    </button>
  )
}

//Deformação de props, recebemos apenas a propriedade desejada
export function Button2({ name, ...rest }: Props) {
  return (
    <button {...rest}>
      <span>
        {name}
      </span>
    </button>
  )
}

//Deformação de props, recebemos apenas a propriedade desejada
export function Button3({ name, ...props }: Props2) {
  useEffect(() => {
    console.log("Ocorreu uma renderização do buton");
  }, [name])

  return (
    <button className={styles.container} {...props}>
      <span>
        {name}
      </span>
    </button>
  )
}
