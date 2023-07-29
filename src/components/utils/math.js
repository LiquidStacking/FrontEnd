const formatSmallToBig = (num) => {
    return num * 10 ** 6;
}
const formatBigToSmall = (num) => {
    return (num / 10 ** 6).toFixed(2);
}

export { formatSmallToBig, formatBigToSmall };