controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . 7 7 7 7 f 7 7 . . . . . 
        . . . . 7 7 7 7 f f 7 . . . . . 
        . . . 7 7 7 7 7 7 f 7 7 . . . . 
        . . . 7 7 7 7 7 7 f f 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, man, 50, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . 1 . 1 4 4 4 4 5 
        . . . . . . . 1 . 1 . 4 4 4 4 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, man, 500, 0)
})
info.onScore(30, function () {
    scoreMoreThan30()
})
info.onScore(100, function () {
    _100()
})
function _100 () {
    if (info.score() >= 100) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffff55555fffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffff5555fffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff5555ffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffff5555fffffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff5555fffffffffffffffffffffff55555fffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffff5555ffffffffffffffffffffff55555fffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffff5555fffffffffffffffffffff5555ffffffffffffffffffffff555555fffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff
            fffffffffffffffffffff5555fffffffffffffffffffff555ffffffffffffffffffffff555555555fffffffffffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffff
            ffffffffffffffffffffff5555fffffffffffffffffff5555fffffffffffffffffffff5555555555555ffffffffffffffffffffffffffffffffffffffffffffffff55555ffffffffffffffffffffffff
            ffffffffffffffffffffff5555fffffffffffffffffff5555fffffffffffffffffffff5555ff555555555ffffffffffffffffffffffffffffffffffffffffffffff555555fffffffffffffffffffffff
            fffffffffffffffffffffff5555fffffffffffffffff5555fffffffffffffffffffff5555fffff55555555fffffffffffffffffff555fffffffffffffffffffffffff5555fffffffffffffffffffffff
            fffffffffffffffffffffff5555ffffffffffffffff55555ffffffffffffffffffff55555ffffffff5555555fffffffffffffffff555ffffffffffffffffffffffffff5555ffffffffffffffffffffff
            ffffffffffffffffffffffff5555fffffffffffffff5555fffffffffffffffffffff5555fffffffffff555555ffffffffffffffff555ffffffffffffffffffffffffff5555ffffffffffffffffffffff
            ffffffffffffffffffffffff55555fffffffffffff5555fffffffffffffffffffff5555fffffffffffff555555fffffffffffffff555fffffffffffffffffffffffffff555ffffffffffffffffffffff
            fffffffffffffffffffffffff5555fffffffffffff5555fffffffffffffffffffff5555fffffffffffffff55555ffffffffffffff555fffffffffffffffffffffffffff555ffffffffffffffffffffff
            ffffffffffffffffffffffffff5555fffffffffff5555fffffffffffffffffffff5555fffffffffffffffff5555ffffffffffffff555fffffffffffffffffffffffffff555ffffffffffffffffffffff
            ffffffffffffffffffffffffff55555ffffffffff5555fffffffffffffffffffff5555ffffffffffffffffff5555fffffffffffff555fffffffffffffffffffffffffff555ffffffffffffffffffffff
            fffffffffffffffffffffffffff55555ffffffff5555ffffffffffffffffffffff555fffffffffffffffffff55555ffffffffffff555fffffffffffffffffffffffffff555ffffffffffffffffffffff
            ffffffffffffffffffffffffffff555555ffffff5555fffffffffffffffffffff5555ffffffffffffffffffff5555ffffffffffff555ffffffffffffffffffffffffff5555ffffffffffffffffffffff
            fffffffffffffffffffffffffffff55555ffffff555ffffffffffffffffffffff5555fffffffffffffffffffff5555fffffffffff555ffffffffffffffffffffffffff5555ffffffffffffffffffffff
            ffffffffffffffffffffffffffffff55555ffff5555fffffffffffffffffffff5555ffffffffffffffffffffff5555ffffffffff5555ffffffffffffffffffffffffff555fffffffffffffffffffffff
            fffffffffffffffffffffffffffffff55555fff5555fffffffffffffffffffff5555fffffffffffffffffffffff555ffffffffff5555ffffffffffffffffffffffffff555fffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff55555f5555ffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffff555ffffffffffffffffffffffffff5555fffffffffffffffffffffff
            fffffffffffffffffffffffffffffffff555555555ffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffff555fffffffffffffffffffffffff55555fffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffff5555555fffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffff555ffffffffffffffffffffffff55555ffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffff5555555ffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffff555fffffffffffffffffffffff55555fffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffff555555ffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffff555ffffffffffffffffffffff55555ffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffff555ffffffffffffffffffffffff555ffffffffff555ffffffffffffffffffffff5555fffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffff555fffffffffffffffffffffff5555ffffffffff555fffffffffffffffffffff5555ffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffff5555ffffffffffffffffffffff5555ffffffffff555ffffffffffffffffffff55555ffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffff5555ffffffffffffffffffffff555fffffffffff555fffffffffffffffffff55555fffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff555fffffffffffffffffffff5555fffffffffff5555fffffffffffffffff55555ffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffff5555ffffffffffffffffffff5555fffffffffff5555ffffffffffffffff55555fffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffff55555fffffffffffffffffff555fffffffffffff5555ffffffffffffff55555ffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffff5555ffffffffffffffffffffffff5555ffffffffffffffffff5555fffffffffffff55555fffffffffff555555fffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffff5555fffffffffffffffff5555ffffffffffffff55555fffffffff555555ffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffff55555fffffffffffffff5555ffffffffffffffff55555ffffff5555555fffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffff55555fffffffffffff55555fffffffffffffffff555555555555555fffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff555555555ffffff5555555ffffffffffffffffff5555555555555ffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff5555555555555555555fffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffff55555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffff5555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffff5555fffffffffffffffff555ffffffffffffffffffffffffffff555ffffffff555ffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffff
            fffffffffffffffffffff5555fffffffffffffffff5555fffffffffffffffffffffffffff555ffffffff555ffffffffffffffffffffffffffffffffffffffffff5555fffffffffffffffffffffffffff
            ffffffffffffffffffffff555ffffffffffffffff555555ffffffffffffffffffffffffff555ffffffff555fffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff
            ffffffffffffffffffffff5555fffffffffffffff555555ffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff
            ffffffffffffffffffffff5555ffffffffffffff55555555fffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff
            fffffffffffffffffffffff555ffffffffffffff555555555ffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff
            fffffffffffffffffffffff555ffffffffffffff555ff5555fffffffffffffffffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffff
            fffffffffffffffffffffff555ffffffffffffff555fff5555ffffffffffffffffffffff5555fffffffffffffffffffffff55555ffffffffffffffffffffffffff555fffffffffffffffffffffffffff
            fffffffffffffffffffffff555fffffffffffff5555fff5555ffffffffffffffffffffff555ffffffffffffffffffffffff555555fffffffffffffffffffffffff5555ffffffffffffffffffffffffff
            fffffffffffffffffffffff555fffffffffffff5555ffff555fffffffffffffffffffff5555fffffffffffffffffffffff55555555ffffffffffffffffffffffff5555ffffffffffffffffffffffffff
            fffffffffffffffffffffff5555fffffffffff5555fffff5555ffffffffffffffffffff5555ffffffffffffffffffffff555555555fffffffffffffffffffffffff555ffffffffffffffffffffffffff
            fffffffffffffffffffffff5555fffffffffff5555fffff5555fffffffffffffffffff5555ffffffffffffffffffff5555555ff5555ffffffffffffffffffffffff555ffffffffffffffffffffffffff
            ffffffffffffffffffffffff5555ffffffffff555fffffff5555ffffffffffffffffff5555ffffffffffffffffffff555555fff5555ffffffffffffffffffffffff5555fffffffffffffffffffffffff
            ffffffffffffffffffffffff5555fffffffff5555fffffff5555fffffffffffffffff5555fffffffffffffffffffff55555fffff5555fffffffffffffffffffffff5555fffffffffffffffffffffffff
            fffffffffffffffffffffffff5555ffffffff5555ffffffff5555ffffffffffffffff5555fffffffffffffffffffff55555fffff5555ffffffffffffffffffffffff555fffffffffffffffffffffffff
            fffffffffffffffffffffffff5555ffffffff555fffffffff55555fffffffffffffff555ffffffffffffffffffffff55555ffffff5555fffffffffffffffffffffff555fffffffffffffffffffffffff
            ffffffffffffffffffffffffff5555ffffff5555ffffffffff5555ffffffffffffff5555ffffffffffffffffffffff55555ffffff5555fffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffff555555ffff5555fffffffffff5555ffffffffffff55555ffffffffffff555fffffff5555ffffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffff555555fff555ffffffffffff5555fffffffffff55555fffffffffffff555fffffff55555fffffff5555ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffff555555f5555fffffffffffff5555fffffffff55555ffffffffffffff555fffffff55555ffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffff555555555fffffffffffff5555ffffffff55555fffffffffffffff555ffffffff5555ffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffff5555555fffffffffffffff5555ffff5555555ffffffffffffffff555ffffffff5555ffffffff5555fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffff55555ffffffffffffffff55555555555555ffffffffffffffffffffffffffff5555fffffffff555fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555fffffffffffffffffffffffffffff5555ffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555fffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff666666ffffff
            `)
        game.setGameOverEffect(true, effects.confetti)
        info.changeLifeBy(100000)
        for (let index = 0; index < 4; index++) {
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        }
    }
}
function scoreMoreThan30 () {
    if (info.score() >= 30) {
        scene.setBackgroundImage(img`
            888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffccccccccccccccccccccccccccccccccccccccccccccccccc
            88888888888888888888888888888888888888fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffccccccccccccccccccccccccccccccccccccccccccccccccc
            88888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffccccccccccccccccccccccccccccccccccccccccccccccccc
            88888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffccccccccccccccccccccccccccccccccccccccccccccccccc
            88888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffcccccccccccccccccccccccccccccccccccccccccccccccc
            88888888888888888888888888888888888888ffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffcccccccccccccccccccccccccccccccccccccccccccccccc
            8888888888888888888888888888888888888888fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffccccccccccccccccccccccccccccccccccccccccccccccc
            8888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffccccccccccccccccccccccccccccccccccccccccccccc
            8888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffcccccccccccccccccccccccccccccccccccccccccccc
            88888888888888888888888888888888888888888888888fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffcccccccccccccccccccccccccccccccccccccccccc
            8888888888888888888888888888888888888888888888888ffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffcccccccccccccccccccccccccccccccccccccc
            888888888888888888888888888888888888888888888888888fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffccccccccccccccccccccccccccccccccccccc
            888888888888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffccccccccccccccccccccccccccccccccccc
            88888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffccccccccccccccccccccccccccccc
            888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffffcccccccccccccccccccc
            88888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffffffffffcccccccccccccccccccc
            888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffffffffccccccccccccccccccc
            8888888888888888888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffccccccccccccccccccc
            88888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffccccccccccccccccccc
            888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffcccccccccccccccccc
            888888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffcccccccccccccccc
            8888888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffccccccccccccccc
            88888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffccccccccccccccc
            888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffcccccccccccc
            8888888888888888888888888888888888888888888888888888888888888888888888fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffcccccccccccc
            888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffcccccccccc
            888888888888888888888888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffcccccccc
            88888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffccccccc
            88888888888888888888888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffffffffccccc
            88888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffffcc
            88888888888888888888888888888888888888888888888888888888888888888fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffffff
            88888888888888888888888888888888888888888888888888888888888888888fffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffffff
            88888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaffff
            88888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            88888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            8888888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            888888888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            8888888888888888888888888888888888888888888888888888888888888888888888ffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            888888888888888888888888888888888888888888888888888888888888888888888888fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            888888888888888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            888888888888888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            8888888888888888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            8888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            88888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            ffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            ffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            6666ffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            66666ffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            6666666fffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            666666666ffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            6666666666ffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666ffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666ffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            666666666666fffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            6666666666666fffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666666fffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666666fffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            666666666666666ffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            6666666666666666ffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            6666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666666666ffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaaa
            666666666666666666fff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaa
            666666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaaa
            666666666666666666ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffaaaaaaaaaaaaaaaaaaaaaaaaaa
            6666666666666666666fff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaa
            6666666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaaa
            6666666666666666666ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666666666666fff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaaa
            66666666666666666666ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffaaaaaaaaaaaaaaaaaaaaaaa
            66666666666666666666ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaaa
            66666666666666666666ffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaa
            666666666666666666666ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffaaaaaaaaaaaaaaaaaaaa
            666666666666666666666ffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaaa
            6666666666666666666666ffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffaaaaaaaaaaaaaaaa
            66666666666666666666666fffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaaaaaaaa
            666666666666666666666666fffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffaaaaaaaaaaa
            6666666666666666666666666fffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffffaaaaaaaaa
            6666666666666666666666666666fffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffaaaaaaaa
            66666666666666666666666666666ffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffffffaaaaaa
            6666666666666666666666666666666fffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffa
            666666666666666666666666666666666fffffffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffff
            6666666666666666666666666666666666666666ffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff
            66666666666666666666666666666666666666666666ffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffff
            66666666666666666666666666666666666666666666666fffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            6666666666666666666666666666666666666666666666666666fffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            666666666666666666666666666666666666666666666666666666ffffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            666666666666666666666666666666666666666666666666666666666fffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            666666666666666666666666666666666666666666666666666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            fffffffff666666666666666666666666666666666666666666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            ffffffffff66666666666666666666666666666666666666666666666666666fffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            ffffffffffff6666666666666666666666666666666666666666666666666666fffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            9999999fffffff666666666666666666666666666666666666666666666666666ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            99999999fffffff666666666666666666666666666666666666666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            9999999999fffffff6666666666666666666666666666666666666666666666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            99999999999ffffffff66666666666666666666666666666666666666666666666fffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
            9999999999999ffffff666666666666666666666666666666666666666666666666fffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888
            99999999999999fffff6666666666666666666666666666666666666666666666666ffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888
            9999999999999999fff666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffff8888888888888888888888888888888888888888888888888888888888888
            9999999999999999fff66666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888
            9999999999999999fff66666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffff88888888888888888888888888888888888888888888888
            9999999999999999fff666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffffffffffffffff8888888888888888888888888888888888888888
            9999999999999999ffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffffff88888888888888888888888888888888888888
            9999999999999999ffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff88888888888888888888888888888888888
            99999999999999999fffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffff8888888888888888888888888888888
            99999999999999999ffffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff88888888888888888888888888888
            999999999999999999ffffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff88888888888888888888888888
            99999999999999999999ffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff88888888888888888888888
            99999999999999999999fffff66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666fffffffffff88888888888888888888
            999999999999999999999fffff6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffffffffffff888888
            999999999999999999999fffff666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666ffffffffffffff666666fffff8
            `)
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let zombie: Sprite = null
let bullet: Sprite = null
let myDart: Sprite = null
let man: Sprite = null
scene.setBackgroundColor(13)
man = sprites.create(img`
    ........................
    ...77777777.............
    ..7777777777............
    .777777777777...........
    .777777777777...........
    .7777777777777..........
    7bbbbbbbbbbbb7..........
    b777777777777b..........
    7eeedddbfdddd...........
    .eeddddbfddd..2.........
    ..eddddddddd.ff.........
    ...f77fffffffffffffff...
    ...f77fffffffffffffffff.
    ...fffff77f.f.ff........
    ..bbbbbffffff.fff.......
    ..bbbbbbb......fff......
    .bbb...bbb......ff......
    .bbb....bbb.............
    .eee....eee.............
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(man)
man.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(500, function () {
    zombie = sprites.create(img`
        ........................
        .......7777777..........
        ......777777777.........
        .....77f77777777........
        .....777f77fff77........
        .....77fff7f7f77........
        .....7777f7f7777........
        .....77777777777........
        .....77777777777........
        .....7777ff77777...77...
        ..7...777ff7777..7777...
        ..77...7777777...77.....
        ..77....777.....777.....
        ..777..77777..7777......
        ..7777777777.77777......
        ...77777777777777.......
        .......777777777........
        .......77777777.........
        .......7777777..........
        .......7777777..........
        ......77777777..........
        ......7777.7777.........
        .....777.....77.........
        ....7.........7.........
        `, SpriteKind.Enemy)
    zombie.setVelocity(-100, 100)
    zombie.setPosition(160, randint(0, 120))
    zombie.follow(man)
})
