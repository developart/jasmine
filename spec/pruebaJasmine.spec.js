function devuelveArray(n) {
    array = [];
    for (i = 0; i < n; i++) {
        array[i] = i + 1;
    }
    return array;
}



describe("SET DE PRUEBAS PARA devuelveArray()", function() {
    it("Debería retornar un array cuando yo llame a la función devuelveArray()", function() {
        expect(devuelveArray(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});