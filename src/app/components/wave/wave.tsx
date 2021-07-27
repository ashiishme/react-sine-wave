import React from 'react';
import { FC } from 'react';
import { useCanvasContext } from 'app/hooks/useCanvas';
import useResponsiveSize from 'app/hooks/useResponsiveSize';
import { default as WaveObj } from 'app/lib/wave';
import { randomColor as randomColorGenerator } from 'app/lib/randomColor';

type WaveProps = {
    randomColor: boolean;
};
const Wave: FC<WaveProps> = (props) => {
    const { randomColor } = props;
    const [waves, setWaves] = React.useState<{ [key: string]: WaveObj }>({});
    const [generatedColors, setGeneratedColors] = React.useState([
        'rgba(255,179,0,0.88)',
        'rgba(255,179,0,0.48)',
    ]);

    const { context } = useCanvasContext();
    const { width, height } = useResponsiveSize();
    let frequency = 0.013;

    React.useEffect(() => {
        const generateInterval = setInterval(() => {
            setGeneratedColors(randomColorGenerator);
        }, 5000);
        if (!randomColor) {
            clearInterval(generateInterval);
        }
        return () => clearInterval(generateInterval);
    }, []);

    React.useEffect(() => {
        setWaves({
            frontWave: new WaveObj([0.0211, 0.028, 0.015], generatedColors[0]),
            backWave: new WaveObj([0.0122, 0.018, 0.005], generatedColors[1]),
        });
    }, [generatedColors]);

    const render = () => {
        context?.clearRect(0, 0, width, height);
        Object.entries(waves).forEach(([, wave]) => {
            wave.draw(context!, width, height, frequency);
        });
        frequency += 0.013;
        requestAnimationFrame(render);
    };
    if (context) render();
    return null;
};

export default Wave;
