(function() {
    'use strict';

    angular
        .module('gfl.textAvatar')
        .factory('GflTextAvatarService', GflTextAvatarService);

    function GflTextAvatarService() {
        var colors = [];
        colors = colors.concat(['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5']);
        colors = colors.concat(['#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50']);
        colors = colors.concat(['#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800']);
        colors = colors.concat(['#FF5722', '#795548', '#9E9E9E', '#607D8B']);
        colors = colors.concat(['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5']);
        colors = colors.concat(['#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50']);

        return {
            getBgColor: getBgColor,
            getInitials: getInitials
        };

        function getBgColor(text) {
            return colors[text.charCodeAt(0) - 65];
        }

        function getInitials(text) {
            text.replace(/[^a-zA-Z- ]/g, '');
            var texts = text.split(' ');
            var initials = texts.length > 1 ? (texts[0].charAt(0) + texts[1].charAt(0)) : texts[0].charAt(0);

            return initials.toUpperCase();
        }
    }
})();
