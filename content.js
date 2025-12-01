document.querySelector("title").textContent = ""
window.addEventListener("load", () => {
    // console.log("Loaded!!")
    // let previewRound = false;
    // let gap = "calc(600/16*1rem)";
    // const vidBG = document.createElement("video")
    // vidBG.innerHTML = "<source src='https://www.geoguessr.com/_next/static/video/background-gold-feb9c2f25c556a1de47602b1ff103eb1.mp4' type='video/mp4'>"
    // vidBG.autoplay = true
    // vidBG.loop = true
    // vidBG.muted = true
    // vidBG.style.position = "fixed"
    // vidBG.style.width = "100%"
    // vidBG.style.height = "100%"
    // vidBG.style.objectFit = "cover"
    // vidBG.style.zIndex = "-1"
    // const ele = document.getElementById("__next")
    // ele.prepend(vidBG)
    setInterval(() => {
        document.querySelector("title").textContent = ""
        const btn = document.querySelector(".button_button__aR6_e")
        const plrA = document.querySelector(".cam-hud_camAndBadge__G63kI")
        const plrB = document.querySelector(".cam-hud_reverse__W4rh6")
        if (plrA && plrB) {
            const countdown = document.querySelector(".views_roundStartCount__6ouik")
            const plrView = document.querySelector(".views_playerViews__Pj_6U")

            if (plrView) {
                plrView.style.transform = "translateY(-5vh)"
            }
            plrA.style.transition = ".5s ease-in-out"
            plrB.style.transition = ".5s ease-in-out"
            if (countdown) {
                plrA.style.transform = "translate(-10vh, 40vh) scale(1.5)"
                plrB.style.transform = "translate(10vh, 40vh) scale(1.5)"
                const premap = document.querySelector(".duels-panorama_panorama__fLR_P")
                const countbox = document.querySelector(".views_bottom__GtDy9")
                countbox.style.transition = ".5s"
                countdown.style.transition = ".5s"
                countbox.style.transform = "translateY(-50vh) scale(1.5)"
                countdown.style.fontSize = "5rem"
                premap.style.transition = ".5s"
                premap.style.opacity = "0"
            }
            else if (!btn || (btn.textContent.toLowerCase() !== ("PREVIEW NEXT ROUND").toLowerCase() && btn.textContent.toLowerCase() !== ("View Summary").toLowerCase())) {
                if (btn && btn.textContent.toLowerCase() === ("Start Round").toLowerCase()) {
                    // document.querySelector(".preview-round_guessMapContainer__77Lpq").style.visibility = "hidden"
                    plrA.style.transform = "translate(-80vh, 40vh)"
                    plrB.style.transform = "translate(80vh, 40vh)"
                }
                else {
                    plrA.style.transform = "translate(-23vh, 75vh)"
                    plrB.style.transform = "translate(23vh, 75vh)"
                }
            }
            else {
                plrA.style.transform = "translate(-23vh, 10vh)"
                plrB.style.transform = "translate(23vh, 10vh)"
                const mapDivDiv = document.querySelector(".result-map_map__z_j5r").querySelector("div")
                mapDivDiv.style.borderRadius = ".25rem"
                mapDivDiv.style.outline = `unset`
                mapDivDiv.style.border = "unset"
                // gap = "calc(16*1rem)"
            }
            const time = document.querySelector(".views_roundInfo__jvIdn")
            const cttime = document.querySelector(".clock-timer_timer__so2Eq")
            if (time) {
                time.style.transform = "translateY(65vh) scale(1)"
                time.style.zIndex = "10"
            }
            const ScrA = document.querySelector(".player-view_leftPanorama__z_xhW")
            const ScrB = document.querySelector(".player-view_rightPanorama__ltpuX")
            if (ScrA && ScrB) {
                const LockA = ScrA.querySelector(".player-view_guessBanner__F0uOv")
                const LockB = ScrB.querySelector(".player-view_guessBanner__F0uOv")
                const Team = document.querySelector(".cam-hud_playerSelectorContainer__8qApj")
                const map = document.querySelector(".spectate-map_mapWrapper__PDl2c")
                const mapDiv = map.querySelector("div")
                gap = "calc(700/16*1rem)"
                // document.querySelector(".spectate-map_buttonWrapper__seGNr").style.visibility = "hidden"
                // document.querySelector(".views_bg__jJHHs").style.background = "none"

                function Locked(pos, color) {
                    map.classList.add("spectate-map_mapVisible__KTRt1")
                    map.style.backdropFilter = "none"
                    mapDiv.classList.add("spectate-map_mapVisible__KTRt1")
                    // mapDiv.style.transform = `translate(${pos}vh, ${!Team ? -17 : -3}vh)`
                    mapDiv.style.marginBottom = ".5vh"
                    mapDiv.style.transition = ".5s"
                    document.querySelector(".views_round__Es2z5").style.top = '0'
                    /* if (!Team) {
                        mapDiv.style.width = "50vh"
                        mapDiv.style.height = `68.3vh`
                    }
                    else {
                        mapDiv.style.width = "90vh"
                        mapDiv.style.height = `30vh`
                    } */
                    const mapDivDiv = mapDiv.querySelector("div").querySelector("div")
                    mapDivDiv.style.transition = ".5s ease-in-out"
                    mapDivDiv.style.borderRadius = "0.75rem"
                    mapDivDiv.style.outline = `.25rem solid ${color}`
                    mapDivDiv.style.border = ".25rem solid var(--ds-color-black)"
                    cttime.style.transition = ".5s ease-in-out"
                    cttime.style.background = "#ffc628"
                    cttime.style.outline = 'rgb(255, 198, 40) 2px solid'
                    cttime.style.color = "black"
                    cttime.style.fontSize = "2rem"
                    cttime.style.fontWeight = "900"
                    // cttime.style.fontSiize = "3rem"
                    // cttime.textContent = cttime.textContent.slice(0, 1)
                    // time.querySelector(".clock-timer_timerSvg__5Vip2").querySelector("path").style.stroke = "rgb(250, 200, 0)"
                    time.style.transition = ".5s"
                    // time.style.transform = `translateY(${!Team ? 65 : 47}vh) scale(1.5)`
                    time.querySelector("path").classList.add("isGuessed")
                }

                ScrA.style.transition = ".5s ease-in-out"
                ScrB.style.transition = ".5s ease-in-out"

                if (!Team) {
                    if (LockA && !LockB) {
                        ScrA.style.scale = '0.2'
                        ScrA.style.transform = "translateX(-20vh)"
                        ScrB.style.scale = '1.4'
                        ScrB.style.transform = "translateX(-12vh)"
                        ScrB.querySelector(".player-view_panorama__yC4u4").style.outline = ".25rem solid #ffc628"
                        ScrB.querySelector(".player-view_panorama__yC4u4").style.transition = ".5s"
                        Locked(-61, "#00a2fe")
                        time.style.transform = `translateY(65vh) scale(1.5)`
                        mapDiv.style.width = "50vh"
                        mapDiv.style.height = `68.3vh`
                        mapDiv.style.transform = `translate(${-61}vh, ${-17}vh)`
                    }
                    else if (LockB && !LockA) {
                        ScrB.style.scale = '0.2'
                        ScrB.style.transform = "translateX(20vh)"
                        ScrA.style.scale = '1.4'
                        ScrA.style.transform = "translateX(12vh)"
                        ScrA.querySelector(".player-view_panorama__yC4u4").style.outline = ".25rem solid #ffc628"
                        ScrA.querySelector(".player-view_panorama__yC4u4").style.transition = ".5s"
                        time.style.transform = `translateY(65vh) scale(1.5)`
                        mapDiv.style.width = "50vh"
                        mapDiv.style.height = `68.3vh`
                        Locked(60, "#e94555")
                        mapDiv.style.transform = `translate(${60}vh, ${-17}vh)`
                    }
                }
                else {
                    const Blue = document.querySelector(".cam-hud_playerSelectors__OLPdo").querySelectorAll(".cam-hud_pinIcon__t8rhY").length
                    const Red = document.querySelector(".cam-hud_right__e6MK8").querySelectorAll(".cam-hud_pinIcon__t8rhY").length
                    // console.log(`${Blue}:${LockA} - ${Red}:${LockB}`)
                    if (LockA) {
                        ScrA.style.scale = '0.2'
                        ScrA.style.transform = "translateX(-20vh)"
                        ScrB.style.scale = '1.4'
                        ScrB.style.transform = "translateX(-12vh)"
                        ScrB.querySelector(".player-view_panorama__yC4u4").style.outline = ".25rem solid #ffc628"
                        ScrB.querySelector(".player-view_panorama__yC4u4").style.transition = ".5s"
                        Locked(-61, "#00a2fe")
                        time.style.transform = `translateY(65vh) scale(1.5)`
                        mapDiv.style.width = "50vh"
                        mapDiv.style.height = `68.3vh`
                        mapDiv.style.transform = `translate(${-61}vh, ${-17}vh)`
                    }
                    else if (LockB) {
                        ScrB.style.scale = '0.2'
                        ScrB.style.transform = "translateX(20vh)"
                        ScrA.style.scale = '1.4'
                        ScrA.style.transform = "translateX(12vh)"
                        ScrA.querySelector(".player-view_panorama__yC4u4").style.outline = ".25rem solid #ffc628"
                        ScrA.querySelector(".player-view_panorama__yC4u4").style.transition = ".5s"
                        Locked(60, "#e94555")
                        time.style.transform = `translateY(65vh) scale(1.5)`
                        mapDiv.style.width = "50vh"
                        mapDiv.style.height = `68.3vh`
                        mapDiv.style.transform = `translate(${60}vh, ${-17}vh)`
                    }
                    else if (Blue >= 1 || Red >= 1) {
                        ScrA.style.transform = "translate(0, -10vh)"
                        ScrB.style.transform = "translate(0,-10vh)"
                        ScrA.style.scale = '1'
                        ScrB.style.scale = '1'
                        Locked(0, "#97e851")
                        time.style.transform = `translateY(47vh) scale(1.5)`
                        mapDiv.style.width = "90vh"
                        mapDiv.style.height = `30vh`
                        mapDiv.style.transform = `translate(${0}vh, ${-3}vh)`
                    }
                }
            }
        }
    }, 10);
})