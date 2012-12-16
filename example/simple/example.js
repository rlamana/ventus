/**
 * Ventus example
 * Copyright © 2012 Ramón Lamana
 */
require(['ventus', '$', 'core/promise'], 
    function(Ventus, $, Promise) {
        var wm = new Ventus.WindowManager();

        window.wm = wm; // For debugging reasons

        var terminalWin = wm.createWindow.fromQuery('.terminal-app', {
            title: 'Terminal',
            classname: 'terminal-window',
            width: 600,
            height: 300,
            x: 50,
            y: 60
        });

        terminalWin.signals.on('click', function(win){
            terminus.display.focus();
        });

        var todoWin = wm.createWindow.fromQuery('.todo-app', {
            title: 'Todo',
            width: 330,
            height: 400,
            x: 670,
            y: 60
        });

        var playerWin = wm.createWindow.fromQuery('.player-app', {
            title: 'Video Player',
            classname: 'player-window',
            width: 635,
            height: 289,
            x: 490,
            y: 320,
            resizable: false
        });

        var aboutWin = wm.createWindow.fromQuery('.about-app', {
            title: 'About Ventus',
            width: 250,
            height: 280,
            x: 140,
            y: 380
        });

        // Hide loader when loaded
        var loader = $("#loading-screen");
        setTimeout(function() {
            loader.addClass('hide');
            loader.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
                loader.hide();

                // Open windows
                terminalWin.open();
                setTimeout(function(){todoWin.open();}, 200); // For look & feel reasons
                setTimeout(function(){aboutWin.open();}, 400);
                setTimeout(function(){playerWin.open()}, 600);
                
            });
        }, 2000);

        // Exposé test button
        $(".expose-button").click(function(){
            wm.mode = 'expose';
            return false;
        });
    });