import * as d3 from "d3";
import { useEffect, useRef } from "react";

export const XAxis = ({ xScale, innerHeight }) => {
    const ref = useRef(null);
    useEffect(() => {
        const xAxisGenerator = d3.axisBottom(xScale);
        const xAxis = d3.select(ref.current).call(xAxisGenerator);
    }, [xScale]);
    return (
        <g transform={`translate(0, ${innerHeight})`}>
            <line x1={0} y1={0} x2={xScale.range()[1]} y2={0} stroke="black" />
        </g>
    );
}