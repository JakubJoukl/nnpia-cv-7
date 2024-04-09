import React from "react";
import cuteKitten from "./kitten.jfif";
import dangerousKitten from "./dangerousKitten.jpg";

export default [
    {
    title: 'Components',
    description:
    'The core UI building block - compose the user interface by combining multiple components.',
    kitten: cuteKitten
    },
    {
    title: 'JSX',
    description:
    'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    kitten: dangerousKitten
    },
    {
    title: 'Props',
    description:
    'Make components configurable (and therefore reusable) by passing input data to them.',
    kitten: cuteKitten
    },
    {
    title: 'State',
    description:
    'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    kitten: dangerousKitten
    },
];