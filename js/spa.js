spa = (function () {
    var initModule = function ($container) {
        spa_shell.initModule($container)
        spa_chat.initModule(jQuery('.spa-shell-chat'))
    }

    return {
        initModule: initModule
    }
}());

jQuery(document).ready(function () {
    spa.initModule(jQuery('#spa'));
});