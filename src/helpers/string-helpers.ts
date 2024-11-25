import { STATUS } from "@/utils/constants";

const splitCamelCase = (s: string) => {
    const words: any = s.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
    const formattedWords = words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return formattedWords;
}

const uppercaseWords = (s: string) => s.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

const removeDecimal = (s: string) => s.replace(/\.00$/, '');

const capitalize = (s: string) => s && s.length > 0 && s[0].toUpperCase() + s.slice(1)

const reverse = (s: any) => s && s.split``.reverse().join``

const getSeverity = (status: string) => {
    switch (status) {
        case STATUS.IN:
            return "success";

        case STATUS.OUT:
            return "danger";

        default:
            return "secondary";
    }
};

const getStatusText = (status: string) => {
    switch (status) {
        case STATUS.IN:
            return "Deposit";

        case STATUS.OUT:
            return "Withdraw";

        default:
            return "ERROR";
    }
};

export {
    capitalize,
    reverse,
    splitCamelCase,
    uppercaseWords,
    removeDecimal,
    getSeverity,
    getStatusText
}