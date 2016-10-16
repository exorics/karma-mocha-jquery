define(function(require, exports, module) {

    describe('jquery suite', function() {

        var fixtures = '<div id="fixtures">\
                        </div>';

        beforeEach(function() {
        });

        afterEach(function() {
        });

        before(function() {
            $('body').append(fixtures);
        });

        after(function() {
            $('#fixtures').remove();
        });

        it('jquery version is 1.11.0', function() {
            expect($().jquery).to.be.equals('1.11.0');
        });

        it('append is ok ', function() {
            expect($('#fixtures')).to.be.exist;
        });
    });


});
