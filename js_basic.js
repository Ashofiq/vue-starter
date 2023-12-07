function getQueryPeram(query) {
    const params = new URL('http://localhost:4200/landing?query=1#2').searchParams;
    return params.get(query); // "1"
}

console.log(getQueryPeram('query'))