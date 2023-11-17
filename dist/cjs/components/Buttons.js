"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrButton = void 0;
const react_1 = __importDefault(require("react"));
const BrButton = (props) => {
    const { children, backgroundColor, color, style } = props;
    let _style = style || {};
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    if (color)
        _style.color = color;
    return (react_1.default.createElement("button", Object.assign({ style: _style }, props), children));
};
exports.BrButton = BrButton;
//# sourceMappingURL=Buttons.js.map