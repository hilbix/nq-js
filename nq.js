// eNQueue pure JavaScript, no dependencies
// (drawback: does some things redundantly with other libraries)
//
// Needs polyfills on old browsers.
//
// This Works is placed under the terms of the Copyright Less License,
// see file COPYRIGHT.CLL.  USE AT OWN RISK, ABSOLUTELY NO WARRANTY.
//
// Read: This is free as in free beer, free speech and freely born baby.

(function(window, nq) { window.NQ = nq(window); }
}(this, function(window, undefined) {

'use strict';

var
  orig = window.NQ,
  version  = '0.0.0',
  nqprotocol = '1';

// `NQ.setup([context], url, settings, success, error)`
// `NQ([context], req, send, settings, success, error)`
//
// `new NQ([context], url, settings, success, error)`
// `NQ.req([context], req, send, settings, success, fail)`

  NQ = function(context, url, settings, success, error)
    {
    },

NQ.prototype =
  {
    version:  jsversion,
    protocol: nqprotocol,
    constructor: NQ,
  }

// throw new Error( msg );
// hasOwn = ({}).hasOwnProperty,

}));

