import React from 'react';

import Canvas from 'app/components/canvas';

function App() {
    return (
        <div className="App">
            <div className="header-info">
                <h1 className="app-title">React Sine Wave</h1>
                <p className="project-source">
                    <a
                        target="_blank"
                        href="https://github.com/ashiishme/react-sine-wave"
                    >
                        [ Find project on GitHub ]
                    </a>
                </p>
            </div>

            <Canvas />
        </div>
    );
}

export default App;
