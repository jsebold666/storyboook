const createRange = (start = 0, end) => Array.from({ length: end - start }, (v, k) => k + start);

export default createRange;
