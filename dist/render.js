"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const juice_1 = __importDefault(require("juice"));
const renderer_1 = require("./renderer");
function getCssFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield fs_1.default.readFileSync(file, 'utf-8');
    });
}
function render(app, themeFile) {
    return __awaiter(this, void 0, void 0, function* () {
        const renderer = renderer_1.createRenderer();
        const html = yield renderer.renderToString(app);
        let extraCss = null;
        if (themeFile) {
            extraCss = yield getCssFile(themeFile);
        }
        return yield juice_1.default(html, Object.assign({ applyAttributesTableElements: false }, (extraCss !== null ? { extraCss } : {})));
    });
}
exports.default = render;
//# sourceMappingURL=render.js.map