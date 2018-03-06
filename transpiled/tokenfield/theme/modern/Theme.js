"use strict";

(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Theme": {
        "usage": "dynamic",
        "require": true
      },
      "tokenfield.theme.modern.Color": {
        "require": true
      },
      "tokenfield.theme.modern.Decoration": {
        "require": true
      },
      "tokenfield.theme.modern.Font": {
        "require": true
      },
      "tokenfield.theme.modern.Appearance": {
        "require": true
      },
      "qx.theme.icon.Tango": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);qx.Theme.define("tokenfield.theme.modern.Theme", {
    meta: {
      color: tokenfield.theme.modern.Color,
      decoration: tokenfield.theme.modern.Decoration,
      font: tokenfield.theme.modern.Font,
      appearance: tokenfield.theme.modern.Appearance,
      icon: qx.theme.icon.Tango
    }
  });
  tokenfield.theme.modern.Theme.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Theme.js.map