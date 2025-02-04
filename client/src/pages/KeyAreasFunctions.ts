  // Split Key Area name into two parts based on brackets to format separately
  export const formatKeyAreaName = (name: string): [string, string] => {
    // Get indices of brackets
    const openBracket = name.indexOf('[');
    const closeBracket = name.indexOf(']');
    // get part inside brackets and make all uppercase
    const insideBracket = name.slice(openBracket + 1, closeBracket).toUpperCase().trim();
    // get part after brackets
    const outsideBracket = name.slice(closeBracket + 1).trim();
    // return as an array
    return [insideBracket, outsideBracket]
  };