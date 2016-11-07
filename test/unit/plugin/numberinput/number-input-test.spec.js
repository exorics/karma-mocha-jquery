// seajs.use(['/base/src/plugin/numberinput/numberinput.js','/base/src/plugin/typed'], function() {
define(function (require, exports, module) {
    require('/base/src/plugin/numberinput/numberinput');
    require('/base/src/plugin/typed');
    describe('number input test suite', function() {

        var fixtures = '<div id="fixtures">\
                            <input id="inputField" type="text" format="amount"/>\
                        </div>';

        beforeEach(function() {

        });

        afterEach(function() {
            $('#inputField').val("");
            // $('fixtures').remove();
        });

        before(function() {
            $('body').append(fixtures);
            $('#inputField').numberInput();
        });

        after(function() {
            $('fixtures').remove();
        });

        it('getValue ', function(done) {
            expect($('#inputField').val()).to.be.equals("");
            expect($('#inputField').numberInput("setValue", "222").val()).to.be.equals("222.00");
            expect($('#inputField').numberInput("setValue", "").val()).to.be.equals("");

            $('#inputField').trigger("focus");

            $('#inputField').trigger("blur");
            $('input').typed({
                strings: ["11.1"],
                typeSpeed: 0
            });

            setTimeout(function() {
                $('input').blur();
                console.log($('#inputField').val());
                expect($('#inputField').val()).to.be.equals("11.10");
                done();
            },1500);
        });
    });

});