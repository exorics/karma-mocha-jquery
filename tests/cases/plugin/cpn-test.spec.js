define(function(require, exports, module) {

    describe('Plugin cpn test suite', function() {
        var cpn = require('plugin/cpn');

        // beforeEach(function() {
        // 
        // });

        // afterEach(function() {
        //     
        // });

        it('reverse', function() {
            expect(cpn.reverse()).to.be.equals(true);
        });

        it('add 1+1=2 ', function() {
            expect(cpn.add(1,1)).to.be.equals(2);
        });
    });

});
