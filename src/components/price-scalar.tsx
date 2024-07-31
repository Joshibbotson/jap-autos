import React, { useState } from "react";
import { Slider, Box, Typography, Button } from "@mui/material";
import s from "./priceScalar.module.scss";
const PriceSlider = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000);

    const handleMinPriceChange = (event: any, newValue: any) => {
        setMinPrice(newValue);
    };

    const handleMaxPriceChange = (event: any, newValue: any) => {
        setMaxPrice(newValue);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className={s.container}>
            <div className={s.scalesContainer}>
                <div className={s.scaleWrappers}>
                    <Typography gutterBottom>Minimum Price</Typography>
                    <Slider
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        aria-labelledby="min-price-slider"
                        valueLabelDisplay="auto"
                        step={500}
                        marks
                        min={0}
                        max={10000}
                    />
                </div>
                <div className={s.scaleWrappers}>
                    <Typography gutterBottom>Maximum Price</Typography>
                    <Slider
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        aria-labelledby="max-price-slider"
                        valueLabelDisplay="auto"
                        step={500}
                        marks
                        min={0}
                        max={10000}
                    />
                </div>
            </div>

            <div className={s.pricesContainer}>
                <Typography>Min Price: {formatPrice(minPrice)}</Typography>
                <Typography>Max Price: {formatPrice(maxPrice)}</Typography>
            </div>

            <a
                href={`https://www.autotrader.co.uk/retailer/stock?advanced=true&advertising-location=at_cars&advertising-location=at_profile_cars&dealer=10038592&onesearchad=Used&onesearchad=Nearly%20New&onesearchad=New&page=1&price-from=${minPrice}&sort=price-asc&price-to=${maxPrice}`}
                target="_blank"
                rel="noopener noreferrer"
                className={s.btn}
            >
                <button>Search Cars</button>
            </a>
        </div>
    );
};

export default PriceSlider;
