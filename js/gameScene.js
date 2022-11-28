/* global Phaser*/

// Copyright (c) 2022 Timothy Manwell All rights reserved
//
//Created by: Timothy Manwell
//Created on: Nov 2022
//This is the Game Scene

/**
 * This class is the game scene
 */
 class GameScene extends Phaser.Scene {
    /**
     * This method is the constructor
     */
    constructor() {
      super({ key: "GameScene" })
      }
  
    init(data) {
      this.cameras.main.setBackgroundColor("#ffffff")
    }
  
    preload() {
      console.log("Game Scene")
    }
  
    create(data) {
    }
  
    update(time, delta) {
    }
}
  export default GameScene
  