import { getHeroeById , getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe( 'Pruebas en 08-ip-exp.js', () => {
    test('getHeroeById debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'})
        } )  
        
     test ('getHeroeById debe retornar undefined si no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);

        expect( heroe ).toBeFalsy;
     })  
     
     test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect( heroes ).toEqual(heroes.filter  ( (heroe) => heroe.owner === owner ));
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
        expect( heroes ).toEqual(heroes.filter  ( (heroe) => heroe.owner === owner ));
    })

   

})