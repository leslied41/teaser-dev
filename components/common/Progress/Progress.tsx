import { useGlobalContext } from "..";
import CircularProgress from "@mui/material/CircularProgress";
import cn from "clsx";

const Progress = () => {
  const { loading } = useGlobalContext();
  return (
    <div
      className={cn(
        "hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
        { ["!block"]: loading }
      )}
    >
      <CircularProgress color="success" />
    </div>
  );
};

export default Progress;
