import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas.js";

describe('Pruebas en 09-promesas.js', () => {

    test('getHeroeByIdAsync debe de retornar un heroe async', (done) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC'} );
                
            })
            done();

    })
    test('getHeroeByIdAsync debe de retornar un error si no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync( id )
            .catch( err => {
                
                console.log(err)
                expect( err ).toBe( 'No se pudo encontrar el héroe' );
                done();
            })
    })
})