import {useRouteError} from "react-router-dom"
export const Error = () => {
  let error = useRouteError();
  return (
    <div>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </div>
  );
};