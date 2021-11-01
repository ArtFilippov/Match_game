var 
    canv = document.getElementById('1'), 
    ctx = canv.getContext('2d');
var windowInnerWidth = document.documentElement.clientWidth;
var windowInnerHeight = document.documentElement.clientHeight;
canv.height = windowInnerHeight;
canv.width = windowInnerWidth;


function getRandInt(min,max) {
    return Math.floor(Math.random()*(max - min)) + min;
};

function div(a,b) {
    return Math.floor(a/b);
};

function any(arr) {
    return arr.reduce((acm, item) => (acm || item), false);
};

var deck = { 
    card_0: { obj: new Image(),
               logic: [[0, -1, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0]]},
    card_1: { obj: new Image(),
               logic: [[0, -1, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0]]},
    card_2: { obj: new Image(),
               logic: [[0, -1, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0]]},
    card_3: { obj: new Image(),
               logic: [[0, -1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]]},
    card_4: { obj: new Image(),
               logic: [[0, -1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]]},
    card_5: { obj: new Image(),
               logic: [[0, -1, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_6: { obj: new Image(),
               logic: [[0, -1, 0], [0, 0, 1], [0, 0, 0], [0, 0, 0]]},
    card_7: { obj: new Image(),
               logic: [[0, -1, 0], [0, 0, 0], [0, 0, 1], [0, 0, 0]]},
    card_8: { obj: new Image(),
               logic: [[1, -1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_9: { obj: new Image(),
               logic: [[0, -1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 1]]},
    card_10: { obj: new Image(),
               logic: [[0, -1, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0]]},
    card_11: { obj: new Image(),
               logic: [[0, 1, 0], [0, 0, 0], [0, 0, 0], [0, -1, 0]]},
    card_12: { obj: new Image(),
               logic: [[0, 1, 0], [0, -1, 0], [0, 0, 0], [0, 0, 0]]},
    card_13: { obj: new Image(),
               logic: [[0, 1, 0], [0, -1, 0], [0, 0, 0], [0, 0, 0]]},
    card_14: { obj: new Image(),
               logic: [[0, 1, 0], [0, 0, 0], [0, -1, 0], [0, 0, 0]]},
    card_15: { obj: new Image(),
               logic: [[0, 1, 0], [0, 0, 0], [0, -1, 0], [0, 0, 0]]},
    card_16: { obj: new Image(),
               logic: [[0, 1, 0], [-1, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_17: { obj: new Image(),
               logic: [[0, 1, 0], [0, 0, -1], [0, 0, 0], [0, 0, 0]]},
    card_18: { obj: new Image(),
               logic: [[0, 1, 0], [0, 0, 0], [0, 0, -1], [0, 0, 0]]},
    card_19: { obj: new Image(),
               logic: [[-1, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_20: { obj: new Image(),
               logic: [[0, 1, 0], [0, 0, 0], [0, 0, 0], [0, 0, -1]]},
    card_21: { obj: new Image(),
               logic: [[0, 1, 0], [0, 0, 0], [0, 0, 0], [-1, 0, 0]]},
    card_22: { obj: new Image(),
               logic: [[0, 0, 0], [0, -1, 0], [0, 1, 0], [0, 0, 0]]},
    card_23: { obj: new Image(),
               logic: [[0, 0, 0], [1, -1, 0], [0, 0, 0], [0, 0, 0]]},
    card_24: { obj: new Image(),
               logic: [[0, 0, 0], [0, -1, 1], [0, 0, 0], [0, 0, 0]]},
    card_25: { obj: new Image(),
               logic: [[0, 0, 0], [0, -1, 0], [0, 0, 1], [0, 0, 0]]},
    card_26: { obj: new Image(),
               logic: [[1, 0, 0], [0, -1, 0], [0, 0, 0], [0, 0, 0]]},
    card_27: { obj: new Image(),
               logic: [[0, 0, 1], [0, -1, 0], [0, 0, 0], [0, 0, 0]]},
    card_28: { obj: new Image(),
               logic: [[0, 0, 0], [0, -1, 0], [0, 0, 0], [0, 0, 1]]},
    card_29: { obj: new Image(),
               logic: [[0, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 0]]},
    card_30: { obj: new Image(),
               logic: [[0, 0, 0], [-1, 1, 0], [0, 0, 0], [0, 0, 0]]},
    card_31: { obj: new Image(),
               logic: [[0, 0, 0], [0, 1, -1], [0, 0, 0], [0, 0, 0]]},
    card_32: { obj: new Image(),
               logic: [[0, 0, 0], [0, 1, 0], [0, 0, -1], [0, 0, 0]]},
    card_33: { obj: new Image(),
               logic: [[-1, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0]]},
    card_34: { obj: new Image(),
               logic: [[0, 0, -1], [0, 1, 0], [0, 0, 0], [0, 0, 0]]},
    card_35: { obj: new Image(),
               logic: [[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, -1]]},
    card_36: { obj: new Image(),
               logic: [[0, 0, 0], [-1, 0, 1], [0, 0, 0], [0, 0, 0]]},
    card_37: { obj: new Image(),
               logic: [[0, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, 0]]},
    card_38: { obj: new Image(),
               logic: [[0, 0, 0], [-1, 0, 0], [1, 0, 0], [0, 0, 0]]},
    card_39: { obj: new Image(),
               logic: [[1, 0, 0], [-1, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_40: { obj: new Image(),
               logic: [[0, 0, 1], [-1, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_41: { obj: new Image(),
               logic: [[0, 0, 1], [-1, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_42: { obj: new Image(),
               logic: [[0, 0, 0], [-1, 0, 0], [0, 0, 0], [0, 0, 1]]},
    card_43: { obj: new Image(),
               logic: [[0, 0, 0], [-1, 0, 0], [0, 0, 0], [1, 0, 0]]},
    card_44: { obj: new Image(),
               logic: [[0, 0, 0], [-1, 0, 0], [0, 0, 0], [1, 0, 0]]},
    card_45: { obj: new Image(),
               logic: [[0, 0, 0], [1, 0, -1], [0, 0, 0], [0, 0, 0]]},
    card_46: { obj: new Image(),
               logic: [[0, 0, 0], [1, 0, 0], [0, 0, -1], [0, 0, 0]]},
    card_47: { obj: new Image(),
               logic: [[0, 0, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 0]]},
    card_48: { obj: new Image(),
               logic: [[-1, 0, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_49: { obj: new Image(),
               logic: [[0, 0, -1], [1, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_50: { obj: new Image(),
               logic: [[0, 0, -1], [1, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_51: { obj: new Image(),
               logic: [[0, 0, 0], [1, 0, 0], [0, 0, 0], [0, 0, -1]]},
    card_52: { obj: new Image(),
               logic: [[0, 0, 0], [1, 0, 0], [0, 0, 0], [-1, 0, 0]]},
    card_53: { obj: new Image(),
               logic: [[0, 0, 0], [1, 0, 0], [0, 0, 0], [-1, 0, 0]]},
    card_54: { obj: new Image(),
               logic: [[-1, 0, 1], [0, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_55: { obj: new Image(),
               logic: [[-1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 1]]},
    card_56: { obj: new Image(),
               logic: [[-1, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0]]},
    card_57: { obj: new Image(),
               logic: [[1, 0, -1], [0, 0, 0], [0, 0, 0], [0, 0, 0]]},
    card_58: { obj: new Image(),
               logic: [[1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, -1]]},
    card_59: { obj: new Image(),
               logic: [[1, 0, 0], [0, 0, 0], [0, 0, 0], [-1, 0, 0]]},
    shuffleTheDeck() { 
        let inp = [];
        let arr = [];
        
        
        for (let i = 0; i < 60; i++) {
            arr.push(i);
        };
        
        
        while (inp.length != 60) {
            inp.push(arr.splice(getRandInt(0,arr.length),1)[0]);
        };
        
        
        this.priority = inp;
        
        
    },

    getPack() {
        if (this.priority.length < 16) {
            return this.priority.splice(0,this.priority.length);
        };
        return this.priority.splice(0,16); 
    },
    
    getOneCard() {
        if (this.priority.length > 0) {
            
            return this.priority.splice(0,1);
        };
        return false;
    },

    getDeckFull() {
        
        return this.priority.length
    }
 };
deck.card_0.obj.src = "img/1zeSn_1zeVn3.png";
deck.card_1.obj.src = "img/1zeSn_2fiVn1.png";
deck.card_2.obj.src = "img/1zeSn_2fiVn2.png";
deck.card_3.obj.src = "img/1zeSn_2fiVn3.png";
deck.card_4.obj.src = "img/1zeSn_2fiVn4.png";
deck.card_5.obj.src = "img/1zeSn_3orVn1.png";
deck.card_6.obj.src = "img/1zeSn_3orVn2.png";
deck.card_7.obj.src = "img/1zeSn_3orVn3.png";
deck.card_8.obj.src = "img/1zeSn_4siVn1.png";
deck.card_9.obj.src = "img/1zeSn_4siVn3.png";
deck.card_10.obj.src = "img/1zeSn_4siVn4.png";
deck.card_11.obj.src = "img/1zeVn_1zeSn3.png";
deck.card_12.obj.src = "img/1zeVn_2fiSn1.png";
deck.card_13.obj.src = "img/1zeVn_2fiSn2.png";
deck.card_14.obj.src = "img/1zeVn_2fiSn3.png";
deck.card_15.obj.src = "img/1zeVn_2fiSn4.png";
deck.card_16.obj.src = "img/1zeVn_3orSn1.png";
deck.card_17.obj.src = "img/1zeVn_3orSn2.png";
deck.card_18.obj.src = "img/1zeVn_3orSn3.png";
deck.card_19.obj.src = "img/1zeVn_4siSn1.png";
deck.card_20.obj.src = "img/1zeVn_4siSn3.png";
deck.card_21.obj.src = "img/1zeVn_4siSn4.png";
deck.card_22.obj.src = "img/2fiSn_2fiVn3.png";
deck.card_23.obj.src = "img/2fiSn_3orVn1.png";
deck.card_24.obj.src = "img/2fiSn_3orVn2.png";
deck.card_25.obj.src = "img/2fiSn_3orVn3.png";
deck.card_26.obj.src = "img/2fiSn_4siVn1.png";
deck.card_27.obj.src = "img/2fiSn_4siVn2.png";
deck.card_28.obj.src = "img/2fiSn_4siVn3.png";
deck.card_29.obj.src = "img/2fiVn_2fiSn3.png";
deck.card_30.obj.src = "img/2fiVn_3orSn1.png";
deck.card_31.obj.src = "img/2fiVn_3orSn2.png";
deck.card_32.obj.src = "img/2fiVn_3orSn3.png";
deck.card_33.obj.src = "img/2fiVn_4siSn1.png";
deck.card_34.obj.src = "img/2fiVn_4siSn2.png";
deck.card_35.obj.src = "img/2fiVn_4siSn3.png";
deck.card_36.obj.src = "img/3orSn_3orVn2.png";
deck.card_37.obj.src = "img/3orSn_3orVn3.png";
deck.card_38.obj.src = "img/3orSn_3orVn4.png";
deck.card_39.obj.src = "img/3orSn_4siVn1.png";
deck.card_40.obj.src = "img/3orSn_4siVn2 _copy.png";
deck.card_41.obj.src = "img/3orSn_4siVn2.png";
deck.card_42.obj.src = "img/3orSn_4siVn3.png";
deck.card_43.obj.src = "img/3orSn_4siVn4 _copy.png";
deck.card_44.obj.src = "img/3orSn_4siVn4.png";
deck.card_45.obj.src = "img/3orVn_3orSn2.png";
deck.card_46.obj.src = "img/3orVn_3orSn3.png";
deck.card_47.obj.src = "img/3orVn_3orSn4.png";
deck.card_48.obj.src = "img/3orVn_4siSn1.png";
deck.card_49.obj.src = "img/3orVn_4siSn2 _copy.png";
deck.card_50.obj.src = "img/3orVn_4siSn2.png";
deck.card_51.obj.src = "img/3orVn_4siSn3.png";
deck.card_52.obj.src = "img/3orVn_4siSn4 _copy.png";
deck.card_53.obj.src = "img/3orVn_4siSn4.png";
deck.card_54.obj.src = "img/4siSn_4siVn2.png";
deck.card_55.obj.src = "img/4siSn_4siVn3.png";
deck.card_56.obj.src = "img/4siSn_4siVn4.png";
deck.card_57.obj.src = "img/4siVn_4siSn2.png";
deck.card_58.obj.src = "img/4siVn_4siSn3.png";
deck.card_59.obj.src = "img/4siVn_4siSn4.png";

class Controls {
    constructor (conteiner = document.body) {
        this.conteiner = conteiner;

        this.isPressed = false;
        this.isDown = false;
        this.isUp = false;

        this.posShift = { x: 0, y: 0};
        this.pos = { x: 0, y: 0};

        this.keyList = ['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowLeft','ArrowDown','ArrowRight','Space','Enter','ShiftRight','ShiftLeft'];
        this.keys = {};
        
        conteiner.addEventListener( 'mousemove', e => this.changeState(e));
        conteiner.addEventListener('click',      e => this.changeState(e));
        conteiner.addEventListener('mousedown',  e => this.changeState(e));
        conteiner.addEventListener('mouseup',    e => this.changeState(e));
        conteiner.addEventListener( 'keydown',   e => this.changeState(e));
        conteiner.addEventListener('keyup',      e => this.changeState(e));
        
        
    };
    update() {
        this.isDown = false;
        this.isUp = false;
    }
    changeState(e) {
        
        if (e.type == 'mousemove') {
            this.posShift.x = e.clientX - canv.offsetLeft - this.pos.x;
            this.posShift.y = e.clientY - canv.offsetTop - this.pos.y;
            this.pos.x = e.clientX - canv.offsetLeft;
            this.pos.y = e.clientY - canv.offsetTop;
            box.fillCell(this.pos.x - box.marginLeft,this.pos.y - box.marginTop); 
            box.dragCard();
        };
    
        if (e.type == 'mousedown') {
            this.isPressed = true;
            this.isDown = true;
            this.isUp = false; 
            
        };
        if (e.type == 'mouseup') {
            this.isPressed = false;
            this.isUp = true;
            this.isDown = false;
            
        };

        if ((box.cards.isFill) && !(box.clipBoard.img) && (this.keys['Enter'] || this.keys['Space'])) {
            box.takeCard();
            
        }; 

        if (box.clipBoard.img && (this.keys['Enter'] || this.keys['Space']) && (String(box.clipBoard.home) != String(box.cards.isFill))) {
            box.putTheCard();
        };

        if (e.type == 'keydown') {
            console.log(e.code)
            if (this.keyList.includes(e.code)) {
                this.keys[e.code] = true; 
            };
        } else if (e.type == 'keyup') {
            if (this.keyList.includes(e.code)) {
                this.keys[e.code] = false; 
            };
        };

        if ((this.keys['KeyA'] || this.keys['KeyD'] || 
             this.keys['ArrowLeft'] || this.keys['ArrowRight']) &&
             !box.transFlagY) {
            box.flipY();         
        };

        if ((this.keys['KeyW'] || this.keys['KeyS'] || 
             this.keys['ArrowUp'] || this.keys['ArrowDown']) &&
             !box.transFlagY) {
            box.flipX();         
        };

        if (box.isFocusTwo && (this.keys['ShiftRight'] || this.keys['ShiftLeft'])) {
            box.removeFocus();
        } else if (box.clipBoard.img && !box.isFocusTwo && (this.keys['ShiftRight'] || this.keys['ShiftLeft'])) {
            box.cancelTheCard()
        }

    };
    
        
  
    
};

mouse = new Controls;







var box = {

    timeFullDeck: 60,

    fullDeck: 60,

    chengeDeck: true,

    gamePoints: 0,

    pointShift: -this.scale*1,

    time: 10,

    speedVec: 50,

    timeShift: 2,
    
    isFocusTwo: false,

    cardIsFCell: false,

    cards: { isFill: false},
    
    clipBoard: {
        img: false,
        home: false,
        CoF: 1.3
    },

    transpX: 0,
    transpY: 0,

    speed: 20,

    transFlagX: false, 
    transFlagY: false, 
    mirrorFlag: true,
    pointFlag: true,
    finishFlag: false,
    remFlag: false,

    generateCellCoordinates() {
        let w = windowInnerWidth;
        let h = windowInnerHeight*0.95;
        let inp = [];

        if (w <= h) {
            let scale = Math.trunc(w/4);
            this.scale = Math.trunc(scale/3);
            
            canv.height = this.scale*16;
        } else {
            let scale = Math.trunc(h/4);
            this.scale = Math.trunc(scale/4);
            this.marginLeft = this.scale*4 + 40;
            this.marginTop = 20;
            
        };

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                inp.push([this.marginLeft + j*this.scale*3, this.marginTop + i*this.scale*4]);
            };
        };

        
        this.pointShift = -this.scale*1;

        this.cells = inp; 
        
    },

    

    generatePack() {
        
        let pack = deck.getPack();
        this.distFlag = true;
        this.w = Math.trunc(this.scale*3*0.9);
        this.h = Math.trunc(this.scale*4*0.9);
        
        for (let i = 0; i < this.cells.length; i++) {
            let key = String(this.cells[i]);  
            card = 'card_' + String(pack[i]);
            this.cards[key] = deck[card]; 

             
            this.cards[key].coordinates = [0,-100];
            let fragmX = (getRandInt(0,100) % 2)*this.swidth;
            let fragmY = (getRandInt(0,100) % 2)*this.sheight;
            if (fragmY == this.sheight) {
                this.cards[key].logic.reverse();
            };
            if (fragmX == this.swidth) {
                for (let i = 0; i < this.cards[key].logic.length; i++) {
                    this.cards[key].logic[i].reverse();
                };
            };

            this.cards[key].endPoint = this.cells[i].slice(); 

            this.cards[key].tShift = this.timeShift*i;

            this.cards[key].fragments = [fragmX,fragmY];

             
        };

        let S = this.fullDeck - deck.getDeckFull();
        this.s = S;
        this.t = this.timeFullDeck;
        let t = this.timeFullDeck;
        let a = 2*S/(t**2);
        this.a = a;
        this.chengeDeck = true;
        
    },

    fillVoids() {
        let j = 0;
        
        for (let i = 0; i < this.cells.length; i++) {
            
            let key = String(this.cells[i]);  
            
            if (!(this.cards[key])) {

                let nameCard = deck.getOneCard()

                if (!(nameCard)) {
                    return 
                };
                
                card = 'card_' + String(nameCard);
                this.cards[key] = deck[card]; 
                
                this.cards[key].coordinates = [-100,-100]; 

                let fragmX = (getRandInt(0,100) % 2)*this.swidth;
                let fragmY = (getRandInt(0,100) % 2)*this.sheight;
                if (fragmY == this.sheight) {
                    this.cards[key].logic.reverse();
                };
                if (fragmX == this.swidth) {
                    for (let i = 0; i < this.cards[key].logic.length; i++) {
                        this.cards[key].logic[i].reverse();
                    };
                };
                this.cards[key].endPoint = this.cells[i].slice();
                this.cards[key].fragments = [fragmX,fragmY];
                this.cards[key].tShift = this.timeShift*j;
                j++;
                this.distFlag = true;
            };

             
        };

        let S = this.fullDeck - deck.getDeckFull();
        this.s = S;
        this.t = this.timeFullDeck;
        let t = this.timeFullDeck;
        let a = 2*S/(t**2);
        this.a = a;
        this.chengeDeck = true;
    },
 
    fillCell(x,y){
        
        let cellX = this.marginLeft + Math.floor(x/(this.scale*3))*this.scale*3;
        let cellY = this.marginTop + Math.floor(y/(this.scale*4))*this.scale*4;
        if (x < 0) {
            this.cards.isFill = false;
            return; 
        };
        if (!(this.cells)) {
            return;
        };
        for (let cell of this.cells) {
            if ((cell[0] == cellX) && (cell[1] == cellY)) {
                this.cards.isFill = cell;
                return;
            };
            this.cards.isFill = false;
            
        };
    },

    distTheDeck() {

        ctx.strokeStyle = "#00ff00";
        ctx.lineWidth = 6;
        ctx.lineCap = "round";
        
        ctx.beginPath();
        ctx.moveTo(this.cells[0][0],3);
        ctx.lineTo(this.scale*25*(this.fullDeck/60),3);
        ctx.stroke();

        ctx.fillStyle = 'black';
        ctx.font = '50px serif';
        ctx.fillText('Счёт: ', this.marginLeft + this.scale*12 + 100, this.scale*2);
        
        ctx.fillText(String(this.gamePoints),this.marginLeft + this.scale*12 + 220,this.scale*2 + this.pointShift); 
        
        if (this.cards.isFill) {
            ctx.fillStyle = '#ffec4f'
            ctx.fillRect(this.cards.isFill[0],this.cards.isFill[1],this.scale*3,this.scale*4);
        };

        if (this.isFocusTwo && !(this.remFlag)) {
            ctx.fillStyle = '#b9e084'
            ctx.fillRect(this.focusCell.coordinates[0],this.focusCell.coordinates[1],this.scale*3,this.scale*4);
        };

        let keys = Object.keys(this.cards);
        for (let card of keys) {

            

            if (card == 'isFill' || card == 'speedX' || card == 'speedY') {
                continue
            };

            

            if (!(this.cards[card])) {
                continue 
            };

            
            ctx.drawImage(
                this.cards[card].obj,
                this.cards[card].fragments[0],
                this.cards[card].fragments[1],
                this.swidth,
                this.sheight, 
                this.cards[card].coordinates[0] + ((this.scale*3 - this.w)/2), 
                this.cards[card].coordinates[1] + ((this.scale*4 - this.h)/2), 
                this.w, 
                this.h
            );
            
            
        
        };

        if (this.cardInFCell) {
            
            
            
            let keys = Object.keys(this.cardInFCell);
            for (let card of keys) {
                ctx.drawImage(
                    this.cardInFCell[card].img.obj,
                    this.cardInFCell[card].img.fragments[0],
                    this.cardInFCell[card].img.fragments[1],
                    this.swidth,
                    this.sheight, 
                    this.cardInFCell[card].img.coordinates[0] + ((this.scale*3 - this.w)/2), 
                    this.cardInFCell[card].img.coordinates[1] + ((this.scale*4 - this.h)/2), 
                    this.w, 
                    this.h
                );
            };
        };

        if (this.clipBoard.img) {
            
            let CoF = this.clipBoard.CoF;
            let Y = this.clipBoard.img.coordinates[1] + ((this.scale*4 - (this.h - this.transpY)*CoF)/2);
            let X =  this.clipBoard.img.coordinates[0] + ((this.scale*3 - (this.w - this.transpX)*CoF)/2);
             
            ctx.drawImage(
                this.clipBoard.img.obj, 
                this.clipBoard.img.fragments[0],
                this.clipBoard.img.fragments[1],
                this.swidth,
                this.sheight, 
                X, 
                Y, 
                (this.w - this.transpX)*CoF, 
                (this.h - this.transpY)*CoF
            );
        };
    
    },

    takeCard() {
        if (this.distFlag) {
            this.distFlag = false;
        }
        if (this.cardInFCell) {
            if (String(this.cards.isFill) in this.cardInFCell || String(this.focusCell.coordinates) == String(this.cards.isFill)) {

                return;
            };
        };
        
        if (!(box.clipBoard.img) && this.cards[String(this.cards.isFill)]) {
            this.clipBoard.img = this.cards[String(this.cards.isFill)];
            this.clipBoard.home = this.cards[String(this.cards.isFill)].coordinates.slice();
            
            this.cards[String(this.cards.isFill)] = false; 
            
            
        } 
        
    },

    mouseInPlace() {
        if (!(this.clipBoard.img)) { 
            return;
        }; 
        let CoF = this.clipBoard.CoF;
        let Y = this.clipBoard.img.coordinates[1] + ((this.scale*4 - this.h*CoF)/2);

        let X = this.clipBoard.img.coordinates[0] + ((this.scale*3 - this.w*CoF)/2);
        return (mouse.pos.x >= X && 
                mouse.pos.x <= X + this.w*CoF && 
                mouse.pos.y <= Y + this.h*CoF &&
                mouse.pos.y >= Y);
        
    },

    dragCard() {
        if (this.clipBoard.img && mouse.isPressed && this.mouseInPlace()) {
            this.clipBoard.img.coordinates[0] += mouse.posShift.x;
            this.clipBoard.img.coordinates[1] += mouse.posShift.y; 
            
        };
    },



    isFits() {

        if (!(this.focusCell)) {
            this.focusCell = this.cards[String(this.cards.isFill)];

            this.focusCellmemoLogic = this.focusCell.logic.slice(); 
            
        };
        
        if (this.cards.isFill) {
            
            if (this.focusCell) {

                let sumLogic = [];

                for (let i = 0; i < 4; i++) {

                    let sumLogicRow = [];

                    for (let j = 0; j < 3; j++) {

                        if (this.focusCell.logic[i][j] == 'N' && Math.abs(this.clipBoard.img.logic[i][j]) == 1) {
                            return -1;
                        };

                        if (this.focusCell.logic[i][j] == 'N' && this.clipBoard.img.logic[i][j] == 0) {
                            sumLogicRow.push('N');
                            continue;
                        };

                        if (this.focusCell.logic[i][j] != 'N') {
                            if (Math.abs(this.focusCell.logic[i][j]) == 1 && (this.focusCell.logic[i][j] + this.clipBoard.img.logic[i][j]) == 0) {
                                sumLogicRow.push('N');
                                continue;
                            };
                             
                        };
                        
                        sumLogicRow.push(this.focusCell.logic[i][j] + this.clipBoard.img.logic[i][j]);

                        
                    
                    };

                    sumLogic.push(sumLogicRow);

                };
                let sum = 0;
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (sumLogic[i][j] != 'N') {
                            if (Math.abs(sumLogic[i][j]) > 1) {
                                return -1;
                            };
                        };
                        if (sumLogic[i][j] == 0 || sumLogic[i][j] == 'N') {
                            
                            sum += 1;
                        };
                    };
                };
                if (sum >= 10) {
                    this.focusCell.logic = sumLogic;
                };
                
                return sum;

            };

            return 13; 

        };

        return -1; 
        
    },

    flipX() {
        this.transFlagX = true;
    },
    
    flipY() {
        this.transFlagY = true;
    },

    flipLogicX() {
        this.clipBoard.img.logic.reverse();
    },

    flipLogicY() {
        for (let i = 0; i < this.clipBoard.img.logic.length; i++) {
            this.clipBoard.img.logic[i].reverse();
        };
    },

    transpos() {
        if (this.transFlagY == true) {
            this.transpX += this.speed;
            if (this.transpX >= this.w && this.mirrorFlag) {
                this.clipBoard.img.fragments[0] = (this.clipBoard.img.fragments[0] == 0) ? 
                                                   this.swidth : 
                                                   0;
                this.mirrorFlag = false;

                this.flipLogicY();

                
            };
            if (this.transpX >= this.w * 2) {
                this.transFlagY = false;
                
                this.mirrorFlag = true;

                

                this.transpX = 0;
            };
        };
        if (this.transFlagX == true) {
            this.transpY += this.speed*4/3;
            if (this.transpY >= this.h && this.mirrorFlag) {
                this.clipBoard.img.fragments[1] = (this.clipBoard.img.fragments[1] == 0) ? 
                                                   this.sheight : 
                                                   0;
                
                this.flipLogicX();

                
                
                this.mirrorFlag = false;                    
            };
            if (this.transpY >= this.h * 2) {
                this.transFlagX = false;

                this.mirrorFlag = true;

                this.transpY = 0;
                
            };
        };
        
        if (this.pointFlag) {
            
            this.pointShift += 5;
            if (this.pointShift >= 0) {
                this.pointShift = 0;
                this.pointFlag = false; 
            };
        };

        if (this.distFlag) {
            let keys = Object.keys(this.cards);
            let i = 0;

            
            for (let card of keys) {

                if (card == 'isFill' || card == 'speedX' || card == 'speedY') {
                    continue
                };
                if (!(this.cards[card])) {
                    continue;
                };
                if (!(this.cards[card].speedX)) {
                        
                    let sX = this.cards[card].endPoint[0] - this.cards[card].coordinates[0];
                    
                    let sY = this.cards[card].endPoint[1] - this.cards[card].coordinates[1];

                    let sR = Math.sqrt(sX**2 + sY**2);
                    
                    this.cards[card].speedY = this.speedVec*sY/sR;
                    this.cards[card].speedX = this.speedVec*sX/sR; 
                };
                if (this.cards[card].coordinates[0] < this.cards[card].endPoint[0] - this.cards[card].speedX || this.cards[card].coordinates[1] < this.cards[card].endPoint[1] - this.cards[card].speedY) {
                    
                    if (this.cards[card].tShift <= 0) {
                        this.cards[card].coordinates[0] += this.cards[card].speedX;
                        this.cards[card].coordinates[1] += this.cards[card].speedY;
                    } else {
                        this.cards[card].tShift--;
                    };
                    

                } else {

                    this.cards[card].coordinates[0] = this.cards[card].endPoint[0];
                    this.cards[card].coordinates[1] = this.cards[card].endPoint[1];
                    

                };
                i++;
            };
            
        };
        if (this.remFlag) {
            let keys = Object.keys(this.cardInFCell);

            for (let i = 0; i < keys.length; i++) {

                let card = keys[i];

                
                if (!(this.cardInFCell[card].speedX)) {
                    
                    

                    let sX = this.cardInFCell[card].home[0] - this.focusCell.coordinates[0];
                    
                    this.cardInFCell[card].speedX = sX/this.time;
                    let sY = this.cardInFCell[card].home[1] - this.focusCell.coordinates[1];
                    this.cardInFCell[card].speedY = sY/this.time;
                    
                    
                };

                let pX = Math.abs(this.cardInFCell[card].home[0] - this.cardInFCell[card].img.coordinates[0]) -  2*Math.abs(this.cardInFCell[card].speedX);
                let pY = Math.abs(this.cardInFCell[card].home[1] - this.cardInFCell[card].img.coordinates[1]) -  2*Math.abs(this.cardInFCell[card].speedY);
                if (pX > 0 || pY > 0) {
                   

                    this.cardInFCell[card].img.coordinates[0] += this.cardInFCell[card].speedX;
                    this.cardInFCell[card].img.coordinates[1] += this.cardInFCell[card].speedY;

                } else {
                    this.cardInFCell[card].img.coordinates[0] = this.cardInFCell[card].home[0];
                    this.cardInFCell[card].img.coordinates[1] = this.cardInFCell[card].home[1];

                    this.remArr[i] = false;

                    
                };
            };
            if (!(any(this.remArr))) {
                let key = Object.keys(this.cardInFCell);
                for (let card of key) {
                    this.cards[card] = this.cardInFCell[card].img;
                    this.cards[card].coordinates = this.cardInFCell[card].home;

                };
                this.cardInFCell = false;
                this.focusCell.logic = this.focusCellmemoLogic.slice(); 
                this.focusCell = false;
                this.isFocusTwo = false;
                this.remFlag = false;
            };
        };
        if (this.finishFlag) {
            if (!(this.focusCell.speedX)) {
                
                let sX = this.focusCell.endPoint[0] - this.focusCell.coordinates[0];
                this.focusCell.speedX = sX/this.time;
                let sY = this.focusCell.endPoint[1] - this.focusCell.coordinates[1];
                this.focusCell.speedY = sY/this.time;
                
                
            };

            

            this.focusCell.coordinates[0] += this.focusCell.speedX;
            this.focusCell.coordinates[1] += this.focusCell.speedY;

            let keys = Object.keys(this.cardInFCell);

            for (let card of keys) {

                
                if (this.cardInFCell[card].img.coordinates[0] < this.focusCell.endPoint[0] || this.cardInFCell[card].img.coordinates[1] > this.focusCell.endPoint[1]) {
                   

                    this.cardInFCell[card].img.coordinates[0] += this.focusCell.speedX;
                    this.cardInFCell[card].img.coordinates[1] += this.focusCell.speedY;

                } else {
                    
                    this.cards[String(this.focusCell.home)] = false;
                    this.focusCell = false;
                    this.cardInFCell = false;
                    this.isFocusTwo = false;
                    this.finishFlag = false;

                    this.fillVoids();
                    break

                };
            };
        }; 
        if (this.chengeDeck) { 

            

            if (this.t > 0) {
                console.log('f ',deck.getDeckFull());
                this.fullDeck -= this.t*this.a;
                this.t--;

            };
        };
    },

    cancelTheCard() {
        
        this.cards[String(this.clipBoard.home)] = this.clipBoard.img;
        this.cards[String(this.clipBoard.home)].coordinates = this.clipBoard.home;
        
        this.clipBoard.img = false;
        
        if (!(this.isFocusTwo)) {
            this.focusCell = false;
        };
        
    },

    leaveCard() {
        this.isFocusTwo = true;
        if (!(this.cardInFCell)) {
            this.cardInFCell = {};
        };
        
        this.cardInFCell[String(this.clipBoard.home)] = {}; 
        Object.assign(this.cardInFCell[String(this.clipBoard.home)],this.clipBoard);
        
        this.clipBoard.img = false;
        this.cardInFCell[String(this.clipBoard.home)].img.coordinates = this.focusCell.coordinates.slice();
        this.cardInFCell[String(this.clipBoard.home)].speedX = false;
    }, 
    
    finishPuzzle() {
        this.leaveCard();
        
        this.gamePoints += Object.keys(this.cardInFCell).length*div(Object.keys(this.cardInFCell).length ,2) + 1;
        
        this.pointFlag = true;
        this.pointShift = -this.scale*1;


        this.focusCell.endPoint = [this.marginLeft + this.scale*12 + 220 - this.w, this.scale*2 - this.h];

        this.focusCell.home = this.focusCell.coordinates.slice();

        this.focusCell.speedX = false;
        
        this.finishFlag = true;

        
        

         

    },

    removeFocus() {
        if (this.clipBoard.img) {
            this.cards[String(this.clipBoard.home)] = this.clipBoard.img;
            this.cards[String(this.clipBoard.home)].coordinates = this.clipBoard.home;
            
            this.clipBoard.img = false;
        };

        this.remFlag = true;

        this.remArr = [];

        for (let i = 0; i < Object.keys(this.cardInFCell).length; i++) {
            this.remArr.push(true);
        }


        
    },

    putTheCard() {
        

        if (!(this.cards[String(this.cards.isFill)])) {
            this.cancelTheCard();
            return;
        };
        
        let sum = this.isFits();
        
        if (sum == 12) {

            this.finishPuzzle(); 

            return;  
        
        };
        if (sum == 10) {

            this.leaveCard();

            return;

        };
        
        this.cancelTheCard();
            
            
    },

};

function getSize() {
    box.swidth = deck.card_0.obj.width/2;
    box.sheight = deck.card_0.obj.height/2; 
    box.generateCellCoordinates();
    deck.shuffleTheDeck();
    box.generatePack();
};

deck.card_0.obj.onload = getSize;

function drav() {
    requestAnimationFrame(drav);
    box.transpos();
    ctx.clearRect(0,0,canv.width,canv.height);
    box.distTheDeck();
}; 


deck.card_59.obj.onload = requestAnimationFrame(drav);


