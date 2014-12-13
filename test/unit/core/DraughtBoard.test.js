var expect = require('chai').expect;
var rewire = require('rewire');

var DraughtBoard = rewire('./../../../src/core/DraughtBoard');

describe('The DraughtBoard constructor', function () {

    var PieceMock, DiagoMock;

    beforeEach(function(){
        PieceMock = {};
        DiagoMock = {};

        PieceMock.EMPTY = 0;
        PieceMock.PAWN_WHITE = 1;
        PieceMock.PAWN_BLACK = 2;
        PieceMock.DAME_WHITE = 3;
        PieceMock.DAME_BLACK = 4;

        DraughtBoard.__set__('Piece', PieceMock);
        DraughtBoard.__set__('Color', DiagoMock);
    });

    it('should be a function', function(){
        expect(DraughtBoard).to.be.a('function');
    });

    describe('instance', function(){

        var board;

        beforeEach(function(){
            board = new DraughtBoard();
        });

        it('should return an object', function(){
            expect(board).to.be.an('object');
        });

        it('should have the given \'squares\' array property', function(){
            expect(board).to.have.property('squares').that.is.an('array');
        });

        it('should have 50 \'squares\'', function(){
            expect(board.squares).to.have.length(50);
        });

        
        describe('setPosition20x20() method', function(){
            var board = new DraughtBoard();
            board.setPosition20x20();
            //board.debugDraughtBoard();

            it('should return true if \'piece\' on squares #1 to #20 are set to PAWN_BLACK symbol', function(){
                for (var num = 1; num <= 20; num++) {
                    expect(board.getPiece(num)).to.eql(PieceMock.PAWN_BLACK);
                }
            });

            
            it('should return true if \'piece\' on squares #21 to #30 are set to EMPTY symbol', function(){
                for (var num = 21; num <= 30; num++) {
                    expect(board.getPiece(num)).to.eql(PieceMock.EMPTY);
                }
            });
            

            it('should return true if \'piece\' on squares #31 to #50 are set to PAWN_WHITE symbol', function(){
                for (var num = 31; num <= 50; num++) {
                    expect(board.getPiece(num)).to.eql(PieceMock.PAWN_WHITE);
                }
            });

        });

    });

});