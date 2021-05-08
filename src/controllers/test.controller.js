'use strict'

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.reduce((newArray, item) =>{
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return uniqueArray
}

function getLetters(req, res) {
    var ope = req.body.operacion.replace(/ /g, "").split('+');
    var emptyArray = [];
    for (let x = 0; x < ope.length; x++) {
            var letters = ope[x].match(/[a-zA-Z]+/g);
            for (let i = 0; i < letters.length; i++) {
                if (letters[i].length > 1) {
                    let lets = letters[i].split('');
                    letters.splice(i, 1);
                    lets.forEach(a => letters.push(a))
                }
            }
            var emptyArray = mergeArrays(emptyArray, letters)
        // }
    }
    return emptyArray.length
}

function ejemplo(req, res) {  
    var ope = req.body.operacion.replace(/ /g, "").split('+');
    var letras = getLetters(req, res);
    for (let x = 0; x < ope.length; x++) {
       for (let s = 0; s < ope[x].length; s++) {            
            if(ope[x][s+1] === "'"){
                ope[x] = ope[x].replace(`${ope[x][s]}${ope[x][s+1]}`, '0')
            } else if (ope[x][s] != "'"){
                ope[x] = ope[x].replace(`${ope[x][s]}`, '1') 
            } else if(ope[x][s] === "'"){ continue; }    
       }        
    }
    return res.status(200).send({ 
        result: ope,
        rows: letras
    })
    
}

module.exports = {
    ejemplo
};