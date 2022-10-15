function right () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 60)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 0)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        forward()
    } else if (receivedNumber == 2) {
        back()
    } else if (receivedNumber == 3) {
        left()
    } else if (receivedNumber == 4) {
        right()
    } else if (receivedNumber == 5) {
        liftup()
    } else if (receivedNumber == 6) {
        liftdown()
    } else if (receivedNumber == 7) {
        stop()
    } else {
        stop()
    }
})
function back () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 70)
}
function liftup () {
    DFRobotMaqueenPlus.servoRun(Servos.S1, 80)
}
function left () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 0)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CW, 60)
}
function stop () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.WHITH)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 0)
}
function liftdown () {
    DFRobotMaqueenPlus.servoRun(Servos.S1, 130)
}
function forward () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 70)
}
radio.setGroup(1)
basic.showIcon(IconNames.Rollerskate)
let angle = 90
DFRobotMaqueenPlus.servoRun(Servos.S1, angle)
basic.forever(function () {
	
})
