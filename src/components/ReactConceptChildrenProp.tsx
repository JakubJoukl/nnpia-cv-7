import React, { Children, DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react'

type Props = {
    children: {
        title: string,
        description: string,
        kitten: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    }
}

export default function ReactConceptChildrenProp(props : Props){
    return (
        <section>
            <h1 className="title">{props.children.title}</h1>
            <p>{props.children.description}</p>
            <img src={props.children.kitten}></img>
        </section>
    );
}