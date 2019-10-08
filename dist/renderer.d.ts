/// <reference types="node" />
declare function _interopDefault(ex: any): any;
declare var he: any;
declare var emptyObject: Readonly<{}>;
declare function isUndef(v: any): boolean;
declare function isDef(v: any): boolean;
declare function isTrue(v: any): boolean;
declare function isFalse(v: any): boolean;
/**
 * Check if value is primitive.
 */
declare function isPrimitive(value: any): boolean;
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
declare function isObject(obj: any): boolean;
/**
 * Get the raw type string of a value, e.g., [object Object].
 */
declare var _toString: () => string;
declare function toRawType(value: any): any;
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
declare function isPlainObject(obj: any): boolean;
/**
 * Check if val is a valid array index.
 */
declare function isValidArrayIndex(val: any): boolean;
declare function isPromise(val: any): boolean;
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
declare function toNumber(val: any): any;
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
declare function makeMap(str: any, expectsLowerCase: any): (val: any) => any;
/**
 * Check if a tag is a built-in tag.
 */
declare var isBuiltInTag: (val: any) => any;
/**
 * Check if an attribute is a reserved attribute.
 */
declare var isReservedAttribute: (val: any) => any;
/**
 * Remove an item from an array.
 */
declare function remove(arr: any, item: any): any;
/**
 * Check whether an object has the property.
 */
declare var hasOwnProperty: (v: string | number | symbol) => boolean;
declare function hasOwn(obj: any, key: any): any;
/**
 * Create a cached version of a pure function.
 */
declare function cached(fn: any): (str: any) => any;
/**
 * Camelize a hyphen-delimited string.
 */
declare var camelizeRE: RegExp;
declare var camelize: (str: any) => any;
/**
 * Capitalize a string.
 */
declare var capitalize: (str: any) => any;
/**
 * Hyphenate a camelCase string.
 */
declare var hyphenateRE: RegExp;
declare var hyphenate: (str: any) => any;
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */
declare function polyfillBind(fn: any, ctx: any): {
    (a: any): any;
    _length: any;
};
declare function nativeBind(fn: any, ctx: any): any;
declare var bind: typeof nativeBind;
/**
 * Mix properties into target object.
 */
declare function extend(to: any, _from: any): any;
/**
 * Merge an Array of Objects into a single Object.
 */
declare function toObject(arr: any): {};
/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
declare function noop(a: any, b: any, c: any): void;
/**
 * Always return false.
 */
declare var no: (a: any, b: any, c: any) => boolean;
/**
 * Return the same value.
 */
declare var identity: (_: any) => any;
/**
 * Generate a string containing static keys from compiler modules.
 */
declare function genStaticKeys(modules: any): any;
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
declare function looseEqual(a: any, b: any): any;
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
declare function looseIndexOf(arr: any, val: any): number;
/**
 * Ensure a function is called only once.
 */
declare function once(fn: any): () => void;
declare var isAttr: (val: any) => any;
declare var unsafeAttrCharRE: RegExp;
declare var isSSRUnsafeAttr: (name: any) => boolean;
declare var isRenderableAttr: (name: any) => any;
declare var propsToAttrMap: {
    acceptCharset: string;
    className: string;
    htmlFor: string;
    httpEquiv: string;
};
declare var ESC: {
    '<': string;
    '>': string;
    '"': string;
    '&': string;
};
declare function escapeChar(a: any): any;
declare var noUnitNumericStyleProps: {
    "animation-iteration-count": boolean;
    "border-image-outset": boolean;
    "border-image-slice": boolean;
    "border-image-width": boolean;
    "box-flex": boolean;
    "box-flex-group": boolean;
    "box-ordinal-group": boolean;
    "column-count": boolean;
    "columns": boolean;
    "flex": boolean;
    "flex-grow": boolean;
    "flex-positive": boolean;
    "flex-shrink": boolean;
    "flex-negative": boolean;
    "flex-order": boolean;
    "grid-row": boolean;
    "grid-row-end": boolean;
    "grid-row-span": boolean;
    "grid-row-start": boolean;
    "grid-column": boolean;
    "grid-column-end": boolean;
    "grid-column-span": boolean;
    "grid-column-start": boolean;
    "font-weight": boolean;
    "line-clamp": boolean;
    "line-height": boolean;
    "opacity": boolean;
    "order": boolean;
    "orphans": boolean;
    "tab-size": boolean;
    "widows": boolean;
    "z-index": boolean;
    "zoom": boolean;
    "fill-opacity": boolean;
    "flood-opacity": boolean;
    "stop-opacity": boolean;
    "stroke-dasharray": boolean;
    "stroke-dashoffset": boolean;
    "stroke-miterlimit": boolean;
    "stroke-opacity": boolean;
    "stroke-width": boolean;
};
declare var isReservedAttr: (val: any) => any;
declare var acceptValue: (val: any) => any;
declare var mustUseProp: (tag: any, type: any, attr: any) => boolean;
declare var isEnumeratedAttr: (val: any) => any;
declare var isValidContentEditableValue: (val: any) => any;
declare var convertEnumeratedValue: (key: any, value: any) => any;
declare var isBooleanAttr: (val: any) => any;
declare var isFalsyAttrValue: (val: any) => boolean;
declare function renderAttrs(node: any): string;
declare function renderAttr(key: any, value: any): string;
declare var VNode: (tag: any, data: any, children: any, text: any, elm: any, context: any, componentOptions: any, asyncFactory: any) => void;
declare var prototypeAccessors: {
    child: {
        configurable: boolean;
    };
};
declare var createEmptyVNode: (text: any) => any;
declare function createTextVNode(val: any): any;
declare function cloneVNode(vnode: any): any;
declare function renderDOMProps(node: any): string;
declare function setText(node: any, text: any, raw: any): void;
/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
declare var unicodeRegExp: RegExp;
/**
 * Define a property.
 */
declare function def(obj: any, key: any, val: any, enumerable: any): void;
declare var hasProto: boolean;
declare var inBrowser: boolean;
declare var inWeex: boolean;
declare var weexPlatform: any;
declare var UA: string;
declare var isIE: boolean;
declare var isIE9: boolean;
declare var isEdge: boolean;
declare var isAndroid: boolean;
declare var isIOS: boolean;
declare var isChrome: boolean;
declare var isPhantomJS: boolean;
declare var isFF: RegExpMatchArray;
declare var nativeWatch: any;
declare var _isServer: any;
declare var isServerRendering: () => any;
declare var devtools: any;
declare function isNative(Ctor: any): boolean;
declare var hasSymbol: boolean;
declare var _Set: any;
declare var SSR_ATTR: string;
declare var ASSET_TYPES: string[];
declare var LIFECYCLE_HOOKS: string[];
declare var config: {
    /**
     * Option merge strategies (used in core/util/options)
     */
    optionMergeStrategies: any;
    /**
     * Whether to suppress warnings.
     */
    silent: boolean;
    /**
     * Show production mode tip message on boot?
     */
    productionTip: boolean;
    /**
     * Whether to enable devtools
     */
    devtools: boolean;
    /**
     * Whether to record perf
     */
    performance: boolean;
    /**
     * Error handler for watcher errors
     */
    errorHandler: any;
    /**
     * Warn handler for watcher warns
     */
    warnHandler: any;
    /**
     * Ignore certain custom elements
     */
    ignoredElements: any[];
    /**
     * Custom user key aliases for v-on
     */
    keyCodes: any;
    /**
     * Check if a tag is reserved so that it cannot be registered as a
     * component. This is platform-dependent and may be overwritten.
     */
    isReservedTag: (a: any, b: any, c: any) => boolean;
    /**
     * Check if an attribute is reserved so that it cannot be used as a component
     * prop. This is platform-dependent and may be overwritten.
     */
    isReservedAttr: (a: any, b: any, c: any) => boolean;
    /**
     * Check if a tag is an unknown element.
     * Platform-dependent.
     */
    isUnknownElement: (a: any, b: any, c: any) => boolean;
    /**
     * Get the namespace of an element
     */
    getTagNamespace: typeof noop;
    /**
     * Parse the real tag name for the specific platform.
     */
    parsePlatformTagName: (_: any) => any;
    /**
     * Check if an attribute must be bound using property, e.g. value
     * Platform-dependent.
     */
    mustUseProp: (a: any, b: any, c: any) => boolean;
    /**
     * Perform updates asynchronously. Intended to be used by Vue Test Utils
     * This will significantly reduce performance if set to false.
     */
    async: boolean;
    /**
     * Exposed for legacy reasons
     */
    _lifecycleHooks: string[];
};
declare var warn: typeof noop;
declare var tip: typeof noop;
declare var generateComponentTrace: typeof noop;
declare var formatComponentName: typeof noop;
declare var uid: number;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
declare var Dep: () => void;
declare var targetStack: any[];
declare function pushTarget(target: any): void;
declare function popTarget(): void;
declare var arrayProto: any[];
declare var arrayMethods: any;
declare var methodsToPatch: string[];
declare var arrayKeys: string[];
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
declare var shouldObserve: boolean;
declare function toggleObserving(value: any): void;
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
declare var Observer: (value: any) => void;
/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
declare function protoAugment(target: any, src: any): void;
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
declare function copyAugment(target: any, src: any, keys: any): void;
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
declare function observe(value: any, asRootData: any): any;
/**
 * Define a reactive property on an Object.
 */
declare function defineReactive$$1(obj: any, key: any, val: any, customSetter: any, shallow: any): void;
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
declare function set(target: any, key: any, val: any): any;
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
declare function dependArray(value: any): void;
/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
declare var strats: any;
/**
 * Helper that recursively merges two data objects together.
 */
declare function mergeData(to: any, from: any): any;
/**
 * Data
 */
declare function mergeDataOrFn(parentVal: any, childVal: any, vm: any): any;
/**
 * Hooks and props are merged as arrays.
 */
declare function mergeHook(parentVal: any, childVal: any): any;
declare function dedupeHooks(hooks: any): any[];
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
declare function mergeAssets(parentVal: any, childVal: any, vm: any, key: any): any;
/**
 * Default strategy.
 */
declare var defaultStrat: (parentVal: any, childVal: any) => any;
/**
 * Validate component names
 */
declare function checkComponents(options: any): void;
declare function validateComponentName(name: any): void;
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
declare function normalizeProps(options: any, vm: any): void;
/**
 * Normalize all injections into Object-based format
 */
declare function normalizeInject(options: any, vm: any): void;
/**
 * Normalize raw function directives into object format.
 */
declare function normalizeDirectives(options: any): void;
declare function assertObjectType(name: any, value: any, vm: any): void;
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
declare function mergeOptions(parent: any, child: any, vm: any): {};
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
declare function resolveAsset(options: any, type: any, id: any, warnMissing: any): any;
declare function validateProp(key: any, propOptions: any, propsData: any, vm: any): any;
/**
 * Get the default value of a prop.
 */
declare function getPropDefaultValue(vm: any, prop: any, key: any): any;
/**
 * Assert whether a prop is valid.
 */
declare function assertProp(prop: any, name: any, value: any, vm: any, absent: any): void;
declare var simpleCheckRE: RegExp;
declare function assertType(value: any, type: any): {
    valid: boolean;
    expectedType: any;
};
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
declare function getType(fn: any): any;
declare function isSameType(a: any, b: any): boolean;
declare function getTypeIndex(type: any, expectedTypes: any): number;
declare function getInvalidTypeMessage(name: any, value: any, expectedTypes: any): string;
declare function styleValue(value: any, type: any): string;
declare function isExplicable(value: any): boolean;
declare function isBoolean(): boolean;
declare function handleError(err: any, vm: any, info: any): void;
declare function invokeWithErrorHandling(handler: any, context: any, args: any, vm: any, info: any): any;
declare function globalHandleError(err: any, vm: any, info: any): void;
declare function logError(err: any, vm: any, info: any): void;
declare var callbacks: any[];
declare function flushCallbacks(): void;
declare function genClassForVnode(vnode: any): any;
declare function mergeClassData(child: any, parent: any): {
    staticClass: any;
    class: any;
};
declare function renderClass(staticClass: any, dynamicClass: any): any;
declare function concat(a: any, b: any): any;
declare function stringifyClass(value: any): string;
declare function stringifyArray(value: any): string;
declare function stringifyObject(value: any): string;
declare var isHTMLTag: (val: any) => any;
declare var isSVG: (val: any) => any;
declare var isPreTag: (tag: any) => boolean;
declare var isReservedTag: (tag: any) => any;
declare function getTagNamespace(tag: any): "svg" | "math";
declare var isTextInputType: (val: any) => any;
declare function renderClass$1(node: any): string;
declare var parseStyleText: (str: any) => any;
declare function normalizeStyleData(data: any): any;
declare function normalizeStyleBinding(bindingStyle: any): any;
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
declare function getStyle(vnode: any, checkChild: any): {};
declare function genStyle(style: any): string;
declare function normalizeValue(key: any, value: any): string;
declare function renderStyle(vnode: any): string;
declare var modules: (typeof renderAttrs)[];
declare function show(node: any, dir: any): void;
declare function model(node: any, dir: any): void;
declare function getValue(option: any): any;
declare function setSelected(option: any): void;
declare var baseDirectives: {
    show: typeof show;
    model: typeof model;
};
declare var isUnaryTag: (val: any) => any;
declare var canBeLeftOpenTag: (val: any) => any;
declare var isNonPhrasingTag: (val: any) => any;
declare var MAX_STACK_DEPTH: number;
declare var noop$1: (_: any) => any;
declare var defer: (_: any) => any;
declare function createWriteFunction(write: any, onError: any): (text: any, next: any) => void;
/**
 * Original RenderStream implementation by Sasha Aickin (@aickin)
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Modified by Evan You (@yyx990803)
 */
declare var stream: any;
declare var RenderStream: {
    (render: any): void;
    __proto__: any;
    prototype: any;
};
declare var RenderContext: (options: any) => void;
declare function normalizeAsync(cache: any, method: any): (key: any, cb: any) => any;
declare var validDivisionCharRE: RegExp;
declare function parseFilters(exp: any): any;
declare function wrapFilter(exp: any, filter: any): string;
declare var defaultTagRE: RegExp;
declare var regexEscapeRE: RegExp;
declare var buildRegex: (str: any) => any;
declare function parseText(text: any, delimiters: any): {
    expression: string;
    tokens: any[];
};
declare function baseWarn(msg: any, range: any): void;
declare function pluckModuleFunction(modules: any, key: any): any;
declare function addProp(el: any, name: any, value: any, range: any, dynamic: any): void;
declare function addAttr(el: any, name: any, value: any, range: any, dynamic: any): void;
declare function addRawAttr(el: any, name: any, value: any, range: any): void;
declare function addDirective(el: any, name: any, rawName: any, value: any, arg: any, isDynamicArg: any, modifiers: any, range: any): void;
declare function prependModifierMarker(symbol: any, name: any, dynamic: any): any;
declare function addHandler(el: any, name: any, value: any, modifiers: any, important: any, warn: any, range: any, dynamic: any): void;
declare function getRawBindingAttr(el: any, name: any): any;
declare function getBindingAttr(el: any, name: any, getStatic: any): any;
declare function getAndRemoveAttr(el: any, name: any, removeFromMap: any): any;
declare function getAndRemoveAttrByRegex(el: any, name: any): any;
declare function rangeSetItem(item: any, range: any): any;
declare function transformNode(el: any, options: any): void;
declare function genData(el: any): string;
declare var klass: {
    staticKeys: string[];
    transformNode: typeof transformNode;
    genData: typeof genData;
};
declare function transformNode$1(el: any, options: any): void;
declare function genData$1(el: any): string;
declare var style: {
    staticKeys: string[];
    transformNode: typeof transformNode$1;
    genData: typeof genData$1;
};
/**
 * Not type-checking this file because it's mostly vendor code.
 */
declare var attribute: RegExp;
declare var dynamicArgAttribute: RegExp;
declare var ncname: string;
declare var qnameCapture: string;
declare var startTagOpen: RegExp;
declare var startTagClose: RegExp;
declare var endTag: RegExp;
declare var doctype: RegExp;
declare var comment: RegExp;
declare var conditionalComment: RegExp;
declare var isPlainTextElement: (val: any) => any;
declare var reCache: {};
declare var decodingMap: {
    '&lt;': string;
    '&gt;': string;
    '&quot;': string;
    '&amp;': string;
    '&#10;': string;
    '&#9;': string;
    '&#39;': string;
};
declare var encodedAttr: RegExp;
declare var encodedAttrWithNewLines: RegExp;
declare var isIgnoreNewlineTag: (val: any) => any;
declare var shouldIgnoreFirstNewline: (tag: any, html: any) => boolean;
declare function decodeAttr(value: any, shouldDecodeNewlines: any): any;
declare function parseHTML(html: any, options: any): void;
/**
 * Cross-platform code generation for component v-model
 */
declare function genComponentModel(el: any, value: any, modifiers: any): void;
/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
declare function genAssignmentCode(value: any, assignment: any): string;
/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */
declare var len: any, str: any, chr: any, index: any, expressionPos: any, expressionEndPos: any;
declare function parseModel(val: any): {
    exp: any;
    key: any;
};
declare function next(): any;
declare function eof(): boolean;
declare function isStringStart(chr: any): boolean;
declare function parseBracket(chr: any): void;
declare function parseString(chr: any): void;
declare var onRE: RegExp;
declare var dirRE: RegExp;
declare var forAliasRE: RegExp;
declare var forIteratorRE: RegExp;
declare var stripParensRE: RegExp;
declare var dynamicArgRE: RegExp;
declare var argRE: RegExp;
declare var bindRE: RegExp;
declare var modifierRE: RegExp;
declare var slotRE: RegExp;
declare var lineBreakRE: RegExp;
declare var whitespaceRE: RegExp;
declare var invalidAttributeRE: RegExp;
declare var decodeHTMLCached: (str: any) => any;
declare var emptySlotScopeToken: string;
declare var warn$1: any;
declare var delimiters: any;
declare var transforms: any;
declare var preTransforms: any;
declare var postTransforms: any;
declare var platformIsPreTag: any;
declare var platformMustUseProp: any;
declare var platformGetTagNamespace: any;
declare var maybeComponent: any;
declare function createASTElement(tag: any, attrs: any, parent: any): {
    type: number;
    tag: any;
    attrsList: any;
    attrsMap: {};
    rawAttrsMap: {};
    parent: any;
    children: any[];
};
/**
 * Convert HTML string to AST.
 */
declare function parse(template: any, options: any): undefined;
declare function processPre(el: any): void;
declare function processRawAttrs(el: any): void;
declare function processElement(element: any, options: any): any;
declare function processKey(el: any): void;
declare function processRef(el: any): void;
declare function processFor(el: any): void;
declare function parseFor(exp: any): {};
declare function processIf(el: any): void;
declare function processIfConditions(el: any, parent: any): void;
declare function findPrevElement(children: any): any;
declare function addIfCondition(el: any, condition: any): void;
declare function processOnce(el: any): void;
declare function processSlotContent(el: any): void;
declare function getSlotName(binding: any): {
    name: any;
    dynamic: boolean;
};
declare function processSlotOutlet(el: any): void;
declare function processComponent(el: any): void;
declare function processAttrs(el: any): void;
declare function checkInFor(el: any): boolean;
declare function parseModifiers(name: any): {};
declare function makeAttrsMap(attrs: any): {};
declare function isTextTag(el: any): boolean;
declare function isForbiddenTag(el: any): boolean;
declare var ieNSBug: RegExp;
declare var ieNSPrefix: RegExp;
declare function guardIESVGBug(attrs: any): any[];
declare function checkForAliasModel(el: any, value: any): void;
declare function preTransformNode(el: any, options: any): {
    type: number;
    tag: any;
    attrsList: any;
    attrsMap: {};
    rawAttrsMap: {};
    parent: any;
    children: any[];
};
declare function cloneASTElement(el: any): {
    type: number;
    tag: any;
    attrsList: any;
    attrsMap: {};
    rawAttrsMap: {};
    parent: any;
    children: any[];
};
declare var model$1: {
    preTransformNode: typeof preTransformNode;
};
declare var modules$1: ({
    staticKeys: string[];
    transformNode: typeof transformNode;
    genData: typeof genData;
} | {
    preTransformNode: typeof preTransformNode;
})[];
declare var warn$2: any;
declare var RANGE_TOKEN: string;
declare function model$2(el: any, dir: any, _warn: any): boolean;
declare function genCheckboxModel(el: any, value: any, modifiers: any): void;
declare function genRadioModel(el: any, value: any, modifiers: any): void;
declare function genSelect(el: any, value: any, modifiers: any): void;
declare function genDefaultModel(el: any, value: any, modifiers: any): void;
declare function text(el: any, dir: any): void;
declare function html(el: any, dir: any): void;
declare var directives: {
    model: typeof model$2;
    text: typeof text;
    html: typeof html;
};
declare var baseOptions: {
    expectHTML: boolean;
    modules: ({
        staticKeys: string[];
        transformNode: typeof transformNode;
        genData: typeof genData;
    } | {
        preTransformNode: typeof preTransformNode;
    })[];
    directives: {
        model: typeof model$2;
        text: typeof text;
        html: typeof html;
    };
    isPreTag: (tag: any) => boolean;
    isUnaryTag: (val: any) => any;
    mustUseProp: (tag: any, type: any, attr: any) => boolean;
    canBeLeftOpenTag: (val: any) => any;
    isReservedTag: (tag: any) => any;
    getTagNamespace: typeof getTagNamespace;
    staticKeys: any;
};
declare var fnExpRE: RegExp;
declare var fnInvokeRE: RegExp;
declare var simplePathRE: RegExp;
declare var keyCodes: {
    esc: number;
    tab: number;
    enter: number;
    space: number;
    up: number;
    left: number;
    right: number;
    down: number;
    'delete': number[];
};
declare var keyNames: {
    esc: string[];
    tab: string;
    enter: string;
    space: string[];
    up: string[];
    left: string[];
    right: string[];
    down: string[];
    'delete': string[];
};
declare var genGuard: (condition: any) => string;
declare var modifierCode: {
    stop: string;
    prevent: string;
    self: string;
    ctrl: string;
    shift: string;
    alt: string;
    meta: string;
    left: string;
    middle: string;
    right: string;
};
declare function genHandlers(events: any, isNative: any): string;
declare function genHandler(handler: any): any;
declare function genKeyFilter(keys: any): string;
declare function genFilterCode(key: any): string;
declare function on(el: any, dir: any): void;
declare function bind$1(el: any, dir: any): void;
declare var baseDirectives$1: {
    on: typeof on;
    bind: typeof bind$1;
    cloak: typeof noop;
};
declare var CodegenState: (options: any) => void;
declare function generate(ast: any, options: any): {
    render: string;
    staticRenderFns: any;
};
declare function genElement(el: any, state: any): any;
declare function genStatic(el: any, state: any): string;
declare function genOnce(el: any, state: any): any;
declare function genIf(el: any, state: any, altGen: any, altEmpty: any): any;
declare function genIfConditions(conditions: any, state: any, altGen: any, altEmpty: any): any;
declare function genFor(el: any, state: any, altGen: any, altHelper: any): string;
declare function genData$2(el: any, state: any): string;
declare function genDirectives(el: any, state: any): string;
declare function genInlineTemplate(el: any, state: any): string;
declare function genScopedSlots(el: any, slots: any, state: any): string;
declare function hash(str: any): number;
declare function containsSlotChild(el: any): any;
declare function genScopedSlot(el: any, state: any): any;
declare function genChildren(el: any, state: any, checkSkip: any, altGenElement: any, altGenNode: any): string;
declare function getNormalizationType(children: any, maybeComponent: any): number;
declare function needsNormalization(el: any): boolean;
declare function genNode(node: any, state: any): any;
declare function genText(text: any): string;
declare function genComment(comment: any): string;
declare function genSlot(el: any, state: any): string;
declare function genComponent(componentName: any, el: any, state: any): string;
declare function genProps(props: any): string;
declare function transformSpecialNewlines(text: any): any;
declare var plainStringRE: RegExp;
declare function applyModelTransform(el: any, state: any): void;
declare function genAttrSegments(attrs: any): any;
declare function genDOMPropSegments(props: any, attrs: any): any[];
declare function genAttrSegment(name: any, value: any): {
    type: number;
    value: string;
};
declare function genClassSegments(staticClass: any, classBinding: any): {
    type: number;
    value: string;
}[];
declare function genStyleSegments(staticStyle: any, parsedStaticStyle: any, styleBinding: any, vShowExpression: any): {
    type: number;
    value: string;
}[];
declare var optimizability: {
    FALSE: number;
    FULL: number;
    SELF: number;
    CHILDREN: number;
    PARTIAL: number;
};
declare var isPlatformReservedTag: any;
declare function optimize(root: any, options: any): void;
declare function walk(node: any, isRoot: any): void;
declare function optimizeSiblings(el: any): any[];
declare function isUnOptimizableTree(node: any): any;
declare var isBuiltInDir: (val: any) => any;
declare function hasCustomDirective(node: any): any;
declare function isSelectWithModel(node: any): any;
declare var RAW: number;
declare var INTERPOLATION: number;
declare var EXPRESSION: number;
declare function generate$1(ast: any, options: any): {
    render: string;
    staticRenderFns: any;
};
declare function genSSRElement(el: any, state: any): any;
declare function genNormalElement(el: any, state: any, stringifyChildren: any): string;
declare function genSSRChildren(el: any, state: any, checkSkip: any): string;
declare function genSSRNode(el: any, state: any): any;
declare function genChildrenAsStringNode(el: any, state: any): string;
declare function genStringElement(el: any, state: any): string;
declare function genStringElementWithChildren(el: any, state: any): string;
declare function elementToString(el: any, state: any): string;
declare function elementToSegments(el: any, state: any): {
    type: number;
    value: any;
}[];
declare function elementToOpenTagSegments(el: any, state: any): {
    type: number;
    value: string;
}[];
declare function childrenToSegments(el: any, state: any): {
    type: number;
    value: any;
}[];
declare function nodesToSegments(children: any, state: any): {
    type: number;
    value: any;
}[];
declare function flattenSegments(segments: any): string;
declare var prohibitedKeywordRE: RegExp;
declare var unaryOperatorsRE: RegExp;
declare var stripStringRE: RegExp;
declare function detectErrors(ast: any, warn: any): void;
declare function checkNode(node: any, warn: any): void;
declare function checkEvent(exp: any, text: any, warn: any, range: any): void;
declare function checkFor(node: any, text: any, warn: any, range: any): void;
declare function checkIdentifier(ident: any, type: any, text: any, warn: any, range: any): void;
declare function checkExpression(exp: any, text: any, warn: any, range: any): void;
declare var range: number;
declare function generateCodeFrame(source: any, start: any, end: any): string;
declare function repeat$1(str: any, n: any): string;
declare function createFunction(code: any, errors: any): Function;
declare function createCompileToFunctionFn(compile: any): (template: any, options: any, vm: any) => any;
declare function createCompilerCreator(baseCompile: any): (baseOptions: any) => {
    compile: (template: any, options: any) => any;
    compileToFunctions: (template: any, options: any, vm: any) => any;
};
declare var createCompiler: (baseOptions: any) => {
    compile: (template: any, options: any) => any;
    compileToFunctions: (template: any, options: any, vm: any) => any;
};
declare var ref: {
    compile: (template: any, options: any) => any;
    compileToFunctions: (template: any, options: any, vm: any) => any;
};
declare var compile: (template: any, options: any) => any;
declare var compileToFunctions: (template: any, options: any, vm: any) => any;
declare function simpleNormalizeChildren(children: any): any;
declare function normalizeChildren(children: any): any;
declare function isTextNode(node: any): boolean;
declare function normalizeArrayChildren(children: any, nestedIndex: any): any;
declare var ssrHelpers: {
    _ssrEscape: typeof escape;
    _ssrNode: typeof renderStringNode;
    _ssrList: typeof renderStringList;
    _ssrAttr: typeof renderAttr;
    _ssrAttrs: typeof renderAttrs$1;
    _ssrDOMProps: typeof renderDOMProps$1;
    _ssrClass: typeof renderSSRClass;
    _ssrStyle: typeof renderSSRStyle;
};
declare function installSSRHelpers(vm: any): void;
declare var StringNode: (open: any, close: any, children: any, normalizationType: any) => void;
declare function renderStringNode(open: any, close: any, children: any, normalizationType: any): any;
declare function renderStringList(val: any, render: any): string;
declare function renderAttrs$1(obj: any): string;
declare function renderDOMProps$1(obj: any): string;
declare function renderSSRClass(staticClass: any, dynamic: any): any;
declare function renderSSRStyle(staticStyle: any, dynamic: any, extra: any): string;
declare var seenObjects: any;
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
declare function traverse(val: any): void;
declare function _traverse(val: any, seen: any): void;
declare var normalizeEvent: (str: any) => any;
declare function createFnInvoker(fns: any, vm: any): {
    (): any;
    fns: any;
};
declare function updateListeners(on: any, oldOn: any, add: any, remove$$1: any, createOnceHandler: any, vm: any): void;
declare function extractPropsFromVNodeData(data: any, Ctor: any, tag: any): {};
declare function checkProp(res: any, hash: any, key: any, altKey: any, preserve: any): boolean;
declare var SIMPLE_NORMALIZE: number;
declare var ALWAYS_NORMALIZE: number;
declare function createElement(context: any, tag: any, data: any, children: any, normalizationType: any, alwaysNormalize: any): any;
declare function _createElement(context: any, tag: any, data: any, children: any, normalizationType: any): any;
declare function applyNS(vnode: any, ns: any, force: any): void;
declare function registerDeepBindings(data: any): void;
/**
 * Runtime helper for rendering v-for lists.
 */
declare function renderList(val: any, render: any): any[];
/**
 * Runtime helper for rendering <slot>
 */
declare function renderSlot(name: any, fallback: any, props: any, bindObject: any): any;
/**
 * Runtime helper for resolving filters
 */
declare function resolveFilter(id: any): any;
declare function isKeyNotMatch(expect: any, actual: any): boolean;
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
declare function checkKeyCodes(eventKeyCode: any, key: any, builtInKeyCode: any, eventKeyName: any, builtInKeyName: any): boolean;
/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
declare function bindObjectProps(data: any, tag: any, value: any, asProp: any, isSync: any): any;
/**
 * Runtime helper for rendering static trees.
 */
declare function renderStatic(index: any, isInFor: any): any;
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
declare function markOnce(tree: any, index: any, key: any): any;
declare function markStatic(tree: any, key: any, isOnce: any): void;
declare function markStaticNode(node: any, key: any, isOnce: any): void;
declare function bindObjectListeners(data: any, value: any): any;
declare function resolveScopedSlots(fns: any, // see flow/vnode
res: any, hasDynamicKeys: any, contentHashKey: any): any;
declare function bindDynamicKeys(baseObj: any, values: any): any;
declare function prependModifier(value: any, symbol: any): any;
declare function installRenderHelpers(target: any): void;
/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
declare function resolveSlots(children: any, context: any): {};
declare function isWhitespace(node: any): boolean;
declare function normalizeScopedSlots(slots: any, normalSlots: any, prevSlots: any): any;
declare function normalizeScopedSlot(normalSlots: any, key: any, fn: any): () => any;
declare function proxyNormalSlot(slots: any, key: any): () => any;
declare var currentRenderingInstance: any;
declare function ensureCtor(comp: any, base: any): any;
declare function createAsyncPlaceholder(factory: any, data: any, context: any, children: any, tag: any): any;
declare function resolveAsyncComponent(factory: any, baseCtor: any): any;
declare var target: any;
declare function add(event: any, fn: any): void;
declare function remove$1(event: any, fn: any): void;
declare function createOnceHandler(event: any, fn: any): () => void;
declare function updateComponentListeners(vm: any, listeners: any, oldListeners: any): void;
declare var activeInstance: any;
declare function updateChildComponent(vm: any, propsData: any, listeners: any, parentVnode: any, renderChildren: any): void;
declare function isInInactiveTree(vm: any): boolean;
declare function activateChildComponent(vm: any, direct: any): void;
declare function deactivateChildComponent(vm: any, direct: any): void;
declare function callHook(vm: any, hook: any): void;
declare var getNow: () => number;
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
declare function queueActivatedComponent(vm: any): void;
declare function resolveInject(inject: any, vm: any): any;
declare function resolveConstructorOptions(Ctor: any): any;
declare function resolveModifiedOptions(Ctor: any): {};
declare function FunctionalRenderContext(data: any, props: any, children: any, parent: any, Ctor: any): void;
declare function createFunctionalComponent(Ctor: any, propsData: any, data: any, contextVm: any, children: any): any;
declare function cloneAndMarkFunctionalResult(vnode: any, data: any, contextVm: any, options: any, renderContext: any): any;
declare function mergeProps(to: any, from: any): void;
declare var componentVNodeHooks: {
    init: (vnode: any, hydrating: any) => void;
    prepatch: (oldVnode: any, vnode: any) => void;
    insert: (vnode: any) => void;
    destroy: (vnode: any) => void;
};
declare var hooksToMerge: string[];
declare function createComponent(Ctor: any, data: any, context: any, children: any, tag: any): any;
declare function createComponentInstanceForVnode(vnode: any, // we know it's MountedComponentVNode but flow doesn't
parent: any): any;
declare function installComponentHooks(data: any): void;
declare function mergeHook$1(f1: any, f2: any): (a: any, b: any) => void;
declare function transformModel(options: any, data: any): void;
declare var warned: any;
declare var warnOnce: (msg: any) => void;
declare var onCompilationError: (err: any, vm: any) => never;
declare var normalizeRender: (vm: any) => void;
declare function waitForServerPrefetch(vm: any, resolve: any, reject: any): void;
declare function renderNode(node: any, isRoot: any, context: any): void;
declare function registerComponentForCache(options: any, write: any): any;
declare function renderComponent(node: any, isRoot: any, context: any): void;
declare function renderComponentWithCache(node: any, isRoot: any, key: any, context: any): void;
declare function renderComponentInner(node: any, isRoot: any, context: any): void;
declare function renderAsyncComponent(node: any, isRoot: any, context: any): void;
declare function renderStringNode$1(el: any, context: any): void;
declare function renderElement(el: any, isRoot: any, context: any): void;
declare function hasAncestorData(node: any): any;
declare function getVShowDirectiveInfo(node: any): any;
declare function renderStartingTag(node: any, context: any): string;
declare function createRenderFunction(modules: any, directives: any, isUnaryTag: any, cache: any): (component: any, write: any, userContext: any, done: any) => void;
declare var isJS: (file: any) => boolean;
declare var isCSS: (file: any) => boolean;
declare function createPromiseCallback(): {
    promise: Promise<{}>;
    cb: (err: any, res: any) => any;
};
declare var Transform: any;
declare var TemplateStream: {
    (renderer: any, template: any, context: any): void;
    __proto__: any;
    prototype: any;
};
declare var compile$1: any;
declare var compileOptions: {
    escape: RegExp;
    interpolate: RegExp;
};
declare function parseTemplate(template: any, contentPlaceholder: any): any;
/**
 * Creates a mapper that maps components used during a server-side render
 * to async chunk files in the client-side build, so that we can inline them
 * directly in the rendered HTML to avoid waterfall requests.
 */
declare function createMapper(clientManifest: any): (moduleIds: any) => any[];
declare function createMap(clientManifest: any): Map<any, any>;
declare function mapIdToFile(id: any, clientManifest: any): any[];
declare var path: any;
declare var serialize: any;
declare var TemplateRenderer: (options: any) => void;
declare function normalizeFile(file: any): {
    file: any;
    extension: any;
    fileWithoutQuery: any;
    asType: string;
};
declare function getPreloadType(ext: any): "" | "font" | "script" | "style" | "image";
declare function createRenderer(ref: any): {
    renderToString: (component: any, context: any, cb: any) => Promise<{}>;
    renderToStream: (component: any, context: any) => any;
};
declare var vm: any;
declare var path$1: any;
declare var resolve: any;
declare var NativeModule: any;
declare function createSandbox(context: any): {
    Buffer: {
        new (str: string, encoding?: BufferEncoding): Buffer;
        new (size: number): Buffer;
        new (array: Uint8Array): Buffer;
        new (arrayBuffer: ArrayBuffer | SharedArrayBuffer): Buffer;
        new (array: any[]): Buffer;
        new (buffer: Buffer): Buffer;
        prototype: Buffer;
        from(arrayBuffer: ArrayBuffer | SharedArrayBuffer, byteOffset?: number, length?: number): Buffer;
        from(data: number[]): Buffer;
        from(data: Uint8Array): Buffer;
        from(str: string, encoding?: BufferEncoding): Buffer;
        of(...items: number[]): Buffer;
        isBuffer(obj: any): obj is Buffer;
        isEncoding(encoding: string): encoding is BufferEncoding;
        byteLength(string: string | ArrayBuffer | SharedArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array, encoding?: BufferEncoding): number;
        concat(list: Uint8Array[], totalLength?: number): Buffer;
        compare(buf1: Uint8Array, buf2: Uint8Array): number;
        alloc(size: number, fill?: string | number | Buffer, encoding?: BufferEncoding): Buffer;
        allocUnsafe(size: number): Buffer;
        allocUnsafeSlow(size: number): Buffer;
        poolSize: number;
    };
    console: Console;
    process: NodeJS.Process;
    setTimeout: typeof setTimeout;
    setInterval: typeof setInterval;
    setImmediate: typeof setImmediate;
    clearTimeout: typeof clearTimeout;
    clearInterval: typeof clearInterval;
    clearImmediate: typeof clearImmediate;
    __VUE_SSR_CONTEXT__: any;
};
declare function compileModule(files: any, basedir: any, runInNewContext: any): (filename: any, sandbox: any, evaluatedFiles: any) => any;
declare function deepClone(val: any): any;
declare function createBundleRunner(entry: any, files: any, basedir: any, runInNewContext: any): (userContext: any) => Promise<{}>;
declare var SourceMapConsumer: any;
declare var filenameRE: RegExp;
declare function createSourceMapConsumers(rawMaps: any): {};
declare function rewriteErrorTrace(e: any, mapConsumers: any): void;
declare function rewriteTraceLine(trace: any, mapConsumers: any): any;
declare var fs: any;
declare var path$2: any;
declare var PassThrough: any;
declare var INVALID_MSG: string;
declare function createBundleRendererCreator(createRenderer: any): (bundle: any, rendererOptions: any) => {
    renderToString: (context: any, cb: any) => Promise<{}>;
    renderToStream: (context: any) => any;
};
declare function createRenderer$1(options: any): {
    renderToString: (component: any, context: any, cb: any) => Promise<{}>;
    renderToStream: (component: any, context: any) => any;
};
declare var createBundleRenderer: (bundle: any, rendererOptions: any) => {
    renderToString: (context: any, cb: any) => Promise<{}>;
    renderToStream: (context: any) => any;
};
