// seajs.use(['/base/src/plugin/cpn'], function(cpn) {
define(function (require, exports, module) {
    var cpn = require('/base/src/plugin/cpn');
    describe('Plugin cpn test suite', function() {

        // beforeEach(function() {
        //
        // });

        // afterEach(function() {
        //
        // });

        it('reverse1', function() {
            expect(cpn.reverse()).to.be.equals(true);
        });

        it('add1 1+1=2 ', function() {
            expect(cpn.add(1,1)).to.be.equals(2);
        });
    });

});
