import React from 'react';

interface BrButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export const BrButton: React.FunctionComponent<BrButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;

    let _style: React.CSSProperties = style || {};

    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};
