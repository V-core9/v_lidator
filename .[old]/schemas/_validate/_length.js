const validLength = ( data , min = 0, max = 9900 ) => {
    const variableLength = data.length;
    return ( min <= variableLength && variableLength <= max ) ? true : false ;
};

module.exports = validLength;
