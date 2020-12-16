window.onload = () => {
    const canvas = document.getElementById("canvas0");
    const ctx = canvas.getContext("2D");
    const output = document.getElementById("output");
    let orientation = { gamma: 0, beta: 0 };
   

    // ボールのクラス
    class BallOrg {
        constructor(x, y, r, color) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.color = color;
        }
    }

    // ボールクラスBallOrgを継承したクラスを作る
    class Ball extends BallOrg {
        constructor(x, y, r, color) {
            super(x, y, r,color);
        }

        // ボールの描画
        draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
        return this;
        };

        // ボールの移動
        move(orientation) {
            this.x = Math.floor(this.x + orientation.gamma / 10);
            this.y = Math.floor(this.y + orientation.beta  / 10); 
            return this;
        };

        // ボールの位置取得
        // アクセッサプロパティgetterを使用
        const position ={
            get position(){
                return hoge;
            }
        }
        // get position() {
        //     let _position = { x: this.x, y: this.y } ;
        //     return _position;
        // };

        // ボールの位置設定
        // アクセッサプロパティsetterを使用

        // set position(_position) {
        //     this.x = _position.x;
        //     this.y = _position.y;
        //     return this;
        // };
    }   
    
    ball[0] = new Ball(100, 100, 10, 'red');  
    ball[1] = new Ball(200, 200, 10, 'blue');  

    function drawBoll() {
        // キャンパスの描画をクリア              
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 枠を描画
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, canvas.height);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(canvas.width, 0);
        ctx.closePath();
        ctx.lineWidth = 10;
        ctx.stroke();

        for (let i = 0; i < 1; i++) {
            // センサ情報に基づいてボールを動かす
            ball.move(orientation);

            // ボールが枠からはみ出した場合の処理
            // アクセッサプロパティgetterを使って座標値を取得。プロパティのように使用できる
            let position = { x: ball.position.x, y: ball.position.y };
            if ( position.x < 0 ) {
                position.x = 0;
            }
            if( canvas.width < position.x ) {
                position.x = canvas.width;
            }
            if (position.y < 0 ) {
                position.y = 10;
            }
            if ( canvas.height < position.y ) {
                position.y = canvas.height;
            }
            // アクセスプロパティsetterを使って座標値を代入。プロパティのように使用できる
            ball.position = position;
            
            ball.draw();
        }
    }
    setInterval(drawBoll, 50);

    //  iOS13スマートフォンやタブレットの傾きによる検出イベント
    const button = document.getElementById('button');
    button.onclick = () => {
        DeviceOrientationEvent.requestPermission()
        .then(response => {
            if (response === 'granted') {
                window.addEventListener('deviceorientation', function(event) {  
                    orientation.gamma = event.gamma;
                    orientation.beta = event.beta; 
                    output.innerHTML  = "beta : " + event.gamma + "\n";
                    output.innerHTML += "gamma: " + event.beta + "\n";
                }, true);  
            }
        })
        .catch( error => {
            conslole.log(error);
        });
    }

    //  Androidスマートフォンやタブレットの傾きによる検出イベント
    window.addEventListener('deviceorientation', function(event) {  
        orientation.gamma = event.gamma;
        orientation.beta = event.beta; 
        output.innerHTML  = "beta : " + event.gamma + "\n";
        output.innerHTML += "gamma: " + event.beta + "\n";
    }, false);

    // コンピュータの左右矢印キー押下による検出イベント
    window.addEventListener('keydown', function(event) {
        if(event.key == "ArrowRight") {
            orientation.gamma = orientation.gamma + 20;
        }
        if(event.key == "ArrowLeft") {
            orientation.gamma = orientation.gamma - 20;
        } 
        if(event.key == "ArrowUp") {
            orientation.beta = orientation.beta - 20;
        }
        if(event.key == "ArrowDown") {
            orientation.beta = orientation.beta + 20;
        }      
        output.innerHTML  = "beta : " + orientation.gamma + "\n";
        output.innerHTML += "gamma: " + orientation.beta + "\n";
    });  
}