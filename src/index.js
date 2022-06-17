/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map(string =>`${string[0].toUpperCase()}${string.slice(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
    var str = string.toLowerCase().split('');
    for(var i = 0; i < str.length; i++){ 
        if (i % 2 !== 0){
            str[i] = str[i].toUpperCase();
        }
    }
    return str.join('');
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function(action, string) {
    if (action === 'uppercase'){
        string = string.toUpperCase();
        return string;
    }
    if (action === 'lowercase'){
        string = string.toLowerCase();
        return string;
    }
    if (action === 'capitalize'){
        string = string.split(' ').map(string =>`${string[0].toUpperCase()}${string.slice(1)}`).join(' ');
        return string;
    }
    if (action === 'fence'){
        var str = string.toLowerCase().split('');
        for(var i = 0; i < str.length; i++){ 
            if (i % 2 !== 0){
                str[i] = str[i].toUpperCase();
            }
        }
        return str.join('');
    } else string = string;
    return string;
    
};
reducerIf();

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    switch (action){
        case 'uppercase':
            string = string.toUpperCase();
            return string;
            break;
        case 'lowercase':
            string = string.toLowerCase();
            return string;
            break;
        case 'capitalize':
            string = string.split(' ').map(string =>`${string[0].toUpperCase()}${string.slice(1)}`).join(' ');
            return string;
            break;
        case 'fence':
            var str = string.toLowerCase().split('');
            for(var i = 0; i < str.length; i++){ 
            if (i % 2 !== 0){
                str[i] = str[i].toUpperCase();
                }
            }
            return str.join('');
            break;
        default: 
            string = string;
            return string;
    }
};
reducerSwitch();

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (let letter of string){
        console.log(letter);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    var i;
    for (i=0; i < string.length; i++){
        console.log(string[i]);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    var i = -1;
    while (i < (string.length - 1)){
        i ++;
        console.log(string[i]);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => {
    string = string.split('').forEach(function(string){
      console.log(string);  
    });
}
