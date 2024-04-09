import React, { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react'

type Props = {
    title: string,
    description: string
    kitten: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
}

export default function ReactConcept({title, description, kitten} : Props){
    return (
        <section>
            <h1 className="title">{title}</h1>
            <p>{description}</p>
            <img src={kitten}></img>
        </section>
    );
}