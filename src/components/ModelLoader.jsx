import { Html, useProgress } from "@react-three/drei";

function ModelLoader() {
  const { progress } = useProgress();
  console.log(progress);

  return (
    <Html center wrapperClass="flex justify-center items-center">
      <span className="font-bold canvas-loader text-white ">
        {/* {progress > 90 ? "Loading..." : `${progress.toFixed(2)}%`} */}$
        {progress > 90 ? "Loading..." : `${progress.toFixed(2)}%`}
      </span>
    </Html>
  );
}
export default ModelLoader;
