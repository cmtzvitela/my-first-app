import React from 'react'

function Calculator ({firstValue, secondValue, operator}) {
    if (!Number.isInteger(firstValue)) {
        return (
            <div>
                <span>El valor A no es un numero</span>
            </div>
        )
    }

    if (!Number.isInteger(secondValue)) {
        return (
            <div>
                <span>El valor B no es un numero</span>
            </div>
        )
    }



    let result = 0
    switch (operator) {
        case "suma": result = firstValue + secondValue
        break;
        case "resta": result = firstValue - secondValue
        break;
        case "multiplicacion": result = firstValue * secondValue
        break;
        default:
            return (
                <div>
                    <span>Operador invalido</span>
                </div>
            )
    }

    return (
        <div>
            <span>El resultado es {result}</span>
        </div>
    )

}

export default Calculator;

// const operacion = (num1, num2, operador) => {
//     let resultado = '';
    
//     if (!(num1 || num2 === Number)){
//         return "Eso no es un numero"
//     } else {
//         switch (operador){
//             case '+': resultado= num1+num2;
//             break;
//             case '-': resultado= num1-num2;
//             break;
//             case '*': resultado= num1*num2;
//             break;
//             case '/': resultado= num1/num2;
//             break;
//             default: resultado= "No es un operador valido"
//         }
//     }
//     return resultado
// }


// function Calculator({num1, num2, operador}) {
//     return (
//     <div>
//         <h2>Resultado es {operacion (num1, num2, operador)}</h2>
//     </div>
//     )

// }

// if (!['suma', 'resta', 'multiplicacion'].includes(operator)){
//     return (
//         <div>
//             <span>Operador invalido</span>
//         </div>
//     )
// }



