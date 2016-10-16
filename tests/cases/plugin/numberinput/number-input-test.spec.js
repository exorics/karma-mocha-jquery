define(function(require, exports, module) {

    describe('number input test suite', function() {
        require('plugin/numberinput/numberinput');

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

        it('getValue ', function() {
            expect($('#inputField').val()).to.be.equals("");
            expect($('#inputField').numberInput("setValue", "222").val()).to.be.equals("222.00");
            expect($('#inputField').numberInput("setValue", "").val()).to.be.equals("");

            // $('#inputField').trigger("focus");

            // $('input:first').val('1');

            // var e = $.Event("keypress", { keyCode: 49 });
            // $('input:first').trigger(e);

            // $('#inputField').trigger("blur");
            // console.log( $('input:first').val());
            // expect($('#inputField').val()).to.be.equals("1.00");
            
        });

        it('getValueFormated ', function() {
            // expect($('#inputField').numberInput("getValueFormated")).to.be.equals("0.00");
        });
    });

});
