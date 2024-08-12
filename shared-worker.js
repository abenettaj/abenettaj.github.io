/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shared-worker.js":
/*!******************************!*\
  !*** ./src/shared-worker.js ***!
  \******************************/
/***/ (() => {

eval("console.log(\"Shared Worker : Started\");\nvar ports = {};\nvar wsTopicSubcriptions = {};\nself.addEventListener(\"connect\", event => {\n  var port = event.ports[0];\n\n  // const socketUrl = \"http://localhost:8080/gs-guide-websocket\";\n\n  // const socket = new SockJS(socketUrl);\n  // const stompClient = Stomp.over(socket);\n\n  // stompClient.connect({}, () => {\n  //   console.log(\"Shared Worker : Connected successfully to WebSocket\");\n  //   port.postMessage({\n  //     command: \"CONNECTED\",\n  //   });\n  // });\n\n  port.addEventListener(\"message\", event => {\n    console.log(\"SharedWorker : event \", event);\n    switch (event.data.command) {\n      case \"START\":\n        if (!ports[event.data.id]) {\n          ports[event.data.id] = port;\n          console.log(`Shared Worker : Port with id [${event.data.id}] added successfully`);\n          Object.values(ports).forEach(port => port.postMessage({\n            command: \"MESSAGE\",\n            message: `Shared Worker : Port with id [${event.data.id}] added successfully`\n          }));\n        } else {\n          console.log(`Shared Worker : Port with id [${event.data.id}] already exists`);\n        }\n        // port.postMessage({\n        //   command: \"STARTED\",\n        // });\n        break;\n      // case \"SUBSCRIBE\":\n      //   event.data.topics.forEach(topic => {\n\n      //   })\n      //   if (!wsTopicSubcriptions[event.data.topic]) {\n      //     const stompClientSubscription = stompClient.subscribe(\n      //       event.data.topic,\n      //       function ({ body }) {\n      //         console.log(body);\n      //         Object.values(ports).forEach((port) =>\n      //           port.postMessage({ command: \"MESSAGE\", message: body })\n      //         );\n      //       }\n      //     );\n      //     wsTopicSubcriptions[event.data.topic] = stompClientSubscription;\n      //     console.log(\n      //       `Shared Worker : Subscribed successfully to topic [${event.data.topic}]`\n      //     );\n      //   } else {\n      //     console.log(\n      //       `Shared Worker : Already subscribed to topic [${event.data.topic}]`\n      //     );\n      //   }\n      //   break;\n      default:\n        break;\n    }\n  });\n  port.start();\n  port.postMessage({\n    command: \"CONNECTED\"\n  });\n});\n\n//# sourceURL=webpack://shared-worker/./src/shared-worker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/shared-worker.js"]();
/******/ 	
/******/ })()
;