/* global Phaser*/

// Copyright (c) 2022 Timothy Manwell All rights reserved
//
//Created by: Timothy Manwell
//Created on: Nov 2022
//This is the Title Scene

/**
 * This class is the menu scene
 */
 class MenuScene extends Phaser.Scene {
    /**
     * This method is the constructor
     */
    constructor() {
      super({ key: "menuScene" })
      }
    }
  
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff")
    }
  
    preload() {
      console.log("Menu Scene")
    }
  
    create(data) {
      //pass
    }
  
    update(time, delta) {
      //pass
    }
  }
  export default MenuScene
  