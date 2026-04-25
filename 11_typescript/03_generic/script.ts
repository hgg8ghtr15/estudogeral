// padroes

/**
 *  S = state
 *  T = type
 *  K = Key
 *  V = Values
 *  E = Element
 */

function useState<T extends string | number = string>()  {
    let state: T

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue
    }

    return {get, set}
}

let newState = useState<string>()

newState.get()
newState.set("12365")