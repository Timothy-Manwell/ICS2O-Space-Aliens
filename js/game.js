/* global Phaser */
// Copyright (c) 2022 Timothy Manwell All rights reserved
//
//Created by: Timothy Manwell
//Created on: Nov 2022
//This is the Phaser3 game configuration file

/**
* Start Phaser Game
*/
const config = {
  type: Phaser.Auto,
  width: 1920,
  height: 1080,
  // set background colour
  backgroundColor: 0x5f6e7a,
}

const game = new Phaser.Game(config)
console.log(game)