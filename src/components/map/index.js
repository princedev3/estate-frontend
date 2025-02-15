import dynamic from "next/dynamic";

const Maps = dynamic(() => import("./Map"), { ssr: false });
export default Maps;
