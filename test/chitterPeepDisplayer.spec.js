describe('ChitterPeepController', function(){
    beforeEach(module('ChitterChatter'));
    var ctrl;

    beforeEach(inject(function($controller) {
        ctrl = $controller('ChitterPeepController')
    }));

    it('initialises with an empy peep display and field', function(){
     expect(ctrl.peepDisplay).toBeUndefined();
     expect(ctrl.peepEntryField).toBeUndefined();
    })
    describe('you can write a peep and see it displayed', function(){

        it('can write a peep', function(){
            ctrl.peepEntryField = "This is a peep";
            ctrl.peepEnter()
            expect(ctrl.peepDisplay).toBe("This is a peep")
        })

        it('can write more than one peep', function(){
            ctrl.peepEntryField = "This is a peep";
            ctrl.peepEnter()
            ctrl.peepEntryField = "This is another peep";
            ctrl.peepEnter()
            expect(ctrl.peepDisplay).toContain("This is a peep")
        })
    })
});
