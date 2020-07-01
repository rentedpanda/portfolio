import * as React from "react";

import { useDencrypt } from "use-dencrypt-effect";

const values = ["webapps", "mobileapps", "ui/ux", "websites"];

 export default function Develop ()  {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;


    const action = setInterval(() => {
      dencrypt(values[i]);
      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, []);

  return <span>{result}</span>;
};