const addThousandSeparator = (s: string | number) => new Intl.NumberFormat('en-US').format(Number(s));

export {
    addThousandSeparator
}