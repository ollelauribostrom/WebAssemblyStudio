/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export shallowCompare */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FileType; });
/* harmony export (immutable) */ __webpack_exports__["k"] = isBinaryFileType;
/* harmony export (immutable) */ __webpack_exports__["l"] = languageForFileType;
/* harmony export (immutable) */ __webpack_exports__["n"] = nameForFileType;
/* harmony export (immutable) */ __webpack_exports__["h"] = extensionForFileType;
/* harmony export (immutable) */ __webpack_exports__["i"] = filetypeForExtension;
/* harmony export (immutable) */ __webpack_exports__["m"] = mimeTypeForFileType;
/* harmony export (immutable) */ __webpack_exports__["j"] = getIconForFileType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_monaco_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_minimatch__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_minimatch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_minimatch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(11);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */




function shallowCompare(a, b) {
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
var FileType;
(function (FileType) {
    FileType["JavaScript"] = "javascript";
    FileType["TypeScript"] = "typescript";
    FileType["HTML"] = "html";
    FileType["CSS"] = "css";
    FileType["C"] = "c";
    FileType["Cpp"] = "cpp";
    FileType["Rust"] = "rust";
    FileType["Wat"] = "wat";
    FileType["Wasm"] = "wasm";
    FileType["Directory"] = "directory";
    FileType["Log"] = "log";
    FileType["x86"] = "x86";
    FileType["Markdown"] = "markdown";
    FileType["Cretonne"] = "cretonne";
    FileType["JSON"] = "json";
    FileType["Unknown"] = "unknown";
})(FileType || (FileType = {}));
function isBinaryFileType(type) {
    switch (type) {
        case FileType.Wasm:
            return true;
        default:
            return false;
    }
}
function languageForFileType(type) {
    if (type === FileType.HTML) {
        return "html";
    }
    else if (type === FileType.CSS) {
        return "css";
    }
    else if (type === FileType.JavaScript) {
        return "javascript";
    }
    else if (type === FileType.TypeScript) {
        return "typescript";
    }
    else if (type === FileType.C || type === FileType.Cpp) {
        return "cpp";
    }
    else if (type === FileType.Rust) {
        return "rust";
    }
    else if (type === FileType.Wat || type === FileType.Wasm) {
        return "wat";
    }
    else if (type === FileType.Log) {
        return "log";
    }
    else if (type === FileType.x86) {
        return "x86";
    }
    else if (type === FileType.Markdown) {
        return "markdown";
    }
    else if (type === FileType.Cretonne) {
        return "cton";
    }
    else if (type === FileType.JSON) {
        return "json";
    }
    return "";
}
function nameForFileType(type) {
    if (type === FileType.HTML) {
        return "HTML";
    }
    else if (type === FileType.CSS) {
        return "CSS";
    }
    else if (type === FileType.JavaScript) {
        return "JavaScript";
    }
    else if (type === FileType.TypeScript) {
        return "TypeScript";
    }
    else if (type === FileType.C) {
        return "C";
    }
    else if (type === FileType.Cpp) {
        return "C++";
    }
    else if (type === FileType.Wat) {
        return "WebAssembly Text";
    }
    else if (type === FileType.Wasm) {
        return "WebAssembly";
    }
    else if (type === FileType.Markdown) {
        return "Markdown";
    }
    else if (type === FileType.Rust) {
        return "Rust";
    }
    else if (type === FileType.Cretonne) {
        return "Cretonne";
    }
    else if (type === FileType.JSON) {
        return "JSON";
    }
    return "";
}
function extensionForFileType(type) {
    if (type === FileType.HTML) {
        return "html";
    }
    else if (type === FileType.CSS) {
        return "css";
    }
    else if (type === FileType.JavaScript) {
        return "js";
    }
    else if (type === FileType.TypeScript) {
        return "ts";
    }
    else if (type === FileType.C) {
        return "c";
    }
    else if (type === FileType.Cpp) {
        return "cpp";
    }
    else if (type === FileType.Wat) {
        return "wat";
    }
    else if (type === FileType.Wasm) {
        return "wasm";
    }
    else if (type === FileType.Markdown) {
        return "md";
    }
    else if (type === FileType.Rust) {
        return "rs";
    }
    else if (type === FileType.Cretonne) {
        return "cton";
    }
    else if (type === FileType.JSON) {
        return "json";
    }
    return "";
}
function filetypeForExtension(extension) {
    if (extension === "html") {
        return FileType.HTML;
    }
    else if (extension === "css") {
        return FileType.CSS;
    }
    else if (extension === "js") {
        return FileType.JavaScript;
    }
    else if (extension === "ts") {
        return FileType.TypeScript;
    }
    else if (extension === "c") {
        return FileType.C;
    }
    else if (extension === "cpp") {
        return FileType.Cpp;
    }
    else if (extension === "wat") {
        return FileType.Wat;
    }
    else if (extension === "wasm") {
        return FileType.Wasm;
    }
    else if (extension === "md") {
        return FileType.Markdown;
    }
    else if (extension === "rs") {
        return FileType.Rust;
    }
    else if (extension === "cton") {
        return FileType.Cretonne;
    }
    else if (extension === "json" || extension === "map") {
        return FileType.JSON;
    }
    return null;
}
function mimeTypeForFileType(type) {
    if (type === FileType.HTML) {
        return "text/html";
    }
    else if (type === FileType.JavaScript) {
        return "application/javascript";
    }
    else if (type === FileType.Wasm) {
        return "application/wasm";
    }
    else if (type === FileType.JSON) {
        return "application/json";
    }
    return "";
}
function getIconForFileType(fileType) {
    if (fileType === FileType.JavaScript) {
        return "javascript-lang-file-icon";
    }
    else if (fileType === FileType.TypeScript) {
        return "typescript-lang-file-icon";
    }
    else if (fileType === FileType.C) {
        return "c-lang-file-icon";
    }
    else if (fileType === FileType.Cpp) {
        return "cpp-lang-file-icon";
    }
    else if (fileType === FileType.Rust) {
        return "rust-lang-file-icon";
    }
    else if (fileType === FileType.Markdown) {
        return "markdown-lang-file-icon";
    }
    else if (fileType === FileType.HTML) {
        return "html-lang-file-icon";
    }
    else if (fileType === FileType.CSS) {
        return "css-lang-file-icon";
    }
    else if (fileType === FileType.Directory) {
        return "folder-icon";
    }
    else if (fileType === FileType.JSON) {
        return "json-lang-file-icon";
    }
    else if (fileType === FileType.Wasm) {
        return "wasm-lang-file-icon";
    }
    else if (fileType === FileType.Wat) {
        return "wat-lang-file-icon";
    }
    return "txt-ext-file-icon";
}
class EventDispatcher {
    constructor(name) {
        this.callbacks = [];
        this.name = name;
    }
    register(callback) {
        if (this.callbacks.indexOf(callback) >= 0) {
            return;
        }
        this.callbacks.push(callback);
    }
    unregister(callback) {
        const i = this.callbacks.indexOf(callback);
        if (i < 0) {
            throw new Error("Unknown callback.");
        }
        this.callbacks.splice(i, 1);
    }
    dispatch(target) {
        // console.log("Dispatching " + this.name);
        this.callbacks.forEach(callback => {
            callback(target);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = EventDispatcher;

function monacoSeverityToString(severity) {
    switch (severity) {
        case monaco.Severity.Info: return "info";
        case monaco.Severity.Warning: return "warning";
        case monaco.Severity.Error: return "error";
        case monaco.Severity.Ignore: return "ignore";
    }
}
let nextKey = 0;
function getNextKey() {
    return nextKey++;
}
class Problem {
    constructor(file, description, severity, marker) {
        this.file = file;
        this.description = description;
        this.severity = severity;
        this.marker = marker;
        this.key = String(getNextKey());
    }
    static fromMarker(file, marker) {
        return new Problem(file, `${marker.message} (${marker.startLineNumber}, ${marker.startColumn})`, monacoSeverityToString(marker.severity), marker);
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = Problem;

class File {
    constructor(name, type) {
        /**
         * True if the buffer is out of sync with the data.
         */
        this.isDirty = false;
        this.isBufferReadOnly = false;
        /**
         * True if the file is temporary. Transient files are usually not serialized to a
         * backing store.
         */
        this.isTransient = false;
        this.onDidChangeData = new EventDispatcher("File Data Change");
        this.onDidChangeBuffer = new EventDispatcher("File Buffer Change");
        this.onDidChangeProblems = new EventDispatcher("File Problems Change");
        this.key = String(getNextKey());
        this.problems = [];
        this.name = name;
        this.type = type;
        this.data = null;
        if (isBinaryFileType(type)) {
            this.bufferType = FileType.Unknown;
            this.buffer = monaco.editor.createModel("");
        }
        else {
            this.bufferType = type;
            this.buffer = monaco.editor.createModel(this.data, languageForFileType(type));
        }
        this.buffer.updateOptions({ tabSize: 2, insertSpaces: true });
        this.buffer.onDidChangeContent((e) => {
            // isFlush is only true for buffer.setValue() calls and the isDirty logic is handled at those
            // call sites, here we only care for user edits.
            if (e.isFlush) {
                return;
            }
            this.isDirty = true;
            this.notifyDidChangeBuffer();
            monaco.editor.setModelMarkers(this.buffer, "compiler", []);
        });
        this.parent = null;
    }
    notifyDidChangeBuffer() {
        let file = this;
        while (file) {
            file.onDidChangeBuffer.dispatch();
            file = file.parent;
        }
    }
    notifyDidChangeData() {
        let file = this;
        while (file) {
            file.onDidChangeData.dispatch();
            file = file.parent;
        }
    }
    async ensureBufferIsLoaded() {
        if (this.bufferType !== FileType.Unknown) {
            return;
        }
        this.updateBuffer();
    }
    async updateBuffer() {
        if (this.type === FileType.Wasm) {
            const result = await __WEBPACK_IMPORTED_MODULE_3__service__["a" /* Service */].disassembleWasm(this.data);
            this.buffer.setValue(result);
            this.isDirty = false;
            this.bufferType = FileType.Wat;
            this.notifyDidChangeBuffer();
            monaco.editor.setModelLanguage(this.buffer, languageForFileType(FileType.Wat));
            this.description = "This .wasm file is editable as a .wat file, and is automatically reassembled to .wasm when saved.";
            return;
        }
        else {
            this.buffer.setValue(this.data);
            this.isDirty = false;
            this.notifyDidChangeBuffer();
        }
    }
    setProblems(problems) {
        this.problems = problems;
        let file = this;
        while (file) {
            file.onDidChangeProblems.dispatch();
            file = file.parent;
        }
    }
    async getEmitOutput() {
        const model = this.buffer;
        if (this.type !== FileType.TypeScript) {
            return Promise.resolve("");
        }
        const worker = await monaco.languages.typescript.getTypeScriptWorker();
        const client = await worker(model.uri);
        return client.getEmitOutput(model.uri.toString());
    }
    setData(data) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* assert */])(data != null);
        this.data = data;
        this.notifyDidChangeData();
        this.updateBuffer();
    }
    getData() {
        if (this.isDirty && !this.isBufferReadOnly) {
            const project = this.getProject();
            if (project) {
                project.onDirtyFileUsed.dispatch(this);
            }
        }
        return this.data;
    }
    getProject() {
        let parent = this.parent;
        if (parent) {
            while (parent.parent) {
                parent = parent.parent;
            }
            if (parent instanceof Project) {
                return parent;
            }
        }
        return null;
    }
    getDepth() {
        let depth = 0;
        let parent = this.parent;
        while (parent) {
            parent = parent.parent;
            depth++;
        }
        return depth;
    }
    getPath() {
        const path = [];
        let parent = this.parent;
        if (!parent) {
            return "";
        }
        while (parent.parent) {
            path.unshift(parent.name);
            parent = parent.parent;
        }
        path.push(this.name);
        return path.join("/");
    }
    async save() {
        if (!this.isDirty) {
            return;
        }
        if (this.bufferType !== this.type) {
            if (this.bufferType === FileType.Wat && this.type === FileType.Wasm) {
                try {
                    const data = await __WEBPACK_IMPORTED_MODULE_3__service__["a" /* Service */].assembleWat(this.buffer.getValue());
                    this.isDirty = false;
                    this.data = data;
                }
                catch (e) {
                    alert(e);
                }
            }
        }
        else {
            this.data = this.buffer.getValue();
            this.isDirty = false;
        }
        this.notifyDidChangeData();
    }
    toString() {
        return "File [" + this.name + "]";
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = File;

class Directory extends File {
    constructor(name) {
        super(name, FileType.Directory);
        this.children = [];
        this.isOpen = true;
        this.onDidChangeChildren = new EventDispatcher("Directory Changed ");
    }
    notifyDidChangeChildren() {
        let directory = this;
        while (directory) {
            directory.onDidChangeChildren.dispatch();
            directory = directory.parent;
        }
    }
    forEachFile(fn, recurse = false) {
        if (recurse) {
            this.children.forEach((file) => {
                if (file instanceof Directory) {
                    file.forEachFile(fn, recurse);
                }
                fn(file);
            });
        }
        else {
            this.children.forEach(fn);
        }
    }
    mapEachFile(fn, excludeTransientFiles = false) {
        return this.children.filter((file) => {
            if (excludeTransientFiles && file.isTransient) {
                return false;
            }
            return true;
        }).map(fn);
    }
    addFile(file) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* assert */])(file.parent === null);
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* assert */])(!this.getImmediateChild(file.name));
        this.children.push(file);
        file.parent = this;
        this.notifyDidChangeChildren();
    }
    removeFile(file) {
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* assert */])(file.parent === this);
        const i = this.children.indexOf(file);
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* assert */])(i >= 0);
        this.children.splice(i, 1);
        file.parent = null;
        this.notifyDidChangeChildren();
    }
    newDirectory(path) {
        if (typeof path === "string") {
            path = path.split("/");
        }
        let directory = this;
        while (path.length) {
            const name = path.shift();
            let file = directory.getImmediateChild(name);
            if (file) {
                directory = file;
            }
            else {
                file = new Directory(name);
                directory.addFile(file);
                directory = file;
            }
        }
        Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* assert */])(directory instanceof Directory);
        return directory;
    }
    newFile(path, type, isTransient = false) {
        if (typeof path === "string") {
            path = path.split("/");
        }
        let directory = this;
        if (path.length > 1) {
            directory = this.newDirectory(path.slice(0, path.length - 1));
        }
        const name = path[path.length - 1];
        let file = directory.getFile(name);
        if (file) {
            Object(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* assert */])(file.type === type);
        }
        else {
            file = new File(path[path.length - 1], type);
            directory.addFile(file);
        }
        file.isTransient = isTransient;
        return file;
    }
    getImmediateChild(name) {
        return this.children.find((file) => {
            return file.name === name;
        });
    }
    getFile(path) {
        if (typeof path === "string") {
            path = path.split("/");
        }
        const file = this.getImmediateChild(path[0]);
        if (path.length > 1) {
            if (file && file.type === FileType.Directory) {
                return file.getFile(path.slice(1));
            }
            else {
                return null;
            }
        }
        return file;
    }
    list() {
        const list = [];
        function recurse(prefix, x) {
            if (prefix) {
                prefix += "/";
            }
            x.forEachFile(file => {
                const path = prefix + file.name;
                if (file instanceof Directory) {
                    recurse(path, file);
                }
                else {
                    list.push(path);
                }
            });
        }
        recurse("", this);
        return list;
    }
    glob(pattern) {
        const mm = new __WEBPACK_IMPORTED_MODULE_2_minimatch__["Minimatch"](pattern);
        return this.list().filter(path => mm.match(path));
    }
    globFiles(pattern) {
        return this.glob(pattern).map(path => this.getFile(path));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Directory;

class Project extends Directory {
    constructor() {
        super("Project");
        this.onDidChangeStatus = new EventDispatcher("Status Change");
        this.onChange = new EventDispatcher("Project Change");
        this.onDirtyFileUsed = new EventDispatcher("Dirty File Used");
        this.status = "";
    }
    setStatus(status) {
        this.status = status;
        this.onDidChangeStatus.dispatch();
    }
    clearStatus() {
        this.setStatus("");
    }
}
/* harmony export (immutable) */ __webpack_exports__["g"] = Project;

const modelRefMap = new WeakMap();
class ModelRef {
    constructor(obj) {
        this.obj = obj;
    }
    getModel() {
        return this.obj;
    }
    static getRef(obj) {
        if (modelRefMap.has(obj)) {
            return modelRefMap.get(obj);
        }
        const ref = new ModelRef(obj);
        modelRefMap.set(obj, ref);
        return ref;
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = ModelRef;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["i"] = toAddress;
/* harmony export (immutable) */ __webpack_exports__["h"] = padRight;
/* harmony export (immutable) */ __webpack_exports__["g"] = padLeft;
/* harmony export (immutable) */ __webpack_exports__["e"] = isBranch;
/* harmony export (immutable) */ __webpack_exports__["d"] = decodeRestrictedBase64ToBytes;
/* harmony export (immutable) */ __webpack_exports__["f"] = layout;
/* harmony export (immutable) */ __webpack_exports__["a"] = assert;
/* harmony export (immutable) */ __webpack_exports__["b"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["c"] = contextify;
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function toAddress(n) {
    let s = n.toString(16);
    while (s.length < 6) {
        s = "0" + s;
    }
    return "0x" + s;
}
function padRight(s, n, c) {
    s = String(s);
    while (s.length < n) {
        s = s + c;
    }
    return s;
}
function padLeft(s, n, c) {
    s = String(s);
    while (s.length < n) {
        s = c + s;
    }
    return s;
}
const x86JumpInstructions = [
    "jmp", "ja", "jae", "jb", "jbe", "jc", "je", "jg", "jge", "jl", "jle", "jna", "jnae",
    "jnb", "jnbe", "jnc", "jne", "jng", "jnge", "jnl", "jnle", "jno", "jnp", "jns", "jnz",
    "jo", "jp", "jpe", "jpo", "js", "jz"
];
function isBranch(instr) {
    return x86JumpInstructions.indexOf(instr.mnemonic) >= 0;
}
const base64DecodeMap = [
    62, 0, 0, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
    0, 0, 0, 0, 0, 0, 0,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 0, 0,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43,
    44, 45, 46, 47, 48, 49, 50, 51
];
const base64DecodeMapOffset = 0x2B;
const base64EOF = 0x3D;
function decodeRestrictedBase64ToBytes(encoded) {
    let ch;
    let code;
    let code2;
    const len = encoded.length;
    const padding = encoded.charAt(len - 2) === "=" ? 2 : encoded.charAt(len - 1) === "=" ? 1 : 0;
    const decoded = new Uint8Array((encoded.length >> 2) * 3 - padding);
    for (let i = 0, j = 0; i < encoded.length;) {
        ch = encoded.charCodeAt(i++);
        code = base64DecodeMap[ch - base64DecodeMapOffset];
        ch = encoded.charCodeAt(i++);
        code2 = base64DecodeMap[ch - base64DecodeMapOffset];
        decoded[j++] = (code << 2) | ((code2 & 0x30) >> 4);
        ch = encoded.charCodeAt(i++);
        if (ch === base64EOF) {
            return decoded;
        }
        code = base64DecodeMap[ch - base64DecodeMapOffset];
        decoded[j++] = ((code2 & 0x0f) << 4) | ((code & 0x3c) >> 2);
        ch = encoded.charCodeAt(i++);
        if (ch === base64EOF) {
            return decoded;
        }
        code2 = base64DecodeMap[ch - base64DecodeMapOffset];
        decoded[j++] = ((code & 0x03) << 6) | code2;
    }
    return decoded;
}
const layoutThrottleDuration = 10;
let layoutTimeout = 0;
function layout() {
    if (layoutTimeout) {
        window.clearTimeout(layoutTimeout);
    }
    window.setTimeout(() => {
        layoutTimeout = 0;
        document.dispatchEvent(new Event("layout"));
    }, layoutThrottleDuration);
}
function assert(c, message) {
    if (!c) {
        throw new Error(message);
    }
}
function clamp(x, min, max) {
    return Math.min(Math.max(min, x), max);
}
function contextify(src, thisArg = window, context = {}, modules = {}) {
    // Build a require wrapper that looks for provided modules first and falls
    // back to calling the environment's require otherwise, which supports both
    // synchronous (CommonJS-style) and asynchronous (AMD-style) arguments.
    function require(name, factory) {
        if (typeof name === "string") {
            if (modules.hasOwnProperty(name)) {
                return modules[name];
            }
            return window.require(name);
        }
        return window.require(name, factory);
    }
    Object.defineProperty(require, "config", {
        value: window.require.config
    });
    // Use provided contextual keys as parameters and wrap the source in an IIFE
    // so redefining variables using parameter names is allowed...
    const contextParameters = Object.keys(context)
        .concat("require", "exports", "return ()=>{" + src + "}");
    // ...and use provided contextual values as arguments.
    const contextArguments = Object.values(context)
        .concat(require, {});
    // Call the function constructor with our variable parameters and arguments.
    return Function.apply(null, contextParameters)
        .apply(thisArg, contextArguments);
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dispatcher__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_group__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_editor_View__ = __webpack_require__(8);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */






class AppStore {
    constructor() {
        this.onLoadProject = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onLoadProject");
        this.onDidChangeStatus = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onDidChangeStatus");
        this.onDidChangeProblems = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onDidChangeProblems");
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onChange");
        this.onDirtyFileUsed = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onDirtyFileUsed");
        this.onDidChangeBuffer = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onDidChangeBuffer");
        this.onDidChangeData = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onDidChangeData");
        this.onDidChangeChildren = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onDidChangeChildren");
        this.onOutputChanged = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onOutputChanged");
        this.onTabsChange = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onTabsChange");
        this.onSandboxRun = new __WEBPACK_IMPORTED_MODULE_0__model__["b" /* EventDispatcher */]("AppStore onSandboxRun");
        this.project = null;
        this.output = null;
    }
    initStore() {
        this.project = new __WEBPACK_IMPORTED_MODULE_0__model__["g" /* Project */]();
        this.activeTabGroup = new __WEBPACK_IMPORTED_MODULE_3__utils_group__["a" /* default */](null, []);
        this.tabGroups = [this.activeTabGroup];
        this.bindProject();
        this.output = new __WEBPACK_IMPORTED_MODULE_0__model__["c" /* File */]("output", __WEBPACK_IMPORTED_MODULE_0__model__["d" /* FileType */].Log);
    }
    loadProject(project) {
        this.project = project;
        this.bindProject();
        this.onLoadProject.dispatch();
    }
    bindProject() {
        this.project.onDidChangeStatus.register(() => this.onDidChangeStatus.dispatch());
        this.project.onDidChangeProblems.register(() => this.onDidChangeProblems.dispatch());
        this.project.onChange.register(() => this.onChange.dispatch());
        this.project.onDirtyFileUsed.register((file) => this.onDirtyFileUsed.dispatch(file));
        this.project.onDidChangeBuffer.register(() => this.onDidChangeBuffer.dispatch());
        this.project.onDidChangeData.register(() => this.onDidChangeData.dispatch());
        this.project.onDidChangeChildren.register(() => this.onDidChangeChildren.dispatch());
    }
    addFileTo(file, parent) {
        if (file.parent) {
            this.deleteFile(file);
        }
        parent.addFile(file);
    }
    deleteFile(file) {
        file.parent.removeFile(file);
    }
    updateFileNameAndDescription(file, name, description) {
        file.name = name;
        file.description = description;
    }
    getActiveTabGroup() {
        return this.activeTabGroup;
    }
    getTabGroups() {
        return this.tabGroups;
    }
    getProject() {
        return __WEBPACK_IMPORTED_MODULE_0__model__["e" /* ModelRef */].getRef(this.project);
    }
    getOutput() {
        return __WEBPACK_IMPORTED_MODULE_0__model__["e" /* ModelRef */].getRef(this.output);
    }
    getFileByName(name) {
        const file = this.project.getFile(name);
        return file ? __WEBPACK_IMPORTED_MODULE_0__model__["e" /* ModelRef */].getRef(file) : null;
    }
    getFileSource(file) {
        return file.getModel().getData();
    }
    getFileBuffer(file) {
        return file.getModel().buffer;
    }
    getParent(file) {
        const { parent } = file.getModel();
        return parent ? __WEBPACK_IMPORTED_MODULE_0__model__["e" /* ModelRef */].getRef(parent) : null;
    }
    getImmediateChild(directory, name) {
        const child = directory.getModel().getImmediateChild(name);
        return child ? __WEBPACK_IMPORTED_MODULE_0__model__["e" /* ModelRef */].getRef(child) : null;
    }
    getPath(file) {
        return file.getModel().getPath();
    }
    getStatus() {
        return this.project.status;
    }
    logLn(message, kind = "") {
        message = message + "\n";
        if (kind) {
            message = "[" + kind + "]: " + message;
        }
        const model = this.output.buffer;
        const lineCount = model.getLineCount();
        const lastLineLength = model.getLineMaxColumn(lineCount);
        const range = new monaco.Range(lineCount, lastLineLength, lineCount, lastLineLength);
        model.applyEdits([
            { forceMoveMarkers: true, identifier: null, range, text: message }
        ]);
        this.onOutputChanged.dispatch();
    }
    splitGroup() {
        const { tabGroups, activeTabGroup } = this;
        if (activeTabGroup.views.length === 0) {
            return;
        }
        const activeGroupIndex = tabGroups.findIndex(group => group === activeTabGroup);
        // Create a new group from the last file of currently active group
        const view = activeTabGroup.currentView.clone();
        const group = new __WEBPACK_IMPORTED_MODULE_3__utils_group__["a" /* default */](view, [view]);
        this.tabGroups.splice(activeGroupIndex + 1, 0, group);
        this.activeTabGroup = group;
        this.onTabsChange.dispatch();
    }
    openFile(file, type, preview) {
        this.activeTabGroup.openFile(file, type, preview);
        this.onTabsChange.dispatch();
    }
    openView(view, preview) {
        this.activeTabGroup.open(view, preview);
        this.onTabsChange.dispatch();
    }
    closeView(view) {
        const { activeTabGroup, tabGroups } = this;
        let numGroups = tabGroups.length;
        activeTabGroup.close(view);
        if (activeTabGroup.views.length === 0 && numGroups > 1) {
            const i = tabGroups.indexOf(activeTabGroup);
            tabGroups.splice(i, 1);
            numGroups = tabGroups.length;
            const g = numGroups ? tabGroups[Math.min(numGroups - 1, i)] : null;
            this.activeTabGroup = g;
            this.tabGroups = tabGroups;
        }
        this.onTabsChange.dispatch();
    }
    openFiles(files) {
        const groups = files.map((paths) => {
            const views = paths.map(file => {
                const newFile = this.getFileByName(file).getModel();
                return new __WEBPACK_IMPORTED_MODULE_5__components_editor_View__["a" /* View */](newFile, Object(__WEBPACK_IMPORTED_MODULE_5__components_editor_View__["c" /* defaultViewTypeForFileType */])(newFile.type));
            });
            Object(__WEBPACK_IMPORTED_MODULE_4__util__["a" /* assert */])(views.length > 0);
            return new __WEBPACK_IMPORTED_MODULE_3__utils_group__["a" /* default */](views[0], views);
        });
        this.activeTabGroup = groups[0];
        this.tabGroups = groups;
        this.onTabsChange.dispatch();
    }
    setViewType(view, type) {
        // const { file } = view;
        // const newView = new View(file, type);
        // const previewGroup = new Group(newView, [newView]);
        // this.tabGroups.push(previewGroup);
        // this.activeTabGroup = previewGroup;
        view.type = type;
        this.onTabsChange.dispatch();
    }
    setStatus(status) {
        if (status) {
            this.project.setStatus(status);
        }
        else {
            this.project.clearStatus();
        }
    }
    sendSandboxRun(src) {
        this.onSandboxRun.dispatch({
            project: this.project,
            src,
        });
    }
    handleActions(action) {
        switch (action.type) {
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].OPEN_VIEW: {
                const { view, preview } = action;
                this.openView(view, preview);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].CLOSE_VIEW: {
                const { view } = action;
                this.closeView(view);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].FOCUS_TAB_GROUP: {
                const { group } = action;
                this.activeTabGroup = group;
                this.onTabsChange.dispatch();
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].OPEN_FILE: {
                const { file, viewType, preview } = action;
                this.openFile(file, viewType, preview);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].OPEN_FILES: {
                const { files } = action;
                this.openFiles(files);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].SPLIT_GROUP: {
                this.splitGroup();
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].ADD_FILE_TO: {
                const { file, parent } = action;
                this.addFileTo(file, parent);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].DELETE_FILE: {
                const { file } = action;
                this.deleteFile(file);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].UPDATE_FILE_NAME_AND_DESCRIPTION: {
                const { file, name, description } = action;
                this.updateFileNameAndDescription(file, name, description);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].LOAD_PROJECT: {
                const { project } = action;
                this.loadProject(project);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].INIT_STORE: {
                this.initStore();
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].SET_VIEW_TYPE: {
                const { view, viewType } = action;
                this.setViewType(view, viewType);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].LOG_LN: {
                const { message, kind } = action;
                this.logLn(message, kind);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].SET_STATUS: {
                const { status } = action;
                this.setStatus(status);
                break;
            }
            case __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["a" /* AppActionType */].SANDBOX_RUN: {
                const { src } = action;
                this.sendSandboxRun(src);
                break;
            }
        }
    }
}
/* unused harmony export AppStore */

const appStore = new AppStore();
__WEBPACK_IMPORTED_MODULE_1__dispatcher__["a" /* default */].register((action) => appStore.handleActions(action));
/* harmony default export */ __webpack_exports__["a"] = (appStore);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Button extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        let className = "button ";
        if (this.props.customClassName) {
            className += this.props.customClassName;
        }
        if (this.props.isDisabled) {
            className += " disabled";
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className, onClick: () => {
                if (this.props.onClick && !this.props.isDisabled) {
                    this.props.onClick();
                }
            }, title: this.props.title },
            this.props.icon,
            " ",
            this.props.label);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Button;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Icon extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: {
                width: 16, height: 16,
                backgroundImage: `url("${this.props.src}")`
            } });
    }
}
/* unused harmony export Icon */

class GoRepoForked extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-repo-forked", viewBox: "0 0 10 16", version: "1.1", width: "10", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["l"] = GoRepoForked;

class GoBeaker extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-beaker", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M14.38 14.59L11 7V3h1V2H3v1h1v4L.63 14.59A1 1 0 0 0 1.54 16h11.94c.72 0 1.2-.75.91-1.41h-.01zM3.75 10L5 7V3h5v4l1.25 3h-7.5zM8 8h1v1H8V8zM7 7H6V6h1v1zm0-3h1v1H7V4zm0-3H6V0h1v1z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GoBeaker;

class GoGear extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-gear", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["h"] = GoGear;

class GoBook extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-book", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = GoBook;

class GoRocket extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-rocket", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M12.17 3.83c-.27-.27-.47-.55-.63-.88-.16-.31-.27-.66-.34-1.02-.58.33-1.16.7-1.73 1.13-.58.44-1.14.94-1.69 1.48-.7.7-1.33 1.81-1.78 2.45H3L0 10h3l2-2c-.34.77-1.02 2.98-1 3l1 1c.02.02 2.23-.64 3-1l-2 2v3l3-3v-3c.64-.45 1.75-1.09 2.45-1.78.55-.55 1.05-1.13 1.47-1.7.44-.58.81-1.16 1.14-1.72-.36-.08-.7-.19-1.03-.34a3.39 3.39 0 0 1-.86-.63M16 0s-.09.38-.3 1.06c-.2.7-.55 1.58-1.06 2.66-.7-.08-1.27-.33-1.66-.72-.39-.39-.63-.94-.7-1.64C13.36.84 14.23.48 14.92.28 15.62.08 16 0 16 0" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["m"] = GoRocket;

class GoPencil extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-pencil", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["k"] = GoPencil;

class GoDelete extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-x", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" }));
    }
}
/* unused harmony export GoDelete */

class GoVerified extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-verified", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M15.67 7.06l-1.08-1.34c-.17-.22-.28-.48-.31-.77l-.19-1.7a1.51 1.51 0 0 0-1.33-1.33l-1.7-.19c-.3-.03-.56-.16-.78-.33L8.94.32c-.55-.44-1.33-.44-1.88 0L5.72 1.4c-.22.17-.48.28-.77.31l-1.7.19c-.7.08-1.25.63-1.33 1.33l-.19 1.7c-.03.3-.16.56-.33.78L.32 7.05c-.44.55-.44 1.33 0 1.88l1.08 1.34c.17.22.28.48.31.77l.19 1.7c.08.7.63 1.25 1.33 1.33l1.7.19c.3.03.56.16.78.33l1.34 1.08c.55.44 1.33.44 1.88 0l1.34-1.08c.22-.17.48-.28.77-.31l1.7-.19c.7-.08 1.25-.63 1.33-1.33l.19-1.7c.03-.3.16-.56.33-.78l1.08-1.34c.44-.55.44-1.33 0-1.88zM6.5 12L3 8.5 4.5 7l2 2 5-5L13 5.55 6.5 12z" }));
    }
}
/* unused harmony export GoVerified */

class GoFile extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-file", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["g"] = GoFile;

class GoFileBinary extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-file-binary", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M4 12h1v1H2v-1h1v-2H2V9h2v3zm8-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5zM8 4H6v1h1v2H6v1h3V7H8V4zM2 4h3v4H2V4zm1 3h1V5H3v2zm3 2h3v4H6V9zm1 3h1v-2H7v2z" }));
    }
}
/* unused harmony export GoFileBinary */

class GoFileCode extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-file-code", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M8.5 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.5L8.5 1zM11 14H1V2h7l3 3v9zM5 6.98L3.5 8.5 5 10l-.5 1L2 8.5 4.5 6l.5.98zM7.5 6L10 8.5 7.5 11l-.5-.98L8.5 8.5 7 7l.5-1z" }));
    }
}
/* unused harmony export GoFileCode */

class GoQuote extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-quote", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M6.16 3.5C3.73 5.06 2.55 6.67 2.55 9.36c.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.9 0-2.99-1.52-2.99-4.25 0-3.8 1.75-6.53 5.02-8.42L6.16 3.5zm7 0c-2.43 1.56-3.61 3.17-3.61 5.86.16-.05.3-.05.44-.05 1.27 0 2.5.86 2.5 2.41 0 1.61-1.03 2.61-2.5 2.61-1.89 0-2.98-1.52-2.98-4.25 0-3.8 1.75-6.53 5.02-8.42l1.14 1.84h-.01z" }));
    }
}
/* unused harmony export GoQuote */

class GoDesktopDownload extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-desktop-download", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M4 6h3V0h2v6h3l-4 4-4-4zm11-4h-4v1h4v8H1V3h4V2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = GoDesktopDownload;

class GoX extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-x", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["o"] = GoX;

class GoKebabHorizontal extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-kebab-horizontal", viewBox: "0 0 13 16", version: "1.1", width: "13", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }));
    }
}
/* unused harmony export GoKebabHorizontal */

class GoThreeBars extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-three-bars", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { fillRule: "evenodd", d: "M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["n"] = GoThreeBars;

class GoGist extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-gist", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { "fill-rule": "evenodd", d: "M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["i"] = GoGist;

class GoCheck extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-check", viewBox: "0 0 12 16", version: "1.1", width: "12", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { "fill-rule": "evenodd", d: "M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = GoCheck;

class GoOpenIssue extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-issue-opened", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { "fill-rule": "evenodd", d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["j"] = GoOpenIssue;

class GoClippy extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-clippy", viewBox: "0 0 12 14", version: "1.1", width: "12", height: "14", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { "fill-rule": "evenodd", d: "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z" }));
    }
}
/* unused harmony export GoClippy */

class GoEye extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-eye", viewBox: "0 0 16 16", version: "1.1", width: "16", height: "16" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { d: "M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["f"] = GoEye;

class GoCode extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("svg", { className: "octicon octicon-code", viewBox: "0 0 14 16", version: "1.1", width: "14", height: "16", "aria-hidden": "true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("path", { "fill-rule": "evenodd", d: "M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z" }));
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = GoCode;



/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewType; });
/* harmony export (immutable) */ __webpack_exports__["c"] = defaultViewTypeForFileType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var ViewType;
(function (ViewType) {
    ViewType[ViewType["Editor"] = 0] = "Editor";
    ViewType[ViewType["Markdown"] = 1] = "Markdown";
    ViewType[ViewType["Binary"] = 2] = "Binary";
})(ViewType || (ViewType = {}));
function defaultViewTypeForFileType(type) {
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__model__["d" /* FileType */].Markdown:
            return ViewType.Markdown;
        default:
            return ViewType.Editor;
    }
}
class View {
    constructor(file, type = ViewType.Editor) {
        this.file = file;
        this.type = type;
    }
    clone() {
        return new View(this.file, this.type);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppActionType; });
/* harmony export (immutable) */ __webpack_exports__["b"] = addFileTo;
/* harmony export (immutable) */ __webpack_exports__["i"] = loadProject;
/* harmony export (immutable) */ __webpack_exports__["h"] = initStore;
/* harmony export (immutable) */ __webpack_exports__["t"] = updateFileNameAndDescription;
/* harmony export (immutable) */ __webpack_exports__["e"] = deleteFile;
/* harmony export (immutable) */ __webpack_exports__["j"] = logLn;
/* harmony export (immutable) */ __webpack_exports__["s"] = splitGroup;
/* harmony export (immutable) */ __webpack_exports__["n"] = openView;
/* harmony export (immutable) */ __webpack_exports__["d"] = closeView;
/* harmony export (immutable) */ __webpack_exports__["k"] = openFile;
/* harmony export (immutable) */ __webpack_exports__["l"] = openFiles;
/* harmony export (immutable) */ __webpack_exports__["m"] = openProjectFiles;
/* harmony export (immutable) */ __webpack_exports__["q"] = saveProject;
/* harmony export (immutable) */ __webpack_exports__["f"] = editInWebAssemblyStudio;
/* harmony export (immutable) */ __webpack_exports__["g"] = focusTabGroup;
/* unused harmony export setStatus */
/* unused harmony export clearStatus */
/* harmony export (immutable) */ __webpack_exports__["p"] = runTask;
/* harmony export (immutable) */ __webpack_exports__["o"] = run;
/* harmony export (immutable) */ __webpack_exports__["c"] = build;
/* harmony export (immutable) */ __webpack_exports__["r"] = setViewType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dispatcher__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_editor_View__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gulpy__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errors__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__(2);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */








var AppActionType;
(function (AppActionType) {
    AppActionType["ADD_FILE_TO"] = "ADD_FILE_TO";
    AppActionType["LOAD_PROJECT"] = "LOAD_PROJECT";
    AppActionType["INIT_STORE"] = "INIT_STORE";
    AppActionType["UPDATE_FILE_NAME_AND_DESCRIPTION"] = "UPDATE_FILE_NAME_AND_DESCRIPTION";
    AppActionType["DELETE_FILE"] = "DELETE_FILE";
    AppActionType["SPLIT_GROUP"] = "SPLIT_GROUP";
    AppActionType["SET_VIEW_TYPE"] = "SET_VIEW_TYPE";
    AppActionType["OPEN_FILE"] = "OPEN_FILE";
    AppActionType["OPEN_FILES"] = "OPEN_PROJECT_FILES";
    AppActionType["FOCUS_TAB_GROUP"] = "FOCUS_TAB_GROUP";
    AppActionType["LOG_LN"] = "LOG_LN";
    AppActionType["SET_STATUS"] = "SET_STATUS";
    AppActionType["SANDBOX_RUN"] = "SANDBOX_RUN";
    AppActionType["CLOSE_VIEW"] = "CLOSE_VIEW";
    AppActionType["OPEN_VIEW"] = "OPEN_VIEW";
})(AppActionType || (AppActionType = {}));
function addFileTo(file, parent) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.ADD_FILE_TO,
        file,
        parent,
    });
}
function loadProject(project) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.LOAD_PROJECT,
        project,
    });
}
function initStore() {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.INIT_STORE,
    });
}
function updateFileNameAndDescription(file, name, description) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.UPDATE_FILE_NAME_AND_DESCRIPTION,
        file,
        name,
        description,
    });
}
function deleteFile(file) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.DELETE_FILE,
        file,
    });
}
function logLn(message, kind = "") {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.LOG_LN,
        message,
        kind,
    });
}
function splitGroup() {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.SPLIT_GROUP
    });
}
function openView(view, preview = true) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.OPEN_VIEW,
        view,
        preview
    });
}
function closeView(view) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.CLOSE_VIEW,
        view
    });
}
function openFile(file, type = __WEBPACK_IMPORTED_MODULE_2__components_editor_View__["b" /* ViewType */].Editor, preview = true) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.OPEN_FILE,
        file,
        viewType: type,
        preview
    });
}
function openFiles(files) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.OPEN_FILES,
        files
    });
}
async function openProjectFiles(json) {
    const newProject = new __WEBPACK_IMPORTED_MODULE_1__model__["g" /* Project */]();
    await __WEBPACK_IMPORTED_MODULE_4__service__["a" /* Service */].loadProject(json, newProject);
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.LOAD_PROJECT,
        project: newProject
    });
    openFiles(json.openedFiles);
}
async function saveProject(fiddle) {
    logLn("Saving Project ...");
    const tabGroups = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getTabGroups();
    const projectModel = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getProject().getModel();
    const openedFiles = tabGroups.map((group) => {
        return group.views.map((view) => view.file.getPath());
    });
    await __WEBPACK_IMPORTED_MODULE_4__service__["a" /* Service */].saveProject(projectModel, openedFiles, fiddle);
    logLn("Saved Project OK");
}
async function editInWebAssemblyStudio(fiddle) {
    window.open(`http://webassembly.studio?f=${fiddle}`, "wasm.studio");
}
function focusTabGroup(group) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.FOCUS_TAB_GROUP,
        group
    });
}
function setStatus(status) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.SET_STATUS,
        status,
    });
}
function clearStatus() {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.SET_STATUS,
    });
}
async function runTask(name, optional = false) {
    // Runs the provided source in our fantasy gulp context
    const run = async (src) => {
        const gulp = new __WEBPACK_IMPORTED_MODULE_5__gulpy__["a" /* Gulpy */]();
        const project = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getProject().getModel();
        Object(__WEBPACK_IMPORTED_MODULE_7__util__["c" /* contextify */])(src, 
        // thisArg
        gulp, {
            // context for backwards compatibility
            gulp,
            Service: __WEBPACK_IMPORTED_MODULE_4__service__["a" /* Service */],
            project,
            logLn,
            filetypeForExtension: __WEBPACK_IMPORTED_MODULE_1__model__["i" /* filetypeForExtension */]
        }, {
            // modules
            "gulp": gulp,
            "@wasm/studio-utils": {
                Service: __WEBPACK_IMPORTED_MODULE_4__service__["a" /* Service */],
                project,
                logLn,
                filetypeForExtension: __WEBPACK_IMPORTED_MODULE_1__model__["i" /* filetypeForExtension */]
            }
        })();
        if (gulp.hasTask(name)) {
            try {
                await gulp.run(name);
            }
            catch (e) {
                logLn(e.message, "error");
            }
        }
        else if (!optional) {
            logLn(`Task ${name} is not optional.`, "error");
        }
    };
    let gulpfile = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileByName("gulpfile.js");
    if (gulpfile) {
        await run(__WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileSource(gulpfile));
    }
    else {
        if (gulpfile = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileByName("build.ts")) {
            const output = await gulpfile.getModel().getEmitOutput();
            await run(output.outputFiles[0].text);
        }
        else {
            if (gulpfile = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileByName("build.js")) {
                await run(__WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileSource(gulpfile));
            }
            else {
                logLn(__WEBPACK_IMPORTED_MODULE_6__errors__["a" /* Errors */].BuildFileMissing, "error");
            }
        }
    }
}
async function run() {
    const file = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileByName("src/main.html");
    let src = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileSource(file);
    src = src.replace(/src\s*=\s*"(.+?)"/, (a, b) => {
        const bFile = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileByName(b);
        const src = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getFileBuffer(bFile).getValue();
        const blob = new Blob([src], { type: "text/javascript" });
        return `src="${window.URL.createObjectURL(blob)}"`;
    });
    const projectModel = __WEBPACK_IMPORTED_MODULE_3__stores_AppStore__["a" /* default */].getProject().getModel();
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.SANDBOX_RUN,
        src,
    });
}
async function build() {
    setStatus("Building Project ...");
    await runTask("default");
    clearStatus();
}
function setViewType(view, type) {
    __WEBPACK_IMPORTED_MODULE_0__dispatcher__["a" /* default */].dispatch({
        type: AppActionType.SET_VIEW_TYPE,
        view,
        viewType: type
    });
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(62);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;
module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Language */
/* unused harmony export ServiceTypes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_monaco_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_zlib__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_ga__ = __webpack_require__(41);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







var Language;
(function (Language) {
    Language["C"] = "c";
    Language["Cpp"] = "cpp";
    Language["Wat"] = "wat";
    Language["Wasm"] = "wasm";
    Language["Rust"] = "rust";
    Language["Cretonne"] = "cton";
    Language["x86"] = "x86";
    Language["Json"] = "json";
    Language["JavaScript"] = "javascript";
    Language["TypeScript"] = "typescript";
    Language["Text"] = "text";
})(Language || (Language = {}));
var ServiceTypes;
(function (ServiceTypes) {
    ServiceTypes[ServiceTypes["Rustc"] = 0] = "Rustc";
    ServiceTypes[ServiceTypes["Service"] = 1] = "Service";
})(ServiceTypes || (ServiceTypes = {}));
class Service {
    static async sendRequestJSON(content, to) {
        const config = await Object(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */])();
        const url = to === ServiceTypes.Rustc ? config.rustc : config.serviceUrl;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(content),
            headers: new Headers({ "Content-Type": "application/json" })
        });
        return response.json();
    }
    static async sendRequest(content, to) {
        const config = await Object(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */])();
        const url = to === ServiceTypes.Rustc ? config.rustc : config.serviceUrl;
        const response = await fetch(url, {
            method: "POST",
            body: content,
            headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" })
        });
        return response.json();
    }
    static getMarkers(response) {
        // Parse and annotate errors if compilation fails.
        const annotations = [];
        if (response.indexOf("(module") !== 0) {
            const re1 = /^.*?:(\d+?):(\d+?):\s(.*)$/gm;
            let m;
            // Single position.
            while ((m = re1.exec(response)) !== null) {
                if (m.index === re1.lastIndex) {
                    re1.lastIndex++;
                }
                const startLineNumber = parseInt(m[1], 10);
                const startColumn = parseInt(m[2], 10);
                const message = m[3];
                let severity = monaco.Severity.Info;
                if (message.indexOf("error") >= 0) {
                    severity = monaco.Severity.Error;
                }
                else if (message.indexOf("warning") >= 0) {
                    severity = monaco.Severity.Warning;
                }
                annotations.push({
                    severity, message,
                    startLineNumber: startLineNumber, startColumn: startColumn,
                    endLineNumber: startLineNumber, endColumn: startColumn
                });
            }
            // Range. This is generated via the -diagnostics-print-source-range-info
            // clang flag.
            const re2 = /^.*?:\d+?:\d+?:\{(\d+?):(\d+?)-(\d+?):(\d+?)\}:\s(.*)$/gm;
            while ((m = re2.exec(response)) !== null) {
                if (m.index === re2.lastIndex) {
                    re2.lastIndex++;
                }
                const message = m[5];
                let severity = monaco.Severity.Info;
                if (message.indexOf("error") >= 0) {
                    severity = monaco.Severity.Error;
                }
                else if (message.indexOf("warning") >= 0) {
                    severity = monaco.Severity.Warning;
                }
                annotations.push({
                    severity, message,
                    startLineNumber: parseInt(m[1], 10), startColumn: parseInt(m[2], 10),
                    endLineNumber: parseInt(m[3], 10), endColumn: parseInt(m[4], 10)
                });
            }
        }
        return annotations;
    }
    static async compileFile(file, from, to, options = "") {
        const result = await Service.compile(file.getData(), from, to, options);
        if (result.tasks) {
            const markers = Service.getMarkers(result.tasks[0].console);
            if (markers.length) {
                monaco.editor.setModelMarkers(file.buffer, "compiler", markers);
                file.setProblems(markers.map(marker => {
                    return __WEBPACK_IMPORTED_MODULE_0__model__["f" /* Problem */].fromMarker(file, marker);
                }));
            }
            else {
                file.setProblems([]);
            }
        }
        if (!result.success) {
            throw new Error(result.message);
        }
        let data = Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* decodeRestrictedBase64ToBytes */])(result.output);
        if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_zlib__["b" /* isZlibData */])(data)) {
            data = await Object(__WEBPACK_IMPORTED_MODULE_4__utils_zlib__["a" /* decompressZlib */])(data);
        }
        return data;
    }
    static async compile(src, from, to, options = "") {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("compile", "Service", `${from}->${to}`);
        if ((from === Language.C || from === Language.Cpp) && to === Language.Wasm) {
            const project = {
                output: "wasm",
                compress: true,
                files: [
                    {
                        type: from,
                        name: "file." + from,
                        options,
                        src
                    }
                ]
            };
            const input = encodeURIComponent(JSON.stringify(project)).replace("%20", "+");
            return this.sendRequest("input=" + input + "&action=build", ServiceTypes.Service);
        }
        else if (from === Language.Wasm && to === Language.x86) {
            const input = encodeURIComponent(base64js.fromByteArray(src));
            return this.sendRequest("input=" + input + "&action=wasm2assembly&options=" + encodeURIComponent(options), ServiceTypes.Service);
        }
        else if (from === Language.Rust && to === Language.Wasm) {
            // TODO: Temporary until we integrate rustc into the service.
            return this.sendRequestJSON({ code: src }, ServiceTypes.Rustc);
        }
    }
    static async disassembleWasm(buffer) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("disassemble", "Service", "wabt");
        if (typeof wabt === "undefined") {
            await Service.lazyLoad("lib/libwabt.js");
        }
        const module = wabt.readWasm(buffer, { readDebugNames: true });
        if (true) {
            module.generateNames();
            module.applyNames();
        }
        return module.toText({ foldExprs: false, inlineExport: true });
    }
    static async disassembleWasmWithWabt(file) {
        const result = await Service.disassembleWasm(file.getData());
        const output = file.parent.newFile(file.name + ".wat", __WEBPACK_IMPORTED_MODULE_0__model__["d" /* FileType */].Wat);
        output.description = "Disassembled from " + file.name + " using Wabt.";
        output.setData(result);
    }
    static async assembleWat(wat) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("assemble", "Service", "wabt");
        if (typeof wabt === "undefined") {
            await Service.lazyLoad("lib/libwabt.js");
        }
        const module = wabt.parseWat("test.wat", wat);
        module.resolveNames();
        module.validate();
        const binary = module.toBinary({ log: true, write_debug_names: true });
        return binary.buffer;
    }
    static async assembleWatWithWabt(file) {
        const result = await Service.assembleWat(file.getData());
        const output = file.parent.newFile(file.name + ".wasm", __WEBPACK_IMPORTED_MODULE_0__model__["d" /* FileType */].Wasm);
        output.description = "Assembled from " + file.name + " using Wabt.";
        output.setData(result);
    }
    static async createGist(json) {
        const url = "https://api.github.com/gists";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(json),
            headers: new Headers({ "Content-type": "application/json; charset=utf-8" })
        });
        return JSON.parse(await response.text()).html_url;
    }
    static async loadJSON(uri) {
        const url = "https://api.myjson.com/bins/" + uri;
        const response = await fetch(url, {
            headers: new Headers({ "Content-type": "application/json; charset=utf-8" })
        });
        return JSON.parse(await response.text());
    }
    static async saveJSON(json, uri) {
        const update = !!uri;
        if (update) {
            const url = "//api.myjson.com/bins/" + uri;
            const response = await fetch(url, {
                method: "PUT",
                headers: new Headers({ "Content-type": "application/json; charset=utf-8" }),
                body: JSON.stringify(json)
            });
            const result = JSON.parse(await response.text());
            return uri;
        }
        else {
            const url = "//api.myjson.com/bins/";
            const response = await fetch(url, {
                method: "POST",
                headers: new Headers({ "Content-type": "application/json; charset=utf-8" }),
                body: JSON.stringify(json)
            });
            let jsonURI = JSON.parse(await response.text()).uri;
            jsonURI = jsonURI.substring(jsonURI.lastIndexOf("/") + 1);
            return jsonURI;
        }
    }
    static parseFiddleURI() {
        let uri = window.location.search.substring(1);
        if (uri) {
            const i = uri.indexOf("/");
            if (i > 0) {
                uri = uri.substring(0, i);
            }
        }
        return uri;
    }
    static async exportToGist(content, uri) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("export", "Service", "gist");
        const files = {};
        function serialize(file) {
            if (file instanceof __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Directory */]) {
                file.mapEachFile((file) => serialize(file), true);
            }
            else {
                files[file.name] = { content: file.data };
            }
        }
        serialize(content);
        const json = { description: "source: http://webassembly.studio", public: true, files };
        if (uri !== undefined) {
            json["description"] = json["description"] + `/?f=${uri}`;
        }
        return await this.createGist(json);
    }
    static async saveProject(project, openedFiles, uri) {
        function serialize(file) {
            Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* assert */])(!file.isTransient);
            if (file instanceof __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Directory */]) {
                return {
                    name: file.name,
                    children: file.mapEachFile((file) => serialize(file), true)
                };
            }
            else {
                return {
                    name: file.name,
                    type: file.type,
                    data: file.data
                };
            }
        }
        const json = serialize(project);
        json.openedFiles = openedFiles;
        return await this.saveJSON(json, uri);
    }
    static async loadProject(json, project) {
        async function deserialize(json, basePath) {
            if (Array.isArray(json)) {
                return Promise.all(json.map((x) => deserialize(x, basePath)));
            }
            if (json.children) {
                const directory = new __WEBPACK_IMPORTED_MODULE_0__model__["a" /* Directory */](json.name);
                (await deserialize(json.children, basePath + "/" + json.name)).forEach((file) => {
                    directory.addFile(file);
                });
                return directory;
            }
            const file = new __WEBPACK_IMPORTED_MODULE_0__model__["c" /* File */](json.name, json.type);
            file.description = json.description;
            if (json.data) {
                file.setData(json.data);
            }
            else if (json.data === null) {
                file.setData("");
            }
            else {
                const request = await fetch(basePath + "/" + json.name);
                file.setData(await request.text());
            }
            return file;
        }
        project.name = json.name;
        (await deserialize(json.children, "templates/" + json.directory)).forEach((file) => {
            project.addFile(file);
        });
        return json;
    }
    static lazyLoad(uri) {
        return new Promise((resolve, reject) => {
            const self = this;
            const d = window.document;
            const b = d.body;
            const e = d.createElement("script");
            e.async = true;
            e.src = uri;
            b.appendChild(e);
            e.onload = function () {
                resolve(this);
            };
        });
    }
    static async optimizeWasmWithBinaryen(file) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("optimize", "Service", "binaryen");
        if (typeof Binaryen === "undefined") {
            await Service.lazyLoad("lib/binaryen.js");
        }
        let data = file.getData();
        const module = Binaryen.readBinary(data);
        module.optimize();
        data = module.emitBinary();
        file.setData(data);
        file.buffer.setValue(await Service.disassembleWasm(data));
    }
    static async validateWasmWithBinaryen(file) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("validate", "Service", "binaryen");
        if (typeof Binaryen === "undefined") {
            await Service.lazyLoad("lib/binaryen.js");
        }
        const data = file.getData();
        const module = Binaryen.readBinary(data);
        alert(module.validate() ? "Module is valid" : "Module is not valid");
    }
    static async validateWatWithBinaryen(file) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("optimize", "Service", "binaryen (wat)");
        if (typeof Binaryen === "undefined") {
            await Service.lazyLoad("lib/binaryen.js");
        }
        const data = file.getData();
        const module = Binaryen.parseText(data);
        alert(module.validate());
    }
    static async disassembleWasmWithBinaryen(file) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("disassemble", "Service", "binaryen");
        if (typeof Binaryen === "undefined") {
            await Service.lazyLoad("lib/binaryen.js");
        }
        const data = file.getData();
        const module = Binaryen.readBinary(data);
        const output = file.parent.newFile(file.name + ".wat", __WEBPACK_IMPORTED_MODULE_0__model__["d" /* FileType */].Wat);
        output.description = "Disassembled from " + file.name + " using Binaryen.";
        output.setData(module.emitText());
    }
    static async convertWasmToAsmWithBinaryen(file) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("disassemble", "Service", "binaryen");
        if (typeof Binaryen === "undefined") {
            await Service.lazyLoad("lib/binaryen.js");
        }
        const data = file.getData();
        const module = Binaryen.readBinary(data);
        const result = module.emitAsmjs();
        const output = file.parent.newFile(file.name + ".asm.js", __WEBPACK_IMPORTED_MODULE_0__model__["d" /* FileType */].JavaScript);
        output.description = "Converted from " + file.name + " using Binaryen.";
        output.setData(result);
    }
    static download(file) {
        if (!Service.downloadLink) {
            Service.downloadLink = document.createElement("a");
            Service.downloadLink.style.display = "none";
            document.body.appendChild(Service.downloadLink);
        }
        const url = URL.createObjectURL(new Blob([file.getData()], { type: "application/octet-stream" }));
        Service.downloadLink.href = url;
        Service.downloadLink.download = file.name;
        if (Service.downloadLink.href !== document.location) {
            Service.downloadLink.click();
        }
    }
    // Kudos to https://github.com/tbfleming/cib
    static async clangFormat(file) {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("format", "Service", "clang-format");
        function format() {
            const result = Service.clangFormatModule.ccall("formatCode", "string", ["string"], [file.buffer.getValue()]);
            file.buffer.setValue(result);
        }
        if (Service.clangFormatModule) {
            format();
        }
        else {
            await Service.lazyLoad("lib/clang-format.js");
            const response = await fetch("lib/clang-format.wasm");
            const wasmBinary = await response.arrayBuffer();
            const module = {
                postRun() {
                    format();
                },
                wasmBinary
            };
            Service.clangFormatModule = Module(module);
        }
    }
    static async disassembleX86(file, options = "") {
        Object(__WEBPACK_IMPORTED_MODULE_5__utils_ga__["a" /* gaEvent */])("disassemble", "Service", "capstone.x86");
        if (typeof capstone === "undefined") {
            await Service.lazyLoad("lib/capstone.x86.min.js");
        }
        const output = file.parent.newFile(file.name + ".x86", __WEBPACK_IMPORTED_MODULE_0__model__["d" /* FileType */].x86);
        function toBytes(a) {
            return a.map(function (x) { return Object(__WEBPACK_IMPORTED_MODULE_2__util__["g" /* padLeft */])(Number(x).toString(16), 2, "0"); }).join(" ");
        }
        const data = file.getData();
        const json = await Service.compile(data, Language.Wasm, Language.x86, options);
        let s = "";
        const cs = new capstone.Cs(capstone.ARCH_X86, capstone.MODE_64);
        const annotations = [];
        const assemblyInstructionsByAddress = Object.create(null);
        for (let i = 0; i < json.regions.length; i++) {
            const region = json.regions[i];
            s += region.name + ":\n";
            const csBuffer = Object(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* decodeRestrictedBase64ToBytes */])(region.bytes);
            const instructions = cs.disasm(csBuffer, region.entry);
            const basicBlocks = {};
            instructions.forEach(function (instr, i) {
                assemblyInstructionsByAddress[instr.address] = instr;
                if (Object(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* isBranch */])(instr)) {
                    const targetAddress = parseInt(instr.op_str, 10);
                    if (!basicBlocks[targetAddress]) {
                        basicBlocks[targetAddress] = [];
                    }
                    basicBlocks[targetAddress].push(instr.address);
                    if (i + 1 < instructions.length) {
                        basicBlocks[instructions[i + 1].address] = [];
                    }
                }
            });
            instructions.forEach(function (instr) {
                if (basicBlocks[instr.address]) {
                    s += " " + Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* padRight */])(Object(__WEBPACK_IMPORTED_MODULE_2__util__["i" /* toAddress */])(instr.address) + ":", 39, " ");
                    if (basicBlocks[instr.address].length > 0) {
                        s += "; " + Object(__WEBPACK_IMPORTED_MODULE_2__util__["i" /* toAddress */])(instr.address) + " from: [" + basicBlocks[instr.address].map(__WEBPACK_IMPORTED_MODULE_2__util__["i" /* toAddress */]).join(", ") + "]";
                    }
                    s += "\n";
                }
                s += "  " + Object(__WEBPACK_IMPORTED_MODULE_2__util__["h" /* padRight */])(instr.mnemonic + " " + instr.op_str, 38, " ");
                s += "; " + Object(__WEBPACK_IMPORTED_MODULE_2__util__["i" /* toAddress */])(instr.address) + " " + toBytes(instr.bytes) + "\n";
            });
            s += "\n";
        }
        output.setData(s);
    }
    static openBinaryExplorer(file) {
        window.open("//wasdk.github.io/wasmcodeexplorer/?api=postmessage", "", "toolbar=no,ocation=no,directories=no,status=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=1024,height=568");
        if (Service.binaryExplorerMessageListener) {
            window.removeEventListener("message", Service.binaryExplorerMessageListener, false);
        }
        Service.binaryExplorerMessageListener = (e) => {
            if (e.data.type === "wasmexplorer-ready") {
                window.removeEventListener("message", Service.binaryExplorerMessageListener, false);
                Service.binaryExplorerMessageListener = null;
                const dataToSend = new Uint8Array(file.data.slice(0));
                e.source.postMessage({
                    type: "wasmexplorer-load",
                    data: dataToSend
                }, "*", [dataToSend.buffer]);
            }
        };
        window.addEventListener("message", Service.binaryExplorerMessageListener, false);
    }
    static async compileMarkdownToHtml(src) {
        if (typeof showdown === "undefined") {
            await Service.lazyLoad("lib/showdown.min.js");
        }
        const converter = new showdown.Converter({ tables: true, ghCodeBlocks: true });
        showdown.setFlavor("github");
        return converter.makeHtml(src);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Service;

Service.downloadLink = null;
Service.clangFormatModule = null;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Spacer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: this.props.height } });
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = Spacer;

class Divider extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "divider", style: {
                marginTop: this.props.height / 2,
                marginBottom: this.props.height / 2
            } });
    }
}
/* unused harmony export Divider */

class TextInputBox extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        const input = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: "text-input-box", type: "text", value: this.props.value, onChange: this.props.onChange });
        if (this.props.label) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex", flexDirection: "row" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "text-input-box-label" }, this.props.label),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { flex: 1 } }, input),
                this.props.error && __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "text-input-box-error" }, this.props.error));
        }
        else {
            return input;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = TextInputBox;

class FileUploadInput extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    open() {
        this.inputElement.click();
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "file-upload-input", ref: input => this.inputElement = input, type: "file", onChange: this.props.onChange, multiple: true, hidden: true });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FileUploadInput;

class ListItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        let className = "list-item";
        if (this.props.selected) {
            className += " selected";
        }
        let content = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "label" }, this.props.label);
        if (this.props.error) {
            content = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "list-item-flex" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "label" }, this.props.label),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "error" }, this.props.error));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className, onClick: this.props.onClick },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "monaco-icon-label file-icon " + this.props.icon }),
            content);
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = ListItem;

class ListBox extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        const { children, onSelect } = this.props;
        const newChildren = __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, (child, index) => {
            return __WEBPACK_IMPORTED_MODULE_0_react__["cloneElement"](child, {
                onClick: () => {
                    return onSelect && onSelect(child.props.value);
                },
                selected: this.props.value === child.props.value
            });
        });
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "list-box", style: {
                height: this.props.height
            } }, newChildren);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ListBox;



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SplitOrientation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(2);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



const Cassowary = __webpack_require__(48);
function arrayEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
function toCSSPercent(x) {
    return x + "%";
}
function toCSSPx(x) {
    return (x | 0) + "px";
}
function isCSSPercentage(x) {
    return x[x.length - 1] === "%";
}
function parseCSSPercentage(x) {
    return Number(x.substring(0, x.length - 1)) / 100;
}
function clone(array) {
    return array.slice(0);
}
function sum(array, n) {
    let x = 0;
    if (n === undefined) {
        n = array.length;
    }
    for (let i = 0; i < n; i++) {
        x += array[i];
    }
    return x;
}
function assignObject(to, from) {
    for (const x in from) {
        if (!(x in to)) {
            to[x] = from[x];
        }
    }
    return to;
}
var SplitOrientation;
(function (SplitOrientation) {
    SplitOrientation[SplitOrientation["Horizontal"] = 0] = "Horizontal";
    SplitOrientation[SplitOrientation["Vertical"] = 1] = "Vertical";
})(SplitOrientation || (SplitOrientation = {}));
function splitInfoEquals(a, b) {
    return a.min === b.min && a.max === b.max && a.value === b.value && a.resize === b.resize;
}
function splitInfoArrayEquals(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!splitInfoEquals(a[i], b[i])) {
            return false;
        }
    }
    return true;
}
class Split extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.index = -1;
        /**
         * This fires for all splits, even if the resizer doesn't belong to this split.
         */
        this.onResizerMouseUp = (e) => {
            if (this.index < 0) {
                return;
            }
            this.index = -1;
            Split.onResizeEnd.dispatch(this);
            this.solver.endEdit();
            window.document.documentElement.style.pointerEvents = "auto";
            this.querySolver(this.state.splits);
            return this.props.onChange && this.props.onChange(this.state.splits);
        };
        this.onResizerMouseMove = (e) => {
            if (this.index < 0) {
                return;
            }
            const vars = this.vars;
            const isVertical = this.props.orientation === SplitOrientation.Vertical;
            const container = this.container;
            const rect = container.getBoundingClientRect();
            const mouseOffset = isVertical ? e.clientX - rect.left : e.clientY - rect.top;
            this.solver.suggestValue(vars[this.index + 1], mouseOffset);
            this.solver.resolve();
            const splits = this.state.splits;
            this.querySolver(splits);
            this.setState({ splits });
            e.preventDefault();
        };
        this.state = {
            splits: []
        };
    }
    onResizerMouseDown(i) {
        this.index = i;
        this.solver.addEditVar(this.vars[this.index + 1], Cassowary.Strength.strong).beginEdit();
        Split.onResizeBegin.dispatch(this);
        window.document.documentElement.style.pointerEvents = "none";
    }
    querySolver(splits) {
        const vars = this.vars;
        for (let i = 0; i < splits.length; i++) {
            splits[i].value = vars[i + 1].value - vars[i].value;
        }
    }
    componentWillReceiveProps(nextProps) {
        const splits = this.canonicalizeSplits(nextProps);
        this.setupSolver(splits, this.getContainerSize(nextProps.orientation));
        this.querySolver(splits);
        this.setState({ splits });
    }
    getContainerSize(orientation) {
        return orientation === SplitOrientation.Horizontal ? this.container.clientHeight : this.container.clientWidth;
    }
    canonicalizeSplits(props) {
        const count = __WEBPACK_IMPORTED_MODULE_0_react__["Children"].count(props.children);
        const containerSize = this.getContainerSize(props.orientation);
        const splits = [];
        for (let i = 0; i < count; i++) {
            const info = {};
            if (props.splits && i < props.splits.length) {
                assignObject(info, props.splits[i]);
            }
            if (props.defaultSplit) {
                assignObject(info, props.defaultSplit);
            }
            splits.push(assignObject(info, {
                min: 32,
                max: containerSize,
            }));
        }
        return splits;
    }
    /**
     * Initializes a Cassowary solver and the constraints based on split infos and container size.
     */
    setupSolver(splits, containerSize) {
        Object(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* assert */])(this.index < 0, "Should not be in a dragging state.");
        const weak = Cassowary.Strength.weak;
        const medium = Cassowary.Strength.medium;
        const strong = Cassowary.Strength.strong;
        const required = Cassowary.Strength.required;
        function eq(a1, a2, strength, weight) {
            return new Cassowary.Equation(a1, a2, strength || weak, weight || 0);
        }
        function geq(a1, a2, strength, weight) {
            return new Cassowary.Inequality(a1, Cassowary.GEQ, a2, strength, weight);
        }
        function leq(a1, a2, strength, weight) {
            return new Cassowary.Inequality(a1, Cassowary.LEQ, a2, strength, weight);
        }
        // f     1               2           3   ...    l
        // |-----|---------------|-----------|----------|
        const vars = this.vars = [new Cassowary.Variable()];
        const solver = this.solver = new Cassowary.SimplexSolver();
        // Create Cassowary variables, these the dragged position as an offset from the origin.
        for (let i = 0; i < splits.length; i++) {
            vars.push(new Cassowary.Variable());
        }
        vars[0].value = 0;
        vars[vars.length - 1].value = containerSize;
        solver.addStay(vars[0], required);
        solver.addStay(vars[vars.length - 1], required);
        const offset = 0;
        for (let i = 0; i < vars.length - 1; i++) {
            const { min, max } = splits[i];
            const l = vars[i];
            const r = vars[i + 1];
            solver.addConstraint(geq(Cassowary.minus(r, l), min, strong)); // (y - x) >= min
            solver.addConstraint(leq(Cassowary.minus(r, l), max, strong)); // (y - x) <= max
        }
        // Add stays for the variables representing the dragged panes. This causes them to
        // try and remain in their dragged position unless the constraints prevent that.
        for (let i = 1; i < vars.length - 1; i++) {
            solver.addStay(vars[i], weak);
        }
        this.suggestVarValues(splits);
    }
    suggestVarValues(splits) {
        const vars = this.vars;
        for (let i = 0; i < vars.length - 1; i++) {
            const x = vars[i];
            const y = vars[i + 1];
            if (splits[i].value) {
                if (i < vars.length - 2) {
                    this.solver.addEditVar(y, Cassowary.Strength.strong).beginEdit();
                    this.solver.suggestValue(y, x.value + splits[i].value);
                }
                else {
                    this.solver.addEditVar(x, Cassowary.Strength.strong).beginEdit();
                    this.solver.suggestValue(x, y.value - splits[i].value);
                }
                this.solver.endEdit();
                this.solver.resolve();
            }
        }
    }
    componentDidMount() {
        document.addEventListener("mousemove", this.onResizerMouseMove);
        document.addEventListener("mouseup", this.onResizerMouseUp);
        const splits = this.canonicalizeSplits(this.props);
        this.setupSolver(splits, this.getContainerSize(this.props.orientation));
        this.querySolver(splits);
        this.setState({ splits });
    }
    componentWillUnmount() {
        document.removeEventListener("mousemove", this.onResizerMouseMove);
        document.removeEventListener("mouseup", this.onResizerMouseUp);
    }
    render() {
        const { splits } = this.state;
        let resizerClassName = "resizer";
        const isHorizontal = this.props.orientation === SplitOrientation.Horizontal;
        if (isHorizontal) {
            resizerClassName += " horizontal";
        }
        else {
            resizerClassName += " vertical";
        }
        const count = __WEBPACK_IMPORTED_MODULE_0_react__["Children"].count(this.props.children);
        const children = [];
        __WEBPACK_IMPORTED_MODULE_0_react__["Children"].forEach(this.props.children, (child, i) => {
            const style = {};
            if (i < count - 1 && i < splits.length) {
                style.flexBasis = toCSSPx(Math.round(splits[i].value));
            }
            else {
                style.flex = 1;
            }
            children.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: i, className: "split-pane", style: style }, child));
            if (i < count - 1) {
                children.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: "split:" + i, className: resizerClassName, onMouseDown: this.onResizerMouseDown.bind(this, i) }));
            }
        });
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "split", ref: (ref) => { this.container = ref; }, style: { flexDirection: isHorizontal ? "column" : "row" } }, children);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Split;

Split.onGlobalResize = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* EventDispatcher */]("Split Resize");
Split.onResizeBegin = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* EventDispatcher */]("Resize Begin");
Split.onResizeEnd = new __WEBPACK_IMPORTED_MODULE_1__model__["b" /* EventDispatcher */]("Resize End");


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// Utils provided by monaco editor, but exposed only via AMD require().
// See index.tsx for initialization.
class MonacoUtils {
    static initialize(require) {
        MonacoUtils.Tree = require("vs/base/parts/tree/browser/treeImpl").Tree;
        MonacoUtils.ContextMenuService = require("vs/platform/contextview/browser/contextMenuService").ContextMenuService;
        MonacoUtils.ContextViewService = require("vs/platform/contextview/browser/contextViewService").ContextViewService;
        MonacoUtils.TreeDefaults = require("vs/base/parts/tree/browser/treeDefaults");
        MonacoUtils.Action = require("vs/base/common/actions").Action;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MonacoUtils;



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__monaco_extra__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__monaco_utils__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editor_View__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_AppActions__ = __webpack_require__(9);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







class FileTemplate {
    constructor(container) {
        this.monacoIconLabel = document.createElement("div");
        this.monacoIconLabel.className = "monaco-icon-label";
        this.monacoIconLabel.style.display = "flex";
        container.appendChild(this.monacoIconLabel);
        const labelDescriptionContainer = document.createElement("div");
        labelDescriptionContainer.className = "monaco-icon-label-description-container";
        this.monacoIconLabel.appendChild(labelDescriptionContainer);
        this.label = document.createElement("a");
        this.label.className = "label-name";
        labelDescriptionContainer.appendChild(this.label);
        this.description = document.createElement("span");
        this.description.className = "label-description";
        labelDescriptionContainer.appendChild(this.description);
    }
    dispose() {
        // TODO dispose resources?
    }
    set(file) {
        let icon = "";
        switch (file.type) {
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].C:
                icon = "c-lang-file-icon";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].Cpp:
                icon = "cpp-lang-file-icon";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].JavaScript:
                icon = "javascript-lang-file-icon";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].HTML:
                icon = "html-lang-file-icon";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].TypeScript:
                icon = "typescript-lang-file-icon";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].Markdown:
                icon = "markdown-lang-file-icon";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].JSON:
                icon = "json-lang-file-icon";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].Wasm:
                icon = "wasm-lang-file-icon";
                break;
            case __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].Wat:
                icon = "wat-lang-file-icon";
                break;
        }
        if (file instanceof __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Directory */]) {
            this.monacoIconLabel.classList.add("folder-icon");
        }
        else {
            this.monacoIconLabel.classList.add("file-icon");
        }
        if (icon) {
            this.monacoIconLabel.classList.add(icon);
        }
        this.label.innerHTML = file.name;
        this.monacoIconLabel.classList.toggle("dirty", file.isDirty);
        this.monacoIconLabel.classList.toggle("transient", file.isTransient);
        let title = "";
        if (file.isDirty && file.isTransient) {
            title = "File has been modified and is transient.";
        }
        else if (file.isDirty && !file.isTransient) {
            title = "File has been modified.";
        }
        else if (!file.isDirty && file.isTransient) {
            title = "File is transient.";
        }
        this.monacoIconLabel.title = title;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = FileTemplate;

class DirectoryTree extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.lastClickedTime = Date.now();
        this.lastClickedFile = null;
        this.onLayout = () => {
            this.tree.layout();
        };
        this.contextViewService = new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].ContextViewService(document.documentElement);
        this.contextMenuService = new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].ContextMenuService(document.documentElement, null, null, this.contextViewService);
        this.state = { directory: this.props.directory };
    }
    setContainer(container) {
        if (container == null) {
            return;
        }
        this.container = container;
    }
    ensureTree() {
        if (this.container.lastChild) {
            this.container.removeChild(this.container.lastChild);
        }
        const self = this;
        class Controller extends __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].TreeDefaults.DefaultController {
            onContextMenu(tree, file, event) {
                tree.setFocus(file);
                const anchorOffset = { x: -10, y: -3 };
                const anchor = { x: event.posx + anchorOffset.x, y: event.posy + anchorOffset.y };
                const actions = [];
                // Directory options
                if (file instanceof __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Directory */]) {
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "New File", "octicon-file-add", true, () => {
                        return self.props.onNewFile && self.props.onNewFile(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "New Directory", "octicon-file-add", true, () => {
                        return self.props.onNewDirectory && self.props.onNewDirectory(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Upload File", "octicon-cloud-upload", true, () => {
                        return self.props.onUploadFile && self.props.onUploadFile(file);
                    }));
                }
                // Common file options
                if (!(file instanceof __WEBPACK_IMPORTED_MODULE_1__model__["g" /* Project */])) {
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Edit", "octicon-pencil", true, () => {
                        return self.props.onEditFile && self.props.onEditFile(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Delete", "octicon-x", true, () => {
                        return self.props.onDeleteFile && self.props.onDeleteFile(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Download", "octicon-cloud-download", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].download(file);
                    }));
                }
                // Create a gist from everything but binary
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__model__["k" /* isBinaryFileType */])(file.type)) {
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Create Gist", "octicon-gist", true, () => {
                        return self.props.onCreateGist && self.props.onCreateGist(file);
                    }));
                }
                // File-type specific separated with a ruler
                if (file.type === __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].Wasm) {
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Validate", "octicon-check ruler", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].validateWasmWithBinaryen(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Optimize", "octicon-gear", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].optimizeWasmWithBinaryen(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Disassemble", "octicon-file-code", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].disassembleWasmWithWabt(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "To asm.js", "octicon-file-code", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].convertWasmToAsmWithBinaryen(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "To Firefox x86", "octicon-file-binary", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].disassembleX86(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "To Firefox x86 Baseline", "octicon-file-binary", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].disassembleX86(file, "--wasm-always-baseline");
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Binary Explorer", "octicon-file-binary", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].openBinaryExplorer(file);
                    }));
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "View as Binary", "octicon-file-binary", true, () => {
                        Object(__WEBPACK_IMPORTED_MODULE_6__actions_AppActions__["k" /* openFile */])(file, __WEBPACK_IMPORTED_MODULE_5__editor_View__["b" /* ViewType */].Binary, false);
                    }));
                }
                else if (file.type === __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].C || file.type === __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].Cpp) {
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Clang-Format", "octicon-quote ruler", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].clangFormat(file);
                    }));
                }
                else if (file.type === __WEBPACK_IMPORTED_MODULE_1__model__["d" /* FileType */].Wat) {
                    actions.push(new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Action("x", "Assemble", "octicon-file-binary ruler", true, () => {
                        __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */].assembleWatWithWabt(file);
                    }));
                }
                self.contextMenuService.showContextMenu({
                    getAnchor: () => anchor,
                    getActions: () => {
                        return monaco.Promise.as(actions);
                    },
                    getActionItem: (action) => {
                        return null;
                    },
                    onHide: (wasCancelled) => {
                        if (wasCancelled) {
                            tree.DOMFocus();
                        }
                    }
                });
                super.onContextMenu(tree, file, event);
                return true;
            }
        }
        class DragAndDrop {
            /**
             * Returns a uri if the given element should be allowed to drag.
             * Returns null, otherwise.
             */
            getDragURI(tree, element) {
                return element.key;
            }
            /**
             * Returns a label to display when dragging the element.
             */
            getDragLabel(tree, elements) {
                return elements[0].name;
            }
            /**
             * Sent when the drag operation is starting.
             */
            onDragStart(tree, data, originalEvent) {
                return;
            }
            /**
             * Returns a DragOverReaction indicating whether sources can be
             * dropped into target or some parent of the target.
             */
            onDragOver(tree, data, targetElement, originalEvent) {
                const file = data.getData()[0];
                return {
                    accept: targetElement instanceof __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Directory */],
                    bubble: __WEBPACK_IMPORTED_MODULE_3__monaco_extra__["a" /* DragOverBubble */].BUBBLE_DOWN,
                    autoExpand: true
                };
            }
            /**
             * Handles the action of dropping sources into target.
             */
            drop(tree, data, targetElement, originalEvent) {
                const file = data.getData()[0];
                return self.props.onMoveFile && self.props.onMoveFile(file, targetElement);
            }
        }
        this.tree = new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Tree(this.container, {
            dataSource: {
                /**
                 * Returns the unique identifier of the given element.
                 * No more than one element may use a given identifier.
                 */
                getId: function (tree, element) {
                    return element.key;
                },
                /**
                 * Returns a boolean value indicating whether the element has children.
                 */
                hasChildren: function (tree, element) {
                    return element instanceof __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Directory */];
                },
                /**
                 * Returns the element's children as an array in a promise.
                 */
                getChildren: function (tree, element) {
                    return monaco.Promise.as(element.children);
                },
                /**
                 * Returns the element's parent in a promise.
                 */
                getParent: function (tree, element) {
                    return monaco.Promise.as(element.parent);
                }
            },
            renderer: {
                getHeight: function (tree, element) {
                    return 24;
                },
                renderTemplate: function (tree, templateId, container) {
                    return new FileTemplate(container);
                },
                renderElement: function (tree, element, templateId, templateData) {
                    templateData.set(element);
                },
                disposeTemplate: function (tree, templateId, templateData) {
                    templateData.dispose();
                }
            },
            controller: new Controller(),
            dnd: new DragAndDrop()
        });
    }
    onClickFile(file) {
        if (file instanceof __WEBPACK_IMPORTED_MODULE_1__model__["a" /* Directory */]) {
            return;
        }
        if (Date.now() - this.lastClickedTime < 500 && this.lastClickedFile === file && this.props.onDoubleClickFile) {
            this.props.onDoubleClickFile(file);
        }
        else if (this.props.onClickFile) {
            this.props.onClickFile(file);
        }
        this.lastClickedTime = Date.now();
        this.lastClickedFile = file;
    }
    componentDidMount() {
        this.ensureTree();
        this.tree.model.setInput(this.props.directory.getModel());
        this.tree.model.onDidSelect((e) => {
            if (e.selection.length) {
                this.onClickFile(e.selection[0]);
            }
        });
        document.addEventListener("layout", this.onLayout);
    }
    componentWillUnmount() {
        document.removeEventListener("layout", this.onLayout);
    }
    componentWillReceiveProps(props) {
        if (this.state.directory !== props.directory) {
            this.tree.model.setInput(props.directory.getModel());
            this.setState({ directory: props.directory });
        }
        else {
            this.tree.refresh();
            this.tree.expandAll();
        }
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill", ref: (ref) => this.setContainer(ref) });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DirectoryTree;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flux__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flux__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_flux__["Dispatcher"]());


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Editor__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewTabs__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__ViewTabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__View__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__View__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tabs__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__Tabs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__Tabs__["b"]; });
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */






/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_AppActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_monaco_editor__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */




class Monaco extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.onLayout = () => {
            this.editor.layout();
        };
    }
    revealLastLine() {
        this.editor.revealLine(this.editor.getModel().getLineCount());
    }
    componentDidMount() {
        const { view } = this.props;
        if (view) {
            this.ensureEditor();
            this.editor.setModel(view.file.buffer);
            // TODO: Weird that we need this to make monaco really think it needs to update the language.
            monaco.editor.setModelLanguage(this.editor.getModel(), Object(__WEBPACK_IMPORTED_MODULE_1__model__["l" /* languageForFileType */])(view.file.type));
            this.editor.restoreViewState(view.state);
            this.editor.updateOptions({ readOnly: view.file.isBufferReadOnly });
        }
        document.addEventListener("layout", this.onLayout);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.view !== nextProps.view) {
            // We're about to switch to a new file, save the view state.
            this.props.view.state = this.editor.saveViewState();
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.view === nextProps.view) {
            return false;
        }
        return true;
    }
    componentDidUpdate() {
        const { view } = this.props;
        if (view) {
            this.ensureEditor();
            this.editor.setModel(view.file.buffer);
            this.editor.restoreViewState(view.state);
            this.editor.updateOptions({ readOnly: view.file.isBufferReadOnly });
        }
    }
    componentWillUnmount() {
        document.removeEventListener("layout", this.onLayout);
        // We're about to close the editor, save the view state.
        this.props.view.state = this.editor.saveViewState();
    }
    registerActions() {
        const self = this;
        this.editor.addAction({
            id: "save",
            label: "Save",
            keybindings: [
                monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S
            ],
            precondition: null,
            keybindingContext: null,
            run: function () {
                const view = self.props.view;
                if (view && !view.file.isBufferReadOnly) {
                    view.file.save();
                }
                return null;
            }
        });
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_B, function () {
            Object(__WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["c" /* build */])();
        }, null);
        this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, function () {
            Object(__WEBPACK_IMPORTED_MODULE_2__actions_AppActions__["o" /* run */])();
        }, null);
    }
    ensureEditor() {
        if (this.editor) {
            return;
        }
        const options = Object.assign({
            value: "",
            theme: "fiddle-theme",
            minimap: {
                enabled: false
            },
            fontWeight: "bold",
            renderLineHighlight: "none",
        }, this.props.options);
        if (this.container.lastChild) {
            this.container.removeChild(this.container.lastChild);
        }
        this.editor = monaco.editor.create(this.container, options);
        this.registerActions();
        console.info("Created a new Monaco editor.");
    }
    setContainer(container) {
        if (container == null) {
            return;
        }
        this.container = container;
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill", ref: (ref) => this.setContainer(ref) });
    }
}
/* unused harmony export Monaco */

class EditorView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    setMonaco(monaco) {
        this.monaco = monaco;
    }
    revealLastLine() {
        this.monaco.revealLastLine();
    }
    render() {
        const file = this.props.view.file;
        if (file.description) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "editor-status-bar" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "status-bar-item" }, file.description)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "editor-container" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Monaco, { ref: (ref) => this.setMonaco(ref), view: this.props.view, options: this.props.options })),
                ";");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Monaco, { ref: (ref) => this.setMonaco(ref), view: this.props.view, options: this.props.options }));
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EditorView;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(2);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



class Tabs extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            scrollLeft: 0,
        };
        this.onWheel = (e) => {
            const delta = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* clamp */])(e.deltaY, -16, 16);
            let { scrollLeft } = this.state;
            scrollLeft += delta;
            // TODO: Work out the details of scrolling.
            scrollLeft = Object(__WEBPACK_IMPORTED_MODULE_1__util__["b" /* clamp */])(scrollLeft, 0, this.container.clientWidth);
            this.setState({ scrollLeft });
            e.preventDefault();
        };
        this.onDoubleClick = (e) => { this.props.onDoubleClick(); };
        this.setContainerRef = (ref) => { this.container = ref; };
    }
    render() {
        const { onDoubleClick, children, commands } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tabs-container" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { ref: this.setContainerRef, className: "tabs-tab-container", onWheel: this.onWheel, onDoubleClick: this.onDoubleClick }, children),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tabs-command-container" }, commands)));
    }
    componentDidUpdate() {
        this.container.scrollLeft = this.state.scrollLeft;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Tabs;

Tabs.defaultProps = {
    // tslint:disable-next-line
    onDoubleClick: () => { },
};
class Tab extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    constructor() {
        super(...arguments);
        this.onMouseHandle = (e, handler) => {
            e.stopPropagation();
            handler(this.props.value);
        };
        this.onClick = (e) => {
            this.onMouseHandle(e, this.props.onClick);
        };
        this.onDoubleClick = (e) => {
            this.onMouseHandle(e, this.props.onDoubleClick);
        };
        this.onClose = (e) => {
            this.onMouseHandle(e, this.props.onClose);
        };
    }
    render() {
        const { label, icon, isActive, isMarked, isItalic, } = this.props;
        let className = "tab";
        if (isActive) {
            className += " active";
        }
        if (isMarked) {
            className += " marked";
        }
        if (isItalic) {
            className += " italic";
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className, onClick: this.onClick, onDoubleClick: this.onDoubleClick },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "monaco-icon-label file-icon " + icon }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "label" }, label),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "close", onClick: this.onClose })));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tab;

Tab.defaultProps = {
    // tslint:disable-next-line
    onClick: () => { },
    // tslint:disable-next-line
    onDoubleClick: () => { },
    // tslint:disable-next-line
    onClose: () => { },
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(63)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(66)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(16);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findTabbableDescendants;
/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */

var tabbableNode = /input|select|textarea|button|object/;

function hidesContents(element) {
  var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;

  // If the node is empty, this is good enough
  if (zeroSize && !element.innerHTML) return true;

  // Otherwise we need to check some styles
  var style = window.getComputedStyle(element);
  return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
}

function visible(element) {
  var parentElement = element;
  while (parentElement) {
    if (parentElement === document.body) break;
    if (hidesContents(parentElement)) return false;
    parentElement = parentElement.parentNode;
  }
  return true;
}

function focusable(element, isTabIndexNotNaN) {
  var nodeName = element.nodeName.toLowerCase();
  var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
  return res && visible(element);
}

function tabbable(element) {
  var tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) tabIndex = undefined;
  var isTabIndexNaN = isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
}

function findTabbableDescendants(element) {
  return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
}
module.exports = exports["default"];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertNodeList = assertNodeList;
exports.setElement = setElement;
exports.validateElement = validateElement;
exports.hide = hide;
exports.show = show;
exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
exports.resetForTesting = resetForTesting;

var _warning = __webpack_require__(70);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var globalElement = null;

function assertNodeList(nodeList, selector) {
  if (!nodeList || !nodeList.length) {
    throw new Error("react-modal: No elements were found for selector " + selector + ".");
  }
}

function setElement(element) {
  var useElement = element;
  if (typeof useElement === "string") {
    var el = document.querySelectorAll(useElement);
    assertNodeList(el, useElement);
    useElement = "length" in el ? el[0] : el;
  }
  globalElement = useElement || globalElement;
  return globalElement;
}

function validateElement(appElement) {
  if (!appElement && !globalElement) {
    (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));

    return false;
  }

  return true;
}

function hide(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).setAttribute("aria-hidden", "true");
  }
}

function show(appElement) {
  if (validateElement(appElement)) {
    (appElement || globalElement).removeAttribute("aria-hidden");
  }
}

function documentNotReadyOrSSRTesting() {
  globalElement = null;
}

function resetForTesting() {
  globalElement = null;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.add = add;
exports.remove = remove;
exports.totalCount = totalCount;
var classListMap = {};

function get() {
  return classListMap;
}

function add(bodyClass) {
  // Set variable and default if none
  if (!classListMap[bodyClass]) {
    classListMap[bodyClass] = 0;
  }
  classListMap[bodyClass] += 1;
  return bodyClass;
}

function remove(bodyClass) {
  if (classListMap[bodyClass]) {
    classListMap[bodyClass] -= 1;
  }
  return bodyClass;
}

function totalCount() {
  return Object.keys(classListMap).reduce(function (acc, curr) {
    return acc + classListMap[curr];
  }, 0);
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = undefined;

var _exenv = __webpack_require__(72);

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EE = _exenv2.default;

var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};

var canUseDOM = exports.canUseDOM = EE.canUseDOM;

exports.default = SafeHTMLElement;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["forEachUrlParameter"] = forEachUrlParameter;
/* harmony export (immutable) */ __webpack_exports__["getUrlParameters"] = getUrlParameters;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__monaco_utils__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_BrowserNotSupported__ = __webpack_require__(84);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */






window.addEventListener("resize", __WEBPACK_IMPORTED_MODULE_3__util__["f" /* layout */], false);
function forEachUrlParameter(callback) {
    let url = window.location.search.substring(1);
    url = url.replace(/\/$/, ""); // Replace / at the end that gets inserted by browsers.
    const params = {};
    url.split("&").forEach(function (s) {
        const t = s.split("=");
        if (t.length === 2) {
            callback(t[0], decodeURIComponent(t[1]));
        }
        else {
            callback(t[0], true);
        }
    });
}
function getUrlParameters() {
    const params = {};
    forEachUrlParameter((key, value) => {
        params[key] = value;
    });
    return params;
}
const parameters = getUrlParameters();
const embed = parameters["embed"] === true ? true : !!parseInt(parameters["embed"], 10);
const update = parameters["update"] === true ? true : !!parseInt(parameters["update"], 10);
const fiddle = parameters["fiddle"] || parameters["f"];
(window["require"])(["vs/editor/editor.main", "require"], (_, require) => {
    __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].initialize(require);
    if (typeof WebAssembly !== "object") {
        __WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__components_BrowserNotSupported__["a" /* BrowserNotSupported */], null), document.getElementById("app"));
    }
    else {
        __WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__components_App__["a" /* App */], { embed: embed, update: update, fiddle: fiddle }), document.getElementById("app"));
    }
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Workspace__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Toolbar__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editor_View__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_AppActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Split__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_registerLanguages__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mousetrap__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_mousetrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_mousetrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__NewFileDialog__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__EditFileDialog__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__UploadFileDialog__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Toasts__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ShareDialog__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__NewProjectDialog__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__NewDirectoryDialog__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ControlCenter__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__StatusBar__ = __webpack_require__(83);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

























class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        /**
         * Remember workspace split.
         */
        this.workspaceSplit = null;
        this.state = {
            fiddle: props.fiddle,
            project: null,
            file: null,
            newFileDialogDirectory: null,
            editFileDialogFile: null,
            newProjectDialog: !props.fiddle,
            shareDialog: false,
            workspaceSplits: [
                {
                    min: 200,
                    max: 400,
                    value: 200,
                },
                {
                    min: 256
                }
            ],
            controlCenterSplits: [
                { min: 100 },
                { min: 40, value: 256 }
            ],
            editorSplits: [],
            showProblems: true,
            showSandbox: true,
            uploadFileDialogDirectory: null,
            newDirectoryDialog: null
        };
        Object(__WEBPACK_IMPORTED_MODULE_11__utils_registerLanguages__["a" /* default */])();
    }
    async initializeProject() {
        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["h" /* initStore */])();
        this.setState({ project: __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].getProject() });
        this.bindAppStoreEvents();
        if (this.state.fiddle) {
            this.loadProjectFromFiddle();
        }
    }
    async loadProjectFromFiddle() {
        const newProject = new __WEBPACK_IMPORTED_MODULE_7__model__["g" /* Project */]();
        let json = await __WEBPACK_IMPORTED_MODULE_8__service__["a" /* Service */].loadJSON(this.state.fiddle);
        json = await __WEBPACK_IMPORTED_MODULE_8__service__["a" /* Service */].loadProject(json, newProject);
        // TODO openProjectFiles ?
        this.logLn("Project Loaded ...");
        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["i" /* loadProject */])(newProject);
        if (newProject.getFile("README.md")) {
            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["l" /* openFiles */])([["README.md"]]);
        }
    }
    bindAppStoreEvents() {
        __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].onLoadProject.register(() => {
            this.setState({ project: __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].getProject() });
            this.forceUpdate();
            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["p" /* runTask */])("project:load", true);
        });
        __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].onDidChangeBuffer.register(() => {
            this.forceUpdate();
        });
        __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].onDidChangeData.register(() => {
            this.forceUpdate();
        });
        __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].onDidChangeChildren.register(() => {
            this.forceUpdate();
        });
        __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].onDirtyFileUsed.register((file) => {
            this.logLn(`Changes in ${file.getPath()} were ignored, save your changes.`, "warn");
        });
        __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].onTabsChange.register(() => {
            this.forceUpdate();
            Object(__WEBPACK_IMPORTED_MODULE_10__util__["f" /* layout */])();
        });
    }
    // TODO: Optimize
    // shouldComponentUpdate(nextProps: any, nextState: AppState) {
    //   let state = this.state;
    //   if (state.file !== nextState.file) return true;
    //   if (state.group !== nextState.group) return true;
    //   if (!shallowCompare(state.groups, nextState.groups)) return true;
    //   return false;
    // }
    async loadReleaseNotes() {
        const response = await fetch("notes/notes.md");
        const src = await response.text();
        const notes = new __WEBPACK_IMPORTED_MODULE_7__model__["c" /* File */]("Release Notes", __WEBPACK_IMPORTED_MODULE_7__model__["d" /* FileType */].Markdown);
        notes.setData(src);
        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["k" /* openFile */])(notes, Object(__WEBPACK_IMPORTED_MODULE_4__editor_View__["c" /* defaultViewTypeForFileType */])(notes.type));
    }
    registerShortcuts() {
        __WEBPACK_IMPORTED_MODULE_12_mousetrap__["bind"]("command+b", () => {
            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["c" /* build */])();
        });
        __WEBPACK_IMPORTED_MODULE_12_mousetrap__["bind"]("command+enter", () => {
            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["o" /* run */])();
        });
    }
    logLn(message, kind = "") {
        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["j" /* logLn */])(message, kind);
    }
    componentWillMount() {
        this.initializeProject();
    }
    componentDidMount() {
        Object(__WEBPACK_IMPORTED_MODULE_10__util__["f" /* layout */])();
        this.registerShortcuts();
        // if (!this.props.embed) {
        //   this.loadReleaseNotes();
        // }
        window.addEventListener("resize", () => {
            console.log("App.forceUpdate because of window resize.");
            this.forceUpdate();
        }, false);
    }
    share() {
        this.setState({ shareDialog: true });
    }
    async update() {
        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["q" /* saveProject */])(this.state.fiddle);
    }
    async fork() {
        this.logLn("Forking Project ...");
        const projectModel = this.state.project.getModel();
        const fiddle = await __WEBPACK_IMPORTED_MODULE_8__service__["a" /* Service */].saveProject(projectModel, []);
        this.logLn("Forked Project OK " + fiddle);
        const search = window.location.search;
        if (this.state.fiddle) {
            Object(__WEBPACK_IMPORTED_MODULE_10__util__["a" /* assert */])(search.indexOf(this.state.fiddle) >= 0);
            history.replaceState({}, fiddle, search.replace(this.state.fiddle, fiddle));
        }
        else {
            history.pushState({}, fiddle, `?f=${fiddle}`);
        }
        this.setState({ fiddle });
    }
    async gist(fileOrDirectory) {
        this.logLn("Exporting Project ...");
        const target = fileOrDirectory || this.state.project.getModel();
        const gistURI = await __WEBPACK_IMPORTED_MODULE_8__service__["a" /* Service */].exportToGist(target, this.state.fiddle);
        this.logLn("Project Gist CREATED ");
        if (gistURI) {
            if (this.toastContainer) {
                this.toastContainer.showToast(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
                    "\"Gist Created!\" ",
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: gistURI, target: "_blank", className: "toast-span" }, "Open in new tab.")));
            }
            console.log(`Gist created: ${gistURI}`);
        }
        else {
            console.log("Failed!");
        }
    }
    async download() {
        this.logLn("Downloading Project ...");
        const downloadService = await __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 86));
        const projectModel = this.state.project.getModel();
        await downloadService.downloadProject(projectModel, this.state.fiddle);
        this.logLn("Project Zip CREATED ");
    }
    makeToolbarButtons() {
        const toolbarButtons = [
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { key: "View Workspace", icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["n" /* GoThreeBars */], null), title: "View Project Workspace", onClick: () => {
                    const workspaceSplits = this.state.workspaceSplits;
                    const first = workspaceSplits[0];
                    const second = workspaceSplits[1];
                    if (this.workspaceSplit) {
                        Object.assign(first, this.workspaceSplit);
                        this.workspaceSplit = null;
                        delete second.value;
                    }
                    else {
                        this.workspaceSplit = Object.assign({}, first);
                        first.max = first.min = 0;
                    }
                    this.setState({ workspaceSplits });
                } })
        ];
        if (this.props.embed) {
            toolbarButtons.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["k" /* GoPencil */], null), label: "Edit in WebAssembly Studio", title: "Edit Project in WebAssembly Studio", onClick: () => {
                    Object(__WEBPACK_IMPORTED_MODULE_10__util__["a" /* assert */])(this.state.fiddle);
                    Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["f" /* editInWebAssemblyStudio */])(this.state.fiddle);
                } }));
        }
        else {
            if (this.props.update) {
                toolbarButtons.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["k" /* GoPencil */], null), label: "Update", title: "Update Project", onClick: () => {
                        this.update();
                    } }));
            }
            toolbarButtons.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["l" /* GoRepoForked */], null), label: "Fork", title: "Fork Project", onClick: () => {
                    this.fork();
                } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["i" /* GoGist */], null), label: "Create Gist", title: "Create GitHub Gist from Project", onClick: () => {
                    this.gist();
                } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["e" /* GoDesktopDownload */], null), label: "Download", title: "Download Project", onClick: () => {
                    this.download();
                } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["m" /* GoRocket */], null), label: "Share", title: this.state.fiddle ? "Share Project" : "Cannot share a project that has not been forked yet.", isDisabled: !this.state.fiddle, onClick: () => {
                    this.share();
                } }));
        }
        toolbarButtons.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["a" /* GoBeaker */], null), label: "Build", title: "Build Project: CtrlCmd + B", onClick: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["c" /* build */])();
            } }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["h" /* GoGear */], null), label: "Run", title: "Run Project: CtrlCmd + Enter", onClick: () => {
                Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["o" /* run */])();
            } }));
        if (!this.props.embed) {
            toolbarButtons.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13__shared_Icons__["j" /* GoOpenIssue */], null), label: "GitHub Issues", title: "GitHub Issues", customClassName: "issue", onClick: () => {
                    window.open("https://github.com/wasdk/WebAssemblyStudio", "_blank");
                } }));
        }
        return toolbarButtons;
    }
    render() {
        const self = this;
        function makeEditorPanes() {
            const groups = __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].getTabGroups();
            const activeGroup = __WEBPACK_IMPORTED_MODULE_6__stores_AppStore__["a" /* default */].getActiveTabGroup();
            if (groups.length === 0) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "No Groups");
            }
            return groups.map(group => {
                // tslint:disable-next-line:jsx-key
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__editor__["e" /* ViewTabs */], { views: group.views.slice(0), view: group.currentView, preview: group.preview, onSplitViews: () => Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["s" /* splitGroup */])(), hasFocus: activeGroup === group, onFocus: () => {
                        // TODO: Should be taken care of in shouldComponentUpdate instead.
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["g" /* focusTabGroup */])(group);
                    }, onChangeViewType: (view, type) => Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["r" /* setViewType */])(view, type), onClickView: (view) => {
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["g" /* focusTabGroup */])(group);
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["n" /* openView */])(view);
                    }, onDoubleClickView: (view) => {
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["g" /* focusTabGroup */])(group);
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["n" /* openView */])(view, false);
                    }, onClose: (view) => {
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["g" /* focusTabGroup */])(group);
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["d" /* closeView */])(view);
                    } });
            });
        }
        const editorPanes = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__Split__["a" /* Split */], { name: "Editors", orientation: __WEBPACK_IMPORTED_MODULE_9__Split__["b" /* SplitOrientation */].Vertical, defaultSplit: {
                min: 128,
            }, splits: this.state.editorSplits, onChange: (splits) => {
                this.setState({ editorSplits: splits });
                Object(__WEBPACK_IMPORTED_MODULE_10__util__["f" /* layout */])();
            } }, makeEditorPanes());
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_18__Toasts__["a" /* ToastContainer */], { ref: (ref) => this.toastContainer = ref }),
            this.state.newProjectDialog &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_20__NewProjectDialog__["a" /* NewProjectDialog */], { isOpen: true, onCancel: () => {
                        this.setState({ newProjectDialog: null });
                    }, onCreate: async (template) => {
                        if (!template.project) {
                            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["j" /* logLn */])("Template doesn't contain a project definition.", "error");
                        }
                        else {
                            await Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["m" /* openProjectFiles */])(template.project);
                        }
                        this.setState({ newProjectDialog: false });
                    } }),
            this.state.newFileDialogDirectory &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_15__NewFileDialog__["a" /* NewFileDialog */], { isOpen: true, directory: this.state.newFileDialogDirectory, onCancel: () => {
                        this.setState({ newFileDialogDirectory: null });
                    }, onCreate: (file) => {
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["b" /* addFileTo */])(file, this.state.newFileDialogDirectory.getModel());
                        this.setState({ newFileDialogDirectory: null });
                    } }),
            this.state.editFileDialogFile &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_16__EditFileDialog__["a" /* EditFileDialog */], { isOpen: true, file: this.state.editFileDialogFile, onCancel: () => {
                        this.setState({ editFileDialogFile: null });
                    }, onChange: (name, description) => {
                        const file = this.state.editFileDialogFile.getModel();
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["t" /* updateFileNameAndDescription */])(file, name, description);
                        this.setState({ editFileDialogFile: null });
                    } }),
            this.state.shareDialog &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_19__ShareDialog__["a" /* ShareDialog */], { isOpen: true, fiddle: this.state.fiddle, onCancel: () => {
                        this.setState({ shareDialog: false });
                    } }),
            this.state.uploadFileDialogDirectory &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_17__UploadFileDialog__["a" /* UploadFileDialog */], { isOpen: true, directory: this.state.uploadFileDialogDirectory, onCancel: () => {
                        this.setState({ uploadFileDialogDirectory: null });
                    }, onUpload: (files) => {
                        files.map((file) => {
                            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["b" /* addFileTo */])(file, this.state.uploadFileDialogDirectory.getModel());
                        });
                        this.setState({ uploadFileDialogDirectory: null });
                    } }),
            this.state.newDirectoryDialog &&
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_21__NewDirectoryDialog__["a" /* NewDirectoryDialog */], { isOpen: true, directory: this.state.newDirectoryDialog, onCancel: () => {
                        this.setState({ newDirectoryDialog: null });
                    }, onCreate: (directory) => {
                        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["b" /* addFileTo */])(directory, this.state.newDirectoryDialog.getModel());
                        this.setState({ newDirectoryDialog: null });
                    } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: "calc(100% - 22px)" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__Split__["a" /* Split */], { name: "Workspace", orientation: __WEBPACK_IMPORTED_MODULE_9__Split__["b" /* SplitOrientation */].Vertical, splits: this.state.workspaceSplits, onChange: (splits) => {
                        this.setState({ workspaceSplits: splits });
                        Object(__WEBPACK_IMPORTED_MODULE_10__util__["f" /* layout */])();
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Workspace__["a" /* Workspace */], { project: this.state.project, file: this.state.file, onNewFile: (directory) => {
                            this.setState({ newFileDialogDirectory: __WEBPACK_IMPORTED_MODULE_7__model__["e" /* ModelRef */].getRef(directory) });
                        }, onEditFile: (file) => {
                            this.setState({ editFileDialogFile: __WEBPACK_IMPORTED_MODULE_7__model__["e" /* ModelRef */].getRef(file) });
                        }, onDeleteFile: (file) => {
                            let message = "";
                            if (file instanceof __WEBPACK_IMPORTED_MODULE_7__model__["a" /* Directory */]) {
                                message = `Are you sure you want to delete '${file.name}' and its contents?`;
                            }
                            else {
                                message = `Are you sure you want to delete '${file.name}'?`;
                            }
                            if (confirm(message)) {
                                Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["e" /* deleteFile */])(file);
                            }
                        }, onClickFile: (file) => {
                            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["k" /* openFile */])(file, Object(__WEBPACK_IMPORTED_MODULE_4__editor_View__["c" /* defaultViewTypeForFileType */])(file.type));
                        }, onDoubleClickFile: (file) => {
                            if (file instanceof __WEBPACK_IMPORTED_MODULE_7__model__["a" /* Directory */]) {
                                return;
                            }
                            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["k" /* openFile */])(file, Object(__WEBPACK_IMPORTED_MODULE_4__editor_View__["c" /* defaultViewTypeForFileType */])(file.type), false);
                        }, onMoveFile: (file, directory) => {
                            Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["b" /* addFileTo */])(file, directory);
                        }, onUploadFile: (directory) => {
                            this.setState({ uploadFileDialogDirectory: __WEBPACK_IMPORTED_MODULE_7__model__["e" /* ModelRef */].getRef(directory) });
                        }, onNewDirectory: (directory) => {
                            this.setState({ newDirectoryDialog: __WEBPACK_IMPORTED_MODULE_7__model__["e" /* ModelRef */].getRef(directory) });
                        }, onCreateGist: (fileOrDirectory) => {
                            this.gist(fileOrDirectory);
                        } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: "40px" } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Toolbar__["a" /* Toolbar */], null, this.makeToolbarButtons())),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: "calc(100% - 40px)" } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__Split__["a" /* Split */], { name: "Console", orientation: __WEBPACK_IMPORTED_MODULE_9__Split__["b" /* SplitOrientation */].Horizontal, splits: this.state.controlCenterSplits, onChange: (splits) => {
                                    this.setState({ controlCenterSplits: splits });
                                    Object(__WEBPACK_IMPORTED_MODULE_10__util__["f" /* layout */])();
                                } },
                                editorPanes,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_22__ControlCenter__["a" /* ControlCenter */], { onToggle: () => {
                                        const splits = this.state.controlCenterSplits;
                                        splits[1].value = splits[1].value === 40 ? 256 : 40;
                                        this.setState({ controlCenterSplits: splits });
                                        Object(__WEBPACK_IMPORTED_MODULE_10__util__["f" /* layout */])();
                                    } })))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_23__StatusBar__["a" /* StatusBar */], null));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DirectoryTree__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Split__ = __webpack_require__(14);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */




class Workspace extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            showProject: false,
            showFiles: true,
            splits: []
        };
    }
    render() {
        const project = this.props.project;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "workspaceContainer" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* Header */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: "calc(100% - 41px)" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Split__["a" /* Split */], { name: "Workspace", orientation: __WEBPACK_IMPORTED_MODULE_3__Split__["b" /* SplitOrientation */].Horizontal, splits: this.state.splits, onChange: (splits) => {
                        this.setState({ splits: splits });
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__DirectoryTree__["a" /* DirectoryTree */], { directory: project, value: this.props.file, onNewFile: this.props.onNewFile, onNewDirectory: this.props.onNewDirectory, onEditFile: this.props.onEditFile, onDeleteFile: this.props.onDeleteFile, onUploadFile: this.props.onUploadFile, onMoveFile: this.props.onMoveFile, onClickFile: (file) => {
                            this.props.onClickFile(file);
                        }, onDoubleClickFile: (file) => {
                            this.props.onDoubleClickFile(file);
                        }, onCreateGist: this.props.onCreateGist }))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Workspace;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Header extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "wasmStudioHeader" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "waHeaderText" }, "WebAssembly Studio"));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(35)
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(36)

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(37);
var balanced = __webpack_require__(38);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getConfig;
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const configUrl = "./config.json";
let config;
async function getConfig() {
    if (!config) {
        config = await fetch(configUrl).then(resp => resp.json());
    }
    return config;
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isZlibData;
/* harmony export (immutable) */ __webpack_exports__["a"] = decompressZlib;
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function isZlibData(data) {
    const [firstByte, secondByte] = data;
    return firstByte === 0x78 && (secondByte === 0x01 || secondByte === 0x9C || secondByte === 0xDA);
}
async function decompressZlib(data) {
    const { inflate } = await __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 85));
    return inflate(data);
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = gaEvent;
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function gaEvent(action, category, label, value) {
    if (typeof gtag !== "function") {
        return;
    }
    gtag("event", action, {
        event_category: category,
        event_label: label,
        value,
    });
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DragOverEffect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragOverBubble; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_monaco_editor__);
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


class ContextMenuEvent {
    constructor(posx, posy, target) {
        this._posx = posx;
        this._posy = posy;
        this._target = target;
    }
    preventDefault() {
        // no-op
    }
    stopPropagation() {
        // no-op
    }
    get posx() {
        return this._posx;
    }
    get posy() {
        return this._posy;
    }
    get target() {
        return this._target;
    }
}
/* unused harmony export ContextMenuEvent */

class MouseContextMenuEvent extends ContextMenuEvent {
    constructor(originalEvent) {
        super(originalEvent.posx, originalEvent.posy, originalEvent.target);
        this.originalEvent = originalEvent;
    }
    preventDefault() {
        this.originalEvent.preventDefault();
    }
    stopPropagation() {
        this.originalEvent.stopPropagation();
    }
}
/* unused harmony export MouseContextMenuEvent */

class KeyboardContextMenuEvent extends ContextMenuEvent {
    constructor(posx, posy, originalEvent) {
        super(posx, posy, originalEvent.target);
        this.originalEvent = originalEvent;
    }
    preventDefault() {
        this.originalEvent.preventDefault();
    }
    stopPropagation() {
        this.originalEvent.stopPropagation();
    }
}
/* unused harmony export KeyboardContextMenuEvent */

var DragOverEffect;
(function (DragOverEffect) {
    DragOverEffect[DragOverEffect["COPY"] = 0] = "COPY";
    DragOverEffect[DragOverEffect["MOVE"] = 1] = "MOVE";
})(DragOverEffect || (DragOverEffect = {}));
var DragOverBubble;
(function (DragOverBubble) {
    DragOverBubble[DragOverBubble["BUBBLE_DOWN"] = 0] = "BUBBLE_DOWN";
    DragOverBubble[DragOverBubble["BUBBLE_UP"] = 1] = "BUBBLE_UP";
})(DragOverBubble || (DragOverBubble = {}));
const DRAG_OVER_REJECT = { accept: false };
/* unused harmony export DRAG_OVER_REJECT */

const DRAG_OVER_ACCEPT = { accept: true };
/* unused harmony export DRAG_OVER_ACCEPT */

const DRAG_OVER_ACCEPT_BUBBLE_UP = { accept: true, bubble: DragOverBubble.BUBBLE_UP };
/* unused harmony export DRAG_OVER_ACCEPT_BUBBLE_UP */

const DRAG_OVER_ACCEPT_BUBBLE_DOWN = (autoExpand = false) => ({ accept: true, bubble: DragOverBubble.BUBBLE_DOWN, autoExpand });
/* unused harmony export DRAG_OVER_ACCEPT_BUBBLE_DOWN */

const DRAG_OVER_ACCEPT_BUBBLE_UP_COPY = { accept: true, bubble: DragOverBubble.BUBBLE_UP, effect: DragOverEffect.COPY };
/* unused harmony export DRAG_OVER_ACCEPT_BUBBLE_UP_COPY */

const DRAG_OVER_ACCEPT_BUBBLE_DOWN_COPY = (autoExpand = false) => ({ accept: true, bubble: DragOverBubble.BUBBLE_DOWN, effect: DragOverEffect.COPY, autoExpand });
/* unused harmony export DRAG_OVER_ACCEPT_BUBBLE_DOWN_COPY */



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */



exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(13);

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
        continue;
      }
      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_editor_View__ = __webpack_require__(8);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class Group {
    constructor(view, views = []) {
        this.currentView = view;
        this.views = views;
    }
    open(view, shouldPreview = true) {
        const views = this.views;
        const index = views.indexOf(view);
        if (index >= 0) {
            // Switch to the view if it's already open.
            this.currentView = view;
            if (!shouldPreview) {
                this.preview = null;
            }
            return;
        }
        if (shouldPreview) {
            if (this.preview) {
                // Replace preview file if there is one.
                const previewIndex = views.indexOf(this.preview);
                Object(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* assert */])(previewIndex >= 0);
                this.currentView = this.preview = views[previewIndex] = view;
            }
            else {
                views.push(view);
                this.currentView = this.preview = view;
            }
        }
        else {
            views.push(view);
            this.currentView = view;
            this.preview = null;
        }
    }
    openFile(file, type = __WEBPACK_IMPORTED_MODULE_1__components_editor_View__["b" /* ViewType */].Editor, preview = true) {
        const index = this.views.findIndex(view => view.file === file && view.type === type);
        const view = (index >= 0) ? this.views[index] : new __WEBPACK_IMPORTED_MODULE_1__components_editor_View__["a" /* View */](file, type);
        this.open(view, preview);
    }
    close(view) {
        const i = this.views.indexOf(view);
        if (i < 0) {
            return;
        }
        this.views.splice(i, 1);
        // if (this.currentView.onClose) {
        //   this.currentView.onClose();
        // }
        const numViews = this.views.length;
        this.currentView = numViews ? this.views[Math.min(numViews - 1, i)] : null;
        if (view === this.preview) {
            this.preview = null;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Group;



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export testGulpy */
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class Task {
    constructor(dependencies, promiseMaker) {
        this.dependencies = dependencies;
        this.promiseMaker = promiseMaker;
    }
}
class TaskInstance {
    constructor(task) {
        this.task = task;
        this.promise = null;
    }
    makePromise() {
        if (this.promise) {
            return this.promise;
        }
        return this.promise = this.task.promiseMaker();
    }
}
class GulpySession {
    constructor(gulpy) {
        this.tasks = new Map();
        this.gulpy = gulpy;
    }
    ensureInstance(task) {
        let instance = this.tasks.get(task);
        if (instance) {
            return instance;
        }
        instance = new TaskInstance(task);
        this.tasks.set(task, instance);
        return instance;
    }
    async runInstance(instance) {
        const dependencies = instance.task.dependencies.map(x => this.ensureInstance(x));
        await Promise.all(dependencies.map(x => this.runInstance(x)));
        return instance.makePromise();
    }
    async run(task) {
        return this.runInstance(this.ensureInstance(task));
    }
}
class Gulpy {
    constructor() {
        this.tasks = {};
    }
    task(name, a, b) {
        let dependencies = [];
        let fn = null;
        if (arguments.length === 3) {
            dependencies = a;
            fn = b;
        }
        else if (arguments.length === 2) {
            if (Array.isArray(a)) {
                dependencies = a;
                fn = b || (() => { });
            }
            else {
                fn = a;
            }
        }
        this.tasks[name] = new Task(dependencies.map(x => this.tasks[x]), fn);
    }
    series(tasks) {
        return null;
    }
    parallel(tasks) {
        return null;
    }
    hasTask(name) {
        return name in this.tasks;
    }
    async run(name) {
        const session = new GulpySession(this);
        await session.run(this.tasks[name]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Gulpy;

function testGulpy() {
    const gulp = new Gulpy();
    gulp.task("b", () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Running Task B " + performance.now());
                resolve();
            }, 50);
        });
    });
    gulp.task("c", [], () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Running Task C " + performance.now());
                resolve();
            }, 100);
        });
    });
    gulp.task("a", ["b", "c"], () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Running Task A " + performance.now());
                resolve();
            }, 200);
        });
    });
    gulp.run("a");
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const Errors = {
    BuildFileMissing: "Build File (build.ts / build.js) is missing."
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Errors;



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Parts Copyright (C) 2011-2012, Alex Russell (slightlyoff@chromium.org)
 * Parts Copyright (C) Copyright (C) 1998-2000 Greg J. Badros
 *
 * Use of this source code is governed by the LGPL, which can be found in the
 * COPYING.LGPL file.
 *
 * This is a compiled version of Cassowary/JS. For source versions or to
 * contribute, see the github project:
 *
 *  https://github.com/slightlyoff/cassowary-js-refactor
 *
 */

(function() {
(function(a){"use strict";try{(function(){}).bind(a)}catch(b){Object.defineProperty(Function.prototype,"bind",{value:function(a){var b=this;return function(){return b.apply(a,arguments)}},enumerable:!1,configurable:!0,writable:!0})}var c=a.HTMLElement!==void 0,d=function(a){for(var b=null;a&&a!=Object.prototype;){if(a.tagName){b=a.tagName;break}a=a.prototype}return b||"div"},e=1e-8,f={},g=function(a,b){if(a&&b){if("function"==typeof a[b])return a[b];var c=a.prototype;if(c&&"function"==typeof c[b])return c[b];if(c!==Object.prototype&&c!==Function.prototype)return"function"==typeof a.__super__?g(a.__super__,b):void 0}},h=a.c={debug:!1,trace:!1,verbose:!1,traceAdded:!1,GC:!1,GEQ:1,LEQ:2,inherit:function(b){var e=null,g=null;b["extends"]&&(g=b["extends"],delete b["extends"]),b.initialize&&(e=b.initialize,delete b.initialize);var h=e||function(){};Object.defineProperty(h,"__super__",{value:g?g:Object,enumerable:!1,configurable:!0,writable:!1}),b._t&&(f[b._t]=h);var i=h.prototype=Object.create(g?g.prototype:Object.prototype);if(this.extend(i,b),c&&g&&g.prototype instanceof a.HTMLElement){var j=h,k=d(i),l=function(a){return a.__proto__=i,j.apply(a,arguments),i.created&&a.created(),i.decorate&&a.decorate(),a};this.extend(i,{upgrade:l}),h=function(){return l(a.document.createElement(k))},h.prototype=i,this.extend(h,{ctor:j})}return h},extend:function(a,b){return this.own(b,function(c){var d=Object.getOwnPropertyDescriptor(b,c);try{"function"==typeof d.get||"function"==typeof d.set?Object.defineProperty(a,c,d):"function"==typeof d.value||"_"===c.charAt(0)?(d.writable=!0,d.configurable=!0,d.enumerable=!1,Object.defineProperty(a,c,d)):a[c]=b[c]}catch(e){}}),a},own:function(b,c,d){return Object.getOwnPropertyNames(b).forEach(c,d||a),b},traceprint:function(a){h.verbose&&console.log(a)},fnenterprint:function(a){console.log("* "+a)},fnexitprint:function(a){console.log("- "+a)},assert:function(a,b){if(!a)throw new h.InternalError("Assertion failed: "+b)},plus:function(a,b){return a instanceof h.Expression||(a=new h.Expression(a)),b instanceof h.Expression||(b=new h.Expression(b)),a.plus(b)},minus:function(a,b){return a instanceof h.Expression||(a=new h.Expression(a)),b instanceof h.Expression||(b=new h.Expression(b)),a.minus(b)},times:function(a,b){return("number"==typeof a||a instanceof h.Variable)&&(a=new h.Expression(a)),("number"==typeof b||b instanceof h.Variable)&&(b=new h.Expression(b)),a.times(b)},divide:function(a,b){return("number"==typeof a||a instanceof h.Variable)&&(a=new h.Expression(a)),("number"==typeof b||b instanceof h.Variable)&&(b=new h.Expression(b)),a.divide(b)},approx:function(a,b){if(a===b)return!0;var c,d;return c=a instanceof h.Variable?a.value:a,d=b instanceof h.Variable?b.value:b,0==c?e>Math.abs(d):0==d?e>Math.abs(c):Math.abs(c-d)<Math.abs(c)*e},_inc:function(a){return function(){return a++}}(0),parseJSON:function(a){return JSON.parse(a,function(a,b){if("object"!=typeof b||"string"!=typeof b._t)return b;var c=b._t,d=f[c];if(c&&d){var e=g(d,"fromJSON");if(e)return e(b,d)}return b})}};"function"=="function"&&"undefined"!=typeof module&&"undefined"==typeof load&&(a.exports=h)})(this),function(a){"use strict";var b=function(a){var b=a.hashCode?a.hashCode:""+a;return b},c=function(a,b){Object.keys(a).forEach(function(c){b[c]=a[c]})},d={};a.HashTable=a.inherit({initialize:function(){this.size=0,this._store={},this._keyStrMap={},this._deleted=0},set:function(a,c){var d=b(a);this._store.hasOwnProperty(d)||this.size++,this._store[d]=c,this._keyStrMap[d]=a},get:function(a){if(!this.size)return null;a=b(a);var c=this._store[a];return c!==void 0?this._store[a]:null},clear:function(){this.size=0,this._store={},this._keyStrMap={}},_compact:function(){var a={};c(this._store,a),this._store=a},_compactThreshold:100,_perhapsCompact:function(){this._size>64||this._deleted>this._compactThreshold&&(this._compact(),this._deleted=0)},"delete":function(a){a=b(a),this._store.hasOwnProperty(a)&&(this._deleted++,delete this._store[a],this.size>0&&this.size--)},each:function(a,b){if(this.size){this._perhapsCompact();var c=this._store,d=this._keyStrMap;Object.keys(this._store).forEach(function(e){a.call(b||null,d[e],c[e])},this)}},escapingEach:function(a,b){if(this.size){this._perhapsCompact();for(var c=this,e=this._store,f=this._keyStrMap,g=d,h=Object.keys(e),i=0;h.length>i;i++)if(function(d){c._store.hasOwnProperty(d)&&(g=a.call(b||null,f[d],e[d]))}(h[i]),g){if(void 0!==g.retval)return g;if(g.brk)break}}},clone:function(){var b=new a.HashTable;return this.size&&(b.size=this.size,c(this._store,b._store),c(this._keyStrMap,b._keyStrMap)),b},equals:function(b){if(b===this)return!0;if(!(b instanceof a.HashTable)||b._size!==this._size)return!1;for(var c=Object.keys(this._store),d=0;c.length>d;d++){var e=c[d];if(this._keyStrMap[e]!==b._keyStrMap[e]||this._store[e]!==b._store[e])return!1}return!0},toString:function(){var b="";return this.each(function(a,c){b+=a+" => "+c+"\n"}),b}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.HashSet=a.inherit({_t:"c.HashSet",initialize:function(){this.storage=[],this.size=0},add:function(a){var b=this.storage;b.indexOf(a),-1==b.indexOf(a)&&b.push(a),this.size=this.storage.length},values:function(){return this.storage},has:function(a){var b=this.storage;return-1!=b.indexOf(a)},"delete":function(a){var b=this.storage.indexOf(a);return-1==b?null:(this.storage.splice(b,1)[0],this.size=this.storage.length,void 0)},clear:function(){this.storage.length=0},each:function(a,b){this.size&&this.storage.forEach(a,b)},escapingEach:function(a,b){this.size&&this.storage.forEach(a,b)},toString:function(){var a=this.size+" {",b=!0;return this.each(function(c){b?b=!1:a+=", ",a+=c}),a+="}\n"},toJSON:function(){var a=[];return this.each(function(b){a.push(b.toJSON())}),{_t:"c.HashSet",data:a}},fromJSON:function(b){var c=new a.HashSet;return b.data&&(c.size=b.data.length,c.storage=b.data),c}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Error=a.inherit({initialize:function(a){a&&(this._description=a)},_name:"c.Error",_description:"An error has occured in Cassowary",set description(a){this._description=a},get description(){return"("+this._name+") "+this._description},get message(){return this.description},toString:function(){return this.description}});var b=function(b,c){return a.inherit({"extends":a.Error,initialize:function(){a.Error.apply(this,arguments)},_name:b||"",_description:c||""})};a.ConstraintNotFound=b("c.ConstraintNotFound","Tried to remove a constraint never added to the tableu"),a.InternalError=b("c.InternalError"),a.NonExpression=b("c.NonExpression","The resulting expression would be non"),a.NotEnoughStays=b("c.NotEnoughStays","There are not enough stays to give specific values to every variable"),a.RequiredFailure=b("c.RequiredFailure","A required constraint cannot be satisfied"),a.TooDifficult=b("c.TooDifficult","The constraints are too difficult to solve")}(this.c||module.parent.exports||{}),function(a){"use strict";var b=1e3;a.SymbolicWeight=a.inherit({_t:"c.SymbolicWeight",initialize:function(){this.value=0;for(var a=1,c=arguments.length-1;c>=0;--c)this.value+=arguments[c]*a,a*=b},toJSON:function(){return{_t:this._t,value:this.value}}})}(this.c||module.parent.exports||{}),function(a){a.Strength=a.inherit({initialize:function(b,c,d,e){this.name=b,this.symbolicWeight=c instanceof a.SymbolicWeight?c:new a.SymbolicWeight(c,d,e)},get required(){return this===a.Strength.required},toString:function(){return this.name+(this.isRequired?"":":"+this.symbolicWeight)}}),a.Strength.required=new a.Strength("<Required>",1e3,1e3,1e3),a.Strength.strong=new a.Strength("strong",1,0,0),a.Strength.medium=new a.Strength("medium",0,1,0),a.Strength.weak=new a.Strength("weak",0,0,1)}(this.c||( true?module.parent.exports.c:{})),function(a){"use strict";a.AbstractVariable=a.inherit({isDummy:!1,isExternal:!1,isPivotable:!1,isRestricted:!1,_init:function(b,c){this.hashCode=a._inc(),this.name=(c||"")+this.hashCode,b&&(b.name!==void 0&&(this.name=b.name),b.value!==void 0&&(this.value=b.value),b.prefix!==void 0&&(this._prefix=b.prefix))},_prefix:"",name:"",value:0,toJSON:function(){var a={};return this._t&&(a._t=this._t),this.name&&(a.name=this.name),this.value!==void 0&&(a.value=this.value),this._prefix&&(a._prefix=this._prefix),this._t&&(a._t=this._t),a},fromJSON:function(b,c){var d=new c;return a.extend(d,b),d},toString:function(){return this._prefix+"["+this.name+":"+this.value+"]"}}),a.Variable=a.inherit({_t:"c.Variable","extends":a.AbstractVariable,initialize:function(b){this._init(b,"v");var c=a.Variable._map;c&&(c[this.name]=this)},isExternal:!0}),a.DummyVariable=a.inherit({_t:"c.DummyVariable","extends":a.AbstractVariable,initialize:function(a){this._init(a,"d")},isDummy:!0,isRestricted:!0,value:"dummy"}),a.ObjectiveVariable=a.inherit({_t:"c.ObjectiveVariable","extends":a.AbstractVariable,initialize:function(a){this._init(a,"o")},value:"obj"}),a.SlackVariable=a.inherit({_t:"c.SlackVariable","extends":a.AbstractVariable,initialize:function(a){this._init(a,"s")},isPivotable:!0,isRestricted:!0,value:"slack"})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Point=a.inherit({initialize:function(b,c,d){if(b instanceof a.Variable)this._x=b;else{var e={value:b};d&&(e.name="x"+d),this._x=new a.Variable(e)}if(c instanceof a.Variable)this._y=c;else{var f={value:c};d&&(f.name="y"+d),this._y=new a.Variable(f)}},get x(){return this._x},set x(b){b instanceof a.Variable?this._x=b:this._x.value=b},get y(){return this._y},set y(b){b instanceof a.Variable?this._y=b:this._y.value=b},toString:function(){return"("+this.x+", "+this.y+")"}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Expression=a.inherit({initialize:function(b,c,d){a.GC&&console.log("new c.Expression"),this.constant="number"!=typeof d||isNaN(d)?0:d,this.terms=new a.HashTable,b instanceof a.AbstractVariable?this.setVariable(b,"number"==typeof c?c:1):"number"==typeof b&&(isNaN(b)?console.trace():this.constant=b)},initializeFromHash:function(b,c){return a.verbose&&(console.log("*******************************"),console.log("clone c.initializeFromHash"),console.log("*******************************")),a.GC&&console.log("clone c.Expression"),this.constant=b,this.terms=c.clone(),this},multiplyMe:function(a){this.constant*=a;var b=this.terms;return b.each(function(c,d){b.set(c,d*a)}),this},clone:function(){a.verbose&&(console.log("*******************************"),console.log("clone c.Expression"),console.log("*******************************"));var b=new a.Expression;return b.initializeFromHash(this.constant,this.terms),b},times:function(b){if("number"==typeof b)return this.clone().multiplyMe(b);if(this.isConstant)return b.times(this.constant);if(b.isConstant)return this.times(b.constant);throw new a.NonExpression},plus:function(b){return b instanceof a.Expression?this.clone().addExpression(b,1):b instanceof a.Variable?this.clone().addVariable(b,1):void 0},minus:function(b){return b instanceof a.Expression?this.clone().addExpression(b,-1):b instanceof a.Variable?this.clone().addVariable(b,-1):void 0},divide:function(b){if("number"==typeof b){if(a.approx(b,0))throw new a.NonExpression;return this.times(1/b)}if(b instanceof a.Expression){if(!b.isConstant)throw new a.NonExpression;return this.times(1/b.constant)}},addExpression:function(b,c,d,e){return b instanceof a.AbstractVariable&&(b=new a.Expression(b),a.trace&&console.log("addExpression: Had to cast a var to an expression")),c=c||1,this.constant+=c*b.constant,b.terms.each(function(a,b){this.addVariable(a,b*c,d,e)},this),this},addVariable:function(b,c,d,e){null==c&&(c=1),a.trace&&console.log("c.Expression::addVariable():",b,c);var f=this.terms.get(b);if(f){var g=f+c;0==g||a.approx(g,0)?(e&&e.noteRemovedVariable(b,d),this.terms.delete(b)):this.setVariable(b,g)}else a.approx(c,0)||(this.setVariable(b,c),e&&e.noteAddedVariable(b,d));return this},setVariable:function(a,b){return this.terms.set(a,b),this},anyPivotableVariable:function(){if(this.isConstant)throw new a.InternalError("anyPivotableVariable called on a constant");var b=this.terms.escapingEach(function(a){return a.isPivotable?{retval:a}:void 0});return b&&void 0!==b.retval?b.retval:null},substituteOut:function(b,c,d,e){a.trace&&(a.fnenterprint("CLE:substituteOut: "+b+", "+c+", "+d+", ..."),a.traceprint("this = "+this));var f=this.setVariable.bind(this),g=this.terms,h=g.get(b);g.delete(b),this.constant+=h*c.constant,c.terms.each(function(b,c){var i=g.get(b);if(i){var j=i+h*c;a.approx(j,0)?(e.noteRemovedVariable(b,d),g.delete(b)):f(b,j)}else f(b,h*c),e&&e.noteAddedVariable(b,d)}),a.trace&&a.traceprint("Now this is "+this)},changeSubject:function(a,b){this.setVariable(a,this.newSubject(b))},newSubject:function(b){a.trace&&a.fnenterprint("newSubject:"+b);var c=1/this.terms.get(b);return this.terms.delete(b),this.multiplyMe(-c),c},coefficientFor:function(a){return this.terms.get(a)||0},get isConstant(){return 0==this.terms.size},toString:function(){var b="",c=!1;if(!a.approx(this.constant,0)||this.isConstant){if(b+=this.constant,this.isConstant)return b;c=!0}return this.terms.each(function(a,d){c&&(b+=" + "),b+=d+"*"+a,c=!0}),b},equals:function(b){return b===this?!0:b instanceof a.Expression&&b.constant===this.constant&&b.terms.equals(this.terms)},Plus:function(a,b){return a.plus(b)},Minus:function(a,b){return a.minus(b)},Times:function(a,b){return a.times(b)},Divide:function(a,b){return a.divide(b)}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.AbstractConstraint=a.inherit({initialize:function(b,c){this.hashCode=a._inc(),this.strength=b||a.Strength.required,this.weight=c||1},isEditConstraint:!1,isInequality:!1,isStayConstraint:!1,get required(){return this.strength===a.Strength.required},toString:function(){return this.strength+" {"+this.weight+"} ("+this.expression+")"}});var b=a.AbstractConstraint.prototype.toString,c=function(b,c,d){a.AbstractConstraint.call(this,c||a.Strength.strong,d),this.variable=b,this.expression=new a.Expression(b,-1,b.value)};a.EditConstraint=a.inherit({"extends":a.AbstractConstraint,initialize:function(){c.apply(this,arguments)},isEditConstraint:!0,toString:function(){return"edit:"+b.call(this)}}),a.StayConstraint=a.inherit({"extends":a.AbstractConstraint,initialize:function(){c.apply(this,arguments)},isStayConstraint:!0,toString:function(){return"stay:"+b.call(this)}});var d=a.Constraint=a.inherit({"extends":a.AbstractConstraint,initialize:function(b,c,d){a.AbstractConstraint.call(this,c,d),this.expression=b}});a.Inequality=a.inherit({"extends":a.Constraint,_cloneOrNewCle:function(b){return b.clone?b.clone():new a.Expression(b)},initialize:function(b,c,e,f,g){var h=b instanceof a.Expression,i=e instanceof a.Expression,j=b instanceof a.AbstractVariable,k=e instanceof a.AbstractVariable,l="number"==typeof b,m="number"==typeof e;if((h||l)&&k){var n=b,o=c,p=e,q=f,r=g;if(d.call(this,this._cloneOrNewCle(n),q,r),o==a.LEQ)this.expression.multiplyMe(-1),this.expression.addVariable(p);else{if(o!=a.GEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addVariable(p,-1)}}else if(j&&(i||m)){var n=e,o=c,p=b,q=f,r=g;if(d.call(this,this._cloneOrNewCle(n),q,r),o==a.GEQ)this.expression.multiplyMe(-1),this.expression.addVariable(p);else{if(o!=a.LEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addVariable(p,-1)}}else{if(h&&m){var s=b,o=c,t=e,q=f,r=g;if(d.call(this,this._cloneOrNewCle(s),q,r),o==a.LEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(t));else{if(o!=a.GEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(t),-1)}return this}if(l&&i){var s=e,o=c,t=b,q=f,r=g;if(d.call(this,this._cloneOrNewCle(s),q,r),o==a.GEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(t));else{if(o!=a.LEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(t),-1)}return this}if(h&&i){var s=b,o=c,t=e,q=f,r=g;if(d.call(this,this._cloneOrNewCle(t),q,r),o==a.GEQ)this.expression.multiplyMe(-1),this.expression.addExpression(this._cloneOrNewCle(s));else{if(o!=a.LEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");this.expression.addExpression(this._cloneOrNewCle(s),-1)}}else{if(h)return d.call(this,b,c,e);if(c==a.GEQ)d.call(this,new a.Expression(e),f,g),this.expression.multiplyMe(-1),this.expression.addVariable(b);else{if(c!=a.LEQ)throw new a.InternalError("Invalid operator in c.Inequality constructor");d.call(this,new a.Expression(e),f,g),this.expression.addVariable(b,-1)}}}},isInequality:!0,toString:function(){return d.prototype.toString.call(this)+" >= 0) id: "+this.hashCode}}),a.Equation=a.inherit({"extends":a.Constraint,initialize:function(b,c,e,f){if(b instanceof a.Expression&&!c||c instanceof a.Strength)d.call(this,b,c,e);else if(b instanceof a.AbstractVariable&&c instanceof a.Expression){var g=b,h=c,i=e,j=f;d.call(this,h.clone(),i,j),this.expression.addVariable(g,-1)}else if(b instanceof a.AbstractVariable&&"number"==typeof c){var g=b,k=c,i=e,j=f;d.call(this,new a.Expression(k),i,j),this.expression.addVariable(g,-1)}else if(b instanceof a.Expression&&c instanceof a.AbstractVariable){var h=b,g=c,i=e,j=f;d.call(this,h.clone(),i,j),this.expression.addVariable(g,-1)}else{if(!(b instanceof a.Expression||b instanceof a.AbstractVariable||"number"==typeof b)||!(c instanceof a.Expression||c instanceof a.AbstractVariable||"number"==typeof c))throw"Bad initializer to c.Equation";b=b instanceof a.Expression?b.clone():new a.Expression(b),c=c instanceof a.Expression?c.clone():new a.Expression(c),d.call(this,b,e,f),this.expression.addExpression(c,-1)}a.assert(this.strength instanceof a.Strength,"_strength not set")},toString:function(){return d.prototype.toString.call(this)+" = 0)"}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.EditInfo=a.inherit({initialize:function(a,b,c,d,e){this.constraint=a,this.editPlus=b,this.editMinus=c,this.prevEditConstant=d,this.index=e},toString:function(){return"<cn="+this.constraint+", ep="+this.editPlus+", em="+this.editMinus+", pec="+this.prevEditConstant+", index="+this.index+">"}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Tableau=a.inherit({initialize:function(){this.columns=new a.HashTable,this.rows=new a.HashTable,this._infeasibleRows=new a.HashSet,this._externalRows=new a.HashSet,this._externalParametricVars=new a.HashSet},noteRemovedVariable:function(b,c){a.trace&&console.log("c.Tableau::noteRemovedVariable: ",b,c);var d=this.columns.get(b);c&&d&&d.delete(c)},noteAddedVariable:function(a,b){b&&this.insertColVar(a,b)},getInternalInfo:function(){var a="Tableau Information:\n";return a+="Rows: "+this.rows.size,a+=" (= "+(this.rows.size-1)+" constraints)",a+="\nColumns: "+this.columns.size,a+="\nInfeasible Rows: "+this._infeasibleRows.size,a+="\nExternal basic variables: "+this._externalRows.size,a+="\nExternal parametric variables: ",a+=this._externalParametricVars.size,a+="\n"},toString:function(){var a="Tableau:\n";return this.rows.each(function(b,c){a+=b,a+=" <==> ",a+=c,a+="\n"}),a+="\nColumns:\n",a+=this.columns,a+="\nInfeasible rows: ",a+=this._infeasibleRows,a+="External basic variables: ",a+=this._externalRows,a+="External parametric variables: ",a+=this._externalParametricVars},insertColVar:function(b,c){var d=this.columns.get(b);d||(d=new a.HashSet,this.columns.set(b,d)),d.add(c)},addRow:function(b,c){a.trace&&a.fnenterprint("addRow: "+b+", "+c),this.rows.set(b,c),c.terms.each(function(a){this.insertColVar(a,b),a.isExternal&&this._externalParametricVars.add(a)},this),b.isExternal&&this._externalRows.add(b),a.trace&&a.traceprint(""+this)},removeColumn:function(b){a.trace&&a.fnenterprint("removeColumn:"+b);var c=this.columns.get(b);c?(this.columns.delete(b),c.each(function(a){var c=this.rows.get(a);c.terms.delete(b)},this)):a.trace&&console.log("Could not find var",b,"in columns"),b.isExternal&&(this._externalRows.delete(b),this._externalParametricVars.delete(b))},removeRow:function(b){a.trace&&a.fnenterprint("removeRow:"+b);var c=this.rows.get(b);return a.assert(null!=c),c.terms.each(function(c){var e=this.columns.get(c);null!=e&&(a.trace&&console.log("removing from varset:",b),e.delete(b))},this),this._infeasibleRows.delete(b),b.isExternal&&this._externalRows.delete(b),this.rows.delete(b),a.trace&&a.fnexitprint("returning "+c),c},substituteOut:function(b,c){a.trace&&a.fnenterprint("substituteOut:"+b+", "+c),a.trace&&a.traceprint(""+this);var d=this.columns.get(b);d.each(function(a){var d=this.rows.get(a);d.substituteOut(b,c,a,this),a.isRestricted&&0>d.constant&&this._infeasibleRows.add(a)},this),b.isExternal&&(this._externalRows.add(b),this._externalParametricVars.delete(b)),this.columns.delete(b)},columnsHasKey:function(a){return!!this.columns.get(a)}})}(this.c||module.parent.exports||{}),function(a){var b=a.Tableau,c=b.prototype,d=1e-8,e=a.Strength.weak;a.SimplexSolver=a.inherit({"extends":a.Tableau,initialize:function(){a.Tableau.call(this),this._stayMinusErrorVars=[],this._stayPlusErrorVars=[],this._errorVars=new a.HashTable,this._markerVars=new a.HashTable,this._objective=new a.ObjectiveVariable({name:"Z"}),this._editVarMap=new a.HashTable,this._editVarList=[],this._slackCounter=0,this._artificialCounter=0,this._dummyCounter=0,this.autoSolve=!0,this._fNeedsSolving=!1,this._optimizeCount=0,this.rows.set(this._objective,new a.Expression),this._stkCedcns=[0],a.trace&&a.traceprint("objective expr == "+this.rows.get(this._objective))},addLowerBound:function(b,c){var d=new a.Inequality(b,a.GEQ,new a.Expression(c));return this.addConstraint(d)},addUpperBound:function(b,c){var d=new a.Inequality(b,a.LEQ,new a.Expression(c));return this.addConstraint(d)},addBounds:function(a,b,c){return this.addLowerBound(a,b),this.addUpperBound(a,c),this},add:function(){for(var a=0;arguments.length>a;a++)this.addConstraint(arguments[a]);return this},addConstraint:function(b){a.trace&&a.fnenterprint("addConstraint: "+b);var c=Array(2),d=Array(1),e=this.newExpression(b,c,d);if(d=d[0],this.tryAddingDirectly(e)||this.addWithArtificialVariable(e),this._fNeedsSolving=!0,b.isEditConstraint){var f=this._editVarMap.size,g=c[0],h=c[1];!g instanceof a.SlackVariable&&console.warn("cvEplus not a slack variable =",g),!h instanceof a.SlackVariable&&console.warn("cvEminus not a slack variable =",h),a.debug&&console.log("new c.EditInfo("+b+", "+g+", "+h+", "+d+", "+f+")");var i=new a.EditInfo(b,g,h,d,f);this._editVarMap.set(b.variable,i),this._editVarList[f]={v:b.variable,info:i}}return this.autoSolve&&(this.optimize(this._objective),this._setExternalVariables()),this},addConstraintNoException:function(b){a.trace&&a.fnenterprint("addConstraintNoException: "+b);try{return this.addConstraint(b),!0}catch(c){return!1}},addEditVar:function(b,c){return a.trace&&a.fnenterprint("addEditVar: "+b+" @ "+c),this.addConstraint(new a.EditConstraint(b,c||a.Strength.strong))},beginEdit:function(){return a.assert(this._editVarMap.size>0,"_editVarMap.size > 0"),this._infeasibleRows.clear(),this._resetStayConstants(),this._stkCedcns.push(this._editVarMap.size),this},endEdit:function(){return a.assert(this._editVarMap.size>0,"_editVarMap.size > 0"),this.resolve(),this._stkCedcns.pop(),this.removeEditVarsTo(this._stkCedcns[this._stkCedcns.length-1]),this},removeAllEditVars:function(){return this.removeEditVarsTo(0)},removeEditVarsTo:function(b){try{for(var c=this._editVarList.length,d=b;c>d;d++)this._editVarList[d]&&this.removeConstraint(this._editVarMap.get(this._editVarList[d].v).constraint);return this._editVarList.length=b,a.assert(this._editVarMap.size==b,"_editVarMap.size == n"),this}catch(e){throw new a.InternalError("Constraint not found in removeEditVarsTo")}},addPointStays:function(b){return a.trace&&console.log("addPointStays",b),b.forEach(function(a,b){this.addStay(a.x,e,Math.pow(2,b)),this.addStay(a.y,e,Math.pow(2,b))},this),this},addStay:function(b,c,d){var f=new a.StayConstraint(b,c||e,d||1);return this.addConstraint(f)},removeConstraint:function(a){return this.removeConstraintInternal(a),this},removeConstraintInternal:function(b){a.trace&&a.fnenterprint("removeConstraintInternal: "+b),a.trace&&a.traceprint(""+this),this._fNeedsSolving=!0,this._resetStayConstants();var c=this.rows.get(this._objective),d=this._errorVars.get(b);a.trace&&a.traceprint("eVars == "+d),null!=d&&d.each(function(e){var f=this.rows.get(e);null==f?c.addVariable(e,-b.weight*b.strength.symbolicWeight.value,this._objective,this):c.addExpression(f,-b.weight*b.strength.symbolicWeight.value,this._objective,this),a.trace&&a.traceprint("now eVars == "+d)},this);var e=this._markerVars.get(b);if(this._markerVars.delete(b),null==e)throw new a.InternalError("Constraint not found in removeConstraintInternal");if(a.trace&&a.traceprint("Looking to remove var "+e),null==this.rows.get(e)){var f=this.columns.get(e);a.trace&&a.traceprint("Must pivot -- columns are "+f);var g=null,h=0;f.each(function(b){if(b.isRestricted){var c=this.rows.get(b),d=c.coefficientFor(e);if(a.trace&&a.traceprint("Marker "+e+"'s coefficient in "+c+" is "+d),0>d){var f=-c.constant/d;(null==g||h>f||a.approx(f,h)&&b.hashCode<g.hashCode)&&(h=f,g=b)}}},this),null==g&&(a.trace&&a.traceprint("exitVar is still null"),f.each(function(a){if(a.isRestricted){var b=this.rows.get(a),c=b.coefficientFor(e),d=b.constant/c;(null==g||h>d)&&(h=d,g=a)}},this)),null==g&&(0==f.size?this.removeColumn(e):f.escapingEach(function(a){return a!=this._objective?(g=a,{brk:!0}):void 0},this)),null!=g&&this.pivot(e,g)}if(null!=this.rows.get(e)&&this.removeRow(e),null!=d&&d.each(function(a){a!=e&&this.removeColumn(a)},this),b.isStayConstraint){if(null!=d)for(var j=0;this._stayPlusErrorVars.length>j;j++)d.delete(this._stayPlusErrorVars[j]),d.delete(this._stayMinusErrorVars[j])}else if(b.isEditConstraint){a.assert(null!=d,"eVars != null");var k=this._editVarMap.get(b.variable);this.removeColumn(k.editMinus),this._editVarMap.delete(b.variable)}return null!=d&&this._errorVars.delete(d),this.autoSolve&&(this.optimize(this._objective),this._setExternalVariables()),this},reset:function(){throw a.trace&&a.fnenterprint("reset"),new a.InternalError("reset not implemented")},resolveArray:function(b){a.trace&&a.fnenterprint("resolveArray"+b);var c=b.length;this._editVarMap.each(function(a,d){var e=d.index;c>e&&this.suggestValue(a,b[e])},this),this.resolve()},resolvePair:function(a,b){this.suggestValue(this._editVarList[0].v,a),this.suggestValue(this._editVarList[1].v,b),this.resolve()},resolve:function(){a.trace&&a.fnenterprint("resolve()"),this.dualOptimize(),this._setExternalVariables(),this._infeasibleRows.clear(),this._resetStayConstants()},suggestValue:function(b,c){a.trace&&console.log("suggestValue("+b+", "+c+")");var d=this._editVarMap.get(b);if(!d)throw new a.Error("suggestValue for variable "+b+", but var is not an edit variable");var e=c-d.prevEditConstant;return d.prevEditConstant=c,this.deltaEditConstant(e,d.editPlus,d.editMinus),this},solve:function(){return this._fNeedsSolving&&(this.optimize(this._objective),this._setExternalVariables()),this},setEditedValue:function(b,c){if(!this.columnsHasKey(b)&&null==this.rows.get(b))return b.value=c,this;if(!a.approx(c,b.value)){this.addEditVar(b),this.beginEdit();try{this.suggestValue(b,c)}catch(d){throw new a.InternalError("Error in setEditedValue")}this.endEdit()}return this},addVar:function(b){if(!this.columnsHasKey(b)&&null==this.rows.get(b)){try{this.addStay(b)}catch(c){throw new a.InternalError("Error in addVar -- required failure is impossible")}a.trace&&a.traceprint("added initial stay on "+b)}return this},getInternalInfo:function(){var a=c.getInternalInfo.call(this);return a+="\nSolver info:\n",a+="Stay Error Variables: ",a+=this._stayPlusErrorVars.length+this._stayMinusErrorVars.length,a+=" ("+this._stayPlusErrorVars.length+" +, ",a+=this._stayMinusErrorVars.length+" -)\n",a+="Edit Variables: "+this._editVarMap.size,a+="\n"},getDebugInfo:function(){return""+this+this.getInternalInfo()+"\n"},toString:function(){var a=c.getInternalInfo.call(this);return a+="\n_stayPlusErrorVars: ",a+="["+this._stayPlusErrorVars+"]",a+="\n_stayMinusErrorVars: ",a+="["+this._stayMinusErrorVars+"]",a+="\n",a+="_editVarMap:\n"+this._editVarMap,a+="\n"},getConstraintMap:function(){return this._markerVars},addWithArtificialVariable:function(b){a.trace&&a.fnenterprint("addWithArtificialVariable: "+b);var c=new a.SlackVariable({value:++this._artificialCounter,prefix:"a"}),d=new a.ObjectiveVariable({name:"az"}),e=b.clone();a.trace&&a.traceprint("before addRows:\n"+this),this.addRow(d,e),this.addRow(c,b),a.trace&&a.traceprint("after addRows:\n"+this),this.optimize(d);var f=this.rows.get(d);if(a.trace&&a.traceprint("azTableauRow.constant == "+f.constant),!a.approx(f.constant,0))throw this.removeRow(d),this.removeColumn(c),new a.RequiredFailure;var g=this.rows.get(c);if(null!=g){if(g.isConstant)return this.removeRow(c),this.removeRow(d),void 0;var h=g.anyPivotableVariable();this.pivot(h,c)}a.assert(null==this.rows.get(c),"rowExpression(av) == null"),this.removeColumn(c),this.removeRow(d)},tryAddingDirectly:function(b){a.trace&&a.fnenterprint("tryAddingDirectly: "+b);var c=this.chooseSubject(b);return null==c?(a.trace&&a.fnexitprint("returning false"),!1):(b.newSubject(c),this.columnsHasKey(c)&&this.substituteOut(c,b),this.addRow(c,b),a.trace&&a.fnexitprint("returning true"),!0)},chooseSubject:function(b){a.trace&&a.fnenterprint("chooseSubject: "+b);var c=null,d=!1,e=!1,f=b.terms,g=f.escapingEach(function(a,b){if(d){if(!a.isRestricted&&!this.columnsHasKey(a))return{retval:a}}else if(a.isRestricted){if(!e&&!a.isDummy&&0>b){var f=this.columns.get(a);(null==f||1==f.size&&this.columnsHasKey(this._objective))&&(c=a,e=!0)}}else c=a,d=!0},this);if(g&&void 0!==g.retval)return g.retval;if(null!=c)return c;var h=0,g=f.escapingEach(function(a,b){return a.isDummy?(this.columnsHasKey(a)||(c=a,h=b),void 0):{retval:null}},this);if(g&&void 0!==g.retval)return g.retval;if(!a.approx(b.constant,0))throw new a.RequiredFailure;return h>0&&b.multiplyMe(-1),c},deltaEditConstant:function(b,c,d){a.trace&&a.fnenterprint("deltaEditConstant :"+b+", "+c+", "+d);var e=this.rows.get(c);if(null!=e)return e.constant+=b,0>e.constant&&this._infeasibleRows.add(c),void 0;var f=this.rows.get(d);if(null!=f)return f.constant+=-b,0>f.constant&&this._infeasibleRows.add(d),void 0;var g=this.columns.get(d);g||console.log("columnVars is null -- tableau is:\n"+this),g.each(function(a){var c=this.rows.get(a),e=c.coefficientFor(d);c.constant+=e*b,a.isRestricted&&0>c.constant&&this._infeasibleRows.add(a)},this)},dualOptimize:function(){a.trace&&a.fnenterprint("dualOptimize:");for(var b=this.rows.get(this._objective);this._infeasibleRows.size;){var c=this._infeasibleRows.values()[0];this._infeasibleRows.delete(c);var d=null,e=this.rows.get(c);if(e&&0>e.constant){var g,f=Number.MAX_VALUE,h=e.terms;if(h.each(function(c,e){if(e>0&&c.isPivotable){var h=b.coefficientFor(c);g=h/e,(f>g||a.approx(g,f)&&c.hashCode<d.hashCode)&&(d=c,f=g)}}),f==Number.MAX_VALUE)throw new a.InternalError("ratio == nil (MAX_VALUE) in dualOptimize");this.pivot(d,c)}}},newExpression:function(b,c,d){a.trace&&(a.fnenterprint("newExpression: "+b),a.traceprint("cn.isInequality == "+b.isInequality),a.traceprint("cn.required == "+b.required));var e=b.expression,f=new a.Expression(e.constant),g=new a.SlackVariable,h=new a.DummyVariable,i=new a.SlackVariable,j=new a.SlackVariable,k=e.terms;if(k.each(function(a,b){var c=this.rows.get(a);c?f.addExpression(c,b):f.addVariable(a,b)},this),b.isInequality){if(a.trace&&a.traceprint("Inequality, adding slack"),++this._slackCounter,g=new a.SlackVariable({value:this._slackCounter,prefix:"s"}),f.setVariable(g,-1),this._markerVars.set(b,g),!b.required){++this._slackCounter,i=new a.SlackVariable({value:this._slackCounter,prefix:"em"}),f.setVariable(i,1);
var l=this.rows.get(this._objective);l.setVariable(i,b.strength.symbolicWeight.value*b.weight),this.insertErrorVar(b,i),this.noteAddedVariable(i,this._objective)}}else if(b.required)a.trace&&a.traceprint("Equality, required"),++this._dummyCounter,h=new a.DummyVariable({value:this._dummyCounter,prefix:"d"}),f.setVariable(h,1),this._markerVars.set(b,h),a.trace&&a.traceprint("Adding dummyVar == d"+this._dummyCounter);else{a.trace&&a.traceprint("Equality, not required"),++this._slackCounter,j=new a.SlackVariable({value:this._slackCounter,prefix:"ep"}),i=new a.SlackVariable({value:this._slackCounter,prefix:"em"}),f.setVariable(j,-1),f.setVariable(i,1),this._markerVars.set(b,j);var l=this.rows.get(this._objective);a.trace&&console.log(l);var m=b.strength.symbolicWeight.value*b.weight;0==m&&(a.trace&&a.traceprint("cn == "+b),a.trace&&a.traceprint("adding "+j+" and "+i+" with swCoeff == "+m)),l.setVariable(j,m),this.noteAddedVariable(j,this._objective),l.setVariable(i,m),this.noteAddedVariable(i,this._objective),this.insertErrorVar(b,i),this.insertErrorVar(b,j),b.isStayConstraint?(this._stayPlusErrorVars.push(j),this._stayMinusErrorVars.push(i)):b.isEditConstraint&&(c[0]=j,c[1]=i,d[0]=e.constant)}return 0>f.constant&&f.multiplyMe(-1),a.trace&&a.fnexitprint("returning "+f),f},optimize:function(b){a.trace&&a.fnenterprint("optimize: "+b),a.trace&&a.traceprint(""+this),this._optimizeCount++;var c=this.rows.get(b);a.assert(null!=c,"zRow != null");for(var g,h,e=null,f=null;;){if(g=0,h=c.terms,h.escapingEach(function(a,b){return a.isPivotable&&g>b?(g=b,e=a,{brk:1}):void 0},this),g>=-d)return;a.trace&&console.log("entryVar:",e,"objectiveCoeff:",g);var i=Number.MAX_VALUE,j=this.columns.get(e),k=0;if(j.each(function(b){if(a.trace&&a.traceprint("Checking "+b),b.isPivotable){var c=this.rows.get(b),d=c.coefficientFor(e);a.trace&&a.traceprint("pivotable, coeff = "+d),0>d&&(k=-c.constant/d,(i>k||a.approx(k,i)&&b.hashCode<f.hashCode)&&(i=k,f=b))}},this),i==Number.MAX_VALUE)throw new a.InternalError("Objective function is unbounded in optimize");this.pivot(e,f),a.trace&&a.traceprint(""+this)}},pivot:function(b,c){a.trace&&console.log("pivot: ",b,c);var d=!1;d&&console.time(" SimplexSolver::pivot"),null==b&&console.warn("pivot: entryVar == null"),null==c&&console.warn("pivot: exitVar == null"),d&&console.time("  removeRow");var e=this.removeRow(c);d&&console.timeEnd("  removeRow"),d&&console.time("  changeSubject"),e.changeSubject(c,b),d&&console.timeEnd("  changeSubject"),d&&console.time("  substituteOut"),this.substituteOut(b,e),d&&console.timeEnd("  substituteOut"),d&&console.time("  addRow"),this.addRow(b,e),d&&console.timeEnd("  addRow"),d&&console.timeEnd(" SimplexSolver::pivot")},_resetStayConstants:function(){a.trace&&console.log("_resetStayConstants");for(var b=0;this._stayPlusErrorVars.length>b;b++){var c=this.rows.get(this._stayPlusErrorVars[b]);null==c&&(c=this.rows.get(this._stayMinusErrorVars[b])),null!=c&&(c.constant=0)}},_setExternalVariables:function(){a.trace&&a.fnenterprint("_setExternalVariables:"),a.trace&&a.traceprint(""+this),this._externalParametricVars.each(function(b){null!=this.rows.get(b)?a.trace&&console.log("Error: variable"+b+" in _externalParametricVars is basic"):b.value=0},this),this._externalRows.each(function(a){var b=this.rows.get(a);a.value!=b.constant&&(a.value=b.constant)},this),this._fNeedsSolving=!1,this.onsolved()},onsolved:function(){},insertErrorVar:function(b,c){a.trace&&a.fnenterprint("insertErrorVar:"+b+", "+c);var d=this._errorVars.get(c);d||(d=new a.HashSet,this._errorVars.set(b,d)),d.add(c)}})}(this.c||module.parent.exports||{}),function(a){"use strict";a.Timer=a.inherit({initialize:function(){this.isRunning=!1,this._elapsedMs=0},start:function(){return this.isRunning=!0,this._startReading=new Date,this},stop:function(){return this.isRunning=!1,this._elapsedMs+=new Date-this._startReading,this},reset:function(){return this.isRunning=!1,this._elapsedMs=0,this},elapsedTime:function(){return this.isRunning?(this._elapsedMs+(new Date-this._startReading))/1e3:this._elapsedMs/1e3}})}(this.c||module.parent.exports||{}),__cassowary_parser=function(){function a(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var b={parse:function(b,c){function k(a){g>e||(e>g&&(g=e,h=[]),h.push(a))}function l(){var a,b,c,d,f;if(d=e,f=e,a=z(),null!==a){if(c=m(),null!==c)for(b=[];null!==c;)b.push(c),c=m();else b=null;null!==b?(c=z(),null!==c?a=[a,b,c]:(a=null,e=f)):(a=null,e=f)}else a=null,e=f;return null!==a&&(a=function(a,b){return b}(d,a[1])),null===a&&(e=d),a}function m(){var a,b,c,d;return c=e,d=e,a=P(),null!==a?(b=s(),null!==b?a=[a,b]:(a=null,e=d)):(a=null,e=d),null!==a&&(a=function(a,b){return b}(c,a[0])),null===a&&(e=c),a}function n(){var a;return b.length>e?(a=b.charAt(e),e++):(a=null,0===f&&k("any character")),a}function o(){var a;return/^[a-zA-Z]/.test(b.charAt(e))?(a=b.charAt(e),e++):(a=null,0===f&&k("[a-zA-Z]")),null===a&&(36===b.charCodeAt(e)?(a="$",e++):(a=null,0===f&&k('"$"')),null===a&&(95===b.charCodeAt(e)?(a="_",e++):(a=null,0===f&&k('"_"')))),a}function p(){var a;return f++,/^[\t\x0B\f \xA0\uFEFF]/.test(b.charAt(e))?(a=b.charAt(e),e++):(a=null,0===f&&k("[\\t\\x0B\\f \\xA0\\uFEFF]")),f--,0===f&&null===a&&k("whitespace"),a}function q(){var a;return/^[\n\r\u2028\u2029]/.test(b.charAt(e))?(a=b.charAt(e),e++):(a=null,0===f&&k("[\\n\\r\\u2028\\u2029]")),a}function r(){var a;return f++,10===b.charCodeAt(e)?(a="\n",e++):(a=null,0===f&&k('"\\n"')),null===a&&("\r\n"===b.substr(e,2)?(a="\r\n",e+=2):(a=null,0===f&&k('"\\r\\n"')),null===a&&(13===b.charCodeAt(e)?(a="\r",e++):(a=null,0===f&&k('"\\r"')),null===a&&(8232===b.charCodeAt(e)?(a="\u2028",e++):(a=null,0===f&&k('"\\u2028"')),null===a&&(8233===b.charCodeAt(e)?(a="\u2029",e++):(a=null,0===f&&k('"\\u2029"')))))),f--,0===f&&null===a&&k("end of line"),a}function s(){var a,c,d;return d=e,a=z(),null!==a?(59===b.charCodeAt(e)?(c=";",e++):(c=null,0===f&&k('";"')),null!==c?a=[a,c]:(a=null,e=d)):(a=null,e=d),null===a&&(d=e,a=y(),null!==a?(c=r(),null!==c?a=[a,c]:(a=null,e=d)):(a=null,e=d),null===a&&(d=e,a=z(),null!==a?(c=t(),null!==c?a=[a,c]:(a=null,e=d)):(a=null,e=d))),a}function t(){var a,c;return c=e,f++,b.length>e?(a=b.charAt(e),e++):(a=null,0===f&&k("any character")),f--,null===a?a="":(a=null,e=c),a}function u(){var a;return f++,a=v(),null===a&&(a=x()),f--,0===f&&null===a&&k("comment"),a}function v(){var a,c,d,g,h,i,j;if(h=e,"/*"===b.substr(e,2)?(a="/*",e+=2):(a=null,0===f&&k('"/*"')),null!==a){for(c=[],i=e,j=e,f++,"*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==d;)c.push(d),i=e,j=e,f++,"*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==c?("*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),null!==d?a=[a,c,d]:(a=null,e=h)):(a=null,e=h)}else a=null,e=h;return a}function w(){var a,c,d,g,h,i,j;if(h=e,"/*"===b.substr(e,2)?(a="/*",e+=2):(a=null,0===f&&k('"/*"')),null!==a){for(c=[],i=e,j=e,f++,"*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),null===d&&(d=q()),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==d;)c.push(d),i=e,j=e,f++,"*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),null===d&&(d=q()),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==c?("*/"===b.substr(e,2)?(d="*/",e+=2):(d=null,0===f&&k('"*/"')),null!==d?a=[a,c,d]:(a=null,e=h)):(a=null,e=h)}else a=null,e=h;return a}function x(){var a,c,d,g,h,i,j;if(h=e,"//"===b.substr(e,2)?(a="//",e+=2):(a=null,0===f&&k('"//"')),null!==a){for(c=[],i=e,j=e,f++,d=q(),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==d;)c.push(d),i=e,j=e,f++,d=q(),f--,null===d?d="":(d=null,e=j),null!==d?(g=n(),null!==g?d=[d,g]:(d=null,e=i)):(d=null,e=i);null!==c?a=[a,c]:(a=null,e=h)}else a=null,e=h;return a}function y(){var a,b;for(a=[],b=p(),null===b&&(b=w(),null===b&&(b=x()));null!==b;)a.push(b),b=p(),null===b&&(b=w(),null===b&&(b=x()));return a}function z(){var a,b;for(a=[],b=p(),null===b&&(b=r(),null===b&&(b=u()));null!==b;)a.push(b),b=p(),null===b&&(b=r(),null===b&&(b=u()));return a}function A(){var a,b;return b=e,a=C(),null===a&&(a=B()),null!==a&&(a=function(a,b){return{type:"NumericLiteral",value:b}}(b,a)),null===a&&(e=b),a}function B(){var a,c,d;if(d=e,/^[0-9]/.test(b.charAt(e))?(c=b.charAt(e),e++):(c=null,0===f&&k("[0-9]")),null!==c)for(a=[];null!==c;)a.push(c),/^[0-9]/.test(b.charAt(e))?(c=b.charAt(e),e++):(c=null,0===f&&k("[0-9]"));else a=null;return null!==a&&(a=function(a,b){return parseInt(b.join(""))}(d,a)),null===a&&(e=d),a}function C(){var a,c,d,g,h;return g=e,h=e,a=B(),null!==a?(46===b.charCodeAt(e)?(c=".",e++):(c=null,0===f&&k('"."')),null!==c?(d=B(),null!==d?a=[a,c,d]:(a=null,e=h)):(a=null,e=h)):(a=null,e=h),null!==a&&(a=function(a,b){return parseFloat(b.join(""))}(g,a)),null===a&&(e=g),a}function D(){var a,c,d,g;if(g=e,/^[\-+]/.test(b.charAt(e))?(a=b.charAt(e),e++):(a=null,0===f&&k("[\\-+]")),a=null!==a?a:"",null!==a){if(/^[0-9]/.test(b.charAt(e))?(d=b.charAt(e),e++):(d=null,0===f&&k("[0-9]")),null!==d)for(c=[];null!==d;)c.push(d),/^[0-9]/.test(b.charAt(e))?(d=b.charAt(e),e++):(d=null,0===f&&k("[0-9]"));else c=null;null!==c?a=[a,c]:(a=null,e=g)}else a=null,e=g;return a}function E(){var a,b;return f++,b=e,a=F(),null!==a&&(a=function(a,b){return b}(b,a)),null===a&&(e=b),f--,0===f&&null===a&&k("identifier"),a}function F(){var a,b,c,d,g;if(f++,d=e,g=e,a=o(),null!==a){for(b=[],c=o();null!==c;)b.push(c),c=o();null!==b?a=[a,b]:(a=null,e=g)}else a=null,e=g;return null!==a&&(a=function(a,b,c){return b+c.join("")}(d,a[0],a[1])),null===a&&(e=d),f--,0===f&&null===a&&k("identifier"),a}function G(){var a,c,d,g,h,i,j;return i=e,a=E(),null!==a&&(a=function(a,b){return{type:"Variable",name:b}}(i,a)),null===a&&(e=i),null===a&&(a=A(),null===a&&(i=e,j=e,40===b.charCodeAt(e)?(a="(",e++):(a=null,0===f&&k('"("')),null!==a?(c=z(),null!==c?(d=P(),null!==d?(g=z(),null!==g?(41===b.charCodeAt(e)?(h=")",e++):(h=null,0===f&&k('")"')),null!==h?a=[a,c,d,g,h]:(a=null,e=j)):(a=null,e=j)):(a=null,e=j)):(a=null,e=j)):(a=null,e=j),null!==a&&(a=function(a,b){return b}(i,a[2])),null===a&&(e=i))),a}function H(){var a,b,c,d,f;return a=G(),null===a&&(d=e,f=e,a=I(),null!==a?(b=z(),null!==b?(c=H(),null!==c?a=[a,b,c]:(a=null,e=f)):(a=null,e=f)):(a=null,e=f),null!==a&&(a=function(a,b,c){return{type:"UnaryExpression",operator:b,expression:c}}(d,a[0],a[2])),null===a&&(e=d)),a}function I(){var a;return 43===b.charCodeAt(e)?(a="+",e++):(a=null,0===f&&k('"+"')),null===a&&(45===b.charCodeAt(e)?(a="-",e++):(a=null,0===f&&k('"-"')),null===a&&(33===b.charCodeAt(e)?(a="!",e++):(a=null,0===f&&k('"!"')))),a}function J(){var a,b,c,d,f,g,h,i,j;if(h=e,i=e,a=H(),null!==a){for(b=[],j=e,c=z(),null!==c?(d=K(),null!==d?(f=z(),null!==f?(g=H(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==c;)b.push(c),j=e,c=z(),null!==c?(d=K(),null!==d?(f=z(),null!==f?(g=H(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==b?a=[a,b]:(a=null,e=i)}else a=null,e=i;return null!==a&&(a=function(a,b,c){for(var d=b,e=0;c.length>e;e++)d={type:"MultiplicativeExpression",operator:c[e][1],left:d,right:c[e][3]};return d}(h,a[0],a[1])),null===a&&(e=h),a}function K(){var a;return 42===b.charCodeAt(e)?(a="*",e++):(a=null,0===f&&k('"*"')),null===a&&(47===b.charCodeAt(e)?(a="/",e++):(a=null,0===f&&k('"/"'))),a}function L(){var a,b,c,d,f,g,h,i,j;if(h=e,i=e,a=J(),null!==a){for(b=[],j=e,c=z(),null!==c?(d=M(),null!==d?(f=z(),null!==f?(g=J(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==c;)b.push(c),j=e,c=z(),null!==c?(d=M(),null!==d?(f=z(),null!==f?(g=J(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==b?a=[a,b]:(a=null,e=i)}else a=null,e=i;return null!==a&&(a=function(a,b,c){for(var d=b,e=0;c.length>e;e++)d={type:"AdditiveExpression",operator:c[e][1],left:d,right:c[e][3]};return d}(h,a[0],a[1])),null===a&&(e=h),a}function M(){var a;return 43===b.charCodeAt(e)?(a="+",e++):(a=null,0===f&&k('"+"')),null===a&&(45===b.charCodeAt(e)?(a="-",e++):(a=null,0===f&&k('"-"'))),a}function N(){var a,b,c,d,f,g,h,i,j;if(h=e,i=e,a=L(),null!==a){for(b=[],j=e,c=z(),null!==c?(d=O(),null!==d?(f=z(),null!==f?(g=L(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==c;)b.push(c),j=e,c=z(),null!==c?(d=O(),null!==d?(f=z(),null!==f?(g=L(),null!==g?c=[c,d,f,g]:(c=null,e=j)):(c=null,e=j)):(c=null,e=j)):(c=null,e=j);null!==b?a=[a,b]:(a=null,e=i)}else a=null,e=i;return null!==a&&(a=function(a,b,c){for(var d=b,e=0;c.length>e;e++)d={type:"Inequality",operator:c[e][1],left:d,right:c[e][3]};return d}(h,a[0],a[1])),null===a&&(e=h),a}function O(){var a;return"<="===b.substr(e,2)?(a="<=",e+=2):(a=null,0===f&&k('"<="')),null===a&&(">="===b.substr(e,2)?(a=">=",e+=2):(a=null,0===f&&k('">="')),null===a&&(60===b.charCodeAt(e)?(a="<",e++):(a=null,0===f&&k('"<"')),null===a&&(62===b.charCodeAt(e)?(a=">",e++):(a=null,0===f&&k('">"'))))),a}function P(){var a,c,d,g,h,i,j,l,m;if(j=e,l=e,a=N(),null!==a){for(c=[],m=e,d=z(),null!==d?("=="===b.substr(e,2)?(g="==",e+=2):(g=null,0===f&&k('"=="')),null!==g?(h=z(),null!==h?(i=N(),null!==i?d=[d,g,h,i]:(d=null,e=m)):(d=null,e=m)):(d=null,e=m)):(d=null,e=m);null!==d;)c.push(d),m=e,d=z(),null!==d?("=="===b.substr(e,2)?(g="==",e+=2):(g=null,0===f&&k('"=="')),null!==g?(h=z(),null!==h?(i=N(),null!==i?d=[d,g,h,i]:(d=null,e=m)):(d=null,e=m)):(d=null,e=m)):(d=null,e=m);null!==c?a=[a,c]:(a=null,e=l)}else a=null,e=l;return null!==a&&(a=function(a,b,c){for(var d=b,e=0;c.length>e;e++)d={type:"Equality",operator:c[e][1],left:d,right:c[e][3]};return d}(j,a[0],a[1])),null===a&&(e=j),a}function Q(a){a.sort();for(var b=null,c=[],d=0;a.length>d;d++)a[d]!==b&&(c.push(a[d]),b=a[d]);return c}function R(){for(var a=1,c=1,d=!1,f=0;Math.max(e,g)>f;f++){var h=b.charAt(f);"\n"===h?(d||a++,c=1,d=!1):"\r"===h||"\u2028"===h||"\u2029"===h?(a++,c=1,d=!0):(c++,d=!1)}return{line:a,column:c}}var d={start:l,Statement:m,SourceCharacter:n,IdentifierStart:o,WhiteSpace:p,LineTerminator:q,LineTerminatorSequence:r,EOS:s,EOF:t,Comment:u,MultiLineComment:v,MultiLineCommentNoLineTerminator:w,SingleLineComment:x,_:y,__:z,Literal:A,Integer:B,Real:C,SignedInteger:D,Identifier:E,IdentifierName:F,PrimaryExpression:G,UnaryExpression:H,UnaryOperator:I,MultiplicativeExpression:J,MultiplicativeOperator:K,AdditiveExpression:L,AdditiveOperator:M,InequalityExpression:N,InequalityOperator:O,LinearExpression:P};if(void 0!==c){if(void 0===d[c])throw Error("Invalid rule name: "+a(c)+".")}else c="start";var e=0,f=0,g=0,h=[],S=d[c]();if(null===S||e!==b.length){var T=Math.max(e,g),U=b.length>T?b.charAt(T):null,V=R();throw new this.SyntaxError(Q(h),U,T,V.line,V.column)}return S},toSource:function(){return this._source}};return b.SyntaxError=function(b,c,d,e,f){function g(b,c){var d,e;switch(b.length){case 0:d="end of input";break;case 1:d=b[0];break;default:d=b.slice(0,b.length-1).join(", ")+" or "+b[b.length-1]}return e=c?a(c):"end of input","Expected "+d+" but "+e+" found."}this.name="SyntaxError",this.expected=b,this.found=c,this.message=g(b,c),this.offset=d,this.line=e,this.column=f},b.SyntaxError.prototype=Error.prototype,b}();
}).call(
  ( true) ?
      (module.compiled = true && module) : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Tabs__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Editor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_monaco_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Markdown__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__View__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Binary__ = __webpack_require__(52);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */










class ViewTabsProps {
}
/* unused harmony export ViewTabsProps */

function diff(a, b) {
    return {
        ab: a.filter(x => b.indexOf(x) < 0),
        ba: b.filter(x => a.indexOf(x) < 0)
    };
}
class ViewTabs extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    renderViewCommands() {
        const { view } = this.props;
        const commands = [
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__shared_Button__["a" /* Button */], { key: "split", icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__shared_Icons__["b" /* GoBook */], null), title: "Split Editor", onClick: () => {
                    return this.props.onSplitViews();
                } })
        ];
        if (view.file.type === __WEBPACK_IMPORTED_MODULE_3__model__["d" /* FileType */].Markdown) {
            const markdown = view.type === __WEBPACK_IMPORTED_MODULE_8__View__["b" /* ViewType */].Markdown;
            commands.unshift(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__shared_Button__["a" /* Button */], { key: "toggle", icon: markdown ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__shared_Icons__["d" /* GoCode */], null) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__shared_Icons__["f" /* GoEye */], null), title: markdown ? "Edit Markdown" : "Preview Markdown", onClick: () => this.props.onChangeViewType(view, markdown ? __WEBPACK_IMPORTED_MODULE_8__View__["b" /* ViewType */].Editor : __WEBPACK_IMPORTED_MODULE_8__View__["b" /* ViewType */].Markdown) }));
        }
        return commands;
    }
    render() {
        const { onClickView, onDoubleClickView, onClose, view, views, preview, hasFocus } = this.props;
        if (!view) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null);
        }
        const { file } = view;
        let viewer;
        if (file && file.type === __WEBPACK_IMPORTED_MODULE_3__model__["d" /* FileType */].Markdown && view.type === __WEBPACK_IMPORTED_MODULE_8__View__["b" /* ViewType */].Markdown) {
            viewer = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Markdown__["a" /* MarkdownView */], { view: view });
        }
        else if (view.type === __WEBPACK_IMPORTED_MODULE_8__View__["b" /* ViewType */].Binary) {
            viewer = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9__Binary__["a" /* BinaryView */], { view: view });
        }
        else if (file) {
            viewer = __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__Editor__["a" /* EditorView */], { view: view, options: { readOnly: file.isBufferReadOnly } });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "editor-pane-container empty" });
        }
        let className = "editor-pane-container";
        if (!hasFocus) {
            className += " blurred";
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: className, onClick: this.props.onFocus },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Tabs__["b" /* Tabs */], { onDoubleClick: () => {
                    return this.props.onNewFile();
                }, commands: this.renderViewCommands() }, views.map(v => {
                const { file: x } = v;
                let name = x.name;
                if (v.type === __WEBPACK_IMPORTED_MODULE_8__View__["b" /* ViewType */].Binary) {
                    name = "Binary " + name;
                }
                else if (v.type === __WEBPACK_IMPORTED_MODULE_8__View__["b" /* ViewType */].Markdown) {
                    name = "Preview " + name;
                }
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Tabs__["a" /* Tab */], { key: x.key, label: name, value: v, icon: Object(__WEBPACK_IMPORTED_MODULE_3__model__["j" /* getIconForFileType */])(x.type), isMarked: x.isDirty, isActive: v === view, isItalic: v === preview, onClick: onClickView, onDoubleClick: onDoubleClickView, onClose: onClose });
            })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: "calc(100% - 40px)" } }, viewer));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewTabs;

ViewTabs.defaultProps = {
    view: null,
    views: [],
    // tslint:disable-next-line
    onChangeViewType: (view, type) => { },
    // tslint:disable-next-line
    onNewFile: () => { },
    // tslint:disable-next-line
    onSplitViews: () => { }
};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__(11);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class Markdown extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            html: "Loading ..."
        };
    }
    async componentDidMount() {
        const html = await __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */].compileMarkdownToHtml(this.props.src);
        this.setState({ html });
    }
    async componentWillReceiveProps(props) {
        if (this.props.src !== props.src) {
            const html = await __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */].compileMarkdownToHtml(props.src);
            this.setState({ html });
        }
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { padding: "8px", height: "100%", overflow: "scroll" }, className: "md", dangerouslySetInnerHTML: { __html: this.state.html } });
    }
}
/* unused harmony export Markdown */

class MarkdownView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.onDidChangeBuffer = () => {
            this.forceUpdate();
        };
    }
    componentDidMount() {
        this.props.view.file.onDidChangeBuffer.register(this.onDidChangeBuffer);
    }
    componentWillUnmount() {
        this.props.view.file.onDidChangeBuffer.unregister(this.onDidChangeBuffer);
    }
    componentWillReceiveProps(props) {
        const last = this.props.view;
        const next = props.view;
        if (last !== next) {
            last.file.onDidChangeBuffer.unregister(this.onDidChangeBuffer);
            next.file.onDidChangeBuffer.register(this.onDidChangeBuffer);
        }
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Markdown, { src: this.props.view.file.buffer.getValue() });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MarkdownView;



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const colors = [
    "#ead780", "#efb8f6", "#89ee39", "#bbc3fe", "#cbed3a",
    "#d0cdee", "#7aec58", "#f2bcd5", "#35ed72", "#cbd5e7",
    "#e2de49", "#79d8f6", "#f3c63e", "#66e9de", "#bee869",
    "#e6cdc7", "#71ec77", "#f3bea5", "#67eb8f", "#edca95",
    "#53efb6", "#ebe8c8", "#a0eb7f", "#b3e1e0", "#d3e484",
    "#8de6c0", "#bfee98", "#c0e0c5", "#88e99a", "#cee1a8",
    "#8be8ad", "#a6e0a3"
];
function toHex(n, width) {
    let s = n.toString(16).toUpperCase();
    while (s.length < width) {
        s = "0" + s;
    }
    return s;
}
class BinaryView extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.onDidChangeData = () => {
            this.forceUpdate();
        };
    }
    componentDidMount() {
        this.props.view.file.onDidChangeData.register(this.onDidChangeData);
    }
    componentWillUnmount() {
        this.props.view.file.onDidChangeData.unregister(this.onDidChangeData);
    }
    componentWillReceiveProps(props) {
        const last = this.props.view;
        const next = props.view;
        if (last !== next) {
            last.file.onDidChangeData.unregister(this.onDidChangeData);
            next.file.onDidChangeData.register(this.onDidChangeData);
        }
    }
    render() {
        const data = new Uint8Array(this.props.view.file.getData());
        const perRow = 16;
        const rowCount = Math.max(1, Math.ceil(data.length / perRow));
        const rows = [];
        for (let i = 0; i < rowCount; i++) {
            const rowOffset = i * perRow;
            const colCount = Math.min(data.length - rowOffset, perRow);
            const cols = [];
            let str = "";
            for (let j = 0; j < colCount; j++) {
                const b = data[rowOffset + j];
                cols.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "byte", style: { color: colors[b & 0x1F] } }, toHex(b, 2)));
                str += b >= 32 && b < 127 ? String.fromCharCode(b) : ".";
            }
            rows.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "address" }, "0x" + toHex(rowOffset, 8)),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "bytes" }, cols),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, str))));
        }
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "binary" }, rows);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BinaryView;



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

class Toolbar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "toolbar" }, this.props.children);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Toolbar;



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerLanguages;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__languages_wat__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__languages_log__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__languages_rust__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__languages_cton__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__languages_x86__ = __webpack_require__(59);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





async function registerLanguages() {
    monaco.editor.defineTheme("fiddle-theme", {
        base: "vs-dark",
        inherit: true,
        rules: [
            { token: "custom-info", foreground: "d4d4d4" },
            { token: "custom-warn", foreground: "ff9900" },
            { token: "custom-error", background: "00ff00", foreground: "ff0000", fontStyle: "bold" }
        ]
    });
    // Wat
    monaco.languages.onLanguage("wat", () => {
        monaco.languages.setMonarchTokensProvider("wat", __WEBPACK_IMPORTED_MODULE_0__languages_wat__["a" /* Wat */].MonarchDefinitions);
        monaco.languages.setLanguageConfiguration("wat", __WEBPACK_IMPORTED_MODULE_0__languages_wat__["a" /* Wat */].LanguageConfiguration);
        monaco.languages.registerCompletionItemProvider("wat", __WEBPACK_IMPORTED_MODULE_0__languages_wat__["a" /* Wat */].CompletionItemProvider);
        monaco.languages.registerHoverProvider("wat", __WEBPACK_IMPORTED_MODULE_0__languages_wat__["a" /* Wat */].HoverProvider);
    });
    monaco.languages.register({
        id: "wat"
    });
    // Log
    monaco.languages.onLanguage("log", () => {
        monaco.languages.setMonarchTokensProvider("log", __WEBPACK_IMPORTED_MODULE_1__languages_log__["a" /* Log */].MonarchTokensProvider);
    });
    monaco.languages.register({
        id: "log"
    });
    // Cretonne
    monaco.languages.onLanguage("cton", () => {
        monaco.languages.setMonarchTokensProvider("cton", __WEBPACK_IMPORTED_MODULE_3__languages_cton__["a" /* Cton */].MonarchDefinitions);
    });
    monaco.languages.register({
        id: "cton"
    });
    // X86
    monaco.languages.onLanguage("x86", () => {
        monaco.languages.setMonarchTokensProvider("x86", __WEBPACK_IMPORTED_MODULE_4__languages_x86__["a" /* X86 */].MonarchDefinitions);
    });
    monaco.languages.register({
        id: "x86"
    });
    // Rust
    monaco.languages.onLanguage("rust", () => {
        monaco.languages.setMonarchTokensProvider("rust", __WEBPACK_IMPORTED_MODULE_2__languages_rust__["a" /* Rust */].MonarchDefinitions);
    });
    monaco.languages.register({
        id: "rust"
    });
    let response = await fetch("lib/lib.es6.d.ts");
    monaco.languages.typescript.typescriptDefaults.addExtraLib(await response.text());
    response = await fetch("lib/fiddle.d.ts");
    monaco.languages.typescript.typescriptDefaults.addExtraLib(await response.text());
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({ noLib: true, allowNonTsExtensions: true });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({ noLib: true, allowNonTsExtensions: true });
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getWatCompletionItems */
/* unused harmony export watWordAt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_monaco_editor__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

let completionItems = null;
function getWatCompletionItems() {
    const keyword = monaco.languages.CompletionItemKind.Keyword;
    if (completionItems) {
        return completionItems;
    }
    return completionItems = [
        { label: "module", documentation: "", kind: keyword, insertText: "module" },
        { label: "func", documentation: "function declaration", kind: keyword, insertText: "func" },
        { label: "param", documentation: "parameter", kind: keyword, insertText: { value: "param ${1:identifier} ${2:type}" } },
        { label: "i32", documentation: "32-bit integer", kind: keyword, insertText: "i32" },
        { label: "i64", documentation: "64-bit integer", kind: keyword, insertText: "i64" },
        { label: "f32", documentation: "32-bit floating point", kind: keyword, insertText: "f32" },
        { label: "f64", documentation: "64-bit floating point", kind: keyword, insertText: "f64" },
        { label: "anyfunc", documentation: "function reference", kind: keyword, insertText: "anyfunc" },
        { label: "i32.load8_s", documentation: "load 1 byte and sign-extend i8 to i32", kind: keyword, insertText: "i32.load8_s" },
        { label: "i32.load8_u", documentation: "load 1 byte and zero-extend i8 to i32", kind: keyword, insertText: "i32.load8_u" },
        { label: "i32.load16_s", documentation: "load 2 bytes and sign-extend i16 to i32", kind: keyword, insertText: "i32.load16_s" },
        { label: "i32.load16_u", documentation: "load 2 bytes and zero-extend i16 to i32", kind: keyword, insertText: "i32.load16_u" },
        { label: "i32.load", documentation: "load 4 bytes as i32", kind: keyword, insertText: "i32.load" },
        { label: "i64.load8_s", documentation: "load 1 byte and sign-extend i8 to i64", kind: keyword, insertText: "i64.load8_s" },
        { label: "i64.load8_u", documentation: "load 1 byte and zero-extend i8 to i64", kind: keyword, insertText: "i64.load8_u" },
        { label: "i64.load16_s", documentation: "load 2 bytes and sign-extend i16 to i64", kind: keyword, insertText: "i64.load16_s" },
        { label: "i64.load16_u", documentation: "load 2 bytes and zero-extend i16 to i64", kind: keyword, insertText: "i64.load16_u" },
        { label: "i64.load32_s", documentation: "load 4 bytes and sign-extend i32 to i64", kind: keyword, insertText: "i64.load32_s" },
        { label: "i64.load32_u", documentation: "load 4 bytes and zero-extend i32 to i64", kind: keyword, insertText: "i64.load32_u" },
        { label: "i64.load", documentation: "load 8 bytes as i64", kind: keyword, insertText: "i64.load" },
        { label: "f32.load", documentation: "load 4 bytes as f32", kind: keyword, insertText: "f32.load" },
        { label: "f64.load", documentation: "load 8 bytes as f64", kind: keyword, insertText: "f64.load" },
        { label: "i32.store8", documentation: "wrap i32 to i8 and store 1 byte", kind: keyword, insertText: "i32.store8" },
        { label: "i32.store16", documentation: "wrap i32 to i16 and store 2 bytes", kind: keyword, insertText: "i32.store16" },
        { label: "i32.store", documentation: "(no conversion) store 4 bytes", kind: keyword, insertText: "i32.store" },
        { label: "i64.store8", documentation: "wrap i64 to i8 and store 1 byte", kind: keyword, insertText: "i64.store8" },
        { label: "i64.store16", documentation: "wrap i64 to i16 and store 2 bytes", kind: keyword, insertText: "i64.store16" },
        { label: "i64.store32", documentation: "wrap i64 to i32 and store 4 bytes", kind: keyword, insertText: "i64.store32" },
        { label: "i64.store", documentation: "(no conversion) store 8 bytes", kind: keyword, insertText: "i64.store" },
        { label: "f32.store", documentation: "(no conversion) store 4 bytes", kind: keyword, insertText: "f32.store" },
        { label: "f64.store", documentation: "(no conversion) store 8 bytes", kind: keyword, insertText: "f64.store" },
        { label: "get_local", documentation: "read the current value of a local variable", kind: keyword, insertText: "get_local" },
        { label: "set_local", documentation: "set the current value of a local variable", kind: keyword, insertText: "set_local" },
        { label: "tee_local", documentation: "like `set_local`, but also returns the set value", kind: keyword, insertText: "tee_local" },
        { label: "get_global", documentation: "get the current value of a global variable", kind: keyword, insertText: "get_global" },
        { label: "set_global", documentation: "set the current value of a global variable", kind: keyword, insertText: "set_global" },
        { label: "nop", documentation: "no operation, no effect", kind: keyword, insertText: "nop" },
        { label: "block", documentation: "the beginning of a block construct, a sequence of instructions with a label at the end", kind: keyword, insertText: "block" },
        { label: "loop", documentation: "a block with a label at the beginning which may be used to form loops", kind: keyword, insertText: "loop" },
        { label: "if", documentation: "the beginning of an if construct with an implicit *then* block", kind: keyword, insertText: "if" },
        { label: "else", documentation: "marks the else block of an if", kind: keyword, insertText: "else" },
        { label: "br", documentation: "branch to a given label in an enclosing construct", kind: keyword, insertText: "br" },
        { label: "br_if", documentation: "conditionally branch to a given label in an enclosing construct", kind: keyword, insertText: "br_if" },
        { label: "br_table", documentation: "a jump table which jumps to a label in an enclosing construct", kind: keyword, insertText: "br_table" },
        { label: "return", documentation: "return zero or more values from this function", kind: keyword, insertText: "return" },
        { label: "end", documentation: "an instruction that marks the end of a block, loop, if, or function", kind: keyword, insertText: "end" },
        { label: "call", documentation: "call function directly", kind: keyword, insertText: "call" },
        { label: "call_indirect", documentation: "call function indirectly", kind: keyword, insertText: "call_indirect" },
        { label: "i64.const", documentation: "produce the value of an i64 immediate", kind: keyword, insertText: { value: "i64.const ${1:constant}" } },
        { label: "i32.const", documentation: "produce the value of an i32 immediate", kind: keyword, insertText: { value: "i32.const ${1:constant}" } },
        { label: "f32.const", documentation: "produce the value of an f32 immediate", kind: keyword, insertText: { value: "f32.const ${1:constant}" } },
        { label: "f64.const", documentation: "produce the value of an f64 immediate", kind: keyword, insertText: { value: "f64.const ${1:constant}" } },
        { label: "i32.add", documentation: "sign-agnostic addition", kind: keyword, insertText: "i32.add" },
        { label: "i32.sub", documentation: "sign-agnostic subtraction", kind: keyword, insertText: "i32.sub" },
        { label: "i32.mul", documentation: "sign-agnostic multiplication (lower 32-bits)", kind: keyword, insertText: "i32.mul" },
        { label: "i32.div_s", documentation: "signed division (result is truncated toward zero)", kind: keyword, insertText: "i32.div_s" },
        { label: "i32.div_u", documentation: "unsigned division (result is [floored](https://en.wikipedia.org/wiki/Floor_and_ceiling_functions))", kind: keyword, insertText: "i32.div_u" },
        { label: "i32.rem_s", documentation: "signed remainder (result has the sign of the dividend)", kind: keyword, insertText: "i32.rem_s" },
        { label: "i32.rem_u", documentation: "unsigned remainder", kind: keyword, insertText: "i32.rem_u" },
        { label: "i32.and", documentation: "sign-agnostic bitwise and", kind: keyword, insertText: "i32.and" },
        { label: "i32.or", documentation: "sign-agnostic bitwise inclusive or", kind: keyword, insertText: "i32.or" },
        { label: "i32.xor", documentation: "sign-agnostic bitwise exclusive or", kind: keyword, insertText: "i32.xor" },
        { label: "i32.shl", documentation: "sign-agnostic shift left", kind: keyword, insertText: "i32.shl" },
        { label: "i32.shr_u", documentation: "zero-replicating (logical) shift right", kind: keyword, insertText: "i32.shr_u" },
        { label: "i32.shr_s", documentation: "sign-replicating (arithmetic) shift right", kind: keyword, insertText: "i32.shr_s" },
        { label: "i32.rotl", documentation: "sign-agnostic rotate left", kind: keyword, insertText: "i32.rotl" },
        { label: "i32.rotr", documentation: "sign-agnostic rotate right", kind: keyword, insertText: "i32.rotr" },
        { label: "i32.eq", documentation: "sign-agnostic compare equal", kind: keyword, insertText: "i32.eq" },
        { label: "i32.ne", documentation: "sign-agnostic compare unequal", kind: keyword, insertText: "i32.ne" },
        { label: "i32.lt_s", documentation: "signed less than", kind: keyword, insertText: "i32.lt_s" },
        { label: "i32.le_s", documentation: "signed less than or equal", kind: keyword, insertText: "i32.le_s" },
        { label: "i32.lt_u", documentation: "unsigned less than", kind: keyword, insertText: "i32.lt_u" },
        { label: "i32.le_u", documentation: "unsigned less than or equal", kind: keyword, insertText: "i32.le_u" },
        { label: "i32.gt_s", documentation: "signed greater than", kind: keyword, insertText: "i32.gt_s" },
        { label: "i32.ge_s", documentation: "signed greater than or equal", kind: keyword, insertText: "i32.ge_s" },
        { label: "i32.gt_u", documentation: "unsigned greater than", kind: keyword, insertText: "i32.gt_u" },
        { label: "i32.ge_u", documentation: "unsigned greater than or equal", kind: keyword, insertText: "i32.ge_u" },
        { label: "i32.clz", documentation: "sign-agnostic count leading zero bits (All zero bits are considered leading if the value is zero)", kind: keyword, insertText: "i32.clz" },
        { label: "i32.ctz", documentation: "sign-agnostic count trailing zero bits (All zero bits are considered trailing if the value is zero)", kind: keyword, insertText: "i32.ctz" },
        { label: "i32.popcnt", documentation: "sign-agnostic count number of one bits", kind: keyword, insertText: "i32.popcnt" },
        { label: "i32.eqz", documentation: "compare equal to zero (return 1 if operand is zero, 0 otherwise)", kind: keyword, insertText: "i32.eqz" },
        { label: "f32.add", documentation: "addition", kind: keyword, insertText: "f32.add" },
        { label: "f32.sub", documentation: "subtraction", kind: keyword, insertText: "f32.sub" },
        { label: "f32.mul", documentation: "multiplication", kind: keyword, insertText: "f32.mul" },
        { label: "f32.div", documentation: "division", kind: keyword, insertText: "f32.div" },
        { label: "f32.abs", documentation: "absolute value", kind: keyword, insertText: "f32.abs" },
        { label: "f32.neg", documentation: "negation", kind: keyword, insertText: "f32.neg" },
        { label: "f32.copysign", documentation: "copysign", kind: keyword, insertText: "f32.copysign" },
        { label: "f32.ceil", documentation: "ceiling operator", kind: keyword, insertText: "f32.ceil" },
        { label: "f32.floor", documentation: "floor operator", kind: keyword, insertText: "f32.floor" },
        { label: "f32.trunc", documentation: "round to nearest integer towards zero", kind: keyword, insertText: "f32.trunc" },
        { label: "f32.nearest", documentation: "round to nearest integer, ties to even", kind: keyword, insertText: "f32.nearest" },
        { label: "f32.eq", documentation: "compare ordered and equal", kind: keyword, insertText: "f32.eq" },
        { label: "f32.ne", documentation: "compare unordered or unequal", kind: keyword, insertText: "f32.ne" },
        { label: "f32.lt", documentation: "compare ordered and less than", kind: keyword, insertText: "f32.lt" },
        { label: "f32.le", documentation: "compare ordered and less than or equal", kind: keyword, insertText: "f32.le" },
        { label: "f32.gt", documentation: "compare ordered and greater than", kind: keyword, insertText: "f32.gt" },
        { label: "f32.ge", documentation: "compare ordered and greater than or equal", kind: keyword, insertText: "f32.ge" },
        { label: "f32.sqrt", documentation: "square root", kind: keyword, insertText: "f32.sqrt" },
        { label: "f32.min", documentation: "minimum (binary operator); if either operand is NaN, returns NaN", kind: keyword, insertText: "f32.min" },
        { label: "f32.max", documentation: "maximum (binary operator); if either operand is NaN, returns NaN", kind: keyword, insertText: "f32.max" },
        { label: "f64.add", documentation: "addition", kind: keyword, insertText: "f64.add" },
        { label: "f64.sub", documentation: "subtraction", kind: keyword, insertText: "f64.sub" },
        { label: "f64.mul", documentation: "multiplication", kind: keyword, insertText: "f64.mul" },
        { label: "f64.div", documentation: "division", kind: keyword, insertText: "f64.div" },
        { label: "f64.abs", documentation: "absolute value", kind: keyword, insertText: "f64.abs" },
        { label: "f64.neg", documentation: "negation", kind: keyword, insertText: "f64.neg" },
        { label: "f64.copysign", documentation: "copysign", kind: keyword, insertText: "f64.copysign" },
        { label: "f64.ceil", documentation: "ceiling operator", kind: keyword, insertText: "f64.ceil" },
        { label: "f64.floor", documentation: "floor operator", kind: keyword, insertText: "f64.floor" },
        { label: "f64.trunc", documentation: "round to nearest integer towards zero", kind: keyword, insertText: "f64.trunc" },
        { label: "f64.nearest", documentation: "round to nearest integer, ties to even", kind: keyword, insertText: "f64.nearest" },
        { label: "f64.eq", documentation: "compare ordered and equal", kind: keyword, insertText: "f64.eq" },
        { label: "f64.ne", documentation: "compare unordered or unequal", kind: keyword, insertText: "f64.ne" },
        { label: "f64.lt", documentation: "compare ordered and less than", kind: keyword, insertText: "f64.lt" },
        { label: "f64.le", documentation: "compare ordered and less than or equal", kind: keyword, insertText: "f64.le" },
        { label: "f64.gt", documentation: "compare ordered and greater than", kind: keyword, insertText: "f64.gt" },
        { label: "f64.ge", documentation: "compare ordered and greater than or equal", kind: keyword, insertText: "f64.ge" },
        { label: "f64.sqrt", documentation: "square root", kind: keyword, insertText: "f64.sqrt" },
        { label: "f64.min", documentation: "minimum (binary operator); if either operand is NaN, returns NaN", kind: keyword, insertText: "f64.min" },
        { label: "f64.max", documentation: "maximum (binary operator); if either operand is NaN, returns NaN", kind: keyword, insertText: "f64.max" },
        { label: "i32.wrap/i64", documentation: "wrap a 64-bit integer to a 32-bit integer", kind: keyword, insertText: "i32.wrap/i64" },
        { label: "i32.trunc_s/f32", documentation: "truncate a 32-bit float to a signed 32-bit integer", kind: keyword, insertText: "i32.trunc_s/f32" },
        { label: "i32.trunc_s/f64", documentation: "truncate a 64-bit float to a signed 32-bit integer", kind: keyword, insertText: "i32.trunc_s/f64" },
        { label: "i32.trunc_u/f32", documentation: "truncate a 32-bit float to an unsigned 32-bit integer", kind: keyword, insertText: "i32.trunc_u/f32" },
        { label: "i32.trunc_u/f64", documentation: "truncate a 64-bit float to an unsigned 32-bit integer", kind: keyword, insertText: "i32.trunc_u/f64" },
        { label: "i32.reinterpret/f32", documentation: "reinterpret the bits of a 32-bit float as a 32-bit integer", kind: keyword, insertText: "i32.reinterpret/f32" },
        { label: "i64.extend_s/i32", documentation: "extend a signed 32-bit integer to a 64-bit integer", kind: keyword, insertText: "i64.extend_s/i32" },
        { label: "i64.extend_u/i32", documentation: "extend an unsigned 32-bit integer to a 64-bit integer", kind: keyword, insertText: "i64.extend_u/i32" },
        { label: "i64.trunc_s/f32", documentation: "truncate a 32-bit float to a signed 64-bit integer", kind: keyword, insertText: "i64.trunc_s/f32" },
        { label: "i64.trunc_s/f64", documentation: "truncate a 64-bit float to a signed 64-bit integer", kind: keyword, insertText: "i64.trunc_s/f64" },
        { label: "i64.trunc_u/f32", documentation: "truncate a 32-bit float to an unsigned 64-bit integer", kind: keyword, insertText: "i64.trunc_u/f32" },
        { label: "i64.trunc_u/f64", documentation: "truncate a 64-bit float to an unsigned 64-bit integer", kind: keyword, insertText: "i64.trunc_u/f64" },
        { label: "i64.reinterpret/f64", documentation: "reinterpret the bits of a 64-bit float as a 64-bit integer", kind: keyword, insertText: "i64.reinterpret/f64" },
        { label: "f32.demote/f64", documentation: "demote a 64-bit float to a 32-bit float", kind: keyword, insertText: "f32.demote/f64" },
        { label: "f32.convert_s/i32", documentation: "convert a signed 32-bit integer to a 32-bit float", kind: keyword, insertText: "f32.convert_s/i32" },
        { label: "f32.convert_s/i64", documentation: "convert a signed 64-bit integer to a 32-bit float", kind: keyword, insertText: "f32.convert_s/i64" },
        { label: "f32.convert_u/i32", documentation: "convert an unsigned 32-bit integer to a 32-bit float", kind: keyword, insertText: "f32.convert_u/i32" },
        { label: "f32.convert_u/i64", documentation: "convert an unsigned 64-bit integer to a 32-bit float", kind: keyword, insertText: "f32.convert_u/i64" },
        { label: "f32.reinterpret/i32", documentation: "reinterpret the bits of a 32-bit integer as a 32-bit float", kind: keyword, insertText: "f32.reinterpret/i32" },
        { label: "f64.promote/f32", documentation: "promote a 32-bit float to a 64-bit float", kind: keyword, insertText: "f64.promote/f32" },
        { label: "f64.convert_s/i32", documentation: "convert a signed 32-bit integer to a 64-bit float", kind: keyword, insertText: "f64.convert_s/i32" },
        { label: "f64.convert_s/i64", documentation: "convert a signed 64-bit integer to a 64-bit float", kind: keyword, insertText: "f64.convert_s/i64" },
        { label: "f64.convert_u/i32", documentation: "convert an unsigned 32-bit integer to a 64-bit float", kind: keyword, insertText: "f64.convert_u/i32" },
        { label: "f64.convert_u/i64", documentation: "convert an unsigned 64-bit integer to a 64-bit float", kind: keyword, insertText: "f64.convert_u/i64" },
        { label: "f64.reinterpret/i64", documentation: "reinterpret the bits of a 64-bit integer as a 64-bit float", kind: keyword, insertText: "f64.reinterpret/i64" },
        { label: "current_memory", documentation: "current memory size in 64k pages", kind: keyword, insertText: "current_memory" },
        { label: "grow_memory", documentation: "grow memory size by the specified amount of 64k pages", kind: keyword, insertText: "grow_memory" }
    ];
}
const LanguageConfiguration = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: "//",
        blockComment: ["/*", "*/"],
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ]
};
const MonarchDefinitions = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // defaultToken: 'invalid',
    keywords: [
        "module",
        "table",
        "memory",
        "export",
        "import",
        "func",
        "result",
        "offset",
        "anyfunc",
        "type",
        "data",
        "start",
        "element",
        "global",
        "local",
        "mut",
        "param",
        "result",
        "i32.load8_s",
        "i32.load8_u",
        "i32.load16_s",
        "i32.load16_u",
        "i32.load",
        "i64.load8_s",
        "i64.load8_u",
        "i64.load16_s",
        "i64.load16_u",
        "i64.load32_s",
        "i64.load32_u",
        "i64.load",
        "f32.load",
        "f64.load",
        "i32.store8",
        "i32.store16",
        "i32.store",
        "i64.store8",
        "i64.store16",
        "i64.store32",
        "i64.store",
        "f32.store",
        "f64.store",
        "i32.const",
        "i64.const",
        "f32.const",
        "f64.const",
        "i32.add",
        "i32.sub",
        "i32.mul",
        "i32.div_s",
        "i32.div_u",
        "i32.rem_s",
        "i32.rem_u",
        "i32.and",
        "i32.or",
        "i32.xor",
        "i32.shl",
        "i32.shr_u",
        "i32.shr_s",
        "i32.rotl",
        "i32.rotr",
        "i32.eq",
        "i32.ne",
        "i32.lt_s",
        "i32.le_s",
        "i32.lt_u",
        "i32.le_u",
        "i32.gt_s",
        "i32.ge_s",
        "i32.gt_u",
        "i32.ge_u",
        "i32.clz",
        "i32.ctz",
        "i32.popcnt",
        "i32.eqz",
        "f32.add",
        "f32.sub",
        "f32.mul",
        "f32.div",
        "f32.abs",
        "f32.neg",
        "f32.copysign",
        "f32.ceil",
        "f32.floor",
        "f32.trunc",
        "f32.nearest",
        "f32.eq",
        "f32.ne",
        "f32.lt",
        "f32.le",
        "f32.gt",
        "f32.ge",
        "f32.sqrt",
        "f32.min",
        "f32.max",
        "f64.add",
        "f64.sub",
        "f64.mul",
        "f64.div",
        "f64.abs",
        "f64.neg",
        "f64.copysign",
        "f64.ceil",
        "f64.floor",
        "f64.trunc",
        "f64.nearest",
        "f64.eq",
        "f64.ne",
        "f64.lt",
        "f64.le",
        "f64.gt",
        "f64.ge",
        "f64.sqrt",
        "f64.min",
        "f64.max",
        "i32.wrap/i64",
        "i32.trunc_s/f32",
        "i32.trunc_s/f64",
        "i32.trunc_u/f32",
        "i32.trunc_u/f64",
        "i32.reinterpret/f32",
        "i64.extend_s/i32",
        "i64.extend_u/i32",
        "i64.trunc_s/f32",
        "i64.trunc_s/f64",
        "i64.trunc_u/f32",
        "i64.trunc_u/f64",
        "i64.reinterpret/f64",
        "f32.demote/f64",
        "f32.convert_s/i32",
        "f32.convert_s/i64",
        "f32.convert_u/i32",
        "f32.convert_u/i64",
        "f32.reinterpret/i32",
        "f64.promote/f32",
        "f64.convert_s/i32",
        "f64.convert_s/i64",
        "f64.convert_u/i32",
        "f64.convert_u/i64",
        "f64.reinterpret/i64",
        "get_local",
        "set_local",
        "tee_local",
        "get_global",
        "set_global",
        "current_memory",
        "grow_memory"
    ],
    typeKeywords: [
        "i32",
        "i64",
        "f32",
        "f64",
        "anyfunc"
    ],
    operators: [],
    brackets: [
        ["(", ")", "bracket.parenthesis"],
        ["{", "}", "bracket.curly"],
        ["[", "]", "bracket.square"]
    ],
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$\.]*/, {
                    cases: {
                        "@keywords": "keyword",
                        "@typeKeywords": "type",
                        "@default": "type.identifier"
                    }
                }],
            // numbers
            [/\d+/, "number"],
            // strings
            [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
            [/[{}()\[\]]/, "@brackets"]
        ],
        comment: [
            [/[^\/*]+/, "comment"],
            [/\/\*/, "comment", "@push"],
            ["\\*/", "comment", "@pop"],
            [/[\/*]/, "comment"]
        ],
        string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"],
        ],
    },
};
function watWordAt(s, i) {
    const l = s.slice(0, i + 1).search(/[A-Za-z0-9_\.\/]+$/);
    const r = s.slice(i).search(/[^A-Za-z0-9_\.\/]/);
    if (r < 0) {
        return { index: l, word: s.slice(l) };
    }
    return { index: l, word: s.slice(l, r + i) };
}
const Wat = {
    MonarchDefinitions,
    LanguageConfiguration,
    CompletionItemProvider: {
        provideCompletionItems: function (model, position) {
            return getWatCompletionItems();
        }
    },
    HoverProvider: {
        provideHover: function (model, position) {
            const lineContent = model.getLineContent(position.lineNumber);
            const { index, word } = watWordAt(lineContent, position.column - 1);
            if (!word) {
                return;
            }
            const item = getWatCompletionItems().find(x => x.label === word);
            if (!item) {
                return;
            }
            return {
                range: new monaco.Range(position.lineNumber, index + 1, position.lineNumber, index + 1 + word.length),
                contents: [
                    "**DETAILS**",
                    { language: "html", value: item.documentation }
                ]
            };
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Wat;



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_monaco_editor__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const Log = {
    MonarchTokensProvider: {
        tokenizer: {
            root: [
                [/\[error.*/, "custom-error"],
                [/\[warn.*/, "custom-warn"],
                [/\[notice.*/, "custom-notice"],
                [/\[info.*/, "custom-info"]
            ]
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Log;



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_monaco_editor__);
// Copyright (c) 2012-2018, Matt Godbolt
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright notice,
//       this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
// Derrived and modified from
// https://github.com/mattgodbolt/compiler-explorer/blob/0a87dcb00abfc5931067a0eaf961b68a1d0a9bac/static/rust-mode.js

let completionItems = null;
function getCompletionItems() {
    const keyword = monaco.languages.CompletionItemKind.Keyword;
    if (completionItems) {
        return completionItems;
    }
    return completionItems = [];
}
const LanguageConfiguration = {
    comments: {
        lineComment: "//",
        blockComment: ["/*", "*/"],
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ]
};
const MonarchDefinitions = {
    defaultToken: "invalid",
    keywords: [
        "abstract",
        "alignof",
        "as",
        "become",
        "box",
        "break",
        "const",
        "continue",
        "crate",
        "do",
        "else",
        "enum",
        "extern",
        "false",
        "final",
        "fn",
        "for",
        "if",
        "impl",
        "in",
        "let",
        "loop",
        "macro",
        "match",
        "mod",
        "move",
        "mut",
        "offsetof",
        "override",
        "priv",
        "proc",
        "pub",
        "pure",
        "ref",
        "return",
        "Self",
        "self",
        "sizeof",
        "static",
        "struct",
        "super",
        "trait",
        "true",
        "type",
        "typeof",
        "unsafe",
        "unsized",
        "use",
        "virtual",
        "where",
        "while",
        "yield",
        // keywords for macros
        "macro_rules",
        "block",
        "expr",
        "ident",
        "item",
        "pat",
        "path",
        "stmt",
        "meta",
        "tt",
        "ty"
    ],
    typeKeywords: [
        "array", "bool", "char", "f32", "f64", "i16", "i32", "i64", "i8",
        "isize", "pointer", "slice", "str", "tuple", "u16", "u32", "u64", "u8",
        "usize", "Vec", "String"
    ],
    operators: [
        "=", ">", "<", "!", "~", "?", ":",
        "==", "<=", ">=", "!=", "&&", "||", "++", "--",
        "+", "-", "*", "/", "&", "|", "^", "%", "<<",
        ">>", ">>>", "+=", "-=", "*=", "/=", "&=", "|=",
        "^=", "%=", "<<=", ">>=", ">>>="
    ],
    symbols: /[=><!~?:&|+\-*\/^%]+/,
    escapes: /\\(?:[abfnrtv\\""]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$]*/, {
                    cases: {
                        "@keywords": "keyword",
                        "@typeKeywords": "keyword.type",
                        "@default": "identifier"
                    }
                }],
            [/[A-Z][\w$]*/, "type.identifier"],
            // whitespace
            { include: "@whitespace" },
            // delimiters and operators
            [/[{}()\[\]]/, "@brackets"],
            [/[<>](?!@symbols)/, "@brackets"],
            [/@symbols/, {
                    cases: {
                        "@operators": "operator",
                        "@default": ""
                    }
                }],
            [/#!?\[[^]*\]/, "annotation"],
            [/#!?.*$/, "annotation.invalid"],
            // numbers
            [/\d*\.\d+([eE][\-+]?\d+)?[fFdD]?/, "number.float"],
            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F][Ll]?/, "number.hex"],
            [/0[0-7_]*[0-7][Ll]?/, "number.octal"],
            [/0[bB][0-1_]*[0-1][Ll]?/, "number.binary"],
            [/\d+[lL]?/, "number"],
            // delimiter: after number because of .\d floats
            [/[;,.]/, "delimiter"],
            // strings
            [/"([^"\\]|\\.)*$/, "string.invalid"],
            [/"/, "string", "@string"],
            // characters
            [/"[^\\"]"/, "string"],
            [/(")(@escapes)(")/, ["string", "string.escape", "string"]],
            [/"/, "string.invalid"]
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/\/\*/, "comment", "@comment"],
            [/\/\/.*$/, "comment"]
        ],
        comment: [
            [/[^\/*]+/, "comment"],
            [/\/\*/, "comment", "@push"],
            [/\/\*/, "comment.invalid"],
            ["\\*/", "comment", "@pop"],
            [/[\/*]/, "comment"]
        ],
        string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, "string", "@pop"]
        ]
    }
};
const Rust = {
    MonarchDefinitions,
    LanguageConfiguration,
    CompletionItemProvider: {
        provideCompletionItems: (model, position) => {
            return getCompletionItems();
        }
    },
    HoverProvider: {
        provideHover: (model, position) => {
            return {
                range: new monaco.Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
                contents: [
                    "**DETAILS**",
                    { language: "html", value: "TODO" }
                ]
            };
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Rust;



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_monaco_editor__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

let completionItems = null;
function getCompletionItems() {
    const keyword = monaco.languages.CompletionItemKind.Keyword;
    if (completionItems) {
        return completionItems;
    }
    return completionItems = [];
}
const LanguageConfiguration = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ]
};
const MonarchDefinitions = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    // TODO defaultToken: 'invalid',
    keywords: [
        "function", "jump"
    ],
    typeKeywords: [
        "i32", "i64", "f32", "f64"
    ],
    operators: [],
    // we include these common regular expressions
    symbols: /[=><~&|+\-*\/%@#]+/,
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$\.]*/, {
                    cases: {
                        "@keywords": "keyword",
                        "@typeKeywords": "type",
                        "@default": "type.identifier"
                    }
                }],
            // numbers
            [/\d+/, "number"],
            // strings
            [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
            [/[{}()\[\]]/, "@brackets"]
        ],
        string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/;.*$/, "comment"]
        ],
    },
};
const Cton = {
    MonarchDefinitions,
    LanguageConfiguration,
    CompletionItemProvider: {
        provideCompletionItems: function (model, position) {
            return getCompletionItems();
        }
    },
    HoverProvider: {
        provideHover: function (model, position) {
            return {
                range: new monaco.Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
                contents: [
                    "**DETAILS**",
                    { language: "html", value: "TODO" }
                ]
            };
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Cton;



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_monaco_editor__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

let completionItems = null;
function getCompletionItems() {
    const keyword = monaco.languages.CompletionItemKind.Keyword;
    if (completionItems) {
        return completionItems;
    }
    return completionItems = [];
}
const LanguageConfiguration = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "<", close: ">" },
    ]
};
const MonarchDefinitions = {
    // Set defaultToken to invalid to see what you do not tokenize yet
    defaultToken: "invalid",
    ignoreCase: true,
    keywords: [
        "qword", "ptr"
    ],
    typeKeywords: [
        "i32", "i64", "f32", "f64"
    ],
    ops: [
        "add",
        "sub",
        "mov",
        "jmp",
        "ret",
        "int3",
        "nop",
        "cmp"
    ],
    registers: [
        "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15",
        "CS", "DS", "ES", "FS", "GS", "SS", "RAX", "EAX", "RBX", "EBX", "RCX", "ECX", "RDX", "EDX",
        "RCX", "RIP", "EIP", "IP", "RSP", "ESP", "SP", "RSI", "ESI", "SI", "RDI", "EDI", "DI", "RFLAGS", "EFLAGS", "FLAGS"
    ],
    // C# style strings
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // identifiers and keywords
            [/[a-z_$][\w$\.]*/, {
                    cases: {
                        "@ops": "keyword",
                        "@registers": "type",
                        "@keywords": "keyword",
                        "@typeKeywords": "keyword.type",
                        "@default": "identifier"
                    }
                }],
            // whitespace
            { include: "@whitespace" },
            // numbers
            [/0[xX][0-9a-fA-F]+/, "number.hex"],
            [/\d+/, "number"],
            // delimiter: after number because of .\d floats
            [/[;,.]/, "delimiter"],
            // strings
            [/"/, { token: "string.quote", bracket: "@open", next: "@string" }],
            [/[{}()\[\]]/, "@brackets"]
        ],
        comment: [
            [/;.*/, "comment"]
        ],
        string: [
            [/[^\\"]+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, { token: "string.quote", bracket: "@close", next: "@pop" }]
        ],
        whitespace: [
            [/[ \t\r\n]+/, "white"],
            [/;.*$/, "comment"]
        ],
    },
};
const X86 = {
    MonarchDefinitions,
    LanguageConfiguration,
    CompletionItemProvider: {
        provideCompletionItems: function (model, position) {
            return getCompletionItems();
        }
    },
    HoverProvider: {
        provideHover: function (model, position) {
            return {
                range: new monaco.Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
                contents: [
                    "**DETAILS**",
                    { language: "html", value: "TODO" }
                ]
            };
        }
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = X86;



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.1
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Widgets__ = __webpack_require__(12);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







class NewFileDialog extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onChangeName = (event) => {
            this.setState({ name: event.target.value });
        };
        this.state = {
            fileType: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].C,
            description: "",
            name: ""
        };
    }
    nameError() {
        const directory = this.props.directory;
        if (this.state.name) {
            if (!/^[a-z0-9\.\-\_]+$/i.test(this.state.name)) {
                return "Illegal characters in file name.";
            }
            else if (!this.state.name.endsWith(Object(__WEBPACK_IMPORTED_MODULE_5__model__["h" /* extensionForFileType */])(this.state.fileType))) {
                return Object(__WEBPACK_IMPORTED_MODULE_5__model__["n" /* nameForFileType */])(this.state.fileType) + " file extension is missing.";
            }
            else if (directory && __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__["a" /* default */].getImmediateChild(directory, this.state.name)) {
                return `File '${this.state.name}' already exists.`;
            }
        }
        return "";
    }
    fileName() {
        let name = this.state.name;
        const extension = Object(__WEBPACK_IMPORTED_MODULE_5__model__["h" /* extensionForFileType */])(this.state.fileType);
        if (!name.endsWith("." + extension)) {
            name += "." + extension;
        }
        return name;
    }
    createButtonLabel() {
        return "Create";
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_modal__, { isOpen: this.props.isOpen, contentLabel: "Create New File", className: "modal show-file-icons", overlayClassName: "overlay", ariaHideApp: false },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-title-bar" }, "Create New File"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex" } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { width: 250 } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["b" /* ListBox */], { value: this.state.fileType, height: 240, onSelect: (fileType) => {
                                    let description = "";
                                    switch (fileType) {
                                        case __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].C:
                                            description = "Creates a file containing C source code.";
                                            break;
                                        case __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Cpp:
                                            description = "Creates a file containing C++ source code.";
                                            break;
                                        case __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Cretonne:
                                            description = "Cretonne intermediate language (IL) source code.";
                                            break;
                                        default:
                                            description = "Creates a " + Object(__WEBPACK_IMPORTED_MODULE_5__model__["n" /* nameForFileType */])(fileType) + " file.";
                                            break;
                                    }
                                    this.setState({ fileType, description });
                                } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].C, label: "C File (.c)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].C) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Cpp, label: "C++ File (.cpp)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Cpp) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Rust, label: "Rust File (.rs)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Rust) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Cretonne, label: "Cretonne (.cton)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Cretonne) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Wat, label: "Wat (.wat)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Wat) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].JavaScript, label: "JavaScript (.js)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].JavaScript) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].TypeScript, label: "TypeScript (.ts)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].TypeScript) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].HTML, label: "HTML (.html)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].HTML) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].CSS, label: "CSS (.css)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].CSS) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Markdown, label: "Markdown (.md)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].Markdown) }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { value: __WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].JSON, label: "JSON (.json)", icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(__WEBPACK_IMPORTED_MODULE_5__model__["d" /* FileType */].JSON) }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "new-file-dialog-description" }, this.state.description))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { flex: 1, padding: "8px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["e" /* TextInputBox */], { label: "Name: " + (this.props.directory ? __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__["a" /* default */].getPath(this.props.directory) + "/" : ""), error: this.nameError(), value: this.state.name, onChange: this.onChangeName })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["o" /* GoX */], null), label: "Cancel", title: "Create New File", onClick: () => {
                            this.props.onCancel();
                        } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["g" /* GoFile */], null), label: this.createButtonLabel(), title: "Create New File", isDisabled: !this.state.fileType || !this.state.name || !!this.nameError(), onClick: () => {
                            const file = new __WEBPACK_IMPORTED_MODULE_5__model__["c" /* File */](this.fileName(), this.state.fileType);
                            return this.props.onCreate && this.props.onCreate(file);
                        } }))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NewFileDialog;



/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bodyOpenClassName = exports.portalClassName = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(18);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(24);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalPortal = __webpack_require__(67);

var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

var _ariaAppHider = __webpack_require__(27);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _safeHTMLElement = __webpack_require__(29);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalClassName = exports.portalClassName = "ReactModalPortal";
var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";

var isReact16 = _reactDom2.default.createPortal !== undefined;
var createPortal = isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;

function getParentElement(parentSelector) {
  return parentSelector();
}

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
      !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
      var parent = getParentElement(_this.props.parentSelector);
      parent.removeChild(_this.node);
    }, _this.portalRef = function (ref) {
      _this.portal = ref;
    }, _this.renderPortal = function (props) {
      var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
      _this.portalRef(portal);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!_safeHTMLElement.canUseDOM) return;

      if (!isReact16) {
        this.node = document.createElement("div");
      }
      this.node.className = this.props.portalClassName;

      var parent = getParentElement(this.props.parentSelector);
      parent.appendChild(this.node);

      !isReact16 && this.renderPortal(this.props);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (!_safeHTMLElement.canUseDOM) return;
      var isOpen = newProps.isOpen;
      // Stop unnecessary renders if modal is remaining closed

      if (!this.props.isOpen && !isOpen) return;

      var currentParent = getParentElement(this.props.parentSelector);
      var newParent = getParentElement(newProps.parentSelector);

      if (newParent !== currentParent) {
        currentParent.removeChild(this.node);
        newParent.appendChild(this.node);
      }

      !isReact16 && this.renderPortal(newProps);
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(newProps) {
      if (!_safeHTMLElement.canUseDOM) return;
      if (newProps.portalClassName !== this.props.portalClassName) {
        this.node.className = newProps.portalClassName;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;

      var state = this.portal.state;
      var now = Date.now();
      var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);

      if (closesAt) {
        if (!state.beforeClose) {
          this.portal.closeWithTimeout();
        }

        setTimeout(this.removePortal, closesAt - now);
      } else {
        this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!_safeHTMLElement.canUseDOM || !isReact16) {
        return null;
      }

      if (!this.node && isReact16) {
        this.node = document.createElement("div");
      }

      return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
        ref: this.portalRef,
        defaultStyles: Modal.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function setAppElement(element) {
      ariaAppHider.setElement(element);
    }

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-enable react/no-unused-prop-types */

  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  portalClassName: _propTypes2.default.string,
  bodyOpenClassName: _propTypes2.default.string,
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    base: _propTypes2.default.string.isRequired,
    afterOpen: _propTypes2.default.string.isRequired,
    beforeClose: _propTypes2.default.string.isRequired
  })]),
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  ariaHideApp: _propTypes2.default.bool,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  parentSelector: _propTypes2.default.func,
  aria: _propTypes2.default.object,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  shouldCloseOnEsc: _propTypes2.default.bool
};
Modal.defaultProps = {
  isOpen: false,
  portalClassName: portalClassName,
  bodyOpenClassName: bodyOpenClassName,
  ariaHideApp: true,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: true,
  shouldCloseOnEsc: true,
  shouldCloseOnOverlayClick: true,
  shouldReturnFocusAfterClose: true,
  parentSelector: function parentSelector() {
    return document.body;
  }
};
Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
exports.default = Modal;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(16);
var invariant = __webpack_require__(13);
var warning = __webpack_require__(25);
var assign = __webpack_require__(64);

var ReactPropTypesSecret = __webpack_require__(17);
var checkPropTypes = __webpack_require__(65);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(13);
  var warning = __webpack_require__(25);
  var ReactPropTypesSecret = __webpack_require__(17);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(16);
var invariant = __webpack_require__(13);
var ReactPropTypesSecret = __webpack_require__(17);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(24);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusManager = __webpack_require__(68);

var focusManager = _interopRequireWildcard(_focusManager);

var _scopeTab = __webpack_require__(69);

var _scopeTab2 = _interopRequireDefault(_scopeTab);

var _ariaAppHider = __webpack_require__(27);

var ariaAppHider = _interopRequireWildcard(_ariaAppHider);

var _refCount = __webpack_require__(28);

var refCount = _interopRequireWildcard(_refCount);

var _bodyClassList = __webpack_require__(71);

var bodyClassList = _interopRequireWildcard(_bodyClassList);

var _safeHTMLElement = __webpack_require__(29);

var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// so that our CSS is statically analyzable
var CLASS_NAMES = {
  overlay: "ReactModal__Overlay",
  content: "ReactModal__Content"
};

var TAB_KEY = 9;
var ESC_KEY = 27;

var ModalPortal = function (_Component) {
  _inherits(ModalPortal, _Component);

  function ModalPortal(props) {
    _classCallCheck(this, ModalPortal);

    var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));

    _this.setFocusAfterRender = function (focus) {
      _this.focusAfterRender = _this.props.shouldFocusAfterRender && focus;
    };

    _this.setOverlayRef = function (overlay) {
      _this.overlay = overlay;
    };

    _this.setContentRef = function (content) {
      _this.content = content;
    };

    _this.afterClose = function () {
      var _this$props = _this.props,
          appElement = _this$props.appElement,
          ariaHideApp = _this$props.ariaHideApp;

      // Remove body class

      bodyClassList.remove(_this.props.bodyOpenClassName);

      // Reset aria-hidden attribute if all modals have been removed
      if (ariaHideApp && refCount.totalCount() < 1) {
        ariaAppHider.show(appElement);
      }

      if (_this.props.shouldFocusAfterRender) {
        if (_this.props.shouldReturnFocusAfterClose) {
          focusManager.returnFocus();
          focusManager.teardownScopedFocus();
        } else {
          focusManager.popWithoutFocus();
        }
      }
    };

    _this.open = function () {
      _this.beforeOpen();
      if (_this.state.afterOpen && _this.state.beforeClose) {
        clearTimeout(_this.closeTimer);
        _this.setState({ beforeClose: false });
      } else {
        if (_this.props.shouldFocusAfterRender) {
          focusManager.setupScopedFocus(_this.node);
          focusManager.markForFocusLater();
        }

        _this.setState({ isOpen: true }, function () {
          _this.setState({ afterOpen: true });

          if (_this.props.isOpen && _this.props.onAfterOpen) {
            _this.props.onAfterOpen();
          }
        });
      }
    };

    _this.close = function () {
      if (_this.props.closeTimeoutMS > 0) {
        _this.closeWithTimeout();
      } else {
        _this.closeWithoutTimeout();
      }
    };

    _this.focusContent = function () {
      return _this.content && !_this.contentHasFocus() && _this.content.focus();
    };

    _this.closeWithTimeout = function () {
      var closesAt = Date.now() + _this.props.closeTimeoutMS;
      _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
        _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
      });
    };

    _this.closeWithoutTimeout = function () {
      _this.setState({
        beforeClose: false,
        isOpen: false,
        afterOpen: false,
        closesAt: null
      }, _this.afterClose);
    };

    _this.handleKeyDown = function (event) {
      if (event.keyCode === TAB_KEY) {
        (0, _scopeTab2.default)(_this.content, event);
      }

      if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
        event.stopPropagation();
        _this.requestClose(event);
      }
    };

    _this.handleOverlayOnClick = function (event) {
      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
        if (_this.ownerHandlesClose()) {
          _this.requestClose(event);
        } else {
          _this.focusContent();
        }
      }
      _this.shouldClose = null;
      _this.moveFromContentToOverlay = null;
    };

    _this.handleOverlayOnMouseUp = function () {
      if (_this.moveFromContentToOverlay === null) {
        _this.shouldClose = false;
      }
    };

    _this.handleContentOnMouseUp = function () {
      _this.shouldClose = false;
    };

    _this.handleOverlayOnMouseDown = function (event) {
      if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
        event.preventDefault();
      }
      _this.moveFromContentToOverlay = false;
    };

    _this.handleContentOnClick = function () {
      _this.shouldClose = false;
    };

    _this.handleContentOnMouseDown = function () {
      _this.shouldClose = false;
      _this.moveFromContentToOverlay = false;
    };

    _this.requestClose = function (event) {
      return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
    };

    _this.ownerHandlesClose = function () {
      return _this.props.onRequestClose;
    };

    _this.shouldBeClosed = function () {
      return !_this.state.isOpen && !_this.state.beforeClose;
    };

    _this.contentHasFocus = function () {
      return document.activeElement === _this.content || _this.content.contains(document.activeElement);
    };

    _this.buildClassName = function (which, additional) {
      var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
        base: CLASS_NAMES[which],
        afterOpen: CLASS_NAMES[which] + "--after-open",
        beforeClose: CLASS_NAMES[which] + "--before-close"
      };
      var className = classNames.base;
      if (_this.state.afterOpen) {
        className = className + " " + classNames.afterOpen;
      }
      if (_this.state.beforeClose) {
        className = className + " " + classNames.beforeClose;
      }
      return typeof additional === "string" && additional ? className + " " + additional : className;
    };

    _this.ariaAttributes = function (items) {
      return Object.keys(items).reduce(function (acc, name) {
        acc["aria-" + name] = items[name];
        return acc;
      }, {});
    };

    _this.state = {
      afterOpen: false,
      beforeClose: false
    };

    _this.shouldClose = null;
    _this.moveFromContentToOverlay = null;
    return _this;
  }

  _createClass(ModalPortal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Focus needs to be set when mounting and already open
      if (this.props.isOpen) {
        this.setFocusAfterRender(true);
        this.open();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (process.env.NODE_ENV !== "production") {
        if (newProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
          // eslint-disable-next-line no-console
          console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
        }
      }
      // Focus only needs to be set once when the modal is being opened
      if (!this.props.isOpen && newProps.isOpen) {
        this.setFocusAfterRender(true);
        this.open();
      } else if (this.props.isOpen && !newProps.isOpen) {
        this.close();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.focusAfterRender) {
        this.focusContent();
        this.setFocusAfterRender(false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.afterClose();
      clearTimeout(this.closeTimer);
    }
  }, {
    key: "beforeOpen",
    value: function beforeOpen() {
      var _props = this.props,
          appElement = _props.appElement,
          ariaHideApp = _props.ariaHideApp,
          bodyOpenClassName = _props.bodyOpenClassName;
      // Add body class

      bodyClassList.add(bodyOpenClassName);
      // Add aria-hidden to appElement
      if (ariaHideApp) {
        ariaAppHider.hide(appElement);
      }
    }

    // Don't steal focus from inner elements

  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          overlayClassName = _props2.overlayClassName,
          defaultStyles = _props2.defaultStyles;

      var contentStyles = className ? {} : defaultStyles.content;
      var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;

      return this.shouldBeClosed() ? null : _react2.default.createElement(
        "div",
        {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown,
          onMouseUp: this.handleOverlayOnMouseUp,
          "aria-modal": "true"
        },
        _react2.default.createElement(
          "div",
          _extends({
            ref: this.setContentRef,
            style: _extends({}, contentStyles, this.props.style.content),
            className: this.buildClassName("content", className),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.ariaAttributes(this.props.aria || {})),
          this.props.children
        )
      );
    }
  }]);

  return ModalPortal;
}(_react.Component);

ModalPortal.defaultProps = {
  style: {
    overlay: {},
    content: {}
  }
};
ModalPortal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  defaultStyles: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  style: _propTypes2.default.shape({
    content: _propTypes2.default.object,
    overlay: _propTypes2.default.object
  }),
  className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  bodyOpenClassName: _propTypes2.default.string,
  ariaHideApp: _propTypes2.default.bool,
  appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
  onAfterOpen: _propTypes2.default.func,
  onRequestClose: _propTypes2.default.func,
  closeTimeoutMS: _propTypes2.default.number,
  shouldFocusAfterRender: _propTypes2.default.bool,
  shouldCloseOnOverlayClick: _propTypes2.default.bool,
  shouldReturnFocusAfterClose: _propTypes2.default.bool,
  role: _propTypes2.default.string,
  contentLabel: _propTypes2.default.string,
  aria: _propTypes2.default.object,
  children: _propTypes2.default.node,
  shouldCloseOnEsc: _propTypes2.default.bool
};
exports.default = ModalPortal;
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleBlur = handleBlur;
exports.handleFocus = handleFocus;
exports.markForFocusLater = markForFocusLater;
exports.returnFocus = returnFocus;
exports.popWithoutFocus = popWithoutFocus;
exports.setupScopedFocus = setupScopedFocus;
exports.teardownScopedFocus = teardownScopedFocus;

var _tabbable = __webpack_require__(26);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusLaterElements = [];
var modalElement = null;
var needToFocus = false;

function handleBlur() {
  needToFocus = true;
}

function handleFocus() {
  if (needToFocus) {
    needToFocus = false;
    if (!modalElement) {
      return;
    }
    // need to see how jQuery shims document.on('focusin') so we don't need the
    // setTimeout, firefox doesn't support focusin, if it did, we could focus
    // the element outside of a setTimeout. Side-effect of this implementation
    // is that the document.body gets focus, and then we focus our element right
    // after, seems fine.
    setTimeout(function () {
      if (modalElement.contains(document.activeElement)) {
        return;
      }
      var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
      el.focus();
    }, 0);
  }
}

function markForFocusLater() {
  focusLaterElements.push(document.activeElement);
}

/* eslint-disable no-console */
function returnFocus() {
  var toFocus = null;
  try {
    if (focusLaterElements.length !== 0) {
      toFocus = focusLaterElements.pop();
      toFocus.focus();
    }
    return;
  } catch (e) {
    console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
  }
}
/* eslint-enable no-console */

function popWithoutFocus() {
  focusLaterElements.length > 0 && focusLaterElements.pop();
}

function setupScopedFocus(element) {
  modalElement = element;

  if (window.addEventListener) {
    window.addEventListener("blur", handleBlur, false);
    document.addEventListener("focus", handleFocus, true);
  } else {
    window.attachEvent("onBlur", handleBlur);
    document.attachEvent("onFocus", handleFocus);
  }
}

function teardownScopedFocus() {
  modalElement = null;

  if (window.addEventListener) {
    window.removeEventListener("blur", handleBlur);
    document.removeEventListener("focus", handleFocus);
  } else {
    window.detachEvent("onBlur", handleBlur);
    document.detachEvent("onFocus", handleFocus);
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scopeTab;

var _tabbable = __webpack_require__(26);

var _tabbable2 = _interopRequireDefault(_tabbable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scopeTab(node, event) {
  var tabbable = (0, _tabbable2.default)(node);

  if (!tabbable.length) {
    // Do nothing, since there are no elements that can receive focus.
    event.preventDefault();
    return;
  }

  var shiftKey = event.shiftKey;
  var head = tabbable[0];
  var tail = tabbable[tabbable.length - 1];

  // proceed with default browser behavior
  if (node === document.activeElement) {
    return;
  }

  var target;
  if (tail === document.activeElement && !shiftKey) {
    target = head;
  }

  if (head === document.activeElement && shiftKey) {
    target = tail;
  }

  if (target) {
    event.preventDefault();
    target.focus();
    return;
  }

  // Safari radio issue.
  //
  // Safari does not move the focus to the radio button,
  // so we need to force it to really walk through all elements.
  //
  // This is very error prune, since we are trying to guess
  // if it is a safari browser from the first occurence between
  // chrome or safari.
  //
  // The chrome user agent contains the first ocurrence
  // as the 'chrome/version' and later the 'safari/version'.
  var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
  var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

  // If we are not in safari desktop, let the browser control
  // the focus
  if (!isSafariDesktop) return;

  var x = tabbable.indexOf(document.activeElement);

  if (x > -1) {
    x += shiftKey ? -1 : 1;
  }

  event.preventDefault();

  tabbable[x].focus();
}
module.exports = exports["default"];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.remove = remove;

var _refCount = __webpack_require__(28);

var refCount = _interopRequireWildcard(_refCount);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function add(bodyClass) {
  // Increment class(es) on refCount tracker and add class(es) to body
  bodyClass.split(" ").map(refCount.add).forEach(function (className) {
    return document.body.classList.add(className);
  });
}

function remove(bodyClass) {
  var classListMap = refCount.get();
  // Decrement class(es) from the refCount tracker
  // and remove unused class(es) from body
  bodyClass.split(" ").map(refCount.remove).filter(function (className) {
    return classListMap[className] === 0;
  }).forEach(function (className) {
    return document.body.classList.remove(className);
  });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Widgets__ = __webpack_require__(12);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







class EditFileDialog extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onChangeName = (event) => {
            this.setState({ name: event.target.value });
        };
        this.onChangeDescription = (event) => {
            this.setState({ description: event.target.value });
        };
        const { description, name } = props.file.getModel();
        this.state = {
            description,
            name,
        };
    }
    error() {
        const directory = __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__["a" /* default */].getParent(this.props.file);
        const file = __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__["a" /* default */].getImmediateChild(directory, this.state.name);
        if (file && file !== this.props.file) {
            return `A file with the same name already exists.`;
        }
        return "";
    }
    render() {
        const file = this.props.file;
        const fileModel = file.getModel();
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_modal__, { isOpen: this.props.isOpen, contentLabel: "Edit " + (fileModel instanceof __WEBPACK_IMPORTED_MODULE_5__model__["a" /* Directory */] ? "Directory" : "File"), className: "modal", overlayClassName: "overlay", ariaHideApp: false },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-title-bar" }, `Edit ${fileModel instanceof __WEBPACK_IMPORTED_MODULE_5__model__["a" /* Directory */] ? "Directory" : "File"} ${fileModel.name}`),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { flex: 1, padding: "8px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["e" /* TextInputBox */], { label: "Name:", error: this.error(), value: this.state.name, onChange: this.onChangeName }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["d" /* Spacer */], { height: 8 }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["e" /* TextInputBox */], { label: "Description:", error: this.error(), value: this.state.description, onChange: this.onChangeDescription })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["o" /* GoX */], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["k" /* GoPencil */], null), label: "Edit", title: "Edit", isDisabled: !this.state.name || !!this.error(), onClick: () => {
                            return this.props.onChange && this.props.onChange(this.state.name, this.state.description);
                        } }))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EditFileDialog;



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Widgets__ = __webpack_require__(12);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







class UploadFileDialog extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            hasError: false
        };
    }
    _checkErrorForFile(file) {
        const directory = this.props.directory;
        let errorStr = "";
        if (file.fileType == null) {
            errorStr += `File '${file.name}' is not supported.`;
        }
        if (file.name) {
            if (!this._isFilenameValid(file.name)) {
                errorStr += "Illegal characters in file name.";
            }
            else if (!file.name.endsWith(Object(__WEBPACK_IMPORTED_MODULE_5__model__["h" /* extensionForFileType */])(file.fileType))) {
                errorStr += Object(__WEBPACK_IMPORTED_MODULE_5__model__["n" /* nameForFileType */])(file.fileType) + " file extension is missing.";
            }
            else if (directory && __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__["a" /* default */].getImmediateChild(directory, file.name)) {
                errorStr += `File '${file.name}' already exists.`;
            }
        }
        return errorStr;
    }
    async _handleUpload(files) {
        this.setState({ files: [], hasError: false });
        Array.from(files).forEach(async (file) => {
            const name = file.name;
            const fileType = Object(__WEBPACK_IMPORTED_MODULE_5__model__["i" /* filetypeForExtension */])(name.split(".").pop());
            let data;
            try {
                data = await this._readUploadedFileAsText(file);
                const error = this._checkErrorForFile({ name, fileType });
                if (error) {
                    this._setHasError();
                }
                this.setState(prevState => ({
                    files: [...prevState.files, { name, fileType, data, error }]
                }));
            }
            catch (e) {
                console.log("Unable to read the file!");
            }
        });
    }
    _readUploadedFileAsText(inputFile) {
        const temporaryFileReader = new FileReader();
        return new Promise((resolve, reject) => {
            temporaryFileReader.onerror = () => {
                temporaryFileReader.abort();
                reject(new DOMException("Problem parsing input file."));
            };
            temporaryFileReader.onload = () => {
                resolve(temporaryFileReader.result);
            };
            temporaryFileReader.readAsText(inputFile);
        });
    }
    _setHasError() {
        this.setState({ hasError: true });
    }
    _isFilenameValid(name) {
        return /^[a-z0-9\.\-\_]+$/i.test(name);
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_modal__, { isOpen: this.props.isOpen, contentLabel: "Upload File", className: "modal show-file-icons", overlayClassName: "overlay", ariaHideApp: false },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-title-bar" }, "Upload File"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["a" /* FileUploadInput */], { label: "Upload:", ref: (ref) => this.fileUploadInput = ref, onChange: (e) => this._handleUpload(e.target.files) })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["b" /* ListBox */], { height: 290 }, this.state.files.map((file, key) => {
                            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["c" /* ListItem */], { key: key, value: file.fileType, label: file.name, error: file.error, icon: Object(__WEBPACK_IMPORTED_MODULE_5__model__["j" /* getIconForFileType */])(file.fileType) });
                        })))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["o" /* GoX */], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["g" /* GoFile */], null), label: "Upload", title: "Upload files", onClick: () => {
                            this.fileUploadInput.open();
                        } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["c" /* GoCheck */], null), label: "Done", title: "Done", isDisabled: !this.state.files.length || this.state.hasError, onClick: () => {
                            const newFiles = [];
                            this.state.files.map((file) => {
                                const newFile = new __WEBPACK_IMPORTED_MODULE_5__model__["c" /* File */](file.name, file.fileType);
                                newFile.setData(file.data);
                                newFiles.push(newFile);
                            });
                            return this.props.onUpload && this.props.onUpload(newFiles);
                        } }))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UploadFileDialog;



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Icons__ = __webpack_require__(6);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



class ToastContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            toasts: []
        };
    }
    showToast(message) {
        this.setState((prevState) => ({
            toasts: [...prevState.toasts, message]
        }));
    }
    _onToastDismiss(index) {
        this.setState((prevState) => ({
            toasts: prevState.toasts.filter((key, value) => value !== index)
        }));
    }
    render() {
        return this.state.toasts.length > 0 &&
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "toast-container" }, this.state.toasts.map((toast, key) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Toast, { onDismiss: this._onToastDismiss.bind(this, key), key: key, message: toast })));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ToastContainer;

class Toast extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        const { message, onDismiss } = this.props;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "toast" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "toast-header" },
                message,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Icons__["o" /* GoX */], null), customClassName: "button-toast", label: "Dismiss", title: "Dismiss", onClick: onDismiss })));
    }
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Widgets__ = __webpack_require__(12);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





class ShareDialog extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const urlPrefix = `${location.protocol}//${location.host}${location.pathname}`;
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_modal__, { isOpen: this.props.isOpen, contentLabel: "Share Project", className: "modal", overlayClassName: "overlay", ariaHideApp: false },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-title-bar" }, "Share Project"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { flex: 1, padding: "8px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Widgets__["e" /* TextInputBox */], { label: "URL", value: `${urlPrefix}?f=${this.props.fiddle}` }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__Widgets__["e" /* TextInputBox */], { label: "IFrame", value: `<iframe src="${urlPrefix}?embed&f=${this.props.fiddle}" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>` })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["o" /* GoX */], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ShareDialog;



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_modal__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Widgets__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_fetchTemplates__ = __webpack_require__(78);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







class NewProjectDialog extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onChangeName = (event) => {
            this.setState({ name: event.target.value });
        };
        this.state = {
            template: null,
            description: "",
            name: "",
            templates: []
        };
    }
    nameError() {
        return;
    }
    createButtonLabel() {
        return "Create";
    }
    async componentDidMount() {
        const templates = await Object(__WEBPACK_IMPORTED_MODULE_6__utils_fetchTemplates__["a" /* default */])();
        this.setState({ templates });
        this.setTemplate(templates[0]);
    }
    async setTemplate(template) {
        const description = await __WEBPACK_IMPORTED_MODULE_1__service__["a" /* Service */].compileMarkdownToHtml(template.description);
        this.setState({ template, description });
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_modal__, { isOpen: this.props.isOpen, contentLabel: "Create New Project", className: "modal show-file-icons", overlayClassName: "overlay", ariaHideApp: false },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-title-bar" }, "Create New Project"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex" } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { width: 200 } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Widgets__["b" /* ListBox */], { value: this.state.template, height: 240, onSelect: (template) => {
                                    this.setTemplate(template);
                                } }, this.state.templates.map((template) => {
                                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__Widgets__["c" /* ListItem */], { key: template.name, value: template, label: template.name, icon: template.icon });
                            }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { flex: 1 }, className: "new-project-dialog-description" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "md", dangerouslySetInnerHTML: { __html: this.state.description } })))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { flex: 1, padding: "8px" } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__shared_Icons__["o" /* GoX */], null), label: "Cancel", title: "Cancel", onClick: () => {
                            this.props.onCancel();
                        } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__shared_Icons__["g" /* GoFile */], null), label: this.createButtonLabel(), title: "Create", isDisabled: !this.state.template, onClick: () => {
                            return this.props.onCreate && this.props.onCreate(this.state.template);
                        } }))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NewProjectDialog;



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchTemplates;
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
const templatesLocation = "templates/templates.js";
async function fetchTemplates() {
    const response = await fetch("templates/templates.js");
    const js = await response.text();
    const templates = (new Function(`return ${js};`)).call(null);
    return templates;
}


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Widgets__ = __webpack_require__(12);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







class NewDirectoryDialog extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onChangeName = (event) => {
            this.setState({ name: event.target.value });
        };
        this.state = {
            name: ""
        };
    }
    nameError() {
        const directory = this.props.directory;
        if (this.state.name) {
            if (!/^[a-z0-9\.\-\_]+$/i.test(this.state.name)) {
                return "Illegal characters in directory name.";
            }
            else if (directory && __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__["a" /* default */].getImmediateChild(directory, this.state.name)) {
                return `Directory '${this.state.name}' already exists.`;
            }
        }
        return "";
    }
    createButtonLabel() {
        return "Create";
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_modal__, { isOpen: this.props.isOpen, contentLabel: "Create New Directory", className: "modal", overlayClassName: "overlay", ariaHideApp: false },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-title-bar" }, "Create New Directory"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { flex: 1, padding: "8px" } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Widgets__["e" /* TextInputBox */], { label: "Name:", error: this.nameError(), value: this.state.name, onChange: this.onChangeName })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["o" /* GoX */], null), label: "Cancel", title: "Create New Directory", onClick: () => {
                            this.props.onCancel();
                        } }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__shared_Icons__["g" /* GoFile */], null), label: this.createButtonLabel(), title: "Create New Directory", isDisabled: !this.state.name || !!this.nameError(), onClick: () => {
                            const directory = new __WEBPACK_IMPORTED_MODULE_5__model__["a" /* Directory */](this.state.name);
                            return this.props.onCreate && this.props.onCreate(directory);
                        } }))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NewDirectoryDialog;



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Split__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Sandbox__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_Icons__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_Button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Problems__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stores_AppStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util__ = __webpack_require__(2);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */









class ControlCenter extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onOutputChanged = () => {
            this.updateOutputView();
        };
        this.state = {
            visible: "output",
            splits: [
                { min: 128, value: 512 },
                { min: 128, value: 256 }
            ]
        };
        const outputFile = __WEBPACK_IMPORTED_MODULE_7__stores_AppStore__["a" /* default */].getOutput().getModel();
        this.outputView = new __WEBPACK_IMPORTED_MODULE_2__editor__["d" /* View */](outputFile);
    }
    componentDidMount() {
        __WEBPACK_IMPORTED_MODULE_7__stores_AppStore__["a" /* default */].onOutputChanged.register(this.onOutputChanged);
    }
    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_7__stores_AppStore__["a" /* default */].onOutputChanged.unregister(this.onOutputChanged);
    }
    setOutputViewEditor(editor) {
        this.outputViewEditor = editor;
    }
    updateOutputView() {
        if (!this.updateOutputViewTimeout) {
            this.updateOutputViewTimeout = window.setTimeout(() => {
                this.forceUpdate();
                this.updateOutputViewTimeout = null;
            });
        }
        if (!this.outputViewEditor) {
            return;
        }
        this.outputViewEditor.revealLastLine();
    }
    createPane() {
        switch (this.state.visible) {
            case "output":
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__editor__["a" /* EditorView */], { ref: (ref) => this.setOutputViewEditor(ref), view: this.outputView });
            case "problems":
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Problems__["a" /* Problems */], null);
            default:
                return null;
        }
    }
    render() {
        let problemCount = 0;
        __WEBPACK_IMPORTED_MODULE_7__stores_AppStore__["a" /* default */].getProject().getModel().forEachFile((file) => {
            problemCount += file.problems.length;
        }, true);
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tabs", style: { display: "flex" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__shared_Button__["a" /* Button */], { icon: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__shared_Icons__["n" /* GoThreeBars */], null), title: "View Console", onClick: () => {
                            return this.props.onToggle && this.props.onToggle();
                        } })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__editor__["c" /* Tabs */], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__editor__["b" /* Tab */], { label: `Output (${this.outputView.file.buffer.getLineCount()})`, isActive: this.state.visible === "output", onClick: () => {
                                this.setState({ visible: "output" });
                            } }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__editor__["b" /* Tab */], { label: `Problems (${problemCount})`, isActive: this.state.visible === "problems", onClick: () => {
                                this.setState({ visible: "problems" });
                            } })))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: "calc(100% - 40px)" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Split__["a" /* Split */], { name: "editor/sandbox", orientation: __WEBPACK_IMPORTED_MODULE_1__Split__["b" /* SplitOrientation */].Vertical, defaultSplit: {
                        min: 256,
                    }, splits: this.state.splits, onChange: (splits) => {
                        this.setState({ splits });
                        Object(__WEBPACK_IMPORTED_MODULE_8__util__["f" /* layout */])();
                    } },
                    this.createPane(),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Sandbox__["a" /* Sandbox */], null))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ControlCenter;



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Split__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_AppActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__ = __webpack_require__(4);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */





class Sandbox extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.onResizeBegin = () => {
            this.container.style.pointerEvents = "none";
        };
        this.onResizeEnd = () => {
            this.container.style.pointerEvents = "auto";
        };
        this.onSandboxRun = (e) => {
            this.run(e.project, e.src);
        };
    }
    setContainer(container) {
        if (container == null) {
            return;
        }
        this.container = container;
    }
    componentDidMount() {
        __WEBPACK_IMPORTED_MODULE_1__Split__["a" /* Split */].onResizeBegin.register(this.onResizeBegin);
        __WEBPACK_IMPORTED_MODULE_1__Split__["a" /* Split */].onResizeEnd.register(this.onResizeEnd);
        __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__["a" /* default */].onSandboxRun.register(this.onSandboxRun);
    }
    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_1__Split__["a" /* Split */].onResizeBegin.unregister(this.onResizeBegin);
        __WEBPACK_IMPORTED_MODULE_1__Split__["a" /* Split */].onResizeEnd.unregister(this.onResizeEnd);
        __WEBPACK_IMPORTED_MODULE_4__stores_AppStore__["a" /* default */].onSandboxRun.register(this.onSandboxRun);
    }
    run(project, src) {
        const iframe = document.createElement("iframe");
        iframe.className = "sandbox";
        iframe.src = URL.createObjectURL(new Blob([src], { type: "text/html" }));
        if (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
        this.container.appendChild(iframe);
        const contentWindow = iframe.contentWindow;
        const logger = { logLn: __WEBPACK_IMPORTED_MODULE_3__actions_AppActions__["j" /* logLn */], };
        // Hijack Console
        contentWindow.console.log = (log => function () {
            logger.logLn(Array.prototype.join.call(arguments));
            log.apply(contentWindow.console, arguments);
        })(contentWindow.console.log);
        contentWindow.console.info = (info => function () {
            logger.logLn(Array.prototype.join.call(arguments), "info");
            info.apply(contentWindow.console, arguments);
        })(contentWindow.console.info);
        contentWindow.console.warn = (warn => function () {
            logger.logLn(Array.prototype.join.call(arguments), "warn");
            warn.apply(contentWindow.console, arguments);
        })(contentWindow.console.warn);
        contentWindow.console.error = (error => function () {
            logger.logLn(Array.prototype.join.call(arguments), "error");
            error.apply(contentWindow.console, arguments);
        })(contentWindow.console.error);
        // Hijack fetch
        contentWindow.fetch = (input, init) => {
            const url = new URL(input, "http://example.org/src/main.html");
            const file = project.getFile(url.pathname.substr(1));
            if (file) {
                return Promise.resolve(new Response(file.getData(), {
                    status: 200,
                    statusText: "OK",
                    headers: {
                        "Content-Type": Object(__WEBPACK_IMPORTED_MODULE_2__model__["m" /* mimeTypeForFileType */])(file.type)
                    }
                }));
            }
            return fetch(input, init);
        };
        contentWindow.getFileURL = (path) => {
            const file = project.getFile(path);
            if (!file) {
                logger.logLn(`Cannot find file ${path}`, "error");
                return;
            }
            const blob = new Blob([file.getData()], { type: Object(__WEBPACK_IMPORTED_MODULE_2__model__["m" /* mimeTypeForFileType */])(file.type) });
            return window.URL.createObjectURL(blob);
        };
        const ready = new Promise((resolve) => {
            iframe.onready = () => {
                resolve(contentWindow);
            };
        });
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill", ref: (ref) => this.setContainer(ref) });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sandbox;



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_AppStore__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DirectoryTree__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__monaco_utils__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_AppActions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editor_View__ = __webpack_require__(8);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */







class ProblemTemplate {
    constructor(container) {
        this.monacoIconLabel = document.createElement("div");
        this.monacoIconLabel.className = "monaco-icon-label";
        this.monacoIconLabel.style.display = "flex";
        container.appendChild(this.monacoIconLabel);
        const labelDescriptionContainer = document.createElement("div");
        labelDescriptionContainer.className = "monaco-icon-label-description-container";
        this.monacoIconLabel.appendChild(labelDescriptionContainer);
        this.label = document.createElement("a");
        this.label.className = "label-name";
        labelDescriptionContainer.appendChild(this.label);
        this.description = document.createElement("span");
        this.description.className = "label-description";
        labelDescriptionContainer.appendChild(this.description);
    }
    dispose() {
        // TODO
    }
    set(problem) {
        const icon = "";
        this.label.classList.toggle(problem.severity + "-dark", true);
        const marker = problem.marker;
        const position = `(${marker.startLineNumber}, ${marker.startColumn})`;
        this.label.innerHTML = marker.message;
        this.description.innerHTML = position;
    }
}
class Problems extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.contextViewService = new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].ContextViewService(document.documentElement);
        this.contextMenuService = new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].ContextMenuService(document.documentElement, null, null, this.contextViewService);
    }
    setContainer(container) {
        if (container == null) {
            return;
        }
        this.container = container;
    }
    ensureTree() {
        if (this.container.lastChild) {
            this.container.removeChild(this.container.lastChild);
        }
        const self = this;
        class Controller extends __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].TreeDefaults.DefaultController {
            onContextMenu(tree, file, event) {
                tree.setFocus(file);
                const anchorOffset = { x: -10, y: -3 };
                const anchor = { x: event.posx + anchorOffset.x, y: event.posy + anchorOffset.y };
                const actions = [];
                self.contextMenuService.showContextMenu({
                    getAnchor: () => anchor,
                    getActions: () => {
                        return monaco.Promise.as(actions);
                    },
                    getActionItem: (action) => {
                        return null;
                    },
                    onHide: (wasCancelled) => {
                        if (wasCancelled) {
                            tree.DOMFocus();
                        }
                    }
                });
                super.onContextMenu(tree, file, event);
                return true;
            }
        }
        this.tree = new __WEBPACK_IMPORTED_MODULE_4__monaco_utils__["a" /* MonacoUtils */].Tree(this.container, {
            dataSource: {
                /**
                 * Returns the unique identifier of the given element.
                 * No more than one element may use a given identifier.
                 */
                getId: function (tree, element) {
                    return element.key;
                },
                /**
                 * Returns a boolean value indicating whether the element has children.
                 */
                hasChildren: function (tree, element) {
                    if (element instanceof __WEBPACK_IMPORTED_MODULE_2__model__["a" /* Directory */] && element.children.length) {
                        return true;
                    }
                    else if (element instanceof __WEBPACK_IMPORTED_MODULE_2__model__["c" /* File */]) {
                        return element.problems.length > 0;
                    }
                    return false;
                },
                /**
                 * Returns the element's children as an array in a promise.
                 */
                getChildren: function (tree, element) {
                    if (element instanceof __WEBPACK_IMPORTED_MODULE_2__model__["a" /* Directory */] && element.children.length) {
                        const children = [];
                        element.forEachFile((file) => {
                            if (file.problems.length) {
                                children.push(file);
                            }
                        }, true);
                        return monaco.Promise.as(children);
                    }
                    else if (element instanceof __WEBPACK_IMPORTED_MODULE_2__model__["c" /* File */]) {
                        return monaco.Promise.as(element.problems);
                    }
                    return null;
                },
                /**
                 * Returns the element's parent in a promise.
                 */
                getParent: function (tree, element) {
                    if (element instanceof __WEBPACK_IMPORTED_MODULE_2__model__["c" /* File */]) {
                        return monaco.Promise.as(element.getProject());
                    }
                    return monaco.Promise.as(element.file);
                }
            },
            renderer: {
                getHeight: function (tree, element) {
                    return 24;
                },
                getTemplateId(tree, element) {
                    if (element instanceof __WEBPACK_IMPORTED_MODULE_2__model__["c" /* File */]) {
                        return "file";
                    }
                    return "problem";
                },
                renderTemplate: function (tree, templateId, container) {
                    return templateId === "problem" ? new ProblemTemplate(container) : new __WEBPACK_IMPORTED_MODULE_3__DirectoryTree__["b" /* FileTemplate */](container);
                },
                renderElement: function (tree, element, templateId, templateData) {
                    templateData.set(element);
                },
                disposeTemplate: function (tree, templateId, templateData) {
                    templateData.dispose();
                }
            },
            controller: new Controller()
        });
    }
    onSelectProblem(problem) {
        if (problem instanceof __WEBPACK_IMPORTED_MODULE_2__model__["c" /* File */]) {
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_5__actions_AppActions__["k" /* openFile */])(problem.file, __WEBPACK_IMPORTED_MODULE_6__editor_View__["b" /* ViewType */].Editor, true);
    }
    componentDidMount() {
        this.ensureTree();
        this.tree.model.setInput(__WEBPACK_IMPORTED_MODULE_1__stores_AppStore__["a" /* default */].getProject().getModel());
        this.tree.model.onDidSelect((e) => {
            if (e.selection.length) {
                this.onSelectProblem(e.selection[0]);
            }
        });
        __WEBPACK_IMPORTED_MODULE_1__stores_AppStore__["a" /* default */].onDidChangeProblems.register(() => {
            this.tree.refresh();
            this.tree.expandAll();
        });
        __WEBPACK_IMPORTED_MODULE_1__stores_AppStore__["a" /* default */].onLoadProject.register(() => {
            this.tree.model.setInput(__WEBPACK_IMPORTED_MODULE_1__stores_AppStore__["a" /* default */].getProject().getModel());
        });
    }
    componentWillReceiveProps(props) {
        this.tree.refresh();
        this.tree.expandAll();
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fill", ref: (ref) => this.setContainer(ref) });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Problems;



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_AppStore__ = __webpack_require__(4);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class StatusBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.onDidChangeStatus = () => {
            this.forceUpdate();
        };
    }
    componentDidMount() {
        __WEBPACK_IMPORTED_MODULE_1__stores_AppStore__["a" /* default */].onDidChangeStatus.register(this.onDidChangeStatus);
    }
    componentWillUnmount() {
        __WEBPACK_IMPORTED_MODULE_1__stores_AppStore__["a" /* default */].onDidChangeStatus.unregister(this.onDidChangeStatus);
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "status-bar" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "status-bar-item" }, __WEBPACK_IMPORTED_MODULE_1__stores_AppStore__["a" /* default */].getStatus()));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StatusBar;



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_modal__);
/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


class BrowserNotSupported extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_modal__, { isOpen: true, contentLabel: "Browser Not Supported", className: "modal", overlayClassName: "overlay", ariaHideApp: false },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { display: "flex", flexDirection: "column", height: "100%" } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "modal-title-bar" }, "Browser Version Not Supported"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "browser-not-supported-description" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "https://developer.mozilla.org/en-US/docs/WebAssembly" }, "WebAssembly"),
                    " is not available in your browser. Please try using the latest version of Edge, Safari, Chrome or Firefox.")));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BrowserNotSupported;



/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map