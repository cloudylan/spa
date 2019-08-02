spa_chat = (function () {
    var configMap = {
            main_html: String() + '<div style="padding:lem; color:#fff">Say Hello to Chat.</div>',
            setableMap: {}
        },
        stateMap = {
            $container: null
        },
        jqueryMap = {},
        setJqueryMap, configModule, initModule;

    setJqueryMap = function(){
        var $container = stateMap.$container;
        jqueryMap = {$container: $container};
    }

    configModule = function(){
        return true;
    }

    initModule = function($container)
    {
        $container.html(configMap.main_html);
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    }
    return {
        initModule: initModule
    };
   
}());