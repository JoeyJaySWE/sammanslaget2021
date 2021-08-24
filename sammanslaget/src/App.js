import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "build/HackathonTest.loader.js",
  dataUrl: "build/HackathonTest.data",
  frameworkUrl: "Build/HackathonTest.framework.js",
  codeUrl: "build/HackathonTest.wasm",
});


function App() {
  useEffect(function () {
    unityContext.on("canvas", function (canvas) {
      canvas.width = 900;
      canvas.height = 500;
    });
  }, []);

  return (
    <Unity
      unityContext={unityContext}
      matchWebGLToCanvasSize={false}
      className={"unity-canvas"}
      devicePixelRatio={2}
      style={{ width: "900px", height: "500px" }}
    />
  );
}

export default App;
