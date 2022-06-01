const arithmeticAverage = (list) => {
    const sumList = list.reduce((sum = 0, currentElement) => sum + currentElement);

    return sumList / list.length;
}

const isPar = (number) => {
    // eslint-disable-next-line no-unused-expressions
    (number % 2) === 0 ? true : false;
}

export { arithmeticAverage, isPar };