
export const YAxis = ({ yScale }) => {
    console.log(yScale.ticks());
    return (
        <g>
            {yScale.ticks().map((tickValue, i) => (
                <g key={i} transform={`translate(0, ${yScale(tickValue)})`}>
                    <line x2={-6} stroke="black" />
                    <text
                        key={i}
                        style={{ textAnchor: 'end' }}
                        x={-9}
                        dy=".32em"
                    >
                        {tickValue}
                    </text>
                </g>
            ))}
        </g>
    );
}