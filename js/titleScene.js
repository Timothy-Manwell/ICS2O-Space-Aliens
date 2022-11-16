/* global Phaser*/

// Copyright (c) 2022 Timothy Manwell All rights reserved
//
//Created by: Timothy Manwell
//Created on: Nov 2022
//This is the Title Scene

/**
 * This class is the title scene
 */
 class TitleScene extends Phaser.Scene {
    /**
     * This method is the constructor
     */
    constructor() {
      super({ key: "titleScene" })
    }
  
    init(data)
    {
        this.cameras.main.setBackgroundColor("#ffffff")
    }
    
    preload()
    {
        console.log("Title Scene")
    }
    
    create(data)
    {
        //pass
    }
    
    update(time, delta)
    {
        //pass
    }
}
  export default TitleScene
  