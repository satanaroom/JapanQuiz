const redux = require('redux')

const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => { // 2. Описано начальное состояние

    switch (action.type) { // 3. Если с помощью функции dispatch попадает какой-то action, то мы будем проверят
        case 'ADD': {      //    action.type. Если action.type совпадает с тем, что мы умеем обрабатывать,
            return {       //    тогда мы будем модифицировать наш state на основе предыдущего состояния.
                counter: state.counter + 1
            }
        }
        case 'SUB' : {
            return {
                counter: state.counter - 1
            }
        }
        case 'ADD_NUMBER' : {
            return {
                counter: state.counter + action.value // Обращение к параметру объекта через action
            }
        }
    }

    return state
}

// Store
const store = redux.createStore(reducer) // 1. Создали store, куда передали функцию, которая изменяет данный store (reducer)
console.log('1', store.getState())

// Actions
const addCounter = {
    type: 'ADD' // определяет, какое совершается действие
}

store.dispatch(addCounter) // Передача объекта обычным методом
console.log('2', store.getState())

store.dispatch({type: 'SUB'}) // Передача объекта напрямую
console.log('3', store.getState())

store.dispatch({type: 'ADD_NUMBER', value: 10}) // Передача объекта с парметром
console.log('4', store.getState())