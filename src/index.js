module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0)
        return false;
    str = str.split('');
    var mas = [];
    var i ;
    var j ;
    for ( i = 0; i < str.length; i++) {

        for ( j = 0; j < bracketsConfig.length; j++) {

            if ((mas[mas.length - 1] === bracketsConfig[j][0]) && (str[i] === bracketsConfig[j][1]))
               mas.pop();

            else
                if (str[i] === bracketsConfig[j][0])
                    mas.push(str[i]);
        }
    }
    return mas.length === 0;
};