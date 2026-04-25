type Props = {
  name: string
  idade: number
}

export function useMessage({ name, idade }: Props) {
  // const message = "Hello World, Fabio Lucas Marconi"

  function show(message: string) {
    console.log(`${message} ${name} de ${idade}`)
  }

  return { show }
}