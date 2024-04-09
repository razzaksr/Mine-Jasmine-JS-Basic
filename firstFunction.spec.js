// test suite/ test class
describe('haiDescription',()=>{

    // test case/ test function like java @Test
    it('first spec for hai',()=>{
        // Assertions

        expect(hai()).toBe('Zealous Tech Corps')
    })

    // test case
    it('second spec for hai',()=>{
        // Assertions
        
        expect(hai()).toBe('Zealous Tech Corp')
    })
})
