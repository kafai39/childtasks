
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

function gameOver(deltaTime)
{
    renderBackgroundSpeedLines(deltaTime);

    if (aw.mouseLeftButtonJustPressed)
    {
        aw.clearAllEntities();
        aw.mouseLeftButtonJustPressed = false;
        aw.ctx.shadowBlur = 20;
        aw.state = mainMenu;
        aw.statePost = undefined;

        aw.playNote("a", 4, 0.05, 0.0);
        aw.playNote("b", 4, 0.05, 0.05);
    }

    updateCameraShake(deltaTime);
    updateLevelScalePop(deltaTime);
    setLevelCamera();
    var returnScore = parseInt(levelIdx) + 1;

    window.location.href="../child.html?user=" + params.user + "&score=" + returnScore + "&mode=gameoverreturn";

    //console.log(levelIdx);

}