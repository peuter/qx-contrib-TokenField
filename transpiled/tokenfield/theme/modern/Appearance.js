'use strict';

(function () {
  var $$dbClassInfo = {
    'dependsOn': {
      'qx.Theme': {
        'usage': 'dynamic',
        'require': true
      },
      'qx.theme.modern.Appearance': {
        'require': true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("tokenfield.theme.modern.Appearance", {
    extend: qx.theme.modern.Appearance,
    appearances: {
      'token': 'combobox',
      'tokenitem': {
        include: 'listitem',
        style: function style(states) {
          return {
            decorator: 'group',
            textColor: states.hovered ? '#314a6e' : states.head ? '#FF0000' : '#000000',
            height: 18,
            padding: [1, 6, 1, 6],
            margin: 0,
            icon: states.close ? "decoration/window/close-active.png" : "decoration/window/close-inactive.png"
          };
        }
      }
    }
  });
  tokenfield.theme.modern.Appearance.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Appearance.js.map