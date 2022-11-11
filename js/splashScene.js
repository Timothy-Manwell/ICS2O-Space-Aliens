/* global Phaser*/

// Copyright (c) 2022 Timothy Manwell All rights reserved
//
//Created by: Timothy Manwell
//Created on: Nov 2022
//This is the Splash Scene

/**
 * This class is the splash scene
 */
class SplashScene extends Phaser.Scene {
    /**
     * This method is the constructor
     */
    constructor () {
        super({ key: 'splashScene'})
    }
}

init (data); {
    this.cameras.main.setBackgroundColor('#ffffff')
}

preload () {
    console.log("Splash Scene")
}

create(data) {
    //pass
}

update(time,delta) {
    //pass
}

export default  SplashScene