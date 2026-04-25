import styles from './styles.module.css'
import { useMessage } from '../hooks/UseMessage'

type Props = React.ComponentProps<'button'> & {
    name: string
    idade: number
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
