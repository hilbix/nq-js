# NQ.js

JavaScript library for the `NQ` (read: eNQueue) framework.  It pollutes the global scope with the `NQ` name.

documentation: (full)[/hilbix/nq-doc.git] and (javascript interface)[../../../nq-doc/blob/master/javascript.md]

Current status:

- Modern browsers: under development
- Not old browser aware
- Not Node aware
- Not AMD aware
- Not Greasemonkey aware

## Howto

```
git clone -b stable https://github.com/hilbix/nq-js.git
```

You find `nq.js` in `nq-js/nq.js`.

In future, minified version might be available under `ns-js/nq.min.js` and `ns-js/nq.min.map`.

Web:

```
<script src="nq-js/nq.js"></script>
```

Example:

```
NQ = new NQ().backend({url:'backend.php'});

logout = NQ('send',{login:false});

logout(function(success){alert('logged out')});
```

## About

- This is the a JavaScript client of `NQ`.

- `NQ` is a middleware for easy message communication.

- The communication can be done over any transport channel you can wrap for this purpose

- Standard wrappers for AJAX/REST/XMLHttlRequest and `window.postMessage` are included

- There is no support for normal AJAX/REST/XMLHttpRequest, do this as usual.

- There is no support for normal web sockets.  Do this as usual.

- This is a pure implementation, that is, it does not have any dependencies on other packages

- Nevertheless, this implementation tries to stay compatible to common things like jquery, Backbone, Underscore and Primises

