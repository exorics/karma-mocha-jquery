define(function(require, exports, module) {

    var cpn = require('cpn');
    var $ = require('jquery');
    // var chaiJq = require('chai-jquery');
    // var chai = require('chai-jquery');
    // window.jQuery = $;
    // window.chai.use(chaiJq);
    describe('A test suite', function() {
        var expect = window.expect;

        var should = chai.should();
        var $el = $('</p>'),
            closeBtnSel = '.js-dismissable-close-btn';

        beforeEach(function() {
            $('body').append('<div id="fixtures"></div>');
            $el.appendTo('#fixtures');
        });

        afterEach(function() {
            $el.remove();
        });

        it('should fail', function() {
            console.log($el);
            // $el.should.have.class('dismissable');
        });
    });
});
