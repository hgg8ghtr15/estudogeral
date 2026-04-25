### Criando projeto em React:
npm create vite@latest 

### Instalando dependências:
npm install

### Executando projeto:
npm run dev

### JSX


# Anotações de Estudo: Fundamentos de React e TypeScript

Este documento resume os conceitos aplicados nos componentes `Button` e `App` do seu projeto.

---

## 1. Tipagem de Props com TypeScript

No arquivo `button.tsx`, você definiu a tipagem das propriedades (props) que o componente aceita:

```tsx
type Props = React.ComponentProps<'button'> & {
    name: string
}
```

### O que isso significa?
- **`React.ComponentProps<'button'>`**: O React já conhece todos os atributos padrão de um botão HTML (como `onClick`, `type`, `disabled`, etc.). Ao usar isso, você diz que o seu componente `Button` pode receber qualquer uma dessas propriedades sem que você precise defini-las manualmente.
- **`& { name: string }`**: O símbolo `&` (Intersection Type) é usado para combinar tipos. Aqui, estamos dizendo: "O meu componente aceita tudo que um botão normal aceita, **MAIS** uma propriedade obrigatória chamada `name` do tipo string".

---

## 2. Desestruturação e Operador Rest (`...rest`)

Existem duas formas de capturar as props no componente:

### Forma A: Explícita
```tsx
export function Button({ name, onClick }: Props) {
    return (
        <button onClick={onClick}>{name}</button>
    )
}
```
Aqui você extrai exatamente o que vai usar. É bom para componentes simples, mas se você quiser passar um `id`, uma `className` ou um `title` para o botão, terá que adicionar cada um deles na lista.

### Forma B: Dinâmica (Operador Rest/Spread)
```tsx
export function Button2({ name, ...rest }: Props) {
    return (
        <button {...rest}>{name}</button>
    )
}
```
- **`...rest`**: Captura todas as outras propriedades que não foram desestruturadas (como o `onClick`, `id`, `disabled`) e as coloca dentro de um objeto chamado `rest`.
- **`{...rest}`**: No retorno, o operador spread espalha essas propriedades de volta para o elemento HTML `<button>`. Isso torna o componente muito mais flexível.

---

## 3. Reutilização de Componentes

No seu `App.tsx`, você vê o poder da componentização:

```tsx
<Button name="Criar" onClick={() => alert("Ação de Criar")} />
<Button name="Cancelar" onClick={() => alert("Ação de Cancelar")} />
```

- **Vantagem**: Você define o estilo e o comportamento base do botão apenas uma vez (em `button.tsx`).
- **Personalização**: Cada instância do componente no `App.tsx` pode ter um texto (`name`) e uma função (`onClick`) diferente.

---

## Dicas Rápidas para os Estudos:
1. **Convenção de Nomes**: Componentes React sempre começam com letra MAIÚSCULA (ex: `Button`).
2. **Fragments (`<> ... </>`)**: Usados no `App.tsx` para retornar múltiplos elementos sem criar uma `div` extra no HTML final.
3. **TypeScript**: Sempre que possível, use `React.ComponentProps` para componentes que envolvem elementos HTML nativos (input, button, anchor), isso evita erros de tipagem e economiza tempo.
