import React from 'react';
export const BrButton = (props) => {
    const { children, backgroundColor, color, style } = props;
    let _style = style || {};
    if (backgroundColor)
        _style.backgroundColor = backgroundColor;
    if (color)
        _style.color = color;
    return (React.createElement("button", Object.assign({ style: _style }, props), children));
};
//# sourceMappingURL=Buttons.js.map