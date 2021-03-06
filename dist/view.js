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
const vue_1 = __importDefault(require("vue"));
const render_1 = __importDefault(require("./render"));
class View {
    constructor(template, mixin, cssThemeFile) {
        this.mixin = mixin === undefined ? {} : mixin;
        this.template = template;
        this.cssThemeFile = cssThemeFile;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = new vue_1.default({
                comments: true,
                mixins: [this.mixin],
                template: this.template,
            });
            return yield render_1.default(app, this.cssThemeFile);
        });
    }
}
exports.View = View;
function templateView(file, mixin, cssThemeFile) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield fs_1.default.existsSync(file))) {
            throw new Error(`Template file '${file}' does not exist.`);
        }
        const template = yield fs_1.default.readFileSync(file, 'utf-8');
        return new View(template, mixin, cssThemeFile);
    });
}
exports.templateView = templateView;
//# sourceMappingURL=view.js.map