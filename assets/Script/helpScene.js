var com = require("Common");
cc.Class({
    extends: cc.Component,
  
    properties: {  
      btn_back: cc.Button,
      sceneType:0
      // sceneType 0:login 1:index 2:room 
    },
  
    // use this for initialization
    onLoad: function() {
      this.btn_back.node.on("click", this.backClick, this);
      this.sceneType = com.data.sceneType;
    },
  
    // called every frame
    update: function(dt) {},

    backClick(event) {
      console.log("back");
      if(this.sceneType == 0){
        cc.director.loadScene("login");
      }else if(this.sceneType == 1){
        cc.director.loadScene("index");
      }else if(this.sceneType == 2){
        cc.director.loadScene("login");
      }
    }
  });
  