//------------------------------------------------------------------------------
//  音が鳴るように準備する
//------------------------------------------------------------------------------

//  音階を設定
var pitch = [
    220 * Math.pow( 1.06, 3 ),  //  ド
    220 * Math.pow( 1.06, 4 ),  //  ド#
    220 * Math.pow( 1.06, 5 ),  //  レ
    220 * Math.pow( 1.06, 6 ),  //  レ#
    220 * Math.pow( 1.06, 7 ),  //  ミ
    220 * Math.pow( 1.06, 8 ),  //  ファ
    220 * Math.pow( 1.06, 9 ),  //  ファ#
    220 * Math.pow( 1.06,10 ),  //  ソ
    220 * Math.pow( 1.06,11 ),  //  ソ#
    440,                        //  ラ
    440 * Math.pow( 1.06, 1 ),  //  ラ#
    440 * Math.pow( 1.06, 2 )   //  シ
];

var gAudioContext   = new AudioContext();
var gOscillatorNode = gAudioContext.createOscillator();
var gGainNode       = gAudioContext.createGain();

gOscillatorNode.connect( gGainNode );
gGainNode.connect( gAudioContext.destination );

gGainNode.gain.value = 0;

gOscillatorNode.type = 'sawtooth';
gOscillatorNode.frequency.value = 440;
gOscillatorNode.start(0);


//------------------------------------------------------------------------------
//  照度を 0 から 1100 の間におさめる
//------------------------------------------------------------------------------
clamp = function( lx ){
	if( lx > 1100 ) return 1100;
	else if( lx < 20 ) return 20;
	else return lx;
};


//------------------------------------------------------------------------------
//  照度センサーの値が変わると呼ばれる関数
//
//  lx 明るさ (単位ルクス)
//------------------------------------------------------------------------------
changeSound = function( lx ) {
	var freqs = Math.floor( clamp( lx ) / 100 );
	gOscillatorNode.frequency.value = pitch[ freqs ];
};


//------------------------------------------------------------------------------
//  ミュートする
//
//  mute が true だったら音量を0にして false だったら音量を 1 にする
//------------------------------------------------------------------------------
setMute = function( mute ){
	if(mute == true) gGainNode.gain.value = 0;
	else gGainNode.gain.value = 1;
};
