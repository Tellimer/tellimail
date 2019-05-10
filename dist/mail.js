"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendgrid_1 = require("./drivers/sendgrid");
const test_1 = __importDefault(require("./drivers/test"));
function mail(config) {
    if (config.driver === 'sendgrid') {
        return new sendgrid_1.SendgridDriver(config);
    }
    return new test_1.default(config);
}
exports.default = mail;
//# sourceMappingURL=mail.js.map