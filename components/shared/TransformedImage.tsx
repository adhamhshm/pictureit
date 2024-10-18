"use client"

import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const TransformedImage = ({ image, type, title, transformationConfig, isTransforming, setIsTransforming, hasDownload = false }: TransformedImageProps) => {
    return (
        <div>TransformedImage</div>
    )
}

export default TransformedImage;