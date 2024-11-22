const splitCamelCase = (s: string) => {
    // Split CamelCase string into words
    const words: any = s.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');

    // Capitalize the first letter of each word and join them
    const formattedWords = words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return formattedWords;
}

const uppercaseWords = (s: string) => s.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

const removeDecimal = (s: string) => s.replace(/\.00$/, '');

const addThousandSeparator = (s: string) =>  new Intl.NumberFormat('en-US').format(Number(s));

/*
uppercaseWords('hello world'); // Hello World
*/

const capitalize = (s: string) => s && s.length > 0 && s[0].toUpperCase() + s.slice(1)

const reverse = (s: any) => s && s.split``.reverse().join``

export {
    capitalize,
    reverse,
    splitCamelCase,
    uppercaseWords,
    removeDecimal,
    addThousandSeparator
}