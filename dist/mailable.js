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
const uuid_1 = __importDefault(require("uuid"));
class MailableBase {
    constructor() {
        this._categories = [];
        this._personalizations = [];
        this.uuid = uuid_1.default.v4();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.view()).render();
        });
    }
    get from() {
        return this._from;
    }
    set from(v) {
        this._from = v;
    }
    get categories() {
        return this._categories;
    }
    set categories(v) {
        this._categories = v;
    }
    withCategories(categories) {
        this.categories = categories;
        return this;
    }
    get subject() {
        return this._subject;
    }
    set subject(v) {
        this._subject = v;
    }
    withSubject(subject) {
        this.subject = subject;
        return this;
    }
    get personalizations() {
        return this._personalizations;
    }
    set personalizations(v) {
        const alreadyIn = [];
        this._personalizations = v.filter(personalization => {
            if (alreadyIn.indexOf(personalization.to[0].email) === -1) {
                alreadyIn.push(personalization.to[0].email);
                return true;
            }
            return false;
        });
    }
    withPersonalizations(personalizations) {
        this.personalizations = personalizations;
        return this;
    }
    to(obj) {
        if (obj.to !== undefined) {
            this.personalizations.push(obj);
        }
        else {
            this.personalizations.push({ to: [obj] });
        }
        return this;
    }
}
exports.MailableBase = MailableBase;
class Mailable extends MailableBase {
    constructor(view, buildCallback) {
        super();
        this._view = view;
        this.buildCallback = buildCallback;
    }
    build() {
        if (this.buildCallback) {
            this.buildCallback(this);
        }
    }
    view() {
        return this._view;
    }
}
exports.Mailable = Mailable;
//# sourceMappingURL=mailable.js.map