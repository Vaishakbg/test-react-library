import React from 'react';
interface BrButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}
export declare const BrButton: React.FunctionComponent<BrButtonProps>;
export {};
